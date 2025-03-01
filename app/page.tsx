export default function Home() {
  return (
    <div className="flex flex-col no-doc-scroll items-center justify-center text-center mx-12 h-[100vh] font-[family-name:var(--font-geist-sans)] bg-no-repeat">
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
  );
}
