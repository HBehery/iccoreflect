export default function Home() {
  return (
    <div className="flex flex-col no-doc-scroll items-center justify-center text-center h-[90vh] gap-4 font-[family-name:var(--font-geist-sans)] bg-no-repeat">
      <div className="flex justify-center z-[-1] w-[65%] sm:w-[50%]">
        <img src="/title.png" alt="Title" />
      </div>
      <div className="flex flex-col items-center justify-center px-12 sm:px-20">
        <h1 className="text-lg sm:text-2xl font-bold">
          Welcome to ICCO&apos;s Annual Ramadan Competition.
        </h1>
        <p className="text-md sm:text-lg">
          Please proceed to the{" "}
          <a className="underline " href="/quizzes">
            quizzes
          </a>{" "}
          page
        </p>
      </div>
      <div className="absolute bottom-0 z-[-1] overflow-hidden w-auto h-auto hidden max-lg:inline">
        <img src="/bottom.png" alt="Bottom Footer" />
      </div>
    </div>
  );
}
