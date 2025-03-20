import { NextResponse } from "next/server";
import { google } from "googleapis";
import { loadEnvConfig } from "@next/env";

const projectDir = process.cwd();
loadEnvConfig(projectDir);

export async function POST(request: Request) {
  try {
    const { round } = await request.json();

    if (
      !process.env.GOOGLE_PRIVATE_KEY ||
      !process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ||
      !process.env.GOOGLE_SHEETS_ID
    ) {
      return NextResponse.json(
        { error: "Missing service account credentials or spreadsheet ID" },
        { status: 500 }
      );
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
      range: `Leaderboard!A:AJ`,
    });

    const rows = response.data.values || [];

    if (rows.length <= 1) {
      return NextResponse.json({ data: [] });
    }

    const processedData = rows
      .slice(1)
      .map((row: (string | number)[]) => ({
        name: typeof row[1] === "string" ? row[1] : "N/A",
        score:
          round == 1
            ? Number(row[32])
            : round == 2
            ? Number(row[33])
            : Number(row[34]),
      }))
      .filter((entry: { name: string; score: number }) => entry.name !== "N/A");

    processedData.sort(
      (
        a: { name: string; score: number },
        b: { name: string; score: number }
      ) => b.score - a.score
    );

    const rankedData = processedData.map(
      (entry: { name: string; score: number }, index: number) => ({
        ...entry,
        rank: index + 1,
      })
    );

    return NextResponse.json({ data: rankedData });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
