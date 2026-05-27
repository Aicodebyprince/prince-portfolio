

import { GraduationCap, School, Code, Layers, Paintbrush, Puzzle, UserPlus, MessageSquare, Bot, Eye, Users, Shield, User, Workflow, CheckCircle, Target, Lightbulb, Package, AlertTriangle, ImageIcon, Sparkles, FileQuestion, BadgeCheck, BookOpen, GitBranch, FileText, Landmark, Banknote, HelpingHand, Leaf, BrainCircuit, Wrench, Smartphone } from 'lucide-react';
import React from 'react';

export type Screenshot = {
    url: string;
    dataAiHint: string;
    caption?: string;
};

export type CaseStudyBlock = 
    | { type: 'heading'; level: 2 | 3 | 4; icon?: React.ElementType; iconColor?: string; text: string; }
    | { type: 'paragraph'; text: string; }
    | { type: 'list'; items: string[]; }
    | { type: 'image'; url: string; dataAiHint: string; caption?: string; }
    | { type: 'image_grid'; images: Screenshot[] };


export type ScreenshotsByRole = {
    role: 'visitors' | 'students' | 'teachers' | 'admins' | 'signup';
    title: string;
    description: string;
    screenshots: Screenshot[];
}

export type Project = {
    icon: string;
    title: string;
    description: string;
    category: string;
    shortTitle: string;
    shortDescription: string;
    githubUrl: string;
    liveUrl: string;
    tags: string[];
    stat: string;
    slug?: string;
    screenshotsByRole?: ScreenshotsByRole[];
    features?: string[];
    problem?: string;
    solution?: string;
    challenges?: string[];
    projectOverview?: string;
    goal?: string[];
    techStack?: { name: string; description: string }[];
    workflow?: { 
        description: string,
        breakdown: string[]
    };
    screenshots?: Screenshot[];
    conclusion?: string;
    futureImprovements?: string[];
    caseStudy?: CaseStudyBlock[];
};

export const services = [
    {
        title: "Backend Systems & APIs",
        description: "Building reliable backend systems, REST APIs, and data flows for products that need clean logic and stable execution.",
        icon: Layers,
        features: [
            "REST API design and integration.",
            "Authentication, database, and server-side feature logic.",
            "Clean data handling for dashboards and internal systems.",
            "Performance-aware development for real product usage.",
        ]
    },
    {
        title: "Workflow Automation",
        description: "Automating repetitive business workflows so teams save time, reduce manual errors, and get better operational visibility.",
        icon: Workflow,
        features: [
            "Excel, Word, scripting, and process automation.",
            "Manual workflow analysis and automation planning.",
            "Internal tools for tracking and reporting.",
            "Automation systems focused on measurable time savings.",
        ]
    },
    {
        title: "AI-Powered Internal Tools",
        description: "Creating practical AI tools that support real workflows, task management, search, recommendations, and business operations.",
        icon: Bot,
        features: [
            "AI task managers and productivity systems.",
            "AI-assisted search and recommendation flows.",
            "Prompt and workflow design for usable AI features.",
            "Integration with modern web apps and dashboards.",
        ]
    },
    {
        title: "Operational Dashboards",
        description: "Designing dashboards and tracking systems that help teams understand performance, clients, workflow status, and bottlenecks.",
        icon: Eye,
        features: [
            "Client and workflow tracking dashboards.",
            "Performance visibility for business operations.",
            "Data organization for faster decision-making.",
            "Clean interfaces built for repeated daily use.",
        ]
    }
];

export const skills = {
    backend: [
        { name: 'REST APIs & Backend Logic', level: 88 },
        { name: 'Python & Java', level: 86 },
        { name: 'SQL & Data Modeling', level: 82 },
    ],
    automation: [
        { name: 'Workflow Automation', level: 90 },
        { name: 'Excel & Word Macros', level: 85 },
        { name: 'Process Optimization', level: 88 },
    ],
    fullstack: [
        { name: 'React & Next.js', level: 86 },
        { name: 'TypeScript & Node.js', level: 82 },
        { name: 'Firebase & Supabase', level: 84 },
    ],
    ai: [
        { name: 'AI Integration', level: 86 },
        { name: 'Genkit & Gemini', level: 84 },
        { name: 'Prompted Workflow Design', level: 82 },
        { name: 'AI-Assisted Development', level: 90 },
    ]
};

export const technologies = [
    'Python', 'Java', 'Node.js', 'TypeScript', 'React', 'Next.js', 'REST APIs', 'SQL', 'Firebase', 'Supabase', 'Automation', 'AI Integration', 'Genkit', 'Gemini', 'Git', 'GitHub', 'Vercel'
];

