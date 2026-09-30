import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react"; // Menggunakan ikon kalender

export default function PostPage() {
  // Data dummy artikel/post
  const posts = [
    {
      id: 1,
      slug: "backup-router-otomatis",
      title: "Pentingnya Backup Konfigurasi Router secara Otomatis",
      excerpt: "Berbagi pengalaman tentang bagaimana script sederhana berbasis Python dan Cronjob dapat menyelamatkan Anda dari bencana kegagalan perangkat keras.",
      date: "12 Agustus 2026",
      category: "Networking"
    },
    {
      id: 2,
      slug: "mengenal-tp4056",
      title: "Mengenal Modul TP4056 untuk Manajemen Baterai Lithium",
      excerpt: "Mengapa TP4056 menjadi pilihan utama untuk proyek IoT skala kecil? Mari bedah fitur proteksi dan skema pemasangannya pada ESP32.",
      date: "25 Juli 2026",
      category: "Hardware"
    },
    {
      id: 3,
      slug: "ubuntu-24-04-server",
      title: "Catatan Rilis: Ubuntu 24.04 LTS untuk Server Produksi",
      excerpt: "Beberapa hal yang perlu diperhatikan sebelum melakukan upgrade ke Ubuntu 24.04, khususnya terkait kompatibilitas Docker dan dependensi lawas.",
      date: "10 Juni 2026",
      category: "Linux SysAdmin"
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-8 py-16 max-w-4xl">
      <div className="flex flex-col gap-4 mb-12 border-b border-zinc-800 pb-8">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-100">Post & Tulisan</h1>
        <p className="text-zinc-400">
          Artikel, tutorial singkat, dan catatan teknis seputar infrastruktur IT dan mikrokontroler.
        </p>
      </div>

      {/* Feed List (1 Kolom Vertikal) */}
      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <Link key={post.id} href={`/post/${post.slug}`}>
            <Card className="bg-zinc-950 border-zinc-800 hover:border-zinc-700 transition-all hover:bg-zinc-900/40 cursor-pointer shadow-none">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="secondary" className="bg-zinc-900 text-zinc-300 border border-zinc-800 font-normal hover:bg-zinc-800">
                    {post.category}
                  </Badge>
                  <span className="text-xs text-zinc-500 flex items-center gap-1.5 font-medium">
                    <Calendar size={14} />
                    {post.date}
                  </span>
                </div>
                <CardTitle className="text-zinc-100 text-xl md:text-2xl leading-tight">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-zinc-400 pt-3 text-base leading-relaxed">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}