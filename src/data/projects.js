// src/data/projects.js
// Shared project data used by both ProjectSection.vue and AllProjectsPage.vue
// Add / edit projects here — both pages update automatically.

export const allProjects = [
  {
    id: 0, category: 'uiux', categoryLabel: 'UI/UX Design',
    image: '../assets/projects/ui_ux/signin-1.png',
    title: 'Finance Dashboard App', sub: 'Mobile · 2024',
    description: 'A comprehensive personal finance management app designed for Gen Z users. Features real-time spending insights, smart budgeting, and investment tracking.',
    meta: [{ icon: 'fa-calendar', text: '2024' }, { icon: 'fa-mobile-screen', text: 'Mobile' }, { icon: 'fa-clock', text: '6 weeks' }],
    tools: ['Figma', 'Maze', 'Principle', 'After Effects'],
    liveUrl: '', liked: false
  },
  {
    id: 1, category: 'web', categoryLabel: 'Web Design',
    image: '/projects/agency-site.jpg',
    title: 'Creative Agency Website', sub: 'Landing Page · 2024',
    description: 'Full landing page design for a boutique creative agency. Bold typography, smooth scroll animations, and a dark-mode-first aesthetic.',
    meta: [{ icon: 'fa-calendar', text: '2024' }, { icon: 'fa-globe', text: 'Web' }, { icon: 'fa-clock', text: '3 weeks' }],
    tools: ['Figma', 'Vue.js', 'GSAP', 'Tailwind CSS'],
    liveUrl: '', liked: false
  },
  {
    id: 2, category: 'graphics', categoryLabel: 'Graphics Design',
    image: '/projects/brand-identity.jpg',
    title: 'Brand Identity System', sub: 'Branding · 2024',
    description: 'Complete brand identity for a sustainable fashion startup. Logo, color palette, typography system, and brand guidelines across print and digital touchpoints.',
    meta: [{ icon: 'fa-calendar', text: '2024' }, { icon: 'fa-palette', text: 'Branding' }, { icon: 'fa-clock', text: '4 weeks' }],
    tools: ['Illustrator', 'Photoshop', 'InDesign'],
    liveUrl: '', liked: false
  },
  {
    id: 3, category: 'uiux', categoryLabel: 'UI/UX Design',
    image: '/projects/ecommerce-app.jpg',
    title: 'E-Commerce App Redesign', sub: 'Mobile · 2023',
    description: 'Full UX audit and redesign of a fashion e-commerce app, reducing checkout drop-off by 34% through simplified flows and clearer CTAs.',
    meta: [{ icon: 'fa-calendar', text: '2023' }, { icon: 'fa-mobile-screen', text: 'Mobile' }, { icon: 'fa-clock', text: '8 weeks' }],
    tools: ['Figma', 'ProtoPie', 'Hotjar', 'Notion'],
    liveUrl: '', liked: false
  },
  {
    id: 4, category: 'web', categoryLabel: 'Web Design',
    image: '/projects/portfolio-site.jpg',
    title: 'Developer Portfolio Site', sub: 'Web · 2023',
    description: 'Clean, minimal portfolio site for a senior full-stack developer. Dark theme with code-editor aesthetics and smooth page transitions.',
    meta: [{ icon: 'fa-calendar', text: '2023' }, { icon: 'fa-globe', text: 'Web' }, { icon: 'fa-clock', text: '2 weeks' }],
    tools: ['Figma', 'React', 'Framer Motion', 'Tailwind CSS'],
    liveUrl: '', liked: false
  },
  {
    id: 5, category: 'graphics', categoryLabel: 'Graphics Design',
    image: '/projects/event-poster.jpg',
    title: 'Music Festival Poster Series', sub: 'Print · 2023',
    description: 'A series of 6 event posters for an electronic music festival — bold neon palette, glitch art textures, and layered typographic compositions.',
    meta: [{ icon: 'fa-calendar', text: '2023' }, { icon: 'fa-print', text: 'Print' }, { icon: 'fa-clock', text: '1 week' }],
    tools: ['Photoshop', 'Illustrator', 'After Effects'],
    liveUrl: '', liked: false
  },
  // ── Extra projects (shown only on /projects page) ──────────────────────────
  {
    id: 6, category: 'uiux', categoryLabel: 'UI/UX Design',
    image: '/projects/saas-dashboard.jpg',
    title: 'SaaS Analytics Dashboard', sub: 'Desktop · 2023',
    description: 'B2B analytics dashboard for a marketing SaaS. Complex data visualisation simplified through progressive disclosure and consistent data hierarchy.',
    meta: [{ icon: 'fa-calendar', text: '2023' }, { icon: 'fa-desktop', text: 'Desktop' }, { icon: 'fa-clock', text: '10 weeks' }],
    tools: ['Figma', 'Storybook', 'Recharts', 'Notion'],
    liveUrl: '', liked: false
  },
  {
    id: 7, category: 'web', categoryLabel: 'Web Design',
    image: '/projects/restaurant-site.jpg',
    title: 'Fine Dining Restaurant Site', sub: 'Web · 2023',
    description: 'Luxury restaurant website with online reservations, menu showcasing, and an editorial hero section highlighting the chef\'s philosophy.',
    meta: [{ icon: 'fa-calendar', text: '2023' }, { icon: 'fa-globe', text: 'Web' }, { icon: 'fa-clock', text: '3 weeks' }],
    tools: ['Figma', 'Nuxt.js', 'GSAP', 'Tailwind CSS'],
    liveUrl: '', liked: false
  },
  {
    id: 8, category: 'graphics', categoryLabel: 'Graphics Design',
    image: '/projects/packaging.jpg',
    title: 'Artisan Coffee Packaging', sub: 'Packaging · 2022',
    description: 'Packaging design for a specialty coffee brand — hand-drawn botanical illustrations, earthy colour palette, and tactile print finishes.',
    meta: [{ icon: 'fa-calendar', text: '2022' }, { icon: 'fa-box', text: 'Packaging' }, { icon: 'fa-clock', text: '3 weeks' }],
    tools: ['Illustrator', 'Photoshop', 'Dimension'],
    liveUrl: '', liked: false
  },
  {
    id: 9, category: 'uiux', categoryLabel: 'UI/UX Design',
    image: '/projects/health-app.jpg',
    title: 'Health & Wellness Tracker', sub: 'Mobile · 2022',
    description: 'Calm, accessible wellness app helping users track sleep, hydration, and mood with gentle nudges and weekly progress summaries.',
    meta: [{ icon: 'fa-calendar', text: '2022' }, { icon: 'fa-mobile-screen', text: 'Mobile' }, { icon: 'fa-clock', text: '7 weeks' }],
    tools: ['Figma', 'Maze', 'Lottie', 'Notion'],
    liveUrl: '', liked: false
  },
  {
    id: 10, category: 'web', categoryLabel: 'Web Design',
    image: '/projects/ngo-site.jpg',
    title: 'NGO Fundraising Platform', sub: 'Web · 2022',
    description: 'High-impact fundraising site for an environmental NGO. Emotional storytelling layout, donation flow, and impact counter animations.',
    meta: [{ icon: 'fa-calendar', text: '2022' }, { icon: 'fa-globe', text: 'Web' }, { icon: 'fa-clock', text: '5 weeks' }],
    tools: ['Figma', 'Vue.js', 'Stripe', 'Tailwind CSS'],
    liveUrl: '', liked: false
  },
  {
    id: 11, category: 'graphics', categoryLabel: 'Graphics Design',
    image: '/projects/social-kit.jpg',
    title: 'Social Media Content Kit', sub: 'Digital · 2022',
    description: '60-piece Figma template kit for a lifestyle brand — stories, carousels, reels covers, and highlight icons in a cohesive aesthetic system.',
    meta: [{ icon: 'fa-calendar', text: '2022' }, { icon: 'fa-mobile-screen', text: 'Digital' }, { icon: 'fa-clock', text: '2 weeks' }],
    tools: ['Figma', 'Photoshop'],
    liveUrl: '', liked: false
  },
]