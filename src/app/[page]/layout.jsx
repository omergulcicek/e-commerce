import { Footer } from "@/components/layout/footer";
import { Filters } from "@/components/layout/filters";

export default function Layout({ children }) {
  return (
    <>
      <main className="mx-auto flex max-w-screen-2xl gap-10 py-20">
        <Filters />

        <section className="flex-1">{children}</section>
      </main>

      <Footer />
    </>
  );
}
