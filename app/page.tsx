export default function Home() {
  return (
    <div className="flex flex-col no-doc-scroll items-center justify-top text-center my-48 xl:my-24 h-[90vh] gap-16 md:gap-24 font-[family-name:var(--font-geist-sans)] bg-no-repeat">
      <div className="flex justify-center z-[-1] w-[75%] sm:w-[50%] overflow-hidden">
        <img src="/title.png" alt="Title" />
      </div>
      <div className="flex flex-col items-center justify-center px-12 sm:px-20">
        <h1 className="text-3xl font-bold">
          Welcome to ICCO&apos;s Annual Ramadan Competition.
        </h1>
        <p className="text-lg">
          Please proceed to the{" "}
          <a className="underline " href="/quizzes">
            quizzes
          </a>{" "}
          page
        </p>
      </div>
    </div>
  );
}