export const projects: Project[] = [
    {
        icon: 'chatbot',
        title: 'Aura AI - Task Co-Pilot',
        slug: 'aura-ai',
        description: 'An intelligent task management application that transforms the student and teacher workflow into a collaborative partnership with AI.',
        category: 'AI / Full-Stack',
        shortTitle: 'Aura AI',
        shortDescription: 'AI-Powered Task Management',
        githubUrl: '#',
        liveUrl: 'https://aura-ai-task-manager.vercel.app/',
        tags: ['Genkit', 'Gemini', 'Next.js', 'Firebase', 'Tailwind'],
        stat: 'Intelligent Task Automation',
        caseStudy: [
            { type: 'heading', level: 2, icon: Lightbulb, text: 'Inspiration' },
            { type: 'paragraph', text: "The modern educational landscape is overwhelming. Students juggle multiple assignments, deadlines, and group projects, often leading to stress and burnout. Teachers, in turn, struggle to track individual student progress and manage collaborative work effectively. We were inspired to build a solution that acts as an intelligent partner for both students and educators, automating the administrative burdens of education so they can focus on what truly matters: learning and teaching, not just management." },
            
            { type: 'image_grid', images: [
                { url: '/images/Aura AI/Landing Page.png', dataAiHint: 'landing page', caption: 'The Aura AI Landing Page' },
                { url: '/images/Aura AI/Dashborad.png', dataAiHint: 'dashboard', caption: 'Main User Dashboard' },
                { url: '/images/Aura AI/Calendar.png', dataAiHint: 'calendar view', caption: 'Calendar and Scheduling' },
                { url: '/images/Aura AI/Analytics.png', dataAiHint: 'analytics charts', caption: 'Task Analytics' },
                { url: '/images/Aura AI/AI Features.png', dataAiHint: 'ai features', caption: 'AI-Powered Feature Showcase' },
                { url: '/images/Aura AI/landing Page 2.png', dataAiHint: 'landing page section', caption: 'Landing Page Details' }
            ]},

            { type: 'heading', level: 2, icon: Sparkles, text: 'What it does' },
            { type: 'paragraph', text: 'Aura AI is an intelligent task management application that transforms the student and teacher workflow into a collaborative partnership with AI. At its core is a conversational AI assistant, powered by Google\'s Gemini model.' },
            { type: 'heading', level: 3, icon: User, text: 'For Students' },
            { type: 'paragraph', text: 'A student can say, "Add a task to study for my calculus exam this Friday," and Aura AI will intelligently create the task with the correct details. They can ask, "What are my most urgent assignments?" and the AI will analyze their data to provide a prioritized, context-aware summary.' },
            { type: 'heading', level: 3, icon: Users, text: 'For Teachers' },
            { type: 'paragraph', text: 'A teacher can create a "Project Group" for their class, invite students, and assign tasks. They can monitor the progress of group projects in real-time, gaining insights into which groups are excelling and which may need support, all without micromanaging.' },

            { type: 'heading', level: 2, icon: Code, text: 'How we built it' },
            { type: 'paragraph', text: "Aura AI is built on a modern, scalable, and powerful technology stack, chosen for its performance and developer experience." },
            { type: 'list', items: [
                "**Frontend**: We used Next.js and React with the App Router and Server Components for optimal performance and a great user experience.",
                "**AI Framework**: We leveraged Genkit, an open-source AI framework from Google, to structure our AI logic and connect to the Gemini model.",
                "**AI Model**: The conversational agent is powered by Google AI (Gemini) for its state-of-the-art reasoning and function-calling capabilities.",
                "**Backend & Database**: We used Firebase for the backend, with Firestore as our real-time NoSQL database and Firebase Authentication for secure user management.",
                "**Styling**: The UI is styled with Tailwind CSS for a utility-first workflow, and we used ShadCN UI for a beautiful and accessible component library."
            ]},
            
            { type: 'heading', level: 2, icon: AlertTriangle, text: 'Challenges we ran into' },
            { type: 'paragraph', text: 'One of the biggest challenges was designing the AI conversational agent to be genuinely useful. It required significant prompt engineering to make the AI\'s responses context-aware and its function-calling capabilities reliable. Ensuring the AI could accurately parse natural language queries like "add a task for next Tuesday" into structured data (title, due date, priority) was a complex but rewarding problem to solve. Another challenge was managing real-time data synchronization across different users (students and teachers) in a group, which we solved using Firestore\'s real-time listeners.' },
            
            { type: 'heading', level: 2, icon: BadgeCheck, text: 'Accomplishments that we\'re proud of' },
            { type: 'paragraph', text: 'I am incredibly proud of creating a conversational AI that feels like a true co-pilot. The ability to manage your entire academic schedule through natural language is a powerful and intuitive experience. We\'re also proud of the seamless real-time collaboration features for group projects, which allow students and teachers to stay in sync without any extra effort. Finally, building a full-featured, aesthetically pleasing, and responsive application from the ground up in a short time frame is an accomplishment our entire team is proud of.' },
            
            { type: 'heading', level: 2, icon: BookOpen, text: 'What we learned' },
            { type: 'paragraph', text: 'This project was a deep dive into the practical application of large language models. We learned a great deal about prompt engineering, function calling, and how to structure AI-powered features in a real-world application using Genkit. We also gained valuable experience in building real-time, collaborative applications with Firebase and Next.js, and we honed our skills in creating responsive and accessible user interfaces with Tailwind CSS and ShadCN.' },
            
            { type: 'heading', level: 2, icon: Target, text: 'What\'s next for Aura AI' },
            { type: 'paragraph', text: 'The future for Aura AI is bright. Our next steps are focused on deeper integration with the educational ecosystem:' },
            { type: 'list', items: [
                "**Calendar Integration**: Automatically syncing Aura AI tasks with Google Calendar, Outlook, and other calendar platforms.",
                "**Proactive Notifications**: Sending intelligent reminders and suggestions to students' phones or emails based on their work patterns and upcoming deadlines.",
                "**Advanced Analytics for Educators**: Building a more robust dashboard for teachers to identify at-risk students based on their productivity trends and assignment completion rates.",
                "**AI-Powered Study Tools**: Integrating features like AI-generated flashcards, practice quizzes from notes, and resource recommendations to create a complete learning hub."
            ]}
        ]
    },
    {
        icon: 'vault',
        title: 'Helpful Vault',
        slug: 'helpful-vault',
        description: 'A personal productivity app designed as a single, reliable, and secure space for all your digital items—passwords, notes, schedules, and more.',
        category: 'Productivity Tool',
        shortTitle: 'Helpful Vault',
        shortDescription: 'AI-powered secure storage',
        githubUrl: 'https://github.com/Aicodebyprince/helpful_vault',
        liveUrl: 'https://helpfulvault.vercel.app',
        tags: ['Kiro', 'React.js', 'Vercel', 'AI-assisted'],
        stat: 'AI-assisted development',
        caseStudy: [
            { type: 'heading', level: 2, icon: Lightbulb, text: 'Inspiration' },
            { type: 'paragraph', text: 'Every day, students, developers, and professionals juggle dozens of small but important digital items — passwords, exam schedules, sticky notes, meeting reminders, and more. Usually, these get scattered across multiple apps: notes in one app, credentials in another, schedules on calendars, and tasks on sticky notes. This leads to lost time, stress, and inefficiency.' },
            { type: 'paragraph', text: 'We wanted to create something that acts as a single, reliable, and secure space—a personal "helper vault" that can be used by anyone, whether you’re a student preparing for exams, a developer storing your workflow snippets, or an office worker keeping track of important credentials and tasks. The idea was to design a tool that feels like a digital extension of your memory: always there, organized, and safe.' },
            { type: 'image_grid', images: [
                { url: '/images/Helpful vault/1.png', dataAiHint: 'dashboard', caption: 'Main Dashboard' },
                { url: '/images/Helpful vault/2.png', dataAiHint: 'credentials storage', caption: 'Secure Credential Vault' },
                { url: '/images/Helpful vault/3.png', dataAiHint: 'note taking', caption: 'Sticky Notes Interface' },
                { url: '/images/Helpful vault/4.png', dataAiHint: 'scheduler', caption: 'Exam and Task Scheduler' },
                { url: '/images/Helpful vault/5.png', dataAiHint: 'adding item', caption: 'Adding a New Vault Item' },
                { url: '/images/Helpful vault/6.png', dataAiHint: 'user profile', caption: 'User Profile Page' }
            ]},
            { type: 'heading', level: 2, icon: Sparkles, text: 'What it does' },
            { type: 'paragraph', text: 'Helpful Vault is a secure digital organizer designed to bring everything important into one place.' },
            { type: 'list', items: [
                '**Vault Cards**: Store and categorize essential items such as credentials, notes, and quick references in an easy-to-find card format.',
                '**Sticky Notes**: Create and manage notes or study reminders directly inside the vault.',
                '**Schedules**: Add and track upcoming exams, meetings, or tasks with a simple scheduler.',
                '**Authentication & Security**: Secure login and encrypted storage keep sensitive information safe.'
            ]},
            
            { type: 'heading', level: 2, icon: Code, text: 'How we built it' },
            { type: 'paragraph', text: 'We used a structured workflow, starting with a clear design and then building features step by step. Kiro played a big role:' },
            { type: 'list', items: [
                '**Spec-to-code** gave us the base app quickly.',
                '**Hooks** automated workflows for notes and vaults.',
                '**Steering** helped polish the UI to look clean and professional.'
            ]},

            { type: 'heading', level: 2, icon: AlertTriangle, text: 'Challenges we ran into' },
            { type: 'list', items: [
                'Designing a clean UI that feels professional but simple.',
                'Managing state and making sure the workflows feel seamless.',
                'Time constraints — building and deploying fast while keeping quality.'
            ]},

            { type: 'heading', level: 2, icon: BadgeCheck, text: 'Accomplishments that we\'re proud of' },
            { type: 'list', items: [
                'Built and deployed a fully working web app in a short time.',
                'Integrated multiple features into one easy-to-use dashboard.',
                'Created a polished design that feels professional and secure.'
            ]},

            { type: 'heading', level: 2, icon: BookOpen, text: 'What we learned' },
            { type: 'list', items: [
                'How to turn an idea into a working product quickly.',
                'The value of using tools like Kiro to save time and focus on experience.',
                'Balancing simplicity and security in productivity apps.'
            ]},

            { type: 'heading', level: 2, icon: Target, text: 'What\'s next for Helpful-Vault' },
            { type: 'list', items: [
                'Adding user authentication and encrypted storage for more security.',
                'Mobile-friendly version for quick access anywhere.',
                'Collaboration features so teams can share notes and vaults securely.'
            ]}
        ]
    },
    {
        icon: 'college',
        title: 'College Management App',
        slug: 'college-management-app',
        description: 'A comprehensive mobile platform designed to streamline communication and manage academic information within a college environment.',
        category: 'Full-Stack / Real-Time System',
        shortTitle: 'College App',
        shortDescription: 'Streamlined campus communication',
        githubUrl: 'https://github.com/Aicodebyprince/College-Management-App',
        liveUrl: '',
        tags: ['Firebase', 'Real-time DB', 'Role-Based Access', 'Full-Stack', 'UX'],
        stat: 'Full-Stack Campus Platform',
        problem: 'Traditional colleges often suffer from scattered information, poor communication between departments, and manual, time-consuming processes. Students and faculty struggle to keep track of schedules, announcements, and academic progress in one unified place.',
        solution: 'I developed a centralized role-based academic system using Flutter and Firebase that serves as a single source of truth for the campus. The app provides tailored access for students, teachers, visitors, and admins with real-time information and interactive features.',
        screenshotsByRole: [
            {
                role: 'visitors',
                title: 'For the Visitors',
                description: 'A welcoming and informative experience for prospective students and guests, showcasing campus life and simplifying inquiries.',
                screenshots: [
                    { url: '/images/Visitor 1.png', dataAiHint: 'mobile app screen' },
                    { url: '/images/Visitor 2.png', dataAiHint: 'mobile app screen' },
                    { url: '/images/Visitor 3.png', dataAiHint: 'mobile app screen' },
                    { url: '/images/Visitor 4.png', dataAiHint: 'mobile app screen' },
                    { url: '/images/Visitor 5.png', dataAiHint: 'mobile app screen' },
                    { url: '/images/Visitor 7.png', dataAiHint: 'mobile app screen' },
                ]
            },
            {
                role: 'signup',
                title: 'For the Signup',
                description: 'A simple and secure signup process to onboard new users to the platform.',
                screenshots: [
                    { url: '/images/Sign 2.jpg', dataAiHint: 'signup form' },
                    { url: '/images/Sign 1.jpg', dataAiHint: 'signup screen' },
                    { url: '/images/Sign 3.jpg', dataAiHint: 'verification screen' },
                    { url: '/images/Sign 4.jpg', dataAiHint: 'profile setup' },
                ]
            },
            {
                role: 'students',
                title: 'For the Students',
                description: 'A personalized dashboard that puts attendance, schedules, results, and communication right at their fingertips.',
                screenshots: [
                    { url: '/images/Student 1.png', dataAiHint: 'student dashboard' },
                    { url: '/images/Student 2.png', dataAiHint: 'student dashboard' },
                    { url: '/images/Student 3.png', dataAiHint: 'attendance tracker' },
                    { url: '/images/Student 4.png', dataAiHint: 'exam results' },
                    { url: '/images/Student 5.png', dataAiHint: 'class schedule' },
                    { url: '/images/Student 6.png', dataAiHint: 'chat interface' },
                    { url: '/images/Student 7.png', dataAiHint: 'student profile' },
                    { url: '/images/Student 8.png', dataAiHint: 'student profile' },
                ]
            },
            {
                role: 'teachers',
                title: 'For the Teachers',
                description: 'Powerful tools for educators to manage classes, track student progress, and communicate effectively.',
                screenshots: [
                    { url: '/images/Teacher 1.jpg', dataAiHint: 'teacher dashboard' },
                    { url: '/images/Teacher 2.jpg', dataAiHint: 'take attendance' },
                    { url: '/images/Teacher 3.jpg', dataAiHint: 'upload marks' },
                    { url: '/images/Teacher 4.jpg', dataAiHint: 'send notification' },
                ]
            },
            {
                role: 'admins',
                title: 'For the Admins',
                description: 'A comprehensive overview of campus operations with tools to manage users, send announcements, and monitor analytics.',
                screenshots: [
                    { url: '/images/Admin 1.jpg', dataAiHint: 'admin dashboard' },
                    { url: '/images/Admin 2.jpg', dataAiHint: 'admin dashboard' },
                    { url: '/images/Admin 3.jpg', dataAiHint: 'user management' },
                    { url: '/images/Admin 4.jpg', dataAiHint: 'analytics charts' },
                ]
            }
        ]
    },
    {
        icon: 'leaf',
        title: 'EcoReward',
        slug: 'ecoreward',
        description: 'A comprehensive platform that gamifies sustainable living by rewarding eco-friendly actions with points and achievements, leveraging AI and blockchain principles.',
        category: 'AI / Full-Stack / Blockchain',
        shortTitle: 'EcoReward',
        shortDescription: 'Gamified Sustainable Living',
        githubUrl: 'https://github.com/Aicodebyprince/EcoReward',
        liveUrl: 'https://ecoreward-seven.vercel.app',
        tags: ['Next.js', 'Supabase', 'Genkit', 'Tailwind', 'Ethers.js'],
        stat: 'Gamified Eco-Action Platform',
        caseStudy: [
            { type: 'heading', level: 2, icon: Lightbulb, text: 'Inspiration' },
            { type: 'paragraph', text: "Our inspiration for EcoReward came from a shared sense of urgency about the climate crisis and a common feeling of helplessness. Many people want to contribute to a more sustainable future but feel that their individual actions are just a drop in the ocean. We wanted to build a platform that directly challenges this notion by making the impact of individual eco-friendly actions visible, tangible, and rewarding. By gamifying sustainability and leveraging the transparency of blockchain, we aim to transform eco-consciousness into a powerful, collective movement where every action counts." },
            { type: 'image_grid', images: [
                { url: '/images/ecoreward/Eco 1.png', dataAiHint: 'dashboard', caption: 'Dashboard' },
                { url: '/images/ecoreward/Eco 2.png', dataAiHint: 'challenges', caption: 'Challenges' },
                { url: '/images/ecoreward/Eco 3.png', dataAiHint: 'leaderboard', caption: 'Leaderboard' },
                { url: '/images/ecoreward/Eco 4.png', dataAiHint: 'submit proof', caption: 'Submit Proof' },
                { url: '/images/ecoreward/Eco 5.png', dataAiHint: 'profile page', caption: 'Profile Page' },
                { url: '/images/ecoreward/Eco 6.png', dataAiHint: 'admin verification', caption: 'Admin Verification' },
                { url: '/images/ecoreward/Eco 7.png', dataAiHint: 'ai coach', caption: 'AI Coach' },
                { url: '/images/ecoreward/Eco 8.png', dataAiHint: 'wallet connection', caption: 'Wallet Connection' },
            ]},
            { type: 'heading', level: 2, icon: Sparkles, text: 'What it does' },
            { type: 'paragraph', text: 'EcoReward is a comprehensive platform that gamifies sustainable living.' },
            { type: 'heading', level: 3, icon: User, text: 'For Users' },
            { type: 'paragraph', text: 'Users can join a global community, choose from a list of "Eco-Challenges" (like recycling, using public transport, or having a plant-based meal), and submit photo proof of their actions. Our AI-powered system helps guide them with personalized suggestions for their next eco-task. As their submissions are approved, they earn "Green Points" (GP), unlock achievements, and climb a global leaderboard, visualizing their direct impact on CO₂ reduction. The platform also includes a feature to connect a MetaMask wallet, preparing for on-chain rewards.' },
            { type: 'heading', level: 3, icon: Shield, text: 'For Admins' },
            { type: 'paragraph', text: 'A secure, password-protected admin dashboard allows for the verification of user submissions. Admins can review photo evidence, approve or reject submissions, and provide direct feedback to users, ensuring the integrity of the points system. They can also manually award special badges to deserving users.' },

            { type: 'heading', level: 2, icon: Code, text: 'How we built it' },
            { type: 'paragraph', text: "We built EcoReward on a modern, robust, and scalable tech stack:" },
            { type: 'list', items: [
                "**Framework**: Next.js (App Router) for a fast, server-rendered React application.",
                "**Backend & Database**: Supabase for authentication, user data storage, and object storage for image proofs. We utilized both client-side and service-role server clients for secure data management.",
                "**Styling**: Tailwind CSS with ShadCN UI for a sleek, professional, and fully responsive user interface. The design system is built for a dark mode aesthetic, providing a premium feel.",
                "**Generative AI**: Google's Gemini model via Genkit to create a personalized \"AI Climate Coach\" that suggests the next best eco-action for users based on their completed tasks, making the experience more engaging and effective.",
                "**Blockchain Integration**: Ethers.js is integrated for future-ready wallet connectivity, paving the way for Green Points to become on-chain assets."
            ]},
            
            { type: 'heading', level: 2, icon: AlertTriangle, text: 'Challenges we ran into' },
            { type: 'paragraph', text: 'One of the biggest challenges was designing a secure and scalable admin verification system. We initially had a simple admin route, but it was not properly secured, leading to redirect loops and access issues. We overcame this by implementing a robust, multi-factor admin authentication flow that requires both a specific admin email and a unique password, combined with server-side checks and proper page routing to ensure only the designated administrator can access the verification dashboard. Another challenge was making the AI suggestions relevant and non-repetitive, which we solved by carefully crafting the prompt for the Gemini model to analyze a user\'s history and select a genuinely new and appropriate task.' },
            
            { type: 'heading', level: 2, icon: BadgeCheck, text: 'Accomplishments that we\'re proud of' },
            { type: 'paragraph', text: 'We are incredibly proud of building a full-stack application that seamlessly integrates user authentication, data management, AI, and blockchain principles into a single, cohesive platform. The gamified dashboard, with its real-time updates and visual achievements, is a highlight we believe makes sustainability feel rewarding and fun. Creating a secure, dual-purpose authentication system that routes regular users to their dashboard and the admin to a separate management panel was a significant accomplishment that ensures the platform\'s integrity.' },
            
            { type: 'heading', level: 2, icon: BookOpen, text: 'What we learned' },
            { type: 'paragraph', text: 'This project was a deep dive into full-stack development with Next.js and Supabase. We learned how to manage complex user roles and permissions, securely handle user-generated content, and architect a scalable serverless backend. A key takeaway was the importance of state management in the React ecosystem, especially when dealing with authentication and conditional routing, to prevent issues like infinite loading screens. Furthermore, integrating Genkit and the Gemini API taught us how to leverage the power of large language models to create truly personalized and dynamic user experiences.' },
            
            { type: 'heading', level: 2, icon: Target, text: 'What\'s next for EcoReward' },
            { type: 'paragraph', text: 'The future of EcoReward is bright. Our immediate next step is to fully implement the on-chain functionality, allowing users to mint their Green Points as tokens on a low-emission blockchain (like Polygon). We also plan to expand our Eco-Challenges, introduce team-based competitions, and partner with eco-friendly brands to offer real-world rewards for Green Points. We envision EcoReward becoming a central hub for a new generation of "Eco Warriors," empowering millions to take collective action against climate change.' }
        ]
    },
    {
        icon: 'automation',
        title: 'PPT Automation for CMMI Kickoff',
        slug: 'ppt-automation',
        description: 'A web-based automated presentation generator that creates structured, professional CMMI kickoff decks.',
        category: 'Web App / Automation',
        shortTitle: 'PPT Automation',
        shortDescription: 'Automated CMMI Kickoff Decks',
        githubUrl: '#',
        liveUrl: 'https://pptautomation-rho.vercel.app',
        tags: ['Next.js', 'Vercel', 'Automation', 'Productivity'],
        stat: 'Reduced prep time by 75%',
        caseStudy: [
            { type: 'heading', level: 2, icon: FileQuestion, text: 'Background' },
            { type: 'paragraph', text: 'CMMI (Capability Maturity Model Integration) is widely used by organizations to improve processes and achieve higher maturity levels. The kickoff meeting is the most critical step—it sets direction, defines roles, aligns teams, and builds confidence with stakeholders.' },
            { type: 'paragraph', text: 'Traditionally, preparing kickoff presentations is:' },
            { type: 'list', items: [
                'Time-consuming – Teams create slides manually for every project.',
                'Inconsistent – Different formats lead to missing agenda points.',
                'Error-prone – Last-minute edits reduce professionalism.'
            ]},
            { type: 'paragraph', text: 'There was a clear need for a standardized, automated solution to ensure every kickoff is structured, professional, and efficient.'},
            { type: 'heading', level: 2, icon: Target, text: 'The Challenge' },
            { type: 'list', items: [
                'Manual slide preparation wasted 3–4 hours per project.',
                'Teams often forgot critical sections like Roles, Next Steps, or Communication.',
                'Lack of consistency created confusion across different projects.',
                'Clients perceived unprofessional and misaligned presentations.'
            ]},
            { type: 'heading', level: 2, icon: Lightbulb, text: 'The Solution – PPT Automation Web App' },
            { type: 'paragraph', text: 'I designed and built a web-based automated presentation generator that creates structured, professional CMMI kickoff decks.' },
            { type: 'heading', level: 3, icon: Sparkles, text: 'Key Features:' },
            { type: 'list', items: [
                'Pre-defined agenda structure: Scope, Practice Areas, Roles, Communication, Next Steps, Q&A.',
                'Reusable template for multiple clients/projects.',
                'One-click generation of slides—no need to start from scratch.',
                'Clean, professional design with consistency in formatting and flow.',
                'Scalable – adaptable to Agile, Standard, or Consulting approaches.'
            ]},
            { type: 'heading', level: 2, icon: User, text: 'My Role & Skills Used' },
            { type: 'list', items: [
                'Problem Analysis → Identified inefficiencies in kickoff preparation.',
                'UI/UX Design → Created a minimal, structured layout for clarity.',
                'Full-Stack Development → Built on Next.js & Vercel for fast, accessible deployment.',
                'Automation & Productivity → Reduced repetitive manual work with automation logic.'
            ]},
            { type: 'heading', level: 2, icon: BadgeCheck, text: 'Impact & Results' },
            { type: 'list', items: [
                '75% time saved: From 3–4 hours of slide creation to under 1 hour.',
                '100% consistency: Every kickoff covers all critical sections.',
                'Professional client experience: Cleaner, standardized decks improved trust.',
                'Scalable adoption: Can be reused across multiple companies and projects.'
            ]},
             { type: 'heading', level: 2, icon: CheckCircle, text: 'Why It Matters' },
            { type: 'paragraph', text: 'This project shows my ability to:' },
            { type: 'list', items: [
                'Identify real-world inefficiencies in corporate workflows.',
                'Design and build practical automation tools.',
                'Deliver solutions that combine technical excellence with business impact.'
            ]},
            { type: 'paragraph', text: 'It’s not just a template—it’s a strategic enabler for organizations running CMMI or structured consulting programs.'}
        ]
    },
    {
        icon: 'library',
        title: 'AI Library Book Recommender',
        description: 'An internal AI tool to suggest relevant books and chapters to employees based on keywords, improving knowledge access within limited time.',
        category: 'Internal Tool',
        shortTitle: 'Book Recommender',
        shortDescription: 'AI-powered book suggestions',
        githubUrl: 'https://github.com/Aicodebyprince',
        liveUrl: '',
        tags: ['AI', 'Automation', 'Internal Tool'],
        stat: 'Reduced manual work by 8 hours',
        slug: 'library-recommender',
    },
    {
        icon: 'code',
        title: 'Personal Portfolio Website',
        description: 'A dynamic, responsive portfolio website built with Next.js, React, and Tailwind CSS to showcase my projects, skills, and journey.',
        category: 'Web App',
        shortTitle: 'Portfolio',
        shortDescription: 'This website!',
        githubUrl: 'https://github.com/Aicodebyprince',
        liveUrl: '#',
        tags: ['Next.js', 'React', 'TailwindCSS'],
        stat: 'Interactive & Responsive Design',
        slug: 'portfolio-website',
    },
    {
        icon: 'chart-bar',
        title: 'E-commerce Dashboard UI',
        description: 'A UI concept for an e-commerce dashboard, designed to provide sellers with at-a-glance analytics on sales, inventory, and customer engagement.',
        category: 'UI/UX Design',
        shortTitle: 'E-commerce UI',
        shortDescription: 'Analytics dashboard concept',
        githubUrl: 'https://github.com/Aicodebyprince',
        liveUrl: '',
        tags: ['Figma', 'UI/UX', 'Data Visualization'],
        stat: 'Design-driven development',
        slug: 'ecommerce-dashboard',
    },
];

