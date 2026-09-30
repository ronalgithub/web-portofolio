import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Menentukan letak folder konten
const contentDir = path.join(process.cwd(), 'content');

export function getMdxFiles(folder: string) {
  const targetDir = path.join(contentDir, folder);
  
  // RADAR DEBUGGING:
  console.log("Mencari MDX di lokasi:", targetDir);
  
  if (!fs.existsSync(targetDir)) {
    console.log("GAGAL: Folder tidak ditemukan!");
    return [];
  }
  
  const files = fs.readdirSync(targetDir);
  console.log("File yang ditemukan:", files);
  
  return files.filter((file) => file.endsWith('.mdx'));
}

export function getMdxContent(folder: string, slug: string) {
  const filePath = path.join(contentDir, folder, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  
  // Memisahkan metadata (frontmatter) dari konten utama
  const { data, content } = matter(fileContent);
  return { metadata: data, content };
}

export function getAllPosts(folder: string) {
  const mdxFiles = getMdxFiles(folder);
  return mdxFiles.map((file) => {
    const slug = file.replace(/\.mdx$/, '');
    const { metadata } = getMdxContent(folder, slug);
    return { slug, ...metadata };
  });
}