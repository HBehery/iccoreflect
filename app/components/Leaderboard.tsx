"use client";

import React, { useEffect, useState } from "react";

interface LeaderboardEntry {
  name: string;
  score: number;
  rank: number | string;
}

interface LeaderboardTableProps {
  setLoadState: React.Dispatch<React.SetStateAction<boolean>>;
  round: number;
}

export default function LeaderboardTable({
  setLoadState,
  round,
}: LeaderboardTableProps) {
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        const response = await fetch("/api/leaderboard", {
          method: "POST",
          body: JSON.stringify({ round }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch leaderboard data");
        }

        const { data, error } = await response.json();

        if (error) {
          throw new Error(error);
        }

        setLeaderboardData(data || []);
        setLoadState(false);
      } catch (err) {
        console.error("Error fetching leaderboard:", err);
        setError("Failed to load leaderboard data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchLeaderboardData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-10 px-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#3f7d76]"></div>
      </div>
    );
  }

  if (error) {
    return <div className="p-4 bg-red-50 text-red-600 rounded-md">{error}</div>;
  }

  if (leaderboardData.length === 0) {
    return (
      <div className="p-4 bg-yellow-50 text-yellow-600 rounded-md">
        No leaderboard data available.
      </div>
    );
  }

  const rankedEntries = leaderboardData
    .filter((entry) => entry.rank !== "-")
    .sort((a, b) => (a.rank as number) - (b.rank as number))
    .slice(0, 10);
  const unrankedEntries = leaderboardData.filter((entry) => entry.rank === "-");
  const displayEntries = [...rankedEntries, ...unrankedEntries];

  return (
    <div
      className={` justify-self-center ${
        round == 3
          ? "2xl:order-2 min-[940px]:order-1 min-[940px]:col-span-2 2xl:col-span-1"
          : round == 2
          ? "2xl:order-3 min-[940px]:order-3 pt-12"
          : "2xl:order-1 min-[940px]:order-2 pt-12"
      }`}
    >
      <p className="text-md md:text-xl text-center">
        {round == 3 ? `Round ${round} (Current)` : `Round ${round}`}
      </p>
      <div className="flex flex-col text-center items-center px-4 min-[500px]:px-12 pb-12 py-4 min-w-fit overflow-auto">
        <div
          className={`flex flex-col items-center min-w-fit sm:w-[90%] md:w-[80%] xl:w-[60%] text-sm lg:text-[16px] ${
            round == 1 || round == 2 ? "bg-[#cecece]" : "bg-[#f3e6ae]"
          } p-2 rounded-xl`}
        >
          <table className="w-full text-blac bg-white transition-all rounded-sm overflow-x-auto whitespace-nowrap ">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="min-[500px]:px-6 px-1 py-3 text-sm font-semibold uppercase">
                  Rank
                </th>
                <th className="min-[500px]:px-6 px-1 py-3 text-sm font-semibold uppercase">
                  Name
                </th>
                <th className="min-[500px]:px-6 px-1 py-3 text-sm font-semibold uppercase">
                  Score
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {displayEntries.map((entry) => (
                <tr
                  key={entry.name}
                  className={`
                  ${entry.rank === 1 ? "bg-yellow-50 font-bold" : ""}
                  ${entry.rank === 2 ? "bg-gray-200 font-bold" : ""}
                  ${entry.rank === 3 ? "bg-orange-200 font-bold" : ""}
                  ${entry.rank === "-" ? "bg-gray-50" : ""}
                `}
                >
                  <td className="min-[500px]:px-6 px-1 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {entry.rank}
                  </td>
                  <td className="min-[500px]:px-6 px-1 py-4 whitespace-nowrap text-sm text-gray-700">
                    {entry.name}
                  </td>
                  <td className="min-[500px]:px-6 px-1 py-4 whitespace-nowrap text-sm text-gray-700 text-center font-semibold">
                    {entry.score.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
