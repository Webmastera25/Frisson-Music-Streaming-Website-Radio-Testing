import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

/**
 * 🔹 Static export-ისთვის აუცილებელია
 * Next.js აქედან იგებს ყველა შესაძლო [id]-ს
 */
export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
  ];
}

export default async function AlbumPage({ params }: PageProps) {
  const { id } = await params;

  if (!id) {
    notFound();
  }

  return (
    <main style={{ padding: 40, color: "white" }}>
      <h1>Album page</h1>
      <p>Album ID: {id}</p>
    </main>
  );
}
