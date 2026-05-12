import { getAllPosts } from '@/lib/blog';
import Link from 'next/link';
import { FiArrowLeft, FiArrowRight, FiClock } from 'react-icons/fi';

export const metadata = { title: 'Blog' };

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <div
      style={{ maxWidth: 860, margin: '0 auto', padding: '110px 2rem 6rem' }}
    >
      <Link
        href="/"
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
        }}
      >
        <FiArrowLeft size={13} /> Back home
      </Link>
      <p
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          color: 'var(--purple-light)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: 12,
        }}
      >
        // Writing
      </p>
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          color: 'var(--text)',
          lineHeight: 1.05,
          marginBottom: 16,
        }}
      >
        Blog
      </h1>
      <p
        style={{
          fontSize: 15,
          color: 'var(--text-2)',
          maxWidth: 480,
          lineHeight: 1.7,
          marginBottom: '4rem',
        }}
      >
        Notes on what I build, what I learn, and how I think about software.
      </p>

      {posts.length === 0 ? (
        <div
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 20,
            padding: '3.5rem 2rem',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              background: 'rgba(124,58,237,0.1)',
              border: '1px solid rgba(124,58,237,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px',
              fontSize: 24,
            }}
          >
            ✍️
          </div>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: 22,
              color: 'var(--text)',
              marginBottom: 8,
            }}
          >
            Posts coming soon.
          </p>
          <p style={{ fontSize: 14, color: 'var(--text-3)' }}>
            First posts: How I built Book Buddy · What I learned from Pix Vault
          </p>
        </div>
      ) : (
        <div style={{ display: 'grid', gap: '1rem' }}>
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              style={{ textDecoration: 'none', display: 'block' }}
            >
              <article
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 16,
                  padding: '1.75rem 2rem',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    flexWrap: 'wrap',
                  }}
                >
                  <div style={{ flex: 1, minWidth: 260 }}>
                    {post.tags && (
                      <div
                        style={{
                          display: 'flex',
                          gap: 6,
                          marginBottom: 10,
                          flexWrap: 'wrap',
                        }}
                      >
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
                    <h2
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 600,
                        fontSize: 22,
                        color: 'var(--text)',
                        marginBottom: 8,
                      }}
                    >
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p
                        style={{
                          fontSize: 14,
                          color: 'var(--text-2)',
                          lineHeight: 1.6,
                        }}
                      >
                        {post.excerpt}
                      </p>
                    )}
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-end',
                      gap: 6,
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 11,
                        color: 'var(--text-3)',
                      }}
                    >
                      {post.date}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 11,
                        color: 'var(--text-3)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 4,
                      }}
                    >
                      <FiClock size={11} />
                      {post.readingTime} min
                    </p>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
