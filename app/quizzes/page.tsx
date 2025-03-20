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
  9: "https://forms.gle/FrLywEa3dpyuyJLb7",
  10: "https://forms.gle/JPCAdUKwFaySECyQ8",
  11: "https://forms.gle/aS6meeycieHtMryg6",
  12: "https://forms.gle/hfxVS74QJJv7jdmY6",
  13: "https://forms.gle/9zBo1EuNRjpA2yiT6",
  14: "https://forms.gle/8kKz2HPW8W9UFHrK9",
  15: "https://forms.gle/Yh1ygEu11xz7gJbi7",
  16: "https://forms.gle/pRqYzKmWX1MLbhuU7",
  17: "https://forms.gle/dhBdJweSyGKfD9cx7",
  18: "https://forms.gle/PiVCLjuAfVaQTFMeA",
  19: "https://forms.gle/egiwWmgVNwcY22Ur5",
  20: "https://forms.gle/9k28USTAW1pTCLDU8",
  21: "https://forms.gle/v9Zj7zadfGoQQLxk6",
  22: "https://forms.gle/643ZoPqF3RdkCwhu8",
  23: "https://forms.gle/H1YB9jcecSJ8RSq6A",
  24: "https://forms.gle/eueTH4oXqxg7ENSW6",
  25: "https://forms.gle/weHBWpXY24U4kMuT7",
  26: "https://forms.gle/XPVtXMYZNXLbSjCE8",
  27: "https://forms.gle/LkLE221PqsKLbUrF7",
  28: "https://forms.gle/hJBUB2q8QxxX6Q2v6",
  29: "https://forms.gle/7hvzpx7ArrgzP4zVA",
  30: "https://forms.gle/uKaY8iBmS4yyVkDL6",
};

export default function ChallengePage() {
  const challenges = Array.from({ length: 30 }, (_, i) => {
    const releaseDate = new Date(2025, 2, i, 21).toLocaleString("en-US", {
      timeZone: "America/New_York",
    });
    return {
      challengeNumber: i + 1,
      releaseDate: releaseDate,
      redirectUrl: challengeLinks[i + 1],
    };
  });

  return (
    <div className="flex flex-col items-center justify-center my-32 h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 mx-16 min-w-[80%] max-[790px]:min-w-[90%] lg:min-w-[50%]">
        {challenges.map((challenge, index) => (
          <React.Fragment key={challenge.challengeNumber}>
            {index % 10 === 0 && (
              <div
                className={`col-span-full text-center font-bold text-black text-3xl my-4 ${inter.className}`}
              >
                Round #{Math.floor(index / 10) + 1}
                <p className="text-[#3f7d76]">
                  Days {index + 1} -{index + 10}
                </p>
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
      <div className="absolute top-[1350px] xl:top-[1100px] left-[-250] z-[-1] overflow-hidden w-auto h-auto hidden md:inline">
        <img src="/crescent.png" alt="Crescent" />
      </div>
      <div className="absolute top-[3050px] xl:top-[2500px] right-[-150] z-[-1] no-doc-scroll-x w-[800] hidden md:inline">
        <img src="/stars.png" alt="Crescent" />
      </div>
    </div>
  );
}