export const designTemplates = [
  {
    title: "Skill Portal - Community Platform",
    description: "A community-driven platform for students and recruiters to showcase skills, participate in tournaments, and build resumes.",
    tags: ["Figma", "Community", "EdTech"],
    imageUrl: "/images/Design.png",
    dataAiHint: "community platform",
    link: "https://skill-portal-99640639.figma.site/"
  },
  {
    title: "Career Guide - SIH Project",
    description: "A design concept for the Smart India Hackathon (SIH) focused on providing students with personalized career guidance and resources.",
    tags: ["Figma", "SIH", "EdTech", "Career"],
    imageUrl: "/images/Design2.png",
    dataAiHint: "career guidance",
    link: "https://grow-slide-13304610.figma.site/"
  },
  {
    title: "Techfolio - Community Platform",
    description: "A community-driven platform for students and recruiters to showcase skills, participate in tournaments, and build resumes.",
    tags: ["Next.js", "Community", "EdTech"],
    imageUrl: "/images/22.png",
    dataAiHint: "community platform web",
    link: "https://soft-lamington-6b1166.netlify.app/"
  }
];

export type Experience = {
    role: string;
    company: string;
    slug: string;
    period: string;
    path: string;
    achievements: string[];
    details: CaseStudyBlock[];
};


