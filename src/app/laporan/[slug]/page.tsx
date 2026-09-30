import { MDXRemote } from "next-mdx-remote/rsc";
import { getMdxContent, getMdxFiles } from "@/lib/mdx";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export async function generateStaticParams() {
  const files = getMdxFiles("laporan");
  return files.map((file) => ({
    slug: file.replace(/\.mdx$/, ""),
  }));
}

// Custom styling untuk elemen Markdown agar rapi tanpa bergantung penuh ke plugin prose Tailwind v4
const mdxComponents = {
  h1: (props: any) => <h1 className="text-3xl font-bold tracking-tight text-zinc-100 mt-8 mb-4" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 mt-6 mb-3 border-b border-zinc-800 pb-2" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-medium text-zinc-100 mt-4 mb-2" {...props} />,
  p: (props: any) => <p className="text-zinc-300 leading-relaxed my-3" {...props} />,
  ul: (props: any) => <ul className="list-disc list-outside pl-6 space-y-2 text-zinc-300 my-4" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-outside pl-6 space-y-2 text-zinc-300 my-4" {...props} />,
  li: (props: any) => <li className="pl-1" {...props} />,
  strong: (props: any) => <strong className="font-semibold text-zinc-100" {...props} />,
  em: (props: any) => <em className="italic text-zinc-200" {...props} />,
  img: (props: any) => (
    <span className="flex justify-center w-full my-8">
      <img 
        className="rounded-xl border border-zinc-800 max-w-full md:max-w-2xl max-h-[500px] object-contain shadow-sm" 
        {...props} 
      />
    </span>
  ),
};

export default async function LaporanDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const { metadata, content } = getMdxContent("laporan", resolvedParams.slug);

  return (
    <div className="w-full bg-zinc-950 min-h-screen text-zinc-100 py-16">
      <article className="container mx-auto px-4 md:px-8 max-w-3xl flex flex-col gap-8">
        <Link 
          href="/laporan" 
          className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors w-fit flex items-center gap-1"
        >
          &larr; Kembali ke Arsip
        </Link>
        
        <header className="flex flex-col gap-4 border-b border-zinc-800 pb-8">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-100">
            {metadata.title as string}
          </h1>
          <div className="flex gap-2 items-center">
            <Badge variant="secondary" className="bg-zinc-900 text-zinc-300 border-zinc-800">
              {metadata.date as string}
            </Badge>
          </div>
        </header>

        {/* Render MDX menggunakan custom components yang pasti rapi di Tailwind v4 */}
        <div className="leading-relaxed">
          <MDXRemote source={content} components={mdxComponents} />
        </div>
      </article>
    </div>
  );
}