// Single source of truth for all portfolio content.
// Edit this file to update bio, skills, projects, services, and links — no component changes needed.

export const content = {
  name: "Hassan Jaan",
  role: "Full-Stack AI Engineer · Web Designer · IT Management Founder",
  // Tagline shown in the hero overlay.
  tagline:
    "I architect and build fast, modern websites and web apps for businesses and run an IT management business that keeps them fast, secure and online.",
  // Contact email (update to your real address). The form uses EmailJS, so this is for the mailto link.
  email: "hassan.jan.solo@gmail.com",
  socials: {
    linkedin: "https://www.linkedin.com/in/hassan-jaan/",
    github: "https://github.com/JAAN100",
  },

  about: {
    bio: "I'm Hassan Jaan a full-stack engineer. I build production-grade web apps with React, Node and modern tooling and I help businesses manage their infrastructure deployments and digital presence end to end. From a single landing page to a multi-vendor e-commerce platform, I handle design, development, and the servers it all runs on.",
    stats: [
      { label: "Projects Delivered", value: "12" },
      { label: "Client Websites", value: "10+" },
    ],
  },

  // Skills grouped by category. Each group renders as an orbiting cluster label.
  skills: [
    {
      group: "Frontend",
      items: [
        "HTML",
        "CSS",
        "React",
        "Vite",
        "JavaScript",
        "Bootstrap",
        "Tailwind CSS",
      ],
    },
    { group: "Backend", items: ["Node.js / Express", "PHP"] },
    { group: "Databases", items: ["MongoDB", "MySQL", "SQL / NoSQL"] },
    { group: "Deployment", items: ["Vercel", "cPanel", "AWS", "AZURE", "GCP"] },
  ],

  // Projects. Use "[LIVE_URL]" / "[GITHUB_URL]" placeholders where a link is not yet known.
  // `image` is a screenshot/preview URL shown on the card and in the detail modal.
  // Replace the placeholder image URLs below with your real project screenshots.
  projects: [
    {
      title: "E-Shop",
      type: "Multi-Vendor E-Commerce Platform",
      image: "/E-Shop.png",
      description:
        "A full-featured multi-vendor e-commerce platform with seller onboarding, cart and wishlist, live product search, and real-time buyer-seller chat.",
      features: [
        "Seller onboarding and vendor dashboards",
        "Cart, wishlist, and live product search",
        "Stripe and PayPal payments",
        "Cloudinary image uploads",
        "Real-time buyer-seller chat via Socket.io",
      ],
      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.io",
        "Stripe",
        "Cloudinary",
      ],
      role: "Full-Stack Engineer",
      links: {
        live: "https://e-shop-hassan-jan.vercel.app/",
        github: "https://github.com/JAAN100/E-Shop",
      },
    },
    {
      title: "HassanEstate",
      type: "MERN Real Estate Listings App",
      image: "/HassanEstate.png",
      description:
        "A real estate listings application with Google OAuth, cookie-based authentication, Redux state management, and user profile management.",
      features: [
        "Google OAuth sign-in",
        "Cookie-based authentication",
        "Redux state management",
        "User profile management",
        "Property listing and browsing",
      ],
      tech: ["React", "Node.js", "Express", "MongoDB", "Redux", "Google OAuth"],
      role: "Full-Stack Engineer",
      links: {
        live: "https://real-estate-beta-dun.vercel.app/",
        github: "https://github.com/JAAN100/Real-Estate",
      },
    },
    {
      title: "Frontend Ecommerce React App",
      type: "React + JavaScript Frontend",
      image: "/Ecommerce.png",
      description:
        "A Frontend React application for an e-commerce platform with product listings, cart functionality, and responsive design.",
      features: ["Create / Read / Update / Delete", "REST API", "React UI"],
      tech: ["React", "Js", "Tailwind CSS"],
      role: "Frontend Developer",
      links: {
        live: "https://ecommerce-react-frontend-one.vercel.app/",
        github: "https://github.com/JAAN100/Ecommerce-React-Frontend",
      },
    },
    {
      title: "Chat Bot",
      type: "React · Js · API",
      image: "/ChatBot.png",
      description:
        "A Chat Bot application built with React and JavaScript, featuring real-time messaging and API integration for intelligent responses.",
      features: [
        "Real-time messaging",
        "API integration for intelligent responses",
        "Responsive design for various devices",
        "Basic Respsone Like Date , Head & Tail",
      ],
      tech: ["React", "JavaScript", "Tailwind CSS"],
      role: "Frontend Developer",
      links: {
        live: "https://jaan100.github.io/Chat_Bot/",
        github: "https://github.com/JAAN100/Chat_Bot",
      },
    },
  ],

  // Services offered by the IT management business and web design service.
  services: [
    {
      category: "Web Design & Development",
      items: [
        {
          title: "Custom Website Design",
          description: "Distinctive, brand-led websites — not templates.",
          icon: "Palette",
        },
        {
          title: "Full-Stack Web Apps",
          description: "React + Node/Express + MongoDB, end to end.",
          icon: "Code2",
        },
        {
          title: "E-Commerce Solutions",
          description: "Multi-vendor stores, carts, payments, and chat.",
          icon: "ShoppingCart",
        },
        {
          title: "Responsive UI / UX",
          description: "React + Tailwind, mobile-first and accessible.",
          icon: "Globe",
        },
        {
          title: "Performance Optimization",
          description: "Fast loads, 60fps, capped pixel ratio, lazy 3D.",
          icon: "Gauge",
        },
      ],
    },
    {
      category: "IT Management",
      items: [
        {
          title: "Managed IT Support",
          description: "Ongoing support and issue resolution for businesses.",
          icon: "Wrench",
        },
        {
          title: "Infrastructure & Servers",
          description: "Server setup, monitoring, and maintenance.",
          icon: "Server",
        },
        {
          title: "cPanel / Shared Hosting",
          description: "Deployment and management on cPanel hosting.",
          icon: "HardDrive",
        },
        {
          title: "Domain & DNS Management",
          description: "Domains, DNS records, and email routing.",
          icon: "Network",
        },
        {
          title: "Backup & Security",
          description: "Backups, updates, and security monitoring.",
          icon: "ShieldCheck",
        },
        {
          title: "Cloud Deployment",
          description:
            "AWS , Vercel and cloud deploys with CI/CD friendly config.",
          icon: "Cloud",
        },
      ],
    },
  ],
};
