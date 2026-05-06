'use client';
'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { projects } from '@/lib/data';
import {
  FiArrowRight,
  FiGithub,
  FiExternalLink,
  FiArrowLeft,
} from 'react-icons/fi';

export default function ProjectsPage() {
  return (
    <div
      style={{ maxWidth: 1100, margin: '0 auto', padding: '110px 2rem 6rem' }}
    >
      <Link
        href="/"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          color: 'var(--text-3)',
          textDecoration: 'none',
          fontSize: 13,
          marginBottom: '3rem',
          fontFamily: 'var(--font-mono)',
          letterSpacing: '0.04em',
          transition: 'color 0.2s',
        }}
        onMouseEnter={e =>
          (e.currentTarget.style.color = 'var(--purple-light)')
        }
        onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-3)')}
      >
        <FiArrowLeft size={13} /> BACK HOME
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
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
          // Work
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
          All Projects
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
          Each project starts with a real problem. Click any to read the full
          case study.
        </p>
      </motion.div>

      <div style={{ display: 'grid', gap: '1.5rem' }}>
        {projects.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
          >
            <div
              className="card-hover"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 20,
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  height: 2,
                  background: `linear-gradient(90deg, ${project.color}, transparent)`,
                }}
              />
              <div style={{ padding: '2.5rem' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: '1.5rem',
                  }}
                >
                  <div style={{ flex: 1, minWidth: 280 }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 11,
                        color: 'var(--text-3)',
                      }}
                    >
                      0{i + 1}
                    </span>
                    <h2
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        fontSize: 36,
                        color: 'var(--text)',
                        margin: '6px 0 10px',
                      }}
                    >
                      {project.title}
                    </h2>
                    <p
                      style={{
                        fontSize: 15,
                        color: 'var(--text-2)',
                        lineHeight: 1.7,
                        maxWidth: 560,
                        marginBottom: 20,
                      }}
                    >
                      {project.description}
                    </p>
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 6,
                        marginBottom: 24,
                      }}
                    >
                      {project.tech.map(t => (
                        <span
                          key={t}
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: 11,
                            padding: '3px 10px',
                            borderRadius: 40,
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid var(--border)',
                            color: 'var(--text-3)',
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        gap: '0.75rem',
                        flexWrap: 'wrap',
                      }}
                    >
                      <Link
                        href={`/projects/${project.slug}`}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 6,
                          background: 'var(--purple)',
                          color: '#fff',
                          textDecoration: 'none',
                          padding: '10px 20px',
                          borderRadius: 8,
                          fontSize: 13,
                          fontWeight: 600,
                          transition: 'opacity 0.2s',
                        }}
                      >
                        Case study <FiArrowRight size={13} />
                      </Link>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 6,
                          border: '1px solid var(--border)',
                          color: 'var(--text-2)',
                          textDecoration: 'none',
                          padding: '10px 16px',
                          borderRadius: 8,
                          fontSize: 13,
                          transition: 'all 0.2s',
                        }}
                      >
                        <FiExternalLink size={13} /> Live
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 6,
                          border: '1px solid var(--border)',
                          color: 'var(--text-2)',
                          textDecoration: 'none',
                          padding: '10px 16px',
                          borderRadius: 8,
                          fontSize: 13,
                          transition: 'all 0.2s',
                        }}
                      >
                        <FiGithub size={13} /> GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
