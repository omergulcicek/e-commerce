import { Footer } from "@/components/layout/footer";

export default function Layout({ children }) {
  return (
    <>
      <main className="mx-auto flex max-w-screen-2xl py-20">{children}</main>

      <Footer />
    </>
  );
}
