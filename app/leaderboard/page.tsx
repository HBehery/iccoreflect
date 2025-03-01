export default function Leaderboard() {
  return (
    <div className="flex flex-col no-doc-scroll items-center justify-center text-center mx-12 h-[90vh] font-[family-name:var(--font-geist-sans)] bg-no-repeat">
      <h1 className="text-3xl md:text-4xl font-bold">Leaderboard</h1>
      <p className="text-md md:text-xl">
        Releasing on March 10th 2025 / Ramadan 11th 1446
      </p>
      <div className="absolute bottom-0 z-[-1] overflow-hidden w-auto h-auto hidden max-lg:inline">
        <img src="/bottom.png" alt="Bottom Footer" />
      </div>
    </div>
  );
}
