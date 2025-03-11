export default function Leaderboard() {
  return (
    <div className="flex flex-col no-doc-scroll items-center justify-center text-center mx-12 h-[90vh] font-[family-name:var(--font-geist-sans)] bg-no-repeat">
      <h1 className="text-3xl md:text-4xl font-bold">Leaderboard</h1>
      <p className="text-md md:text-xl">
        Releasing on March 11th 2025 / Ramadan 12th 1446
      </p>
      <div className="absolute bottom-0 z-[-1] overflow-hidden w-auto h-auto hidden max-lg:inline">
        <img src="/bottom.png" alt="Bottom Footer" />
      </div>
    </div>
  );
}

// "use client";
// import LeaderboardTable from "../components/Leaderboard";
// import { useState } from "react";

// export default function Leaderboard() {
//   const [loading, setLoading] = useState(true);

//   return (
//     <div className="relative flex flex-col no-x-scroll items-center justify-center text-center mt-32 lg:mt-8 mx-12 font-[family-name:var(--font-geist-sans)] bg-no-repeat">
//       <h1 className="text-3xl md:text-4xl font-bold mt-8">Leaderboard</h1>
//       <p className="text-md md:text-xl">Top 10 Players from Round 1</p>
//       <LeaderboardTable setLoadState={setLoading} />

//       <div
//         className={`bottom-0 z-[-1] overflow-hidden min-w-screen h-auto ${
//           loading ? "hidden" : "hidden max-lg:inline"
//         } `}
//       >
//         <img
//           src="/bottom.png"
//           alt="Bottom Footer"
//           className="w-full mt-[-75%]"
//         />
//       </div>
//     </div>
//   );
// }
