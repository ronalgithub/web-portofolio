export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 py-8 mt-auto">
      <div className="container mx-auto px-4 md:px-8 text-center text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} Portofolio Saya. Built with Next.js & Tailwind CSS.</p>
      </div>
    </footer>
  );
}