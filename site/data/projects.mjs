// Add a project here, then run `npm run build`.
// media accepts { type: 'image', src, alt }, { type: 'vimeo', id, title },
// or { type: 'video', src, title }. Vimeo IDs are the numeric video IDs.
export const projects = [
  {
    slug: 'whueo-io',
    title: 'Whueo?.io',
    category: 'Multiplayer gaming',
    summary: 'A real-time multiplayer drawing and social deduction game built for interactive group play.',
    story: 'Whueo?.io is a browser-based multiplayer game that combines collaborative drawing, social deduction, and real-time interaction. Players join shared lobbies, participate in drawing rounds, communicate through live chat, identify imposters, and vote on outcomes. Built with a focus on responsive gameplay, synchronized player states, and seamless multiplayer experiences.',
    role: 'Full-stack development & game architecture',
    tags: [
      'React',
      'Redux',
      'Material UI',
      'PartyKit',
      'Real-time',
      'Multiplayer'
    ],
    actions: [{ label: 'Play now', url: 'http://whueoio.com', newTab: true }],
    media: [
      {
        type: 'image',
        src: '/assets/projects/whueo-hero.png',
        alt: 'Whueo.io multiplayer drawing gameplay'
      },
      {
        type: 'image',
        src: '/assets/projects/whueo-gameplay.png',
        alt: 'Whueo.io multiplayer drawing gameplay'
      },
      // {
      //   type: 'video',
      //   src: '/assets/projects/whueo-demo.mp4',
      //   title: 'Whueo.io multiplayer gameplay demonstration'
      // },
      {
        type: 'image',
        src: '/assets/projects/whueo-lobby.png',
        alt: 'Whueo.io multiplayer lobby and player list'
      },
      {
        type: 'image',
        src: '/assets/projects/whueo-voting.png',
        alt: 'Whueo.io social deduction and voting interface'
      }
    ],
  },
  {
    slug: 'modern-erp',
    title: 'Modern ERP',
    category: 'Business systems',
    summary: 'A custom ERP for Amity International, a multipurpose distribution company.',
    story: 'A custom enterprise resource planning system built around the needs of a multipurpose distribution business. The project focuses on making complex operational information easier to work with.',
    role: 'Full-stack development',
    tags: ['ERP', 'Business software'],
    media: [{ type: 'image', src: '/assets/projects/erp.png', alt: 'Modern ERP interface preview' }],
  },
  {
    slug: 'lab-software',
    title: 'Lab Software',
    category: 'Education technology',
    summary: 'Student activity monitoring and task management for an ICT lab.',
    story: 'A private high school needed a clearer way to manage work in its ICT lab. This desktop system helps staff assign tasks and monitor student computer activity during lab sessions.',
    role: 'Desktop software development',
    tags: ['Desktop', 'Task management', 'Education'],
    media: [{ type: 'image', src: '/assets/projects/ndc.png', alt: 'Lab Software preview' }],
  },
  {
    slug: 'food-court-technology',
    title: 'Food Court Technology',
    category: 'Operations',
    summary: 'Real-time food court orders and inventory tracking.',
    story: 'A real-time communication system connecting the cashier, preparation team, and customers in a busy food court. Orders and inventory stay visible as work moves between teams.',
    role: 'Full-stack development',
    tags: ['React', 'Node.js', 'PHP', 'Real-time'],
    media: [
      { type: 'image', src: '/assets/projects/food.png', alt: 'Food Court Technology interface preview' },
      { type: 'video', src: '/assets/projects/food.mp4', title: 'Food Court Technology demonstration' },
    ],
  },
  
  {
    slug: 'mobilemart-check-manager',
    title: 'MobileMart Check Manager',
    category: 'Desktop software',
    summary: 'A desktop-based check management system designed to streamline financial recordkeeping and business operations.',
    story: 'MobileMart Check Manager is a desktop application developed to simplify the organization and management of business checks. Built with Electron and an Express.js backend, the system brings structured recordkeeping into a dedicated desktop environment. Prisma ORM supports database operations, while the application focuses on efficient workflows, accessible records, and a practical user experience for day-to-day business management.',
    role: 'Full-stack desktop application development',
    tags: [
      'Electron',
      'Node.js',
      'Express.js',
      'Prisma',
      'Desktop'
    ],
    media: [
      {
        type: 'image',
        src: '/assets/projects/mobilemart-dashboard.png',
        alt: 'MobileMart Check Manager desktop dashboard'
      },
      {
        type: 'image',
        src: '/assets/projects/mobilemart-settings.png',
        alt: 'MobileMart Check Manager app settings'
      },
      {
        type: 'image',
        src: '/assets/projects/mobilemart-report.png',
        alt: 'MobileMart Check Manager customizded reports'
      }
    ],
  },

  
  {
    slug: 'malenia',
    title: 'Malenia',
    category: 'E-commerce',
    summary: 'A modern e-commerce platform with a dynamic storefront, product management, and a dedicated administration system.',
    story: 'Malenia is a full-stack e-commerce platform designed to deliver a seamless online shopping experience while simplifying business operations. The platform combines a responsive Next.js storefront with a separate React-based administration dashboard for managing products, orders, and store operations. Powered by a PostgreSQL database through Supabase and Prisma ORM, the system focuses on scalability, maintainability, and a smooth experience for both customers and administrators.',
    role: 'Full-stack development & system architecture',
    tags: [
      'Next.js',
      'React',
      'Node.js',
      'Prisma',
      'PostgreSQL',
      'Supabase'
    ],
    media: [
      {
        type: 'image',
        src: '/assets/projects/malenia-home.png',
        alt: 'Malenia e-commerce storefront homepage'
      },
      {
        type: 'image',
        src: '/assets/projects/malenia-product.png',
        alt: 'Malenia product details and shopping interface'
      },
      {
        type: 'image',
        src: '/assets/projects/malenia-admin.png',
        alt: 'Malenia administration dashboard'
      },
      {
        type: 'image',
        src: '/assets/projects/malenia-order.png',
        alt: 'Malenia Order Processed'
      }
    ],
  },

  {
    slug: 'project-aura',
    title: 'Project Aura',
    category: 'Connected devices',
    summary: 'A mobile app for a home automation and wireless power project.',
    story: 'An Android and iOS mobile app for home automation, developed for an ongoing wireless power transmission project.',
    role: 'Mobile app development',
    tags: ['React Native', 'Node.js', 'Android', 'IoT'],
    media: [
      { type: 'image', src: '/assets/projects/aura.png', alt: 'Project Aura mobile app preview' },
      { type: 'video', src: '/assets/projects/aura.mp4', title: 'Project Aura demonstration' },
    ],
  },
  {
    slug: 'website-automation-bot',
    title: 'Website Automation Bot',
    category: 'Automation',
    summary: 'Web scraping and automation software for BD Trippers.',
    story: 'A software project for BD Trippers focused on web scraping and automating repetitive website work.',
    role: 'Automation development',
    tags: ['Automation', 'Web scraping'],
    media: [{ type: 'image', src: '/assets/projects/bd.png', alt: 'Website Automation Bot preview' }],
  },
];
