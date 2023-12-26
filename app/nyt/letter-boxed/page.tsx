export default async function NYTLetterBoxedPage() {
  const url = "https://aletterboxed-rwa5zgenkq-uc.a.run.app";
  const response = await fetch(url);
  const data = await response.json();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[rgb(252,113,107)]">
      {JSON.stringify(data, null, 2)}
    </main>
  );
}