export const experiences: Experience[] = [
    {
        role: 'Process Improvement Intern',
        company: 'UNIVIA Management International',
        slug: 'univia-management-international',
        period: 'Nov 2024 - Jun 2025',
        path: '/experience/univia-management-international',
        achievements: [
            'Automated documentation workflows using Excel and Word macros, reducing an 8-hour manual process to 1 hour.',
            'Built a Client Engagement Tracker to manage multiple clients, track performance, and improve operational visibility.',
            'Worked on internal workflow optimization, documentation quality, and process visibility for business operations.',
        ],
        details: [
            { type: 'heading', level: 2, icon: Workflow, text: 'Workflow Automation' },
            { type: 'paragraph', text: 'Automated internal documentation workflows using Excel and Word macros, reducing a repetitive 8-hour process to nearly 1 hour while improving consistency and reducing manual effort.' },
            { type: 'heading', level: 2, icon: Eye, text: 'Client Engagement Tracker' },
            { type: 'paragraph', text: 'Built a centralized tracker to manage multiple clients, monitor performance, and improve operational visibility across ongoing work.' },
            { type: 'heading', level: 2, icon: FileText, text: 'Documentation & Process Improvement' },
            { type: 'paragraph', text: 'Worked on documentation quality, process organization, and workflow optimization for internal operations.' },
            { type: 'heading', level: 2, icon: Banknote, text: 'Recognition' },
            { type: 'paragraph', text: 'Received recognition for proactive contribution, workflow ownership, and practical automation work.' },
            { type: 'image_grid', images: [
                { url: '/images/Experience/Kudos 1.png', dataAiHint: 'certificate award', caption: 'Certificate of Appreciation' },
                { url: '/images/Experience/Kudos 2.png', dataAiHint: 'certificate award', caption: 'Internship Completion Certificate' }
            ]}
        ]
    }
];

