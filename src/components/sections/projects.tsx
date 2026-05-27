
"use client";

import React from 'react';
import SectionWrapper from '../section-wrapper';
import { projects } from '@/lib/data';
import { GitBranch, HelpingHand, BookOpen, ArrowRight, ExternalLink, Bot, FileQuestion, Leaf, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

const iconMap: { [key: string]: React.ElementType } = {
    college: GitBranch,
    vault: HelpingHand,
    library: BookOpen,
    chatbot: Bot,
    automation: FileQuestion,
    leaf: Leaf,
};

const ProjectsContent: React.FC<{ isVisible?: boolean; onExploreClick: () => void }> = ({ isVisible, onExploreClick }) => {
    if (!isVisible) return null;

    const featuredProjects = projects.filter(project =>
        ['aura-ai', 'ppt-automation', 'college-management-app'].includes(project.slug || '')
    );

    return (
        <div className="section-inner">
            {/* Heading */}
            <div className="section-heading-block">
                <span className="section-kicker">Work That Ships</span>
                <h2>AI tools, automation, and full-stack builds</h2>
                <p className="section-subtext">
                    Real projects with real outcomes — hackathon wins, production deployments, and measurable results.
                </p>
            </div>

            {/* Project cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredProjects.map((project, index) => {
                    const ProjectIcon = iconMap[project.icon];
                    return (
                        <div key={index} className="project-card-refined">
                            <div className="project-card-body">
                                {/* Icon + title row */}
                                <div className="project-card-icon-row">
                                    <div className="project-card-icon">
                                        {ProjectIcon && <ProjectIcon />}
                                    </div>
                                    <div>
                                        <p className="project-card-title">{project.title}</p>
                                        <p className="project-card-category">{project.category}</p>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="project-card-desc">{project.description}</p>

                                {/* Tech tags */}
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="tech-tag px-2.5 py-1 rounded-full text-xs font-semibold">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Stat */}
                                {project.stat && (
                                    <div className="project-card-stat">
                                        <CheckCircle2 />
                                        {project.stat}
                                    </div>
                                )}
                            </div>

                            {/* Card footer — primary CTA + secondary ghost links */}
                            <div className="project-card-footer">
                                {project.slug && (
                                    <Link href={`/project/${project.slug}`} passHref className="w-full">
                                        <Button className="w-full btn-solve">
                                            View Case Study <ArrowRight className="w-4 h-4 ml-1" />
                                        </Button>
                                    </Link>
                                )}
                                <div className="project-card-links">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1"
                                    >
                                        <Button
                                            variant="outline"
                                            className="w-full text-xs text-gray-400 border-white/10 hover:bg-white/5 hover:text-white hover:border-white/20"
                                        >
                                            GitHub <ExternalLink className="w-3 h-3 ml-1" />
                                        </Button>
                                    </a>
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1"
                                        >
                                            <Button
                                                variant="outline"
                                                className="w-full text-xs text-gray-400 border-white/10 hover:bg-white/5 hover:text-white hover:border-white/20"
                                            >
                                                Live Demo
                                            </Button>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="text-center mt-12">
                <Button className="btn-primary" onClick={onExploreClick}>
                    Explore All Projects
                </Button>
            </div>
        </div>
    );
};

const ProjectsSection = ({ onExploreClick }: { onExploreClick: () => void }) => (
    <SectionWrapper id="projects" className="section-standard">
        <ProjectsContent onExploreClick={onExploreClick} />
    </SectionWrapper>
);

export default ProjectsSection;
