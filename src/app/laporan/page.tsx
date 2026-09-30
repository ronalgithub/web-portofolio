import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getAllPosts } from "@/lib/mdx";

export default function LaporanPage() {
  const laporan = getAllPosts("laporan");
  // TAMBAHKAN BARIS INI UNTUK DEBUGGING:
  console.log("Data Laporan yang terbaca:", laporan);

  return (
    <div className="container mx-auto px-4 md:px-8 py-16">
      <div className="flex flex-col gap-4 mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-100">Arsip Laporan</h1>
        <p className="text-zinc-400">Dokumentasi teknis, survei jaringan, dan jurnal proyek.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {laporan.map((item: any) => (
          <Link key={item.slug} href={`/laporan/${item.slug}`}>
            <Card className="h-full bg-zinc-950 border-zinc-800 hover:border-zinc-700 transition-all hover:-translate-y-1 cursor-pointer shadow-none">
              <CardHeader>
                <CardTitle className="text-zinc-100 text-xl">{item.title}</CardTitle>
                <CardDescription className="text-zinc-400 pt-2">{item.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Badge variant="secondary" className="bg-zinc-900 text-zinc-300 border border-zinc-800">
                  {item.date}
                </Badge>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}