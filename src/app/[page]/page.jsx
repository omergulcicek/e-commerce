import { notFound } from "next/navigation";

import { getSeo } from "@/services/getSeo";

export default function Page({ params }) {
  return <h1>{params.page}</h1>;
}

export async function generateMetadata({ params }) {
  const page = await getSeo(params.page);

  if (!page) return notFound();

  return {
    title: page.title,
    description: page.description,
  };
}
