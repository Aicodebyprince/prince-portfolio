
'use client';

import React from 'react';
import { FileText } from 'lucide-react';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay"
import type { CaseStudyBlock } from '@/lib/data';

type DetailBlock = CaseStudyBlock;

type ExperienceDetailsProps = {
    details: DetailBlock[];
};

const renderBlock = (block: DetailBlock, index: number) => {
    switch (block.type) {
        case 'heading':
            const Icon = block.icon ?? FileText;
            const headingClasses = {
                2: 'text-xl md:text-2xl font-bold solution-text mb-6 flex items-center gap-3',
                3: 'text-lg md:text-xl font-bold gradient-text mb-4 mt-8',
                4: 'text-md md:text-lg font-semibold text-gray-200 mb-3 mt-6',
            };
            const Tag = `h${block.level}` as keyof JSX.IntrinsicElements;
            return (
                <Tag key={index} className={headingClasses[block.level]}>
                   <Icon className="w-5 h-5" /> {block.text}
                </Tag>
            );
        case 'paragraph':
            return <p key={index} className="text-gray-300 leading-relaxed text-sm md:text-base mb-4">{block.text}</p>;
        case 'list':
            return (
                <ul key={index} className="space-y-3 text-gray-300 list-disc list-inside mb-6 pl-2">
                    {block.items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
            );
        case 'image_grid':
            return (
                 <div key={index} className="my-8 max-w-full sm:max-w-md mx-auto">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        plugins={[
                            Autoplay({
                                delay: 3000,
                            }),
                        ]}
                        className="w-full"
                    >
                        <CarouselContent>
                            {block.images.map((image, imgIndex) => (
                                <CarouselItem key={imgIndex}>
                                     <div className="glass-card rounded-2xl p-2">
                                         <Image 
                                            src={image.url}
                                            alt={image.caption || `Experience screenshot ${imgIndex}`}
                                            width={800}
                                            height={600}
                                            className="rounded-lg object-contain w-full h-full"
                                            data-ai-hint={image.dataAiHint}
                                        />
                                        {image.caption && <p className="text-xs text-center text-gray-400 mt-2">{image.caption}</p>}
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="text-white hover:bg-white/10 hover:text-white left-2" />
                        <CarouselNext className="text-white hover:bg-white/10 hover:text-white right-2" />
                    </Carousel>
                </div>
            );
        case 'image':
            return (
                <div key={index} className="my-8 max-w-full sm:max-w-md mx-auto">
                    <div className="glass-card rounded-2xl p-2">
                        <Image
                            src={block.url}
                            alt={block.caption || `Experience screenshot ${index}`}
                            width={800}
                            height={600}
                            className="rounded-lg object-contain w-full h-full"
                            data-ai-hint={block.dataAiHint}
                        />
                        {block.caption && <p className="text-xs text-center text-gray-400 mt-2">{block.caption}</p>}
                    </div>
                </div>
            );
        default:
            return null;
    }
}

const ExperienceDetails = ({ details }: ExperienceDetailsProps) => {
    return (
        <div className="static-glass-card rounded-2xl p-4 md:p-10">
            {details.map((block, index) => renderBlock(block, index))}
        </div>
    );
};

export default ExperienceDetails;
