'use client';
import Link from 'next/link';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: '2rem 2rem',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <div>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 18,
              background: 'linear-gradient(135deg, #fff, #A78BFA)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {'<MH/>'}
          </span>
          <p
            style={{
              fontSize: 12,
              color: 'var(--text-3)',
              marginTop: 4,
              fontFamily: 'var(--font-body)',
            }}
          >
            © {new Date().getFullYear()} Mahmudul Hasan · Built with Next.js
          </p>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          {[
            {
              href: 'https://github.com/mahmudulhasanzb',
              icon: <FiGithub size={17} />,
            },
            {
              href: 'https://linkedin.com/in/mahmudulhasanzb',
              icon: <FiLinkedin size={17} />,
            },
            {
              href: 'mailto:mahmudulhasankk9@gmail.com',
              icon: <FiMail size={17} />,
            },
          ].map(({ href, icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text-3)', transition: 'color 0.2s' }}
              onMouseEnter={e =>
                (e.currentTarget.style.color = 'var(--purple-light)')
              }
              onMouseLeave={e =>
                (e.currentTarget.style.color = 'var(--text-3)')
              }
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
