'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import {
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiExternalLink,
  FiMail,
  FiArrowUpRight,
} from 'react-icons/fi';
import { siteConfig, projects, skillGroups, journey } from '@/lib/data';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

function SectionLabel({ children }) {
  return (
    <p
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        color: 'var(--purple-light)',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        marginBottom: 12,
      }}
    >
      {children}
    </p>
  );
}

function SectionTitle({ children }) {
  return (
    <h2
      style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        color: 'var(--text)',
        lineHeight: 1.1,
        marginBottom: '1rem',
      }}
    >
      {children}
    </h2>
  );
}

// ─── HERO ────────────────────────────────────────────────────────────────────
function Hero() {
  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 32 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 2rem 80px',
        position: 'relative',
      }}
    >
      {/* Bottom-left glow */}
      <div
        style={{
          position: 'absolute',
          bottom: -100,
          left: -100,
          width: 500,
          height: 500,
          background:
            'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 800, width: '100%', textAlign: 'center' }}>
        <motion.div variants={stagger} initial="hidden" animate="show">
          {/* Open to work */}
          <motion.div
            variants={item}
            style={{
              marginBottom: 28,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(34,197,94,0.08)',
              border: '1px solid rgba(34,197,94,0.25)',
              borderRadius: 40,
              padding: '6px 16px',
            }}
          >
            <span
              style={{
                position: 'relative',
                width: 8,
                height: 8,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: 'var(--green)',
                  animation: 'ping 2s infinite',
                }}
              />
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: 'var(--green)',
                  position: 'relative',
                }}
              />
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: 'var(--green)',
                letterSpacing: '0.06em',
              }}
            >
              Available for hire
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(3.5rem, 10vw, 7rem)',
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              marginBottom: 24,
              color: 'var(--text)',
            }}
          >
            {siteConfig.name.split(' ')[0]}{' '}
            <span
              style={{
                background:
                  'linear-gradient(135deg, #fff 0%, #A78BFA 40%, #7C3AED 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {siteConfig.name.split(' ')[1]}
            </span>
          </motion.h1>

          {/* Role with typewriter feel */}
          <motion.div
            variants={item}
            style={{
              marginBottom: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 15,
                color: 'var(--text-2)',
                letterSpacing: '0.05em',
              }}
            >
              {siteConfig.role}
            </span>
            <span
              style={{
                display: 'inline-block',
                width: 2,
                height: 18,
                background: 'var(--purple)',
                animation: 'blink 1s infinite',
                borderRadius: 1,
              }}
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={item}
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              color: 'var(--text-2)',
              maxWidth: 500,
              margin: '0 auto 40px',
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            {siteConfig.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            style={{
              display: 'flex',
              gap: 12,
              justifyContent: 'center',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <a
              href="#projects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'var(--purple)',
                color: '#fff',
                textDecoration: 'none',
                padding: '13px 28px',
                borderRadius: 12,
                fontSize: 14,
                fontWeight: 600,
                fontFamily: 'var(--font-body)',
                boxShadow:
                  '0 0 0 1px rgba(124,58,237,0.5), 0 0 30px rgba(124,58,237,0.3)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow =
                  '0 0 0 1px rgba(124,58,237,0.8), 0 0 50px rgba(124,58,237,0.5)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow =
                  '0 0 0 1px rgba(124,58,237,0.5), 0 0 30px rgba(124,58,237,0.3)';
                e.currentTarget.style.transform = 'none';
              }}
            >
              View My Work <FiArrowRight size={15} />
            </a>

            <a
              href="/resume.pdf"
              download
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'transparent',
                color: 'var(--text)',
                textDecoration: 'none',
                padding: '13px 28px',
                borderRadius: 12,
                fontSize: 14,
                fontWeight: 500,
                fontFamily: 'var(--font-body)',
                border: '1px solid var(--border)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(124,58,237,0.5)';
                e.currentTarget.style.background = 'rgba(124,58,237,0.05)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              Download CV
            </a>

            <a
              href="https://github.com/mahmudulhasanzb"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--text-3)',
                transition: 'color 0.2s',
                display: 'flex',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e =>
                (e.currentTarget.style.color = 'var(--text-3)')
              }
            >
              <FiGithub size={22} />
            </a>
            <a
              href="https://linkedin.com/in/mahmudulhasanzb"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--text-3)',
                transition: 'color 0.2s',
                display: 'flex',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e =>
                (e.currentTarget.style.color = 'var(--text-3)')
              }
            >
              <FiLinkedin size={22} />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{
            position: 'absolute',
            bottom: 40,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 6,
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              color: 'var(--text-3)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            scroll
          </span>
          <div
            style={{
              width: 1,
              height: 40,
              background:
                'linear-gradient(to bottom, var(--purple), transparent)',
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}

// ─── ABOUT ───────────────────────────────────────────────────────────────────
function About() {
  return (
    <section
      id="about"
      style={{ padding: '6rem 2rem', maxWidth: 1100, margin: '0 auto' }}
    >
      <motion.div {...fadeUp()}>
        <SectionLabel>// About me</SectionLabel>
        <SectionTitle>The person behind the code.</SectionTitle>
      </motion.div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          marginTop: '2.5rem',
          alignItems: 'start',
        }}
      >
        <motion.div {...fadeUp(0.1)}>
          <p
            style={{
              fontSize: 15,
              color: 'var(--text-2)',
              lineHeight: 1.85,
              marginBottom: 16,
            }}
          >
            {siteConfig.bio1}
          </p>
          <p style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.85 }}>
            {siteConfig.bio2}
          </p>

          {/* n8n callout */}
          <div
            style={{
              marginTop: 24,
              padding: '16px 20px',
              background: 'rgba(124,58,237,0.06)',
              border: '1px solid rgba(124,58,237,0.2)',
              borderRadius: 12,
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: 'var(--purple-light)',
                marginBottom: 6,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              Differentiator
            </p>
            <p
              style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.6 }}
            >
              I use{' '}
              <span style={{ color: 'var(--purple-light)', fontWeight: 500 }}>
                n8n
              </span>{' '}
              to build automation workflows — connecting APIs, triggering
              events, and eliminating repetitive tasks. A skill most devs don't
              have.
            </p>
          </div>
        </motion.div>

        <motion.div {...fadeUp(0.15)}>
          {/* Stats grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 12,
              marginBottom: 20,
            }}
          >
            {siteConfig.stats.map(({ value, label }) => (
              <div
                key={label}
                className="card-hover"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 12,
                  padding: '20px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: 32,
                    color: 'var(--text)',
                    marginBottom: 4,
                    background:
                      'linear-gradient(135deg, #fff, var(--purple-light))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {value}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 12,
                    color: 'var(--text-3)',
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
          {/* Quick info */}
          {[
            { label: 'Location', value: siteConfig.location },
            { label: 'Experience', value: 'Junior · < 1 year' },
            { label: 'Focus', value: '· MERN Stack' },
            { label: 'Status', value: '🟢 Open to work' },
          ].map(({ label, value }) => (
            <div
              key={label}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '10px 0',
                borderBottom: '1px solid var(--border)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  color: 'var(--text-3)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                {label}
              </span>
              <span
                style={{
                  fontSize: 13,
                  color: 'var(--text-2)',
                  fontWeight: 500,
                }}
              >
                {value}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── PROJECTS ────────────────────────────────────────────────────────────────
function Projects() {
  return (
    <section
      id="projects"
      style={{ padding: '6rem 2rem', maxWidth: 1100, margin: '0 auto' }}
    >
      <motion.div {...fadeUp()}>
        <SectionLabel>// Featured work</SectionLabel>
        <SectionTitle>Projects I'm proud of.</SectionTitle>
        <p
          style={{
            fontSize: 15,
            color: 'var(--text-2)',
            maxWidth: 480,
            lineHeight: 1.7,
            marginBottom: '3rem',
          }}
        >
          Two projects built with care. Each starts with a real problem and ends
          with a shipped product.
        </p>
      </motion.div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1.5rem',
        }}
      >
        {projects.map((project, i) => (
          <motion.div key={project.slug} {...fadeUp(i * 0.12)}>
            <div
              className="card-hover"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 20,
                overflow: 'hidden',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
              }}
            >
              {/* Color accent bar */}
              <div
                style={{
                  height: 3,
                  background: `linear-gradient(90deg, ${project.color}, transparent)`,
                }}
              />

              <div
                style={{
                  padding: '2rem',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    marginBottom: 16,
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 11,
                        color: 'var(--text-3)',
                        letterSpacing: '0.06em',
                      }}
                    >
                      0{i + 1}
                    </span>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        fontSize: 28,
                        color: 'var(--text)',
                        marginTop: 4,
                        lineHeight: 1.1,
                      }}
                    >
                      {project.title}
                    </h3>
                  </div>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      background: project.colorDim,
                      border: `1px solid ${project.color}30`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span style={{ fontSize: 18 }}>
                      {i === 0 ? '📚' : '🎨'}
                    </span>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: 14,
                    color: 'var(--text-2)',
                    lineHeight: 1.7,
                    marginBottom: 20,
                    flex: 1,
                  }}
                >
                  {project.tagline}
                </p>

                {/* Tech pills */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 6,
                    marginBottom: 24,
                  }}
                >
                  {project.tech.slice(0, 5).map(t => (
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

                {/* Links */}
                <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  <Link
                    href={`/projects/${project.slug}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      fontSize: 13,
                      fontWeight: 600,
                      color: 'var(--text)',
                      textDecoration: 'none',
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      padding: '8px 16px',
                      borderRadius: 8,
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = project.colorDim;
                      e.currentTarget.style.borderColor = `${project.color}50`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background =
                        'rgba(255,255,255,0.06)';
                      e.currentTarget.style.borderColor =
                        'rgba(255,255,255,0.1)';
                    }}
                  >
                    Case Study <FiArrowRight size={13} />
                  </Link>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: 'var(--text-3)',
                      transition: 'color 0.2s',
                      display: 'flex',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={e =>
                      (e.currentTarget.style.color = 'var(--text-3)')
                    }
                  >
                    <FiExternalLink size={16} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: 'var(--text-3)',
                      transition: 'color 0.2s',
                      display: 'flex',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={e =>
                      (e.currentTarget.style.color = 'var(--text-3)')
                    }
                  >
                    <FiGithub size={16} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ─── SKILLS ──────────────────────────────────────────────────────────────────
function Skills() {
  return (
    <section
      id="skills"
      style={{ padding: '6rem 2rem', maxWidth: 1100, margin: '0 auto' }}
    >
      <motion.div {...fadeUp()}>
        <SectionLabel>// Tech stack</SectionLabel>
        <SectionTitle>Tools I work with.</SectionTitle>
      </motion.div>

      <div style={{ marginTop: '2.5rem', display: 'grid', gap: '1rem' }}>
        {/* Frontend takes full width, others in grid */}
        {skillGroups.map((group, gi) => (
          <motion.div key={group.category} {...fadeUp(gi * 0.08)}>
            <div
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 16,
                padding: '1.5rem 1.75rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  marginBottom: 16,
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: group.color,
                    display: 'inline-block',
                    boxShadow: `0 0 8px ${group.color}`,
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    color: 'var(--text-3)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  {group.category}
                </span>
                {group.rare && (
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 10,
                      color: '#F59E0B',
                      background: 'rgba(245,158,11,0.1)',
                      border: '1px solid rgba(245,158,11,0.3)',
                      padding: '1px 8px',
                      borderRadius: 40,
                    }}
                  >
                    rare skill
                  </span>
                )}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.05 + si * 0.04 }}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 13,
                      fontWeight: 500,
                      padding: '7px 16px',
                      borderRadius: 40,
                      cursor: 'default',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: 'var(--text-2)',
                      transition: 'all 0.2s',
                    }}
                    whileHover={{
                      scale: 1.05,
                      borderColor: `${group.color}60`,
                      color: 'var(--text)',
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        {...fadeUp(0.3)}
        style={{
          marginTop: 16,
          padding: '12px 20px',
          background: 'var(--bg-subtle)',
          border: '1px solid var(--border)',
          borderRadius: 10,
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            color: 'var(--text-3)',
          }}
        >
          Always learning · Currently exploring:{' '}
          <span style={{ color: 'var(--purple-light)' }}>
            PostgreSQL · tRPC · Redis
          </span>
        </p>
      </motion.div>
    </section>
  );
}

// ─── JOURNEY ─────────────────────────────────────────────────────────────────
function Journey() {
  return (
    <section style={{ padding: '6rem 2rem', maxWidth: 1100, margin: '0 auto' }}>
      <motion.div {...fadeUp()}>
        <SectionLabel>// My path</SectionLabel>
        <SectionTitle>How I got here.</SectionTitle>
      </motion.div>

      <div
        style={{ position: 'relative', marginTop: '3rem', paddingLeft: '2rem' }}
      >
        {/* Vertical line */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: 1,
            background:
              'linear-gradient(to bottom, var(--purple), transparent)',
          }}
        />

        {journey.map((item, i) => (
          <motion.div
            key={item.phase}
            {...fadeUp(i * 0.1)}
            style={{
              position: 'relative',
              marginBottom: 36,
              paddingLeft: '1.5rem',
            }}
          >
            {/* Node dot */}
            <div
              style={{
                position: 'absolute',
                left: -28,
                top: 6,
                width: 10,
                height: 10,
                borderRadius: '50%',
                background: item.current ? 'var(--purple)' : 'var(--bg-card)',
                border: `2px solid ${item.current ? 'var(--purple)' : 'rgba(255,255,255,0.15)'}`,
                boxShadow: item.current
                  ? '0 0 12px rgba(124,58,237,0.7)'
                  : 'none',
              }}
            >
              {item.current && (
                <span
                  style={{
                    position: 'absolute',
                    inset: -4,
                    borderRadius: '50%',
                    border: '1px solid rgba(124,58,237,0.4)',
                    animation: 'ping 2s infinite',
                  }}
                />
              )}
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                marginBottom: 6,
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: 18,
                  color: 'var(--text)',
                }}
              >
                {item.phase}
              </h3>
              {item.current && (
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10,
                    color: 'var(--purple-light)',
                    background: 'rgba(124,58,237,0.1)',
                    border: '1px solid rgba(124,58,237,0.3)',
                    padding: '2px 8px',
                    borderRadius: 40,
                  }}
                >
                  current
                </span>
              )}
            </div>
            <p
              style={{
                fontSize: 14,
                color: 'var(--text-2)',
                lineHeight: 1.7,
                maxWidth: 520,
              }}
            >
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ─── BLOG PREVIEW ────────────────────────────────────────────────────────────
function BlogPreview() {
  return (
    <section style={{ padding: '6rem 2rem', maxWidth: 1100, margin: '0 auto' }}>
      <motion.div
        {...fadeUp()}
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          marginBottom: '2.5rem',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <div>
          <SectionLabel>// Writing</SectionLabel>
          <SectionTitle>From the blog.</SectionTitle>
        </div>
        <Link
          href="/blog"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            color: 'var(--purple-light)',
            textDecoration: 'none',
            transition: 'gap 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.gap = '10px')}
          onMouseLeave={e => (e.currentTarget.style.gap = '6px')}
        >
          View all posts <FiArrowRight size={13} />
        </Link>
      </motion.div>

      <motion.div {...fadeUp(0.1)}>
        <div
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 16,
            padding: '2.5rem',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: 'rgba(124,58,237,0.1)',
              border: '1px solid rgba(124,58,237,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px',
              fontSize: 22,
            }}
          >
            ✍️
          </div>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: 20,
              color: 'var(--text)',
              marginBottom: 8,
            }}
          >
            Posts coming soon.
          </p>
          <p style={{ fontSize: 14, color: 'var(--text-3)' }}>
            Writing about Book Buddy, Pix Vault, and lessons learned.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

// ─── CONTACT CTA ─────────────────────────────────────────────────────────────
function ContactCTA() {
  return (
    <section
      id="contact"
      style={{
        padding: '6rem 2rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          width: 600,
          height: 300,
          background:
            'radial-gradient(ellipse, rgba(124,58,237,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 640, margin: '0 auto', position: 'relative' }}>
        <motion.div {...fadeUp()}>
          <SectionLabel>// Get in touch</SectionLabel>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              marginBottom: 20,
            }}
          >
            Let's build{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #A78BFA, #7C3AED)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              something.
            </span>
          </h2>
          <p
            style={{
              fontSize: 16,
              color: 'var(--text-2)',
              lineHeight: 1.7,
              marginBottom: 36,
            }}
          >
            Open to full-time roles, freelance projects, and interesting
            collaborations. I reply within 24 hours.
          </p>

          <div
            style={{
              display: 'flex',
              gap: 12,
              justifyContent: 'center',
              flexWrap: 'wrap',
              alignItems: 'center',
              marginBottom: 32,
            }}
          >
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'var(--purple)',
                color: '#fff',
                textDecoration: 'none',
                padding: '14px 32px',
                borderRadius: 12,
                fontSize: 15,
                fontWeight: 600,
                boxShadow: '0 0 30px rgba(124,58,237,0.35)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow =
                  '0 0 50px rgba(124,58,237,0.5)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow =
                  '0 0 30px rgba(124,58,237,0.35)';
              }}
            >
              Send a message <FiArrowUpRight size={16} />
            </Link>
          </div>

          <div
            style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}
          >
            {[
              {
                href: `mailto:${siteConfig.email}`,
                icon: <FiMail size={18} />,
                label: siteConfig.email,
              },
              {
                href: siteConfig.github,
                icon: <FiGithub size={18} />,
                label: 'GitHub',
              },
              {
                href: siteConfig.linkedin,
                icon: <FiLinkedin size={18} />,
                label: 'LinkedIn',
              },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  fontSize: 13,
                  color: 'var(--text-3)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e =>
                  (e.currentTarget.style.color = 'var(--purple-light)')
                }
                onMouseLeave={e =>
                  (e.currentTarget.style.color = 'var(--text-3)')
                }
              >
                {icon} {label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <Hero />
      <div
        style={{
          height: 1,
          background:
            'linear-gradient(90deg, transparent, rgba(124,58,237,0.3), transparent)',
          maxWidth: 1100,
          margin: '0 auto',
        }}
      />
      <About />
      <div
        style={{
          height: 1,
          background:
            'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)',
          maxWidth: 1100,
          margin: '0 auto',
        }}
      />
      <Projects />
      <div
        style={{
          height: 1,
          background:
            'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)',
          maxWidth: 1100,
          margin: '0 auto',
        }}
      />
      <Skills />
      <div
        style={{
          height: 1,
          background:
            'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)',
          maxWidth: 1100,
          margin: '0 auto',
        }}
      />
      <Journey />
      <div
        style={{
          height: 1,
          background:
            'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)',
          maxWidth: 1100,
          margin: '0 auto',
        }}
      />
      <BlogPreview />
      <div
        style={{
          height: 1,
          background:
            'linear-gradient(90deg, transparent, rgba(124,58,237,0.3), transparent)',
          maxWidth: 1100,
          margin: '0 auto',
        }}
      />
      <ContactCTA />
    </>
  );
}
