import Link from "next/link";
// Kita hanya mengimpor ikon umum dari lucide-react (tidak mengimpor Linkedin/Github)
import { MapPin, FileText, Book, Hash, Mail } from "lucide-react";

export function SidebarProfile() {
  return (
    <aside className="w-full md:w-64 md:flex-shrink-0 md:h-screen md:sticky md:top-0 border-r border-b md:border-b-0 border-zinc-800 bg-zinc-950 p-6 md:p-8 flex flex-col gap-6 z-40">
      
      <div className="flex flex-col items-center md:items-start gap-4">
        {/* Gambar Profil */}
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-zinc-800 shadow-xl">
           <img src="https://github.com/shadcn.png" alt="Profile" className="w-full h-full object-cover" />
        </div>
        
        {/* Teks Nama & Profesi */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-zinc-100 tracking-tight">Nama Anda</h2>
          <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
            Network Engineer & Linux System Administrator
          </p>
        </div>
      </div>

      {/* Menu Navigasi Sidebar */}
      <nav className="flex flex-col gap-3 mt-4">
        <div className="flex items-center gap-3 text-sm text-zinc-300">
          <MapPin size={16} className="text-zinc-400" />
          <span>Tangerang, Banten</span>
        </div>
        
        <Link href="#" className="flex items-center gap-3 text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
          <FileText size={16} />
          <span>Curriculum Vitae</span>
        </Link>
        <Link href="#" className="flex items-center gap-3 text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
          <Book size={16} />
          <span>Google Scholar</span>
        </Link>
        <Link href="#" className="flex items-center gap-3 text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
          <Hash size={16} />
          <span>ORCID</span>
        </Link>

        {/* Menggunakan ikon SVG langsung untuk LinkedIn */}
        <Link href="#" className="flex items-center gap-3 text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
          <span>LinkedIn</span>
        </Link>

        {/* Menggunakan ikon SVG langsung untuk GitHub */}
        <Link href="#" className="flex items-center gap-3 text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
          <span>GitHub</span>
        </Link>

        <Link href="#" className="flex items-center gap-3 text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
          <Mail size={16} />
          <span>Email</span>
        </Link>
      </nav>
      
    </aside>
  );
}