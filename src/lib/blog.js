import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

export function getAllPosts() {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'));
  return files
    .map((filename) => {
      const id = filename.replace('.mdx', '');
      const raw = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf8');
      const { data, content } = matter(raw);
      const readingTime = Math.ceil(content.split(/\s+/).length / 200);
      return { id, readingTime, ...data, content };
    })
    .filter((p) => p.published !== false)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostById(id) {
  const filePath = path.join(BLOG_DIR, `${id}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  return {
    id,
    readingTime: Math.ceil(content.split(/\s+/).length / 200),
    ...data,
    content,
  };
}
