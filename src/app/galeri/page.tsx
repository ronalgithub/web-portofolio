import { Badge } from "@/components/ui/badge";
import galleryData from "@/data/gallery.json"; // Import data dari JSON

export default function GaleriPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-16">
      <div className="flex flex-col gap-4 mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-100">Galeri Lapangan</h1>
        <p className="text-zinc-400 max-w-2xl">
          Dokumentasi visual dari kegiatan survei, instalasi infrastruktur jaringan, hingga perakitan hardware.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryData.map((item) => (
          <div key={item.id} className="group relative overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800 aspect-[4/3] cursor-pointer">
            <img src={item.image} alt={item.title} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-start gap-2">
              <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">{item.category}</Badge>
              <h3 className="text-lg font-semibold text-zinc-100 leading-tight">{item.title}</h3>
              <p className="text-sm text-zinc-300 line-clamp-2">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}