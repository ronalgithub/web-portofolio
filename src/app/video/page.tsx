import { Card, CardContent } from "@/components/ui/card";
import videoData from "@/data/video.json"; // Import data dari JSON

export default function VideoPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-16">
      <div className="flex flex-col gap-4 mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-100">Galeri Video</h1>
        <p className="text-zinc-400">Dokumentasi visual, demo proyek, dan tutorial teknis.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videoData.map((video) => (
          <Card key={video.id} className="bg-zinc-950 border-zinc-800 hover:border-zinc-700 transition-all cursor-pointer overflow-hidden group shadow-none">
            <div className="relative aspect-video w-full overflow-hidden bg-zinc-900">
              <img src={video.thumbnail} alt={video.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
              <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs font-medium text-white">{video.duration}</div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-blue-500/90 text-white rounded-full p-3 backdrop-blur-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </div>
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-zinc-100 line-clamp-2">{video.title}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}