const { COMPANY_NAME } = process.env;

export async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightName = COMPANY_NAME || "";

  return (
    <>
      <footer className="border-t border-neutral-200 px-6 py-12 text-sm">
        <div>
          <span>© {currentYear}, </span>
          <span>{copyrightName}</span>
        </div>
      </footer>
    </>
  );
}
