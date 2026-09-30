import { Badge } from "@/components/ui/badge";

export default function TentangPage() {
  const skills = [
    "Linux System Administration", "Ubuntu", "Docker & Docker Compose", 
    "Networking (Cisco, UniFi)", "C++", "Microcontroller (ESP32)", 
    "Hardware Design (Power Routing, MOSFET)", "Next.js"
  ];

  return (
    <div className="container mx-auto px-4 md:px-8 py-16 max-w-4xl">
      <div className="flex flex-col gap-12">
        <section className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-100">Tentang Saya</h1>
          <p className="text-lg text-zinc-400 leading-relaxed">
            Saya adalah seorang profesional yang berfokus pada infrastruktur IT, jaringan tulang punggung (backbone), administrasi server Linux, serta pengembangan perangkat keras berbasis mikrokontroler. Saya menyukai tantangan dalam menghubungkan sistem digital dan fisik agar bekerja secara efisien.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-zinc-100">Tech Stack & Keahlian</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="bg-zinc-900 text-zinc-300 border-zinc-800 text-sm py-1.5 px-3">
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-4 border-t border-zinc-800 pt-8">
          <h2 className="text-2xl font-semibold text-zinc-100">Pengalaman & Proyek Terpilih</h2>
          <ul className="list-disc list-inside text-zinc-400 space-y-3">
            <li><strong className="text-zinc-200">Survei Jaringan Backbone Lot.8 SCBD:</strong> Koordinasi survei infrastruktur jaringan tulang punggung.</li>
            <li><strong className="text-zinc-200">Sistem Manajemen Daya ESP32:</strong> Mendesain *power path routing* mengeliminasi kebocoran arus saat Deep Sleep menggunakan modul TP4056 dan P-Channel MOSFET.</li>
            <li><strong className="text-zinc-200">Setup Server Container:</strong> Implementasi UniFi Controller dan MongoDB menggunakan Docker Compose di Ubuntu.</li>
            <li><strong className="text-zinc-200">Pemrosesan Gambar ke Teks:</strong> Mengolah gambar kode C++ (OCR) menjadi format teks fungsional.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}