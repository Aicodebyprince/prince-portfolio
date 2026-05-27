"use client";

import Image from "next/image";
import {
  Code2,
  Gauge,
  Layers3,
  Trophy,
  Workflow,
} from "lucide-react";
import SectionWrapper from "../section-wrapper";

const focusItems = [
  {
    icon: Code2,
    title: "Backend systems",
    text: "REST APIs, data flows, and product features.",
  },
  {
    icon: Workflow,
    title: "Workflow automation",
    text: "Scripts, macros, and internal tools.",
  },
  {
    icon: Layers3,
    title: "Operational dashboards",
    text: "Tracking systems for visibility and control.",
  },
  {
    icon: Gauge,
    title: "Practical AI tools",
    text: "AI features connected to real workflow value.",
  },
];

const proofItems = [
  { value: "8h -> 1h", label: "manual process reduced" },
  { value: "13K+", label: "realtime read/write ops" },
  { value: "2+ Wins", label: "hackathon results" },
];

const AboutSection = () => (
  <SectionWrapper id="about" className="about-section px-4 sm:px-6">
    <div className="about-inner">
      <div className="about-heading">
        <span className="about-kicker">About Prince</span>
        <h2>
          Backend systems, automation, and AI tools for real operations.
        </h2>
      </div>

      <div className="about-layout">
        <aside className="about-identity-card" aria-label="Prince Sherathiya profile summary">
          <div className="about-image-shell">
            <div className="about-image-glow" />
            <Image
              src="/images/Prince sherathiya.png"
              alt="Prince Sherathiya"
              fill
              className="about-image"
              sizes="(max-width: 768px) 82vw, 360px"
            />
          </div>

          <div className="about-identity-copy">
            <p>Prince Sherathiya</p>
            <span>Software Engineer | Founder @ WebTurnerAI</span>
          </div>

          <div className="about-identity-tags" aria-label="Current work areas">
            <span>Backend</span>
            <span>Automation</span>
            <span>AI systems</span>
          </div>

          <div className="about-proof-grid">
            {proofItems.map((item) => (
              <div key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </aside>

        <div className="about-content-panel">
          <div className="about-panel-top">
            <div className="about-panel-icon">
              <Trophy aria-hidden="true" />
            </div>
            <div>
              <span>Current direction</span>
              <h3>Building useful systems, not empty demos.</h3>
            </div>
          </div>

          <div className="about-copy">
            <p>
              I focus on backend systems and automation-heavy product work: reducing manual work,
              improving visibility, and building tools people actually use.
            </p>
            <p>
              At UNIVIA, I automated internal workflows that reduced an 8-hour process to 1 hour,
              and built systems for client tracking and operational control. Through WebTurnerAI,
              I am turning that same direction into dashboards, automation, AI tools, and business websites.
            </p>
          </div>

          <div className="about-focus-grid">
            {focusItems.map((item) => {
              const Icon = item.icon;
              return (
                <div className="about-focus-card" key={item.title}>
                  <Icon aria-hidden="true" />
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.text}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default AboutSection;
