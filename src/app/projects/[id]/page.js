import { projects } from '@/lib/data'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { FiArrowLeft, FiGithub, FiExternalLink } from 'react-icons/fi'

export async function generateStaticParams() {
  return projects.map(p => ({ id: p.id }))
}

export async function generateMetadata({ params }) {
  const { id } = await params
  const p = projects.find(p => p.id === id)
  if (!p) return {}
  return { title: p.title, description: p.tagline }
}

export default async function ProjectPage({ params }) {
  const { id } = await params
  const project = projects.find(p => p.id === id)
  if (!project) notFound()

  const sections = [
    { num: '01', label: 'The Problem', content: project.problem },
    { num: '02', label: 'The Approach', content: project.approach },
    { num: '03', label: 'The Result', content: project.result },
    { num: '04', label: 'Challenges Faced', content: project.challenges },
    { num: '05', label: 'Future Plans', content: project.futurePlans },
  ]

  return (
    <div style={{ maxWidth: 860, margin: '0 auto', padding: '110px 2rem 6rem' }}>
      <Link href="/#projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--text-3)', textDecoration: 'none', fontSize: 12, marginBottom: '3rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
        <FiArrowLeft size={13} /> All Projects
      </Link>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: project.color, display: 'inline-block', boxShadow: `0 0 10px ${project.color}` }} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Case Study</span>
      </div>

      <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(3rem, 7vw, 5rem)', color: 'var(--text)', lineHeight: 1.0, marginBottom: 16, letterSpacing: '-0.02em' }}>{project.title}</h1>
      <p style={{ fontSize: 16, color: 'var(--text-2)', maxWidth: 560, lineHeight: 1.7, marginBottom: 24 }}>{project.description}</p>

      {/* Tech */}
      <div style={{ marginBottom: 16 }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 10 }}>Main Technology Stack</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {project.tech.map(t => (
            <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '4px 12px', borderRadius: 40, background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)', color: 'var(--text-3)' }}>{t}</span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
        <a href={project.live} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'var(--purple)', color: '#fff', textDecoration: 'none', padding: '11px 22px', borderRadius: 10, fontSize: 13, fontWeight: 600, boxShadow: '0 0 20px rgba(124,58,237,0.3)' }}>
          <FiExternalLink size={13} /> Live Demo
        </a>
        <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, border: '1px solid var(--border)', color: 'var(--text-2)', textDecoration: 'none', padding: '11px 22px', borderRadius: 10, fontSize: 13 }}>
          <FiGithub size={13} /> GitHub (Client)
        </a>
      </div>

      <div style={{ height: 1, background: `linear-gradient(90deg, ${project.color}50, transparent)`, marginBottom: '3.5rem' }} />

      {/* Case study sections */}
      <div style={{ display: 'grid', gap: '2.5rem' }}>
        {sections.map(({ num, label, content }) => (
          <div key={label}>
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
              <div style={{ minWidth: 40 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--purple-light)' }}>{num}</span>
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 20, color: 'var(--text)', marginBottom: 12 }}>{label}</h3>
                <p style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.85 }}>{content}</p>
              </div>
            </div>
            <div style={{ height: 1, background: 'var(--border)', marginTop: '2rem' }} />
          </div>
        ))}
      </div>

      <div style={{ marginTop: '3rem' }}>
        <Link href="/#projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--text-3)', textDecoration: 'none', fontSize: 12, fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
          <FiArrowLeft size={13} /> Back to projects
        </Link>
      </div>
    </div>
  )
}
