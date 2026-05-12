'use client';
import Link from 'next/link';
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiTwitter,
  FiFacebook,
  FiPhone,
} from 'react-icons/fi';

export default function Footer() {
  const socials = [
    {
      href: 'https://github.com/mahmudulhasanzb',
      icon: <FiGithub size={17} />,
      label: 'GitHub',
    },
    {
      href: 'https://linkedin.com/in/mahmudulhasanzb',
      icon: <FiLinkedin size={17} />,
      label: 'LinkedIn',
    },
    {
      href: 'https://twitter.com/mahmudulhasanzb',
      icon: <FiTwitter size={17} />,
      label: 'Twitter',
    },
    {
      href: 'https://facebook.com/mahmudulhasanzb',
      icon: <FiFacebook size={17} />,
      label: 'Facebook',
    },
    {
      href: 'mailto:mahmudulhasankk9@gmail.com',
      icon: <FiMail size={17} />,
      label: 'Email',
    },
  ];
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: '2.5rem 2rem',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '1.5rem',
          }}
        >
          <div>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 20,
                background: 'linear-gradient(135deg, #fff, #A78BFA)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              MH.
            </span>
            <p style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 4 }}>
              MERN Stack Developer · Sylhet, Bangladesh
            </p>
          </div>
          <div
            style={{ display: 'flex', gap: '0.875rem', alignItems: 'center' }}
          >
            {socials.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{ color: 'var(--text-3)', transition: 'color 0.2s' }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = 'var(--purple-light)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = 'var(--text-3)')
                }
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
        <div
          style={{
            borderTop: '1px solid var(--border)',
            paddingTop: '1.25rem',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.5rem',
          }}
        >
          <p style={{ fontSize: 12, color: 'var(--text-3)' }}>
            © {new Date().getFullYear()} Mahmudul Hasan. Built with Next.js & ❤️
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {[
              ['/#about', 'About'],
              ['/#projects', 'Projects'],
              ['/#skills', 'Skills'],
              ['/blog', 'Blog'],
              ['/#contact', 'Contact'],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                style={{
                  fontSize: 12,
                  color: 'var(--text-3)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = 'var(--purple-light)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = 'var(--text-3)')
                }
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
