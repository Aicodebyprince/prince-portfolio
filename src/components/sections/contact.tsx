
"use client";

import React, { useState, useRef } from 'react';
import SectionWrapper from '../section-wrapper';
import { contactInfo } from '@/lib/data';
import { Mail, Linkedin, Github, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

// Map contact data icon strings to Lucide components
const iconComponentMap: { [key: string]: React.ElementType } = {
    '📧': Mail,
    '💼': Linkedin,
    '🐙': Github,
};

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const ContactContent = ({ isVisible }: { isVisible?: boolean }) => {
    const [status, setStatus] = useState<FormStatus>('idle');
    const [errorMsg, setErrorMsg] = useState('');
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (status === 'sending') return;

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        const name = (formData.get('name') as string)?.trim();
        const email = (formData.get('email') as string)?.trim();
        const projectType = formData.get('projectType') as string;
        const message = (formData.get('message') as string)?.trim();
        const _hp = formData.get('_hp') as string; // honeypot

        // Client-side validation
        if (!name || name.length < 2) {
            setErrorMsg('Please enter your name.');
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            setErrorMsg('Please enter a valid email address.');
            return;
        }
        if (!projectType) {
            setErrorMsg('Please select a project type.');
            return;
        }
        if (!message || message.length < 10) {
            setErrorMsg('Please write a message of at least 10 characters.');
            return;
        }

        setErrorMsg('');
        setStatus('sending');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, projectType, message, _hp }),
            });

            const data = await res.json();

            if (!res.ok) {
                setErrorMsg(data.error || 'Something went wrong. Please try again.');
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
                return;
            }

            setStatus('success');
            form.reset();
            setTimeout(() => setStatus('idle'), 6000);
        } catch {
            setErrorMsg('Network error. Please check your connection and try again.');
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    if (!isVisible) return null;

    return (
        <div className="section-inner">
            {/* Heading */}
            <div className="section-heading-block">
                <span className="section-kicker">Get in Touch</span>
                <h2>Let&apos;s work on something real</h2>
                <p className="section-subtext">
                    Backend systems, workflow automation, dashboards, or AI tools — describe what you&apos;re building and I&apos;ll get back to you within 24 hours.
                </p>
            </div>

            {/* Two column grid */}
            <div className="grid md:grid-cols-2 gap-8">
                {/* Contact info card */}
                <div className="contact-info-card">
                    <span className="contact-card-label">Contact</span>
                    <h3 className="contact-card-title">Reach out directly</h3>

                    <div className="space-y-5" style={{ position: 'relative', zIndex: 1 }}>
                        {contactInfo.map((item, index) => {
                            const IconComponent = iconComponentMap[item.icon] || Mail;
                            return (
                                <div key={index} className="contact-info-item">
                                    <div className="contact-info-icon">
                                        <IconComponent aria-hidden="true" />
                                    </div>
                                    <div>
                                        <span className="contact-info-label">{item.label}</span>
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="contact-info-value"
                                        >
                                            {item.value}
                                        </a>
                                        <span className="contact-info-detail text-[var(--wt-teal-soft)]">
                                            {item.detail}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Availability note */}
                    <div className="contact-availability-note">
                        <span className="availability-dot" aria-hidden="true" />
                        <span>Open to backend roles and project collaborations</span>
                    </div>
                </div>

                {/* Contact form card */}
                <div className="contact-form-card">
                    <span className="contact-card-label">Message</span>
                    <h3 className="contact-card-title">Send a project brief</h3>

                    {/* Success state */}
                    {status === 'success' && (
                        <div className="contact-success-state" role="status" aria-live="polite">
                            <CheckCircle2 className="w-10 h-10 text-[var(--wt-teal)]" aria-hidden="true" />
                            <h4>Message sent.</h4>
                            <p>Thanks for reaching out. I&apos;ll be in touch within 24 hours.</p>
                        </div>
                    )}

                    {/* Form */}
                    {status !== 'success' && (
                        <form
                            className="space-y-5"
                            onSubmit={handleSubmit}
                            ref={formRef}
                            noValidate
                            style={{ position: 'relative', zIndex: 1 }}
                        >
                            {/* Honeypot — hidden from humans, bots fill it */}
                            <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}>
                                <label htmlFor="contact-hp">Leave this blank</label>
                                <input
                                    id="contact-hp"
                                    name="_hp"
                                    type="text"
                                    tabIndex={-1}
                                    autoComplete="off"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label
                                        htmlFor="contact-name"
                                        className="block text-[0.7rem] font-[850] uppercase tracking-[0.1em] mb-2 text-[var(--wt-muted)]"
                                    >
                                        Name <span className="text-[var(--wt-teal)]" aria-hidden="true">*</span>
                                    </label>
                                    <input
                                        id="contact-name"
                                        type="text"
                                        name="name"
                                        required
                                        autoComplete="name"
                                        className="form-input w-full rounded-xl text-white text-sm"
                                        disabled={status === 'sending'}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="contact-email"
                                        className="block text-[0.7rem] font-[850] uppercase tracking-[0.1em] mb-2 text-[var(--wt-muted)]"
                                    >
                                        Email <span className="text-[var(--wt-teal)]" aria-hidden="true">*</span>
                                    </label>
                                    <input
                                        id="contact-email"
                                        type="email"
                                        name="email"
                                        required
                                        autoComplete="email"
                                        className="form-input w-full rounded-xl text-white text-sm"
                                        disabled={status === 'sending'}
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="contact-project-type"
                                    className="block text-[0.7rem] font-[850] uppercase tracking-[0.1em] mb-2 text-[var(--wt-muted)]"
                                >
                                    Project type <span className="text-[var(--wt-teal)]" aria-hidden="true">*</span>
                                </label>
                                <select
                                    id="contact-project-type"
                                    name="projectType"
                                    required
                                    className="form-input w-full rounded-xl text-white text-sm"
                                    disabled={status === 'sending'}
                                >
                                    <option value="" className="text-black">Select type</option>
                                    <option value="backend-system" className="text-black">Backend / API System</option>
                                    <option value="workflow-automation" className="text-black">Workflow Automation</option>
                                    <option value="dashboard" className="text-black">Operational Dashboard</option>
                                    <option value="ai-tool" className="text-black">AI Tool</option>
                                    <option value="website" className="text-black">Business Website</option>
                                    <option value="other" className="text-black">Other</option>
                                </select>
                            </div>

                            <div>
                                <label
                                    htmlFor="contact-message"
                                    className="block text-[0.7rem] font-[850] uppercase tracking-[0.1em] mb-2 text-[var(--wt-muted)]"
                                >
                                    Message <span className="text-[var(--wt-teal)]" aria-hidden="true">*</span>
                                </label>
                                <textarea
                                    id="contact-message"
                                    rows={4}
                                    name="message"
                                    required
                                    placeholder="Describe what you're building and where you need help..."
                                    className="form-input w-full rounded-xl resize-none text-white text-sm"
                                    disabled={status === 'sending'}
                                />
                            </div>

                            {/* Error message */}
                            {(status === 'error' || errorMsg) && (
                                <div
                                    className="contact-error-state"
                                    role="alert"
                                    aria-live="assertive"
                                >
                                    <AlertCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                                    <span>{errorMsg || 'Something went wrong. Please try again.'}</span>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full btn-solve py-3.5 rounded-xl font-[800] text-sm relative overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed"
                                aria-busy={status === 'sending'}
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    {status === 'sending' && (
                                        <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                                    )}
                                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                                </span>
                            </button>

                            <p className="text-center text-[0.68rem] text-[var(--wt-muted)]">
                                Typically responding within 24 hours
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

const ContactSection = () => (
    <SectionWrapper id="contact" className="section-standard">
        <ContactContent />
    </SectionWrapper>
);

export default ContactSection;
