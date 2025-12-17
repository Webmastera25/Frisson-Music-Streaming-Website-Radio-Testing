"use client";

import { notFound } from "next/navigation";

type PageProps = {
  params: {
    id: string;
  };
};

/**
 * 🔹 Static export-ისთვის აუცილებელია
 * Next.js აქედან იგებს ყველა შესაძლო [id]-ს
 */
export async function generateStaticParams() {
  // დროებით static ID-ები
  // მოგვიანებით შეგიძლია API-დან წამოიღო
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
  ];
}

export default function AlbumPage({ params }: PageProps) {
  if (!params?.id) {
    notFound();
  }

  return (
    <main style={{ padding: 40, color: "white" }}>
      <h1>Album page</h1>
      <p>Album ID: {params.id}</p>
    </main>
  );
}
