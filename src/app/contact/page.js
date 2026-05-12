'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  FiArrowLeft,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiFacebook,
  FiPhone,
  FiSend,
  FiCheck,
  FiMessageCircle,
} from 'react-icons/fi';
import { siteConfig } from '@/lib/data';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sent');
  };

  const inp = {
    width: '100%',
    padding: '12px 16px',
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderRadius: 10,
    color: 'var(--text)',
    fontSize: 14,
    fontFamily: 'var(--font-body)',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  return (
    <div
      style={{ maxWidth: 1000, margin: '0 auto', padding: '110px 2rem 6rem' }}
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
          // Contact
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
          Let's work
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #A78BFA, #7C3AED)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            together.
          </span>
        </h1>
        <p
          style={{
            fontSize: 15,
            color: 'var(--text-2)',
            maxWidth: 460,
            lineHeight: 1.7,
            marginBottom: '4rem',
          }}
        >
          Open to full-time roles, freelance, and interesting collaborations. I
          reply within 24 hours.
        </p>
      </motion.div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'flex-start',
        }}
        className="contact-grid"
      >
        <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr!important;}}`}</style>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {status === 'sent' ? (
            <div
              style={{
                background: 'rgba(34,197,94,0.08)',
                border: '1px solid rgba(34,197,94,0.25)',
                borderRadius: 20,
                padding: '3rem 2rem',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  background: 'rgba(34,197,94,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                }}
              >
                <FiCheck size={24} color="#22C55E" />
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 22,
                  color: 'var(--text)',
                  marginBottom: 8,
                }}
              >
                Message sent!
              </p>
              <p style={{ fontSize: 14, color: 'var(--text-2)' }}>
                I'll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ display: 'grid', gap: '1rem' }}
            >
              {[
                {
                  name: 'name',
                  label: 'Name',
                  placeholder: 'Your name',
                  type: 'text',
                },
                {
                  name: 'email',
                  label: 'Email',
                  placeholder: 'your@email.com',
                  type: 'email',
                },
                {
                  name: 'subject',
                  label: 'Subject',
                  placeholder: "What's this about?",
                  type: 'text',
                },
              ].map(({ name, label, placeholder, type }) => (
                <div key={name}>
                  <label
                    style={{
                      fontSize: 11,
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-3)',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: 6,
                    }}
                  >
                    {label}
                  </label>
                  <input
                    name={name}
                    type={type}
                    required
                    value={form[name]}
                    onChange={(e) =>
                      setForm({ ...form, [name]: e.target.value })
                    }
                    placeholder={placeholder}
                    style={inp}
                    onFocus={(e) =>
                      (e.target.style.borderColor = 'rgba(124,58,237,0.6)')
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = 'var(--border)')
                    }
                  />
                </div>
              ))}
              <div>
                <label
                  style={{
                    fontSize: 11,
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-3)',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: 6,
                  }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Tell me about your project..."
                  style={{ ...inp, resize: 'vertical' }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = 'rgba(124,58,237,0.6)')
                  }
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                />
              </div>
              <button
                type="submit"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  background: 'var(--purple)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 10,
                  padding: '14px 24px',
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: 'var(--font-body)',
                  boxShadow: '0 0 20px rgba(124,58,237,0.3)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow =
                    '0 0 35px rgba(124,58,237,0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow =
                    '0 0 20px rgba(124,58,237,0.3)';
                }}
              >
                Send message <FiSend size={14} />
              </button>
            </form>
          )}
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: 'var(--text-3)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: 20,
            }}
          >
            Or reach me directly
          </h3>
          <div
            style={{ display: 'grid', gap: '0.75rem', marginBottom: '1.5rem' }}
          >
            {[
              {
                icon: <FiMail size={16} />,
                label: 'Email',
                value: siteConfig.email,
                href: `mailto:${siteConfig.email}`,
              },
              {
                icon: <FiPhone size={16} />,
                label: 'Phone',
                value: siteConfig.phone,
                href: `tel:${siteConfig.phone}`,
              },
              {
                icon: <FiMessageCircle size={16} />,
                label: 'WhatsApp',
                value: siteConfig.phone,
                href: `https://wa.me/${siteConfig.whatsapp}`,
              },
              {
                icon: <FiGithub size={16} />,
                label: 'GitHub',
                value: 'github.com/mahmudulhasanzb',
                href: siteConfig.github,
              },
              {
                icon: <FiLinkedin size={16} />,
                label: 'LinkedIn',
                value: 'linkedin.com/in/mahmudulhasanzb',
                href: siteConfig.linkedin,
              },
              {
                icon: <FiTwitter size={16} />,
                label: 'Twitter',
                value: '@mahmudulhasanzb',
                href: siteConfig.twitter,
              },
              {
                icon: <FiFacebook size={16} />,
                label: 'Facebook',
                value: 'fb.com/mahmudulhasanzb',
                href: siteConfig.facebook,
              },
            ].map(({ icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '0.875rem 1.125rem',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 10,
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(124,58,237,0.4)';
                  e.currentTarget.style.transform = 'translateX(4px)';
                  e.currentTarget.style.background = 'rgba(124,58,237,0.04)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.background = 'var(--bg-card)';
                }}
              >
                <span style={{ color: 'var(--purple-light)' }}>{icon}</span>
                <div>
                  <p
                    style={{
                      fontSize: 10,
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-3)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      marginBottom: 1,
                    }}
                  >
                    {label}
                  </p>
                  <p
                    style={{
                      fontSize: 12,
                      color: 'var(--text-2)',
                      fontWeight: 500,
                    }}
                  >
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div
            style={{
              padding: '1rem 1.25rem',
              background: 'rgba(124,58,237,0.05)',
              border: '1px solid rgba(124,58,237,0.15)',
              borderRadius: 10,
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: 'var(--purple-light)',
                marginBottom: 5,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              Response time
            </p>
            <p style={{ fontSize: 13, color: 'var(--text-2)' }}>
              Typically within{' '}
              <span style={{ color: 'var(--text)', fontWeight: 500 }}>
                24 hours
              </span>
              . Email is fastest for urgent matters.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
