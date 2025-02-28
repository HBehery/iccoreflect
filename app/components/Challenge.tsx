"use client";
import React, { useState, useEffect } from "react";
import { differenceInSeconds, formatDistanceToNow } from "date-fns";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface ChallengeProps {
  challengeNumber: number;
  releaseDate: string;
  redirectUrl: string;
}

const Challenge: React.FC<ChallengeProps> = ({
  challengeNumber,
  releaseDate,
  redirectUrl,
}) => {
  const [isLocked, setIsLocked] = useState(true);
  const [timeRemaining, setTimeRemaining] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const release = new Date(releaseDate);
      const seconds = differenceInSeconds(release, now);
      if (seconds <= 0) {
        setIsLocked(false);
        clearInterval(interval);
      } else {
        setTimeRemaining(
          formatDistanceToNow(release, { includeSeconds: true })
        );
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [releaseDate]);

  const handleClick = () => {
    if (isLocked) {
      setShowPopup(true);
    } else {
      window.open(redirectUrl, "_blank");
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={`flex justify-center items-center rounded-[10px] ${
          isLocked ? "bg-gray-300" : "bg-[#3f7d76]/50"
        }`}
      >
        <div
          onClick={handleClick}
          className={`flex w-[98%] h-[97%] justify-center items-center px-32 py-24 rounded-[8px] cursor-pointer bg-radial-[at_30%_70%] from-white to-[#fafafa] to-99% hover:bg-radial-[at_10%_10%] hover:from-gray-50 hover:to-white transition-colors  duration-300 `}
        >
          <div className="flex flex-col w-full items-center justify-center">
            <p className={`truncate ${inter.className}`}>
              DAY {challengeNumber}
            </p>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/10 bg-opacity-50 z-10">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <p>This challenge will be unlocked in {timeRemaining}</p>
            <button
              onClick={closePopup}
              className="mt-4 px-4 py-2 bg-[#3f7d76] text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Challenge;
