
'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import './circular-carousel.css';

type CarouselItem = {
  id: string;
  label: string;
  icon: React.ReactElement;
};

type CircularCarouselProps = {
  items: CarouselItem[];
  activeId: string;
  onItemClick: (id: string) => void;
};

const CircularCarousel = ({ items, activeId, onItemClick }: CircularCarouselProps) => {
  const [rotation, setRotation] = useState(0);

  const activeIndex = items.findIndex(item => item.id === activeId);

  useEffect(() => {
    if (activeIndex !== -1) {
      const angle = -activeIndex * (360 / items.length);
      setRotation(angle);
    }
  }, [activeId, activeIndex, items.length]);


  const handleItemClick = (id: string, index: number) => {
    onItemClick(id);
    const angle = -index * (360 / items.length);
    setRotation(angle);
  };

  const radius = 80; // in pixels
  const itemAngle = 360 / items.length;

  return (
    <div className="carousel-container">
      <div className="carousel-wheel" style={{ transform: `rotate(${rotation}deg)` }}>
        {items.map((item, index) => {
          const angle = itemAngle * index;
          const x = radius * Math.sin((angle * Math.PI) / 180);
          const y = radius * -Math.cos((angle * Math.PI) / 180);
          
          return (
            <div
              key={item.id}
              className={cn('carousel-item', { 'active': item.id === activeId })}
              style={{
                transform: `translate(${x}px, ${y}px) rotate(${-rotation}deg)`
              }}
              onClick={() => handleItemClick(item.id, index)}
            >
              <div className="item-icon">
                {React.cloneElement(item.icon, { className: 'w-5 h-5' })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="carousel-center-label">
        <p>{items.find(item => item.id === activeId)?.label}</p>
      </div>
    </div>
  );
};

export default CircularCarousel;
