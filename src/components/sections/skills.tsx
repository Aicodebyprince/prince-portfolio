
"use client";

import React, { useState } from 'react';
import SectionWrapper from '../section-wrapper';
import { skills, technologies } from '@/lib/data';
import { Button } from '../ui/button';
import Link from 'next/link';
import { BrainCircuit, Code, Server, Workflow } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const skillCategories = [
    {
        id: 'backend',
        label: 'Backend',
        icon: Server,
        data: skills.backend,
        description: 'Server-side systems, data flows, and API design.',
    },
    {
        id: 'automation',
        label: 'Automation',
        icon: Workflow,
        data: skills.automation,
        description: 'Workflow scripts, macros, and process optimization tools.',
    },
    {
        id: 'ai',
        label: 'AI Tools',
        icon: BrainCircuit,
        data: skills.ai,
        description: 'Practical AI integration, prompt design, and workflow-connected AI features.',
    },
    {
        id: 'fullstack',
        label: 'Full-Stack',
        icon: Code,
        data: skills.fullstack,
        description: 'Frontend, backend, and database work across the full product stack.',
    },
];

interface SkillsContentProps {
    isVisible?: boolean;
}

const SkillsContent: React.FC<SkillsContentProps> = ({ isVisible = false }) => {
    const [activeTab, setActiveTab] = useState('backend');

    if (!isVisible) return null;

    const activeCategory = skillCategories.find(cat => cat.id === activeTab);
    const activeSkills = activeCategory?.data || [];

    return (
        <div className="section-inner">
            {/* Heading */}
            <div className="section-heading-block">
                <span className="section-kicker">Technical Depth</span>
                <h2>Tools built for real systems</h2>
                <p className="section-subtext">
                    Backend, automation, AI integration, and full-stack development — focused on practical execution.
                </p>
            </div>

            {/* Tab Pills */}
            <div className="skills-tab-bar">
                {skillCategories.map(cat => {
                    const Icon = cat.icon;
                    return (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className={cn('skills-tab', { active: activeTab === cat.id })}
                        >
                            <Icon />
                            {cat.label}
                        </button>
                    );
                })}
            </div>

            {/* Skills Panel */}
            <div className="skills-panel">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.22, ease: 'easeOut' }}
                    >
                        {activeCategory && (
                            <p className="section-subtext" style={{ textAlign: 'left', marginTop: 0, marginBottom: '20px', maxWidth: '100%' }}>
                                {activeCategory.description}
                            </p>
                        )}
                        <div className="skills-grid">
                            {activeSkills.map(skill => (
                                <div key={skill.name} className="skill-item">
                                    <span className="skill-item-dot" />
                                    <span>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Technology shelf */}
                <div className="skills-tech-shelf">
                    <span className="skills-tech-label">Primary Technologies</span>
                    <div className="flex flex-wrap gap-2">
                        {technologies.map(tech => (
                            <span key={tech} className="tech-tag px-3 py-1.5 rounded-full text-xs font-semibold">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="text-center mt-10">
                <Link href="/explore?tab=projects">
                    <Button className="btn-primary">
                        Explore All Projects
                    </Button>
                </Link>
            </div>
        </div>
    );
};

const SkillsSection = () => (
    <SectionWrapper id="skills" className="section-standard skills-section">
        <SkillsContent />
    </SectionWrapper>
);

export default SkillsSection;
