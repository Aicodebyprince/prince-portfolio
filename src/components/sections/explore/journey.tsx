
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { journeyData } from '@/lib/data';
import Link from 'next/link';

const JourneySectionExplore = () => {
    return (
        <section id="journey-explore">
             <div className="text-center mb-12 md:mb-16">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Academic & Tech Journey</h1>
                <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto">
                    Here’s a snapshot of my journey from school to MSc Computer Science, highlighting academic achievements, leadership roles, and the projects that shaped my skills in technology.
                </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
                {journeyData.map((item, index) => (
                    <div key={index} className="glass-card rounded-2xl p-6 md:p-8">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6">
                            <div className="flex items-center">
                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[var(--wt-gold)] via-[var(--wt-teal)] to-[var(--wt-gold-soft)] flex items-center justify-center text-black shadow-lg ring-4 md:ring-8 ring-black mr-4 md:mr-6">
                                    {React.cloneElement(item.icon, { size: 32 })}
                                </div>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold gradient-text">{item.college}</h3>
                                    <p className="text-base md:text-lg text-gray-300 font-semibold mt-1">{item.degree}</p>
                                    <p className="text-sm md:text-md font-semibold text-[var(--wt-teal)] mt-1">{item.period}</p>
                                </div>
                            </div>
                            <div className="w-full md:w-auto flex-shrink-0">
                                {item.path ? (
                                    <Link href={item.path}>
                                        <Button className="btn-solve w-full">
                                            Explore Journey →
                                        </Button>
                                    </Link>
                                ) : (
                                    <Button className="btn-solve w-full" disabled>
                                        Details Coming Soon
                                    </Button>
                                )}
                            </div>
                        </div>
                        <p className="text-sm text-gray-400 mt-4 md:mt-6 pl-0 md:pl-22">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default JourneySectionExplore;
