import Link from "next/link";
import { SearchBar, SearchItem } from "./SearchBar";
import { getMdxFiles, getMdxContent } from "@/lib/mdx";

import galleryDataRaw from "@/data/gallery.json";
import videoDataRaw from "@/data/video.json";

export function Navbar() {
  let searchIndex: SearchItem[] = [];

  // 1. Ambil data Galeri
  try {
    const galleries = Array.isArray(galleryDataRaw) ? galleryDataRaw.map(item => ({
      id: `gal-${item.id}`, 
      title: item.title || "Galeri Tanpa Judul", 
      desc: item.desc || item.category || "", 
      type: "Galeri", 
      link: "/galeri"
    })) : [];
    searchIndex = [...searchIndex, ...galleries];
  } catch (e) {}

  // 2. Ambil data Video
  try {
    const videos = Array.isArray(videoDataRaw) ? videoDataRaw.map(item => ({
      id: `vid-${item.id}`, 
      title: item.title || "Video Tanpa Judul", 
      desc: "video tutorial dokumentasi demo", 
      type: "Video", 
      link: "/video"
    })) : [];
    searchIndex = [...searchIndex, ...videos];
  } catch (e) {}

  // 3. Ambil data Laporan MDX
  try {
    const laporanFiles = getMdxFiles("laporan");
    const laporans = laporanFiles.map(file => {
      const slug = file.replace(/\.mdx$/, "");
      const { metadata } = getMdxContent("laporan", slug);
      return {
        id: `lap-${slug}`,
        title: (metadata.title as string) || slug,
        desc: (metadata.desc as string) || "",
        type: "Laporan",
        link: `/laporan/${slug}`
      };
    });
    searchIndex = [...searchIndex, ...laporans];
  } catch (e) {}

  // 4. Ambil data Post MDX
  try {
    const postFiles = getMdxFiles("post");
    const posts = postFiles.map(file => {
      const slug = file.replace(/\.mdx$/, "");
      const { metadata } = getMdxContent("post", slug);
      return {
        id: `post-${slug}`,
        title: (metadata.title as string) || slug,
        desc: (metadata.desc as string) || "",
        type: "Post",
        link: `/post/${slug}`
      };
    });
    searchIndex = [...searchIndex, ...posts];
  } catch (e) {}

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between gap-4">
        
        <Link href="/" className="font-bold text-xl tracking-tight text-zinc-100 whitespace-nowrap">
          Portofolio<span className="text-blue-500">.</span>
        </Link>
        
        {/* Fitur Search */}
        <SearchBar searchIndex={searchIndex} />

        <nav className="flex items-center gap-4 md:gap-6 text-sm font-medium text-zinc-400 overflow-x-auto">
          <Link href="/" className="hover:text-zinc-100 transition-colors">Beranda</Link>
          <Link href="/tentang" className="hover:text-zinc-100 transition-colors">Tentang</Link>
          <Link href="/galeri" className="hover:text-zinc-100 transition-colors">Galeri</Link>
          <Link href="/laporan" className="hover:text-zinc-100 transition-colors">Laporan</Link>
          <Link href="/post" className="hover:text-zinc-100 transition-colors">Post</Link>
          <Link href="/video" className="hover:text-zinc-100 transition-colors">Video</Link>
        </nav>
      </div>
    </header>
  );
}