export const contactInfo = [
    { icon: '📧', label: 'Email', value: 'princesher321@gmail.com', detail: 'Usually respond within 24 hours', color: 'text-green-400', link: 'mailto:princesher321@gmail.com' },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/princesherathiya/', detail: 'Professional networking', color: 'text-[var(--wt-teal)]', link: 'https://www.linkedin.com/in/princesherathiya/' },
    { icon: '🐙', label: 'GitHub', value: 'github.com/Aicodebyprince', detail: 'Check out my code', color: 'text-[var(--wt-gold)]', link: 'https://github.com/Aicodebyprince' },
];

export type JourneyHighlight = {
    type: 'academic' | 'project' | 'event';
    title: string;
    description: string;
    details?: string[];
    ctaLink?: string;
};

type JourneyItem = {
    college: string;
    degree: string;
    period: string;
    icon: React.ReactElement;
    description: string;
    path: string;
    highlights: JourneyHighlight[];
};

export const journeyData: JourneyItem[] = [
    {
        college: "Mithibai College",
        degree: "MSc in Computer Science",
        period: "2025 - 2027",
        icon: React.createElement(GraduationCap),
        description: "Focused on computer science, backend systems, automation, and practical AI-powered product development.",
        path: "/mithibai-journey",
        highlights: [
            {
                type: 'academic',
                title: 'Backend, Automation, and AI Focus',
                description: 'Focused my MSc learning around scalable systems, automation-heavy workflows, and practical AI applications.',
            },
            {
                type: 'project',
                title: 'Campus Event Management App',
                description: 'Led a team to develop a campus-wide event management application. The app served as a central hub for all college events, announcements, and student registrations.',
                details: [
                    'Developed using modern full-stack tools with real-time data synchronization.',
                    'Features included event calendars, push notifications, and a user feedback system.',
                    'Successfully managed a team of four developers, following Agile methodologies.'
                ],
                ctaLink: 'https://github.com/Aicodebyprince/College-Management-App'
            },
            {
                type: 'academic',
                title: 'Published Research Paper',
                description: 'Co-authored and published a research paper on the applications of AI in data analysis, exploring new models for predictive analytics.',
                details: [
                    'Paper focused on AI-driven data analysis techniques.',
                    'Presented at a national-level computer science conference.',
                ],
            }
        ]
    },
    {
        college: "RMC College",
        degree: "BSc in Information Technology",
        period: "2022 - 2025",
        icon: React.createElement(GraduationCap),
        description: "Built a strong foundation in IT, covering core concepts of programming, databases, and networking.",
        path: "/rmc-journey",
        highlights: [
            {
                type: 'academic',
                title: 'Graduated with First Class Honors',
                description: 'Completed my BSc in Information Technology with a strong academic record, focusing on foundational computer science principles and software development.',
            },
            {
                type: 'project',
                title: 'Library Management System',
                description: 'Developed a comprehensive library management system as a final year project. This application streamlined book-keeping, member management, and lending processes.',
                details: [
                    'Built with Java and MySQL.',
                    'Featured a user-friendly interface for both librarians and members.',
                    'Included search, tracking, and reporting functionalities.'
                ],
            },
            {
                type: 'event',
                title: 'Coding Club Activities',
                description: 'As an active member of the college coding club, I participated in and helped organize multiple events, fostering a culture of collaborative learning and competition.',
                details: [
                    'Organized two intra-college hackathons.',
                    'Conducted workshops on introductory Python and web development.',
                    'Mentored junior students in competitive programming.'
                ],
            }
        ]
    },
    {
        college: "Shri T.P. Bhatiya College",
        degree: "HSC - Science",
        period: "2020 - 2022",
        icon: React.createElement(School),
        description: "Completed higher secondary education in Science, developing a keen interest in technology and computing during this period.",
        path: "",
        highlights: []
    },
    {
        college: "St. Jerome Convent High School",
        degree: "SSC",
        period: "Until 2020",
        icon: React.createElement(School),
        description: "Laid the foundational stones of my academic and personal growth, developing leadership and teamwork skills.",
        path: "",
        highlights: []
    }
];

