
"use client";

import React from 'react';
import SectionWrapper from '../section-wrapper';
import { Button } from '../ui/button';
import { journeyData } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

const JourneyContent: React.FC<{ isVisible?: boolean; onExploreClick: () => void }> = ({ isVisible, onExploreClick }) => {
    if (!isVisible) return null;

    return (
        <div className="section-inner">
            {/* Heading */}
            <div className="section-heading-block">
                <span className="section-kicker">Education</span>
                <h2>Academic foundation behind the systems work</h2>
                <p className="section-subtext">
                    BSc IT to MSc Computer Science — building technical depth in backend systems, automation, and applied computer science.
                </p>
            </div>

            {/* Timeline */}
            <div className="journey-timeline">
                {/* Desktop horizontal line */}
                <div className="timeline-line hidden lg:block">
                    <div className="timeline-progress" />
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-0 lg:space-x-8 relative z-[2]">
                    {journeyData.map((item, index) => (
                        <article
                            key={index}
                            className="journey-card"
                            style={{ animationDelay: `${0.15 * (index + 1)}s` }}
                        >
                            <div className="achievement-badge" aria-hidden="true" />
                            <div className="card-icon-wrapper">
                                <div className="card-icon" aria-hidden="true">
                                    {React.cloneElement(item.icon, { size: 36 })}
                                </div>
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-base font-[850] text-white mb-1.5 leading-tight relative z-[2]">
                                    {item.college}
                                </h3>
                                <p className="text-sm text-gray-400 font-medium mb-4 relative z-[2]">
                                    {item.degree}
                                </p>
                                <span className="inline-flex items-center text-xs font-[850] text-[var(--wt-teal-soft)] relative z-[2] bg-[rgba(57,215,197,0.08)] px-3.5 py-1.5 rounded-full border border-[rgba(57,215,197,0.22)]">
                                    {item.period}
                                </span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            <div className="text-center mt-14">
                <Button className="btn-solve" onClick={onExploreClick}>
                    Full Academic Detail <ArrowRight className="w-4 h-4 ml-1.5" aria-hidden="true" />
                </Button>
            </div>
        </div>
    );
};

const JourneySection = ({ onExploreClick }: { onExploreClick: () => void }) => (
    <SectionWrapper id="journey" className="section-standard">
        <JourneyContent onExploreClick={onExploreClick} />
    </SectionWrapper>
);

export default JourneySection;
