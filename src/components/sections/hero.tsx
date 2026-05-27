
"use client";

import React, { useEffect, useRef } from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import Image from 'next/image';

const HERO_PROOF = [
    {
        value: '8h -> 1h',
        label: 'Workflow reduced',
        detail: 'UNIVIA internal process automated with scripting and macros.',
    },
    {
        value: '13K+',
        label: 'Realtime operations',
        detail: 'Auction platform tested under heavy read/write activity.',
    },
    {
        value: '2+ Wins',
        label: 'Hackathons',
        detail: 'Aura AI Task Manager and practical AI workflow systems.',
    },
];

const HeroSection = ({ onExploreClick }: { onExploreClick: (tab: string) => void; }) => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const currentSectionRef = sectionRef.current;

        const handleMouseMove = (e: MouseEvent) => {
            const currentTarget = e.currentTarget as HTMLElement;
            if (currentTarget) {
                const rect = currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                currentTarget.style.setProperty("--mouse-x", `${x}px`);
                currentTarget.style.setProperty("--mouse-y", `${y}px`);
            }
        };

        if (currentSectionRef) {
            currentSectionRef.addEventListener("mousemove", handleMouseMove as EventListener);
        }

        return () => {
            if (currentSectionRef) {
                currentSectionRef.removeEventListener("mousemove", handleMouseMove as EventListener);
            }
        };
    }, []);

    return (
        <section 
            id="home" 
            ref={sectionRef} 
            className="hero-spotlight min-h-screen flex items-center px-4 sm:px-6 py-24 md:py-28 relative overflow-hidden section-fade visible"
        >
            <div className="hero-mesh" />
            <div className="hero-noise" />
            
            <div className="max-w-7xl mx-auto relative z-10 w-full">
                <div className="hero-layout">
                    <div className="hero-copy">
                        <div className="hero-kicker">
                            <span className="status-dot" />
                            Backend systems | Automation | Practical AI
                        </div>

                        <h1 className="hero-title">
                            <span>Backend systems.</span>
                            <span>Workflow automation.</span>
                            <span>Practical AI tools.</span>
                        </h1>

                        <p className="hero-lede">
                            <span>Prince Sherathiya</span> is a software engineer and WebTurnerAI founder building tools that cut manual work, improve visibility, and support real operations.
                        </p>

                        <div className="hero-actions">
                            <Button onClick={() => onExploreClick('projects')} className="btn-primary px-6 py-4 md:px-8 md:py-5 rounded-xl font-bold text-sm md:text-base relative overflow-hidden">
                                <span className="relative z-10">View Work</span>
                            </Button>
                            <Link href="/resume" passHref>
                                <Button className="btn-solve px-6 py-4 md:px-8 md:py-5 rounded-xl font-bold text-sm md:text-base relative overflow-hidden">
                                    <span className="relative z-10">Live Resume</span>
                                </Button>
                            </Link>
                            <Button onClick={() => onExploreClick('experience')} className="btn-quiet px-6 py-4 md:px-8 md:py-5 rounded-xl font-bold text-sm md:text-base">
                                Experience
                            </Button>
                        </div>

                        <div className="hero-proof-rack">
                            {HERO_PROOF.map(item => (
                                <div className="hero-proof-item" key={item.label}>
                                    <strong>{item.value}</strong>
                                    <span>{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="hero-visual" aria-label="Prince Sherathiya profile visual">
                        <div className="hero-visual-orbit" />
                        <div className="hero-visual-beam" />
                        <div className="hero-visual-topline">
                            <span>Founder @ WebTurnerAI</span>
                            <span>Open to backend roles</span>
                        </div>

                        <div className="system-portrait-wrap">
                            <div className="system-halo halo-outer" />
                            <div className="system-halo halo-middle" />
                            <div className="system-halo halo-inner" />
                            <div className="system-scan" />
                            <div className="system-grid" />

                            <div className="system-portrait-shell">
                                <div className="system-portrait-glow" />
                                <div className="system-portrait-frame">
                                    <Image
                                        src="/images/Prince sherathiya.png"
                                        alt="Prince Sherathiya"
                                        width={520}
                                        height={650}
                                        priority
                                        className="system-portrait-image"
                                    />
                                </div>
                            </div>

                            <div className="system-node node-one">
                                <span>Automation</span>
                                <small>workflow-first</small>
                            </div>
                            <div className="system-node node-two">
                                <span>Backend</span>
                                <small>systems focus</small>
                            </div>
                            <div className="system-node node-three">
                                <span>AI Tools</span>
                                <small>practical use</small>
                            </div>
                        </div>

                        <div className="hero-system-panel">
                            <div>
                                <span>Current focus</span>
                                <strong>Backend, automation, dashboards, AI systems</strong>
                            </div>
                            <div>
                                <span>Business side</span>
                                <strong>WebTurnerAI for real operations</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
