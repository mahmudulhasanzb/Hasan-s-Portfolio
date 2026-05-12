import { getPostById, getAllPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { FiArrowLeft, FiClock } from 'react-icons/fi';

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = getPostById(id);
  if (!post) return {};
  return { title: post.title, description: post.excerpt || post.title };
}

export default async function BlogPostPage({ params }) {
  const { id } = await params;
  const post = getPostById(id);
  if (!post) notFound();

  return (
    <div
      style={{ maxWidth: 720, margin: '0 auto', padding: '110px 2rem 6rem' }}
    >
      <Link
        href="/blog"
        className="back-link"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          color: 'var(--text-3)',
          textDecoration: 'none',
          fontSize: 12,
          marginBottom: '3rem',
          fontFamily: 'var(--font-mono)',
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          transition: 'color 0.2s',
        }}
      >
        <FiArrowLeft size={13} /> Blog
      </Link>

      {post.tags && (
        <div style={{ display: 'flex', gap: 6, marginBottom: 16 }}>
          {post.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 10,
                padding: '2px 8px',
                borderRadius: 40,
                background: 'rgba(124,58,237,0.1)',
                color: 'var(--purple-light)',
                border: '1px solid rgba(124,58,237,0.2)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 'clamp(2rem, 5vw, 3.2rem)',
          color: 'var(--text)',
          lineHeight: 1.1,
          marginBottom: 20,
        }}
      >
        {post.title}
      </h1>
      <div
        style={{
          display: 'flex',
          gap: 16,
          fontSize: 12,
          color: 'var(--text-3)',
          fontFamily: 'var(--font-mono)',
          marginBottom: 40,
          alignItems: 'center',
        }}
      >
        <span>{post.date}</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <FiClock size={11} />
          {post.readingTime} min read
        </span>
      </div>
      <div
        style={{
          height: 1,
          background:
            'linear-gradient(90deg, rgba(124,58,237,0.4), transparent)',
          marginBottom: '3rem',
        }}
      />

      <article>
        <style>{`
          .back-link:hover { color: var(--purple-light) !important; }
          article h2 { font-family: var(--font-display); font-weight: 700; font-size: 1.6rem; color: var(--text); margin: 2.5rem 0 1rem; }
          article h3 { font-family: var(--font-display); font-weight: 600; font-size: 1.3rem; color: var(--text); margin: 2rem 0 0.75rem; }
          article p { font-size: 15px; color: var(--text-2); line-height: 1.85; margin-bottom: 1.25rem; }
          article code { font-family: var(--font-mono); font-size: 13px; background: rgba(124,58,237,0.12); color: var(--purple-light); padding: 2px 7px; border-radius: 5px; border: 1px solid rgba(124,58,237,0.2); }
          article pre { background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px; padding: 1.5rem; overflow-x: auto; margin: 1.5rem 0; }
          article pre code { background: none; border: none; padding: 0; color: var(--text); font-size: 13px; }
          article a { color: var(--purple-light); text-decoration: none; border-bottom: 1px solid rgba(167,139,250,0.3); }
          article ul, article ol { padding-left: 1.5rem; margin-bottom: 1.25rem; }
          article li { font-size: 15px; color: var(--text-2); margin-bottom: 0.5rem; line-height: 1.7; }
          article blockquote { border-left: 3px solid var(--purple); padding-left: 1.25rem; color: var(--text-2); font-style: italic; margin: 1.5rem 0; opacity: 0.85; }
        `}</style>
        <MDXRemote source={post.content} />
      </article>
    </div>
  );
}
