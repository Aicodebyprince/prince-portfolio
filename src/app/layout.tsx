
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import ScrollProgress from '@/components/scroll-progress';
import { TransitionProvider } from '@/context/transition-context';
import TransitionScreen from '@/components/transition-screen';

const BASE_URL = 'https://princesherathiya.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Prince Sherathiya — Backend Engineer / Founder',
    template: '%s | Prince Sherathiya',
  },
  description:
    'Prince Sherathiya is a backend and full-stack software engineer and founder of WebTurnerAI. He builds operational dashboards, workflow automation systems, practical AI tools, and backend APIs for real business operations.',
  keywords: [
    'Prince Sherathiya',
    'WebTurnerAI',
    'backend engineer',
    'full-stack developer',
    'workflow automation',
    'operational dashboards',
    'AI tools developer',
    'Next.js developer',
    'software engineer portfolio',
    'Mumbai software engineer',
  ],
  authors: [{ name: 'Prince Sherathiya', url: BASE_URL }],
  creator: 'Prince Sherathiya',
  publisher: 'Prince Sherathiya',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'Prince Sherathiya — WebTurnerAI',
    title: 'Prince Sherathiya — Backend Engineer / Founder',
    description:
      'Backend systems, workflow automation, operational dashboards, and practical AI tools. Founder of WebTurnerAI.',
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Prince Sherathiya — Backend Engineer / Founder',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prince Sherathiya — Backend Engineer / Founder',
    description:
      'Backend systems, workflow automation, dashboards, and AI tools. Founder of WebTurnerAI.',
    images: [`${BASE_URL}/og-image.png`],
    creator: '@princesherathiya',
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Prince Sherathiya',
    url: BASE_URL,
    image: `${BASE_URL}/images/Prince sherathiya.png`,
    sameAs: [
      'https://www.linkedin.com/in/princesherathiya/',
      'https://github.com/Aicodebyprince',
    ],
    jobTitle: 'Software Engineer & Founder',
    worksFor: {
      '@type': 'Organization',
      name: 'WebTurnerAI',
      url: BASE_URL,
    },
    description:
      'Backend and full-stack engineer specializing in workflow automation, operational dashboards, and practical AI tools.',
    knowsAbout: [
      'Backend Systems',
      'REST APIs',
      'Workflow Automation',
      'Operational Dashboards',
      'AI Tools',
      'Next.js',
      'Python',
      'Firebase',
    ],
  };

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="canonical" href={BASE_URL} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body text-white bg-black">
        <TransitionProvider>
          <ScrollProgress />
          <TransitionScreen />
          <main>{children}</main>
          <Toaster />
        </TransitionProvider>
      </body>
    </html>
  );
}
