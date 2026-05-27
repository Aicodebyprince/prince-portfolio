
"use client";

import { cn } from "@/lib/utils";
import React, { useState, useEffect, useCallback } from 'react';
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle, SheetDescription } from "./ui/sheet";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "@/hooks/use-active-section";
import Image from "next/image";

const SECTION_IDS = ["home", "about", "skills", "services", "projects", "experience", "journey", "contact"];

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // Track a click-override so clicking nav feels instant, then IntersectionObserver takes over
    const [clickedSection, setClickedSection] = useState<string | null>(null);
    const activeSection = useActiveSection(SECTION_IDS);

    // The displayed active section: prefer click override for 800ms, then let observer take over
    const displayActive = clickedSection ?? activeSection;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Clear click override shortly after clicking (let observer take over)
    const clearClickOverride = useCallback(() => {
        const timer = setTimeout(() => {
            setClickedSection(null);
        }, 900);
        return () => clearTimeout(timer);
    }, []);

    const handleSmoothScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setClickedSection(targetId);
        clearClickOverride();
        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
        }
    }, [isMobileMenuOpen, clearClickOverride]);

    const navLinks = [
        { href: "home", label: "Home" },
        { href: "about", label: "About" },
        { href: "skills", label: "Skills" },
        { href: "services", label: "Services" },
        { href: "projects", label: "Projects" },
        { href: "experience", label: "Experience" },
        { href: "journey", label: "Journey" },
        { href: "contact", label: "Contact" },
    ];

    return (
        <nav
            className={cn("nav-bar fixed top-0 left-0 right-0 z-50", { scrolled })}
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
                <div className="flex items-center justify-between">
                    <a
                        href="/#home"
                        onClick={(e) => handleSmoothScroll(e, 'home')}
                        className="flex items-center space-x-2.5 cursor-pointer group"
                        aria-label="Prince Sherathiya — go to home"
                    >
                        <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-105">
                            <Image src="/logo.png" alt="WebTurnerAI logo" width={40} height={40} className="rounded-lg shadow-lg" />
                        </div>
                        <div>
                            <div className="font-bold text-base sm:text-lg leading-tight gradient-text">Prince Sherathiya</div>
                            <div className="text-[10px] text-gray-400 mono">Software Engineer</div>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1 bg-white/5 backdrop-blur-sm p-1 rounded-full border border-white/10" role="menubar">
                        {navLinks.map(link => (
                            <a
                                key={link.href}
                                href={`/#${link.href}`}
                                onClick={(e) => handleSmoothScroll(e, link.href)}
                                role="menuitem"
                                aria-current={displayActive === link.href ? 'page' : undefined}
                                className={cn(
                                    "nav-link text-[13px] font-medium transition-all duration-200 cursor-pointer px-3.5 py-1.5 rounded-full",
                                    displayActive === link.href
                                        ? "bg-white/10 text-white shadow-sm"
                                        : "text-gray-300 hover:text-white hover:bg-white/5"
                                )}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Navigation Trigger */}
                    <div className="md:hidden">
                        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="text-white hover:bg-white/10"
                                    aria-label="Open navigation menu"
                                >
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent
                                side="right"
                                className="w-full h-full bg-black/80 backdrop-blur-2xl text-white p-0 flex flex-col border-none"
                            >
                                <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
                                <SheetDescription className="sr-only">
                                    A list of links to navigate the portfolio site.
                                </SheetDescription>
                                <div className="absolute top-6 right-6 z-10">
                                    <SheetClose asChild>
                                        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-full w-10 h-10" aria-label="Close navigation menu">
                                            <X className="w-5 h-5" />
                                        </Button>
                                    </SheetClose>
                                </div>
                                <div className="flex-grow flex flex-col items-center justify-center space-y-4 text-center">
                                    {isMobileMenuOpen && navLinks.map((link, index) => (
                                        <a
                                            key={link.href}
                                            href={`/#${link.href}`}
                                            onClick={(e) => handleSmoothScroll(e, link.href)}
                                            aria-current={displayActive === link.href ? 'page' : undefined}
                                            className={cn(
                                                "text-3xl font-semibold transition-all duration-300 ease-in-out opacity-0",
                                                displayActive === link.href ? "gradient-text" : "hover:gradient-text",
                                                isMobileMenuOpen ? "animate-slide-in" : ""
                                            )}
                                            style={{ animationDelay: `${index * 100 + 300}ms` }}
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