export const hackathons = [
    {
        name: "AI for Good Hackathon",
        date: "Jun - Aug 2025",
        project: "Harnessing the power of AI for Positive Social Impact",
        description: "Participated in the AI for Good Hackathon, developing innovative AI solutions to address pressing social challenges.",
        outcome: "Completed",
        tags: ["AI", "Social Impact", "Python", "TensorFlow"],
        link: "#"
    },
    {
        name: "Bolt.new",
        date: "Completed",
        project: "AI-Powered E-commerce Solutions",
        description: "Participated in the Bolt.new hackathon to build innovative AI tools for e-commerce, focusing on personalization and automation.",
        outcome: "Completed",
        tags: ["AI", "E-commerce", "Personalization", "Automation"],
        link: "#"
    },
    {
        name: "Tech 4 Social Good",
        date: "Ongoing",
        project: "Build a solution that empowers learners",
        description: "Currently developing a solution to empower learners through technology.",
        outcome: "Draft Submission",
        tags: ["EdTech", "Social Good", "Flutter"],
        link: "#"
    },
    {
        name: "Code with Kiro Hackathon",
        date: "Ongoing",
        project: "Explore Kiro, an AI IDE",
        description: "A challenge for developers to explore Kiro, an AI IDE that works alongside you to turn ideas into production code with spec-driven development.",
        outcome: "In Progress",
        tags: ["AI", "Developer Tools", "IDE"],
        link: "#"
    },
    {
        name: "Hack 4 Humanity 2025",
        date: "Ongoing",
        project: "Shaping tomorrow with todays tech",
        description: "Working on innovative solutions to shape a better future using modern technology.",
        outcome: "In Progress",
        tags: ["Innovation", "Future Tech", "Web3"],
        link: "#"
    },
    {
        name: "Smart India Hackathon (SIH)",
        date: "Upcoming",
        project: "Working on a proposal for SIH",
        description: "Currently developing a project proposal for the prestigious Smart India Hackathon, aiming to solve real-world problems with technology.",
        outcome: "Preparing",
        tags: ["Problem Solving", "Innovation", "National Level"],
        link: "#"
    }
];

export const problemSolving = [
    {
        platform: "LeetCode",
        stat: "150+ Problems Solved",
        description: "Consistently solving problems across various difficulty levels, focusing on data structures and algorithms to improve efficiency and code quality.",
        link: "#",
        tags: ["Algorithms", "Data Structures", "Hard", "Medium"]
    },
    {
        platform: "HackerRank",
        stat: "5-Star Gold Badge",
        description: "Achieved a 5-star rating in the problem-solving domain, demonstrating proficiency in logical reasoning and implementation.",
        link: "#",
        tags: ["Problem Solving", "Python", "Java", "SQL"]
    },
    {
        platform: "Codeforces",
        stat: "Pupil Rating",
        description: "Regularly participate in competitive programming contests, tackling complex challenges under time constraints to sharpen my skills.",
        link: "#",
        tags: ["Competitive Programming", "Math", "Algorithms"]
    }
];

    



    

  




