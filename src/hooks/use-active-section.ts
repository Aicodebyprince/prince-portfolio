
"use client";

import { useState, useEffect, useRef, useCallback } from 'react';

export const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || 'home');
  const observerRef = useRef<IntersectionObserver | null>(null);
  // Track which sections are currently intersecting and their ratios
  const intersectingMap = useRef<Map<string, number>>(new Map());

  const pickActive = useCallback(() => {
    if (intersectingMap.current.size === 0) return;

    // Sort by scroll position (top of element) to pick the topmost visible section
    const scrollY = window.scrollY;
    let bestId = sectionIds[0];
    let bestScore = -Infinity;

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const ratio = intersectingMap.current.get(id) ?? 0;
      if (ratio <= 0) return;

      // Score: higher ratio = better, and prefer section whose top is nearest the viewport center
      const viewMid = window.innerHeight / 2;
      const elMid = rect.top + rect.height / 2;
      const distToCenter = Math.abs(elMid - viewMid);
      const score = ratio * 1000 - distToCenter;

      if (score > bestScore) {
        bestScore = score;
        bestId = id;
      }
    });

    setActiveSection(bestId);
  }, [sectionIds]);

  useEffect(() => {
    // On mount set to first section
    setActiveSection(sectionIds[0] || 'home');

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            intersectingMap.current.set(entry.target.id, entry.intersectionRatio);
          } else {
            intersectingMap.current.delete(entry.target.id);
          }
        });
        pickActive();
      },
      {
        // Use a threshold array so we get fine-grained updates
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0],
        rootMargin: '-10% 0px -10% 0px',
      }
    );

    const currentObserver = observerRef.current;

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        currentObserver.observe(element);
      }
    });

    // Also handle scroll to update when sections change visibility
    const handleScroll = () => {
      pickActive();
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      currentObserver.disconnect();
      intersectingMap.current.clear();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds.join(',')]);

  return activeSection;
};
