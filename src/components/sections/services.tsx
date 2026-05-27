
"use client";

import React, { useState } from 'react';
import SectionWrapper from '../section-wrapper';
import { services } from '@/lib/data';
import { Button } from '../ui/button';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const ServicesContent = ({ isVisible, onExploreClick }: { isVisible?: boolean; onExploreClick: () => void }) => {
    const [selectedService, setSelectedService] = useState(services[0]);

    if (!isVisible) return null;

    return (
        <div className="section-inner">
            {/* Heading */}
            <div className="section-heading-block">
                <span className="section-kicker">What WebTurnerAI Builds</span>
                <h2>Practical systems for real operations</h2>
                <p className="section-subtext">
                    Backend logic, workflow automation, operational dashboards, and AI tools — built to reduce manual work and improve visibility.
                </p>
            </div>

            {/* Services layout */}
            <div className="md:grid md:grid-cols-3 md:gap-8">
                {/* Service list — left column on desktop */}
                <div className="md:col-span-1 mb-6 md:mb-0">
                    <div className="space-y-2">
                        {services.map(service => {
                            const Icon = service.icon;
                            const isSelected = selectedService.title === service.title;
                            return (
                                <div key={service.title}>
                                    <button
                                        onClick={() => setSelectedService(service)}
                                        className={cn(
                                            'w-full text-left px-4 py-3.5 rounded-xl flex items-center gap-3 transition-all duration-250',
                                            isSelected
                                                ? 'bg-[rgba(57,215,197,0.08)] border border-[rgba(57,215,197,0.22)] shadow-sm'
                                                : 'border border-transparent hover:bg-white/5 hover:border-white/8'
                                        )}
                                    >
                                        <div className={cn(
                                            'flex-shrink-0 w-9 h-9 rounded-xl grid place-items-center border transition-colors',
                                            isSelected
                                                ? 'bg-[rgba(57,215,197,0.12)] border-[rgba(57,215,197,0.28)] text-[var(--wt-teal)]'
                                                : 'bg-white/5 border-white/10 text-gray-400'
                                        )}>
                                            <Icon className="w-4 h-4" />
                                        </div>
                                        <span className={cn(
                                            'font-750 text-sm leading-tight',
                                            isSelected ? 'text-white' : 'text-gray-300'
                                        )}>
                                            {service.title}
                                        </span>
                                        {isSelected && (
                                            <ArrowRight className="w-3.5 h-3.5 text-[var(--wt-teal)] ml-auto flex-shrink-0" />
                                        )}
                                    </button>

                                    {/* Mobile: accordion panel */}
                                    <AnimatePresence>
                                        {isSelected && (
                                            <motion.div
                                                className="md:hidden overflow-hidden"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.35, ease: 'easeInOut' }}
                                            >
                                                <div className="mx-4 mt-2 mb-3 p-5 border border-white/08 rounded-xl bg-[rgba(3,8,12,0.62)]">
                                                    <p className="text-sm text-[rgba(235,241,247,0.82)] leading-relaxed mb-4">{selectedService.description}</p>
                                                    <ul className="space-y-2">
                                                        {selectedService.features.map((feature, i) => (
                                                            <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--wt-muted)]">
                                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--wt-teal)] flex-shrink-0" />
                                                                {feature}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Desktop detail panel — right column */}
                <div className="hidden md:block md:col-span-2">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedService.title}
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                            className="sticky top-24"
                        >
                            <div className="relative min-width-0 border border-white/10 rounded-[22px] bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 overflow-hidden"
                                style={{
                                    background: 'linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02)), rgba(3, 8, 12, 0.74)',
                                    boxShadow: '0 32px 90px rgba(0, 0, 0, 0.30), inset 0 1px 0 rgba(255,255,255,0.08)'
                                }}
                            >
                                {/* Ambient accent */}
                                <div style={{
                                    position: 'absolute', inset: 0, pointerEvents: 'none',
                                    background: 'radial-gradient(circle at 90% 8%, rgba(216,162,77,0.08), transparent 32%), linear-gradient(90deg, transparent, rgba(57,215,197,0.04), transparent)'
                                }} />

                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-5">
                                        <div className="w-11 h-11 rounded-xl border border-[rgba(57,215,197,0.22)] bg-[rgba(57,215,197,0.08)] grid place-items-center text-[var(--wt-teal)] flex-shrink-0">
                                            <selectedService.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <span className="block text-[0.66rem] font-[850] uppercase tracking-[0.14em] text-[var(--wt-muted)] mb-1">Service area</span>
                                            <h3 className="text-[1.18rem] font-[900] text-white leading-tight">{selectedService.title}</h3>
                                        </div>
                                    </div>

                                    <p className="text-sm text-[rgba(235,241,247,0.82)] leading-relaxed mb-7">
                                        {selectedService.description}
                                    </p>

                                    <span className="block text-[0.66rem] font-[850] uppercase tracking-[0.14em] text-[var(--wt-muted)] mb-3">
                                        What's included
                                    </span>
                                    <ul className="space-y-2.5">
                                        {selectedService.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-[rgba(235,241,247,0.78)]">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--wt-teal)] flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            <div className="text-center mt-12">
                <Button className="btn-primary" onClick={onExploreClick}>
                    Explore All Services
                </Button>
            </div>
        </div>
    );
};

const ServicesSection = ({ onExploreClick }: { onExploreClick: () => void }) => (
    <SectionWrapper id="services" className="section-standard">
        <ServicesContent onExploreClick={onExploreClick} />
    </SectionWrapper>
);

export default ServicesSection;
