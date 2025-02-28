import React from "react";
import Challenge from "../components/Challenge";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const challengeLinks: { [key: number]: string } = {
  1: "https://forms.gle/duUAyyCdZiB7NWET7",
  2: "https://forms.gle/dMzU4y2qhZMFSdaP8",
  3: "https://forms.gle/sJPx72RsX8Q55BvQ9",
  4: "https://forms.gle/zD76xPbFKqQthPNC6",
  5: "https://forms.gle/uGGGhA1nhggnPe4m9",
  6: "https://forms.gle/mm59gaiSJEdevVbx7",
  7: "https://forms.gle/Zsz4ayub8VM8Ejg89",
  8: "https://forms.gle/EjftNvYLt8uoe29J9",
  9: "",
  10: "",
  11: "",
  12: "",
  13: "",
  14: "",
  15: "",
  16: "",
  17: "",
  18: "",
  19: "",
  20: "",
  21: "",
  22: "",
  23: "",
  24: "",
  25: "",
  26: "",
  27: "",
  28: "",
  29: "",
  30: "",
};

export default function ChallengePage() {
  const challenges = Array.from({ length: 30 }, (_, i) => ({
    challengeNumber: i + 1,
    releaseDate: new Date(2025, 1, 28 + i, 15).toISOString(),
    redirectUrl: challengeLinks[i + 1],
  }));

  return (
    <div className="flex flex-col items-center justify-center my-32 h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mx-16">
        {challenges.map((challenge, index) => (
          <React.Fragment key={challenge.challengeNumber}>
            {index % 10 === 0 && (
              <div
                className={`col-span-full text-center font-bold text-[#316b64] text-2xl my-4 ${inter.className}`}
              >
                Competition {Math.floor(index / 10) + 1}
              </div>
            )}
            <Challenge
              challengeNumber={challenge.challengeNumber}
              releaseDate={challenge.releaseDate}
              redirectUrl={challenge.redirectUrl}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
