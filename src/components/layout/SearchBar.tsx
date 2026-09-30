"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation"; // KITA TAMBAHKAN ROUTER

export type SearchItem = {
  id: string;
  title: string;
  desc: string;
  type: string;
  link: string;
};

export function SearchBar({ searchIndex = [] }: { searchIndex?: SearchItem[] }) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  
  // Inisialisasi router Next.js
  const router = useRouter(); 

  const results = searchIndex.filter(item => {
    if (!item) return false;
    const searchStr = query.toLowerCase().trim();
    if (!searchStr) return false;

    const matchTitle = (item.title || "").toLowerCase().includes(searchStr);
    const matchType = (item.type || "").toLowerCase().includes(searchStr);
    const matchDesc = (item.desc || "").toLowerCase().includes(searchStr);
    
    return matchTitle || matchType || matchDesc;
  });

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // FUNGSI BARU: Menangani klik hasil pencarian dengan aman
  const handleSelect = (link: string) => {
    setIsOpen(false); // 1. Tutup dropdown
    setQuery("");     // 2. Kosongkan teks
    router.push(link); // 3. Paksa pindah halaman!
  };

  return (
    <div ref={wrapperRef} className="hidden md:flex flex-1 max-w-md items-center relative ml-4 z-50">
      <div className="relative w-full">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
        <input 
          type="text" 
          placeholder={`Cari dari ${searchIndex.length} dokumen...`} 
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => {
            if (query.length > 0) setIsOpen(true);
          }}
          className="w-full bg-zinc-900 border border-zinc-800 rounded-full py-1.5 pl-10 pr-8 text-sm text-zinc-100 focus:outline-none focus:border-zinc-700 focus:ring-1 focus:ring-blue-500 transition-all"
        />
        
        {query && (
          <button 
            onClick={() => { setQuery(""); setIsOpen(false); }} 
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {isOpen && query.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-zinc-900 border border-zinc-800 rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-80 overflow-y-auto">
          {results.length > 0 ? (
            results.map(item => (
              /* Mengganti tag <Link> menjadi <button> agar navigasi tidak tabrakan */
              <button 
                key={item.id} 
                onClick={() => handleSelect(item.link)}
                className="flex flex-col items-start px-4 py-3 hover:bg-zinc-800 border-b border-zinc-800/50 last:border-0 transition-colors text-left w-full cursor-pointer"
              >
                <span className="text-sm font-medium text-zinc-100">{item.title}</span>
                <span className="text-xs text-blue-400 mt-1">{item.type}</span>
              </button>
            ))
          ) : (
            <div className="px-4 py-8 text-center text-sm text-zinc-500">
              Tidak ditemukan hasil untuk <span className="text-zinc-300">"{query}"</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}