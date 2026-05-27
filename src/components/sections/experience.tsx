
"use client";

import React from 'react';
import SectionWrapper from '../section-wrapper';
import { experiences } from '@/lib/data';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

const ExperienceContent = ({ isVisible, onExploreClick }: { isVisible?: boolean; onExploreClick: () => void }) => {
    if (!isVisible) return null;

    return (
        <div className="section-inner">
            {/* Heading */}
            <div className="section-heading-block">
                <span className="section-kicker">Real Work, Real Results</span>
                <h2>Operational experience that matters</h2>
                <p className="section-subtext">
                    Automation, process improvement, and internal systems built during real engagements — not classroom exercises.
                </p>
            </div>

            {/* Experience cards */}
            <div className="space-y-6">
                {experiences.slice(0, 1).map((exp, index) => (
                    <div key={index} className="exp-card exp-section">
                        {/* Card header */}
                        <div className="exp-header">
                            <div>
                                <h3 className="exp-role">{exp.role}</h3>
                                <p className="exp-company">{exp.company}</p>
                            </div>
                            <span className="exp-period">{exp.period}</span>
                        </div>

                        {/* Achievements */}
                        <span className="exp-section-label">Key contributions</span>
                        <ul className="exp-achievements">
                            {exp.achievements.map((ach, i) => (
                                <li key={i} className="exp-achievement-item">
                                    <svg
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{ width: 15, height: 15, flexShrink: 0, marginTop: 3 }}
                                    >
                                        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                                        <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    {ach}
                                </li>
                            ))}
                        </ul>

                        {/* CTA */}
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <Button className="btn-solve" onClick={onExploreClick}>
                                View Full Work History <ArrowRight className="w-4 h-4 ml-1" />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const ExperienceSection = ({ onExploreClick }: { onExploreClick: () => void }) => (
    <SectionWrapper id="experience" className="section-standard">
        <ExperienceContent onExploreClick={onExploreClick} />
    </SectionWrapper>
);

export default ExperienceSection;
