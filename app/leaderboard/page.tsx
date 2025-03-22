"use client";
import LeaderboardTable from "../components/Leaderboard";
import { useState } from "react";

export default function Leaderboard() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative flex flex-col no-x-scroll items-center justify-center text-center mt-32 lg:mt-8 mx-12 font-[family-name:var(--font-geist-sans)] bg-no-repeat">
      <h1 className="text-3xl md:text-4xl font-bold mt-12">Leaderboard</h1>
      <p className="text-md md:text-xl mb-8 font-semibold">
        Top 10 Players From Each Round
      </p>

      <div className="grid grid-cols-1 min-[940px]:grid-cols-2 2xl:grid-cols-3 place-items-center min-[940px]:place-items-top">
        <LeaderboardTable setLoadState={setLoading} round={3} />

        <LeaderboardTable setLoadState={setLoading} round={2} />

        <LeaderboardTable setLoadState={setLoading} round={1} />
      </div>

      <div
        className={`bottom-0 z-[-1] overflow-hidden min-w-screen h-auto ${
          loading ? "hidden" : "hidden max-lg:inline"
        } `}
      >
        <img
          src="/bottom.png"
          alt="Bottom Footer"
          className="w-full mt-[-75%]"
        />
      </div>
    </div>
  );
}
