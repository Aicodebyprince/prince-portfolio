import React from 'react';
import { GithubIcon, LinkedInIcon, MailIcon } from './icons';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="py-14 px-6 border-t border-white/10 relative z-10">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Brand block */}
                    <div className="flex items-center gap-4">
                        <div className="w-11 h-11 flex items-center justify-center flex-shrink-0">
                            <Image
                                src="/logo.png"
                                alt="Prince Sherathiya Logo"
                                width={44}
                                height={44}
                                className="rounded-xl shadow-lg"
                            />
                        </div>
                        <div>
                            <div className="footer-brand-name">Prince Sherathiya</div>
                            <div className="footer-brand-sub">
                                Software Engineer &nbsp;·&nbsp; Founder @&nbsp;
                                <Link
                                    href="https://webturnerai.tech"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-brand-link"
                                >
                                    WebTurnerAI
                                </Link>
                            </div>
                            <Link
                                href="https://webturnerai.tech"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-brand-link mt-0.5 block"
                            >
                                webturnerai.tech
                            </Link>
                        </div>
                    </div>

                    {/* Social icons */}
                    <div className="flex items-center gap-5">
                        <a
                            href="https://github.com/Aicodebyprince"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-white transition-colors duration-200"
                            aria-label="GitHub"
                        >
                            <GithubIcon className="w-5 h-5" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/princesherathiya/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-white transition-colors duration-200"
                            aria-label="LinkedIn"
                        >
                            <LinkedInIcon className="w-5 h-5" />
                        </a>
                        <a
                            href="mailto:princesher321@gmail.com"
                            className="text-gray-500 hover:text-white transition-colors duration-200"
                            aria-label="Email"
                        >
                            <MailIcon className="w-5 h-5" />
                        </a>
                    </div>

                    {/* Copyright */}
                    <div className="text-center md:text-right">
                        <p className="text-gray-500 text-xs font-medium">
                            © 2026 Prince Sherathiya. All rights reserved.
                        </p>
                        <p className="text-gray-600 text-[0.68rem] mt-1">
                            Backend systems · Automation · AI tools
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
