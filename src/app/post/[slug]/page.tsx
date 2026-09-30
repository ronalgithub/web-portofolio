import { MDXRemote } from "next-mdx-remote/rsc";
import { getMdxContent, getMdxFiles } from "@/lib/mdx";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

// WAJIB: Generate HTML statis untuk semua file MDX di folder 'post'
export async function generateStaticParams() {
  const files = getMdxFiles("post"); // Perhatikan: kita panggil folder "post"
  return files.map((file) => ({
    slug: file.replace(/\.mdx$/, ""),
  }));
}

// Custom components agar Markdown rapi di Dark Mode Tailwind v4
const mdxComponents = {
  h1: (props: any) => <h1 className="text-3xl font-bold tracking-tight text-zinc-100 mt-8 mb-4" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 mt-8 mb-4 border-b border-zinc-800 pb-2" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-medium text-zinc-100 mt-6 mb-3" {...props} />,
  p: (props: any) => <p className="text-zinc-300 leading-relaxed my-4 text-[15px]" {...props} />,
  ul: (props: any) => <ul className="list-disc list-outside pl-6 space-y-2 text-zinc-300 my-5" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-outside pl-6 space-y-2 text-zinc-300 my-5" {...props} />,
  li: (props: any) => <li className="pl-1 leading-relaxed" {...props} />,
  strong: (props: any) => <strong className="font-semibold text-zinc-100" {...props} />,
  em: (props: any) => <em className="italic text-zinc-200" {...props} />,
  blockquote: (props: any) => <blockquote className="border-l-4 border-zinc-700 pl-4 italic text-zinc-400 my-5" {...props} />,
  img: (props: any) => (
    <span className="flex justify-center w-full my-8">
      <img 
        className="rounded-xl border border-zinc-800 max-w-full md:max-w-2xl max-h-[500px] object-contain shadow-sm" 
        {...props} 
      />
    </span>
  ),
};

// Komponen Utama Halaman
export default async function PostDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  // Mengambil konten dari folder "post" berdasarkan nama file (slug)
  const { metadata, content } = getMdxContent("post", resolvedParams.slug);

  return (
    <div className="w-full bg-zinc-950 min-h-screen text-zinc-100 py-12 md:py-16">
      <article className="container mx-auto px-4 md:px-8 max-w-3xl flex flex-col gap-8">
        
        {/* Tombol Kembali */}
        <Link 
          href="/post" 
          className="text-sm font-medium text-zinc-400 hover:text-zinc-200 transition-colors w-fit flex items-center gap-2"
        >
          &larr; Kembali ke daftar Post
        </Link>
        
        {/* Header Artikel */}
        <header className="flex flex-col gap-4 border-b border-zinc-800 pb-8 mt-2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-100 leading-tight">
            {metadata.title as string}
          </h1>
          <div className="flex gap-2 items-center text-sm text-zinc-400 mt-2">
            <span>Dipublikasikan pada {metadata.date as string}</span>
          </div>
        </header>

        {/* Konten Artikel (MDX) */}
        <div className="leading-relaxed">
          <MDXRemote source={content} components={mdxComponents} />
        </div>
        
      </article>
    </div>
  );
}