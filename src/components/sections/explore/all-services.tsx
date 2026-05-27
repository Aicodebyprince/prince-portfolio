
'use client';

import React, { useState } from 'react';
import { services } from '@/lib/data';
import { CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';

const AllServicesSection = () => {
    const [selectedService, setSelectedService] = useState(services[0]);

    return (
        <section id="all-services">
            <div className="text-center mb-12 md:mb-16">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">What I Offer</h1>
                <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
                    From concept to deployment, I provide a range of services to bring your digital products to life.
                </p>
            </div>

            <div className="max-w-6xl mx-auto md:grid md:grid-cols-3 md:gap-10">
                {/* Services List (Left Column on Desktop) */}
                <div className="md:col-span-1 mb-8 md:mb-0">
                    <div className="space-y-3">
                        {services.map((service) => {
                            const Icon = service.icon;
                            const isSelected = selectedService.title === service.title;
                            return (
                                <div key={service.title}>
                                    <button
                                        onClick={() => setSelectedService(service)}
                                        className={cn(
                                            "w-full text-left p-4 rounded-lg flex items-center gap-4 transition-all duration-300",
                                            isSelected
                                                ? "bg-white/10 shadow-lg border border-white/10"
                                                : "hover:bg-white/5"
                                        )}
                                    >
                                        <div className={cn(
                                            "p-3 rounded-md transition-colors",
                                            isSelected ? "bg-accent/20 text-accent" : "bg-white/10 text-gray-300"
                                        )}>
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <span className={cn(
                                            "font-bold text-sm",
                                            isSelected ? "text-white" : "text-gray-300"
                                        )}>
                                            {service.title}
                                        </span>
                                    </button>
                                    {/* On mobile, show content directly below */}
                                    <AnimatePresence>
                                        {isSelected && (
                                            <motion.div
                                                className="md:hidden overflow-hidden"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                            >
                                                <div className="p-6 border-l-2 border-accent ml-6">
                                                    <p className="text-gray-300 text-sm mb-6">{selectedService.description}</p>
                                                    <div>
                                                        <h4 className="text-sm font-bold text-gray-200 mb-3">Key Features:</h4>
                                                        <ul className="space-y-2">
                                                            {selectedService.features.map((feature, i) => (
                                                                <li key={i} className="flex items-start text-sm text-gray-400">
                                                                    <CheckCircle className="w-4 h-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                                                                    {feature}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Service Details (Right Column on Desktop) */}
                <div className="hidden md:block md:col-span-2">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedService.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="glass-card rounded-2xl p-8 sticky top-24"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-white/10 p-4 rounded-lg text-accent">
                                    <selectedService.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold solution-text">{selectedService.title}</h3>
                            </div>
                            <p className="text-gray-300 mb-8">{selectedService.description}</p>
                            <div>
                                <h4 className="text-md font-bold text-gray-200 mb-4">Key Features:</h4>
                                <ul className="space-y-3">
                                    {selectedService.features.map((feature, i) => (
                                        <li key={i} className="flex items-start text-sm text-gray-300">
                                            <CheckCircle className="w-4 h-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default AllServicesSection;
