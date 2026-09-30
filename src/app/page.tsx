import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const featuredReports = [
    {
      title: "Survei Jaringan Backbone Lot.8 SCBD",
      desc: "Dokumentasi dan hasil koordinasi survei infrastruktur jaringan tulang punggung (backbone) untuk optimalisasi konektivitas.",
      date: "Oktober 2025"
    },
    {
      title: "Sistem Manajemen Daya ESP32",
      desc: "Desain power path routing, integrasi panel surya, dan sensor air menggunakan modul TP4056 dan P-Channel MOSFET.",
      date: "Juli 2026"
    },
    {
      title: "Setup UniFi Controller dengan Docker",
      desc: "Konfigurasi UniFi Controller 7.6 dan MongoDB pada environment Ubuntu 24.04 menggunakan Docker Compose.",
      date: "Juli 2026"
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-8 py-16 md:py-24 flex flex-col gap-20">
      
      <section className="flex flex-col gap-6 max-w-4xl">
        <h1 className="text-4xl md:text-6xl md:leading-[1.1] font-bold tracking-tight text-zinc-100">
          Membangun Infrastruktur Jaringan & Sistem Embedded yang Handal.
        </h1>
        <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
          Selamat datang di portofolio saya. Saya berfokus pada administrasi sistem Linux, containerization, perancangan jaringan, serta pengembangan hardware mikrokontroler untuk solusi yang efisien.
        </p>
        <div className="flex flex-wrap gap-4 mt-6">
          {/* Menggunakan Link standar dengan styling tombol */}
          <Link href="/laporan" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-11 px-8 bg-zinc-100 text-zinc-950 hover:bg-zinc-300 transition-colors">
            Lihat Arsip Laporan
          </Link>
          <Link href="/tentang" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-11 px-8 border border-zinc-800 text-zinc-100 hover:bg-zinc-900 transition-colors">
            Tentang Saya
          </Link>
        </div>
      </section>

      <section className="flex flex-col gap-8">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
          <h2 className="text-2xl font-semibold text-zinc-100 tracking-tight">Highlight Proyek & Laporan</h2>
          <Link href="/laporan" className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
            Lihat semua &rarr;
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredReports.map((report, index) => (
            <Card key={index} className="bg-zinc-950 border-zinc-800 hover:border-zinc-700 transition-all hover:-translate-y-1 duration-300 flex flex-col shadow-none">
              <CardHeader>
                <CardTitle className="text-zinc-100 text-xl leading-tight">
                  {report.title}
                </CardTitle>
                <CardDescription className="text-zinc-400 pt-3 text-base">
                  {report.desc}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto pt-4">
                <Badge variant="secondary" className="bg-zinc-900 text-zinc-300 hover:bg-zinc-800 border border-zinc-800 font-normal">
                  {report.date}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}