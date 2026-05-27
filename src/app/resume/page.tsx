'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

const ResumePage = () => {
    const router = useRouter();

    return (
        <div className="bg-gray-100 font-sans">
            <div className="absolute top-4 left-4 z-20">
                <Button variant="ghost" onClick={() => router.push('/')} className="text-gray-800 hover:bg-gray-300 hover:text-gray-900">
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back to Portfolio
                </Button>
            </div>
            <div className="resume-container">
                <aside className="resume-sidebar">
                    <header className="resume-header">
                        <h1>PRINCE<br />SHERATHIYA</h1>
                    </header>

                    <section className="resume-section">
                        <h2 className="resume-section-title">Professional Summary</h2>
                        <p>
                            Software Engineer focused on backend systems, workflow automation, and practical AI-powered tools. I build systems that reduce manual work, improve visibility, and solve real operational problems.
                        </p>
                    </section>

                    <section className="resume-section">
                        <h2 className="resume-section-title">Core Focus</h2>
                        <p>
                            Backend development, REST APIs, workflow automation, operational dashboards, AI integration, full-stack product development, Git/GitHub, and practical problem solving.
                        </p>
                    </section>

                    <section className="resume-section">
                        <h2 className="resume-section-title">Experience</h2>
                        <h3>Process Improvement Intern</h3>
                        <p className="font-semibold text-sm mb-2">UNIVIA Management International | Nov 2024 - Jun 2025</p>
                        <p>Automated internal documentation workflows using Excel and Word macros, reducing an 8-hour manual process to 1 hour. Built a Client Engagement Tracker to manage multiple clients, track performance, and improve operational visibility.</p>
                    </section>

                    <section className="resume-section">
                        <h2 className="resume-section-title">Selected Work</h2>
                        <ul className="space-y-2">
                            <li><strong>Aura AI Task Manager:</strong> AI productivity system and multiple hackathon-winning project.</li>
                            <li><strong>Workflow Automation:</strong> Automated Excel and Word documentation processes, reducing 8 hours of manual work to 1 hour.</li>
                            <li><strong>Client Engagement Tracker:</strong> Internal system for better client visibility, tracking, and operational control.</li>
                        </ul>
                    </section>
                    
                    <section className="resume-section">
                        <h2 className="resume-section-title">Technical Skills</h2>
                        <ul>
                            <li>Python, Java, Node.js, TypeScript</li>
                            <li>React, Next.js, REST APIs, SQL</li>
                            <li>Firebase, Supabase, Vercel</li>
                            <li>Workflow automation, macros, scripting</li>
                            <li>AI integration, Genkit, Gemini</li>
                            <li>Git & GitHub</li>
                        </ul>
                    </section>
                </aside>
                
                <main className="resume-main">
                    <section className="resume-section">
                        <h2 className="resume-section-title">Academic History</h2>
                        <div className="entry">
                            <h3>MITHIBAI COLLEGE OF ARTS, CHAUHAN INSTITUTE OF SCIENCE & AMRUTBEN JIVANLAL COLLEGE OF COMMERCE AND ECONOMICS</h3>
                            <p className="sub-heading">Master of Science in Computer Science | 2025-2027 (Ongoing)</p>
                        </div>
                        <div className="entry">
                            <h3>REENA MEHTA COLLEGE OF ARTS, SCIENCE, COMMERCE AND MANAGEMENT STUDIES BHAYANDAR (W)</h3>
                            <p className="sub-heading">Bachelor of Science in Information Technology | 2022-2025</p>
                            <p>Completed undergraduate studies with a strong foundation in programming, software engineering, and system design. Actively participated in tech fests, coding competitions, and practical project-based learning.</p>
                        </div>
                        <div className="entry">
                            <h3>TP BHATIA COLLEGE, KANDIVALI (W)</h3>
                            <p className="sub-heading">Higher Secondary Certificate (HSC) in Science | 2020-2022</p>
                            <p>Specialized in Science subjects including Physics, Chemistry, and Mathematics.</p>
                        </div>
                    </section>
                    
                    <section className="resume-section">
                        <h2 className="resume-section-title">Projects Work</h2>
                        <div className="entry">
                            <h3>1. Aura AI Task Manager</h3>
                            <p>Built an AI-powered task management system focused on practical productivity workflows, real-time collaboration, and intelligent task support.</p>
                            <ul>
                                <li>Used Next.js, Firebase, Genkit, and Gemini.</li>
                                <li>Designed practical AI workflows for task creation, tracking, and productivity support.</li>
                                <li>Won multiple hackathons as a practical AI system.</li>
                            </ul>
                            <p className="mt-2"><strong>Impact:</strong> Demonstrates AI integration, full-stack development, and real workflow problem solving.</p>
                        </div>
                        <div className="entry">
                            <h3>2. Real-Time Auction Platform</h3>
                            <p>Built a real-time auction system that handled 13K+ read/write operations in 2 hours with focus on performance, reliability, and data consistency.</p>
                        </div>
                        <div className="entry">
                            <h3>3. College Management App</h3>
                            <p>Developed a role-based academic platform with real-time data flows for students, teachers, visitors, and admins.</p>
                        </div>
                    </section>

                    <section className="resume-section">
                        <h2 className="resume-section-title">Projects Working On</h2>
                        <div className="entry">
                            <h3>1. WebTurnerAI</h3>
                            <p>Building dashboards, workflow automation systems, AI-powered internal tools, and business websites for modern businesses.</p>
                            <ul>
                                <li>Focus: operational dashboards, automation, AI systems, and conversion-focused business websites.</li>
                                <li>Website: webturnerai.tech</li>
                            </ul>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default ResumePage;
