"use client";

import React, { useEffect, useState } from "react";

interface LeaderboardEntry {
  name: string;
  score: number;
  rank: number;
}

interface LeaderboardTableProps {
  setLoadState: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LeaderboardTable({
  setLoadState,
}: LeaderboardTableProps) {
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        const response = await fetch("/api/leaderboard");

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
      <div className="flex justify-center items-center py-10">
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

  return (
    <div className="flex flex-col text-center items-center px-4 min-[500px]:px-12 py-12 min-w-fit overflow-auto">
      <div className="flex flex-col items-center min-w-fit sm:w-[90%] md:w-[80%] xl:w-[60%] text-sm lg:text-[16px] bg-[#f3e6ae] p-2 rounded-xl">
        <table className="w-full text-blac bg-white  transition-all rounded-sm overflow-x-auto whitespace-nowrap ">
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
            {leaderboardData.slice(0, 10).map((entry) => (
              <tr
                key={entry.rank}
                className={`
                  ${entry.rank === 1 ? "bg-yellow-50 font-bold" : ""}
                  ${entry.rank === 2 ? "bg-gray-200 font-bold" : ""}
                  ${entry.rank === 3 ? "bg-orange-200  font-bold" : ""}
                
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
  );
}
