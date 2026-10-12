/**
 * ------------------------------------------------------------------
 *  ALL YOUR SITE CONTENT LIVES HERE.
 *  Change the text below and the page updates — no layout edits needed.
 * ------------------------------------------------------------------
 */

export const profile = {
  name: "Hassan Jaan",
  headline: "Hi, I'm Hassan Jaan",
  // The hero subtitle rotates through these, one at a time.
  roles: ["Full-Stack Developer", "Web Designer", "AI Enthusiast"],
  pitch:
    "I build fast, clean, client-ready websites and web apps pixel tight frontends, solid backends and everything in between.",
  // 👇 Replace these two with your real details.
  email: "hassan.jan.solo@gmail.com",
  location: "Remote · Available for new projects",
  availability: "Available for new projects",
  github: "https://github.com/JAAN100",
  linkedin: "https://www.linkedin.com/in/hassan-jaan/",
  avatar:
    "https://media.base44.com/images/public/6acc6c0de66d364bdea0f5fa/7a5a15a56_generated_3bfcda46.png",
};

export const about = {
  paragraphs: [
    "I design and build websites and full-stack web apps from clean marketing sites to complete products with authentication, databases and dashboards.",
    "Alongside development I run an IT management business so I look after the boring-but-critical parts too: hosting, deployment, domains and keeping systems running smoothly.",
  ],
  // 👇 Placeholder numbers — edit the values to your own.
  stats: [
    { value: "20+", label: "Client Projects Delivered" },
    { value: "10+", label: "Frontend → Database Builds" },
  ],
};

export const skillGroups = [
  {
    title: "Frontend",
    icon: "Layout",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Vite",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    icon: "Server",
    items: ["Node.js", "Express", "PHP", "Laravel"],
  },
  {
    title: "Databases",
    icon: "Database",
    items: ["MongoDB", "MySQL / NOSQL", "Firebase", "PostgreSQL", "Appwrite"],
  },
  {
    title: "Deployment",
    icon: "Rocket",
    items: [
      "Vercel",
      "cPanel hosting",
      "AWS",
      "Netlify",
      "Render",
      "Plesk",
      "GCP",
    ],
  },
  {
    title: "Foundations",
    icon: "Binary",
    items: ["C", "C++", "Data Structures & Algorithms"],
  },
];

/**
 * PROJECTS — add, remove or reorder freely.
 * `live` is optional: give it a URL and the "Live" button appears.
 */
export const projects = [
  {
    title: "E-Shop",
    description:
      "A full-featured multi-vendor e-commerce platform with seller onboarding, cart and wishlist, live product search, and real-time buyer-seller chat.",
    tags: [
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Express",
      "Socket.io",
      "Stripe API",
      "Cloudinary",
    ],
    live: "https://e-shop-hassan-jan.vercel.app/",
    github: "https://github.com/JAAN100/E-Shop",
    image: "/E-Shop.png",
    imageAlt: "Glowing storefront interface on a floating glass pane",
  },
  {
    title: "HassanEstate",
    description:
      "A real estate listings application with Google OAuth, cookie-based authentication, Redux state management, and user profile management.",
    tags: [
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Express",
      "Firebase",
      "Google OAuth",
    ],
    live: "https://real-estate-beta-dun.vercel.app/",
    github: "https://github.com/JAAN100/Real-Estate",
    image: "/HassanEstate.png",
    imageAlt: "Real estate dashboard on frosted glass",
  },
  {
    title: "Frontend Ecommerce React App",
    description:
      "A Frontend React application for an e-commerce platform with product listings, cart functionality, and responsive design.",
    tags: ["React", "Rest API", "Tailwind CSS"],
    live: "https://ecommerce-react-frontend-one.vercel.app/",
    github: "https://github.com/JAAN100/Ecommerce-React-Frontend",
    image: "/Ecommerce.png",
    imageAlt: "Painting contractor site on a floating glass pane",
  },
  {
    title: "Chat Bot",
    description:
      "A Chat Bot application built with React and JavaScript, featuring real-time messaging and API integration for intelligent responses.",
    tags: ["React", "Tailwind CSS", "Js", "API Integration"],
    live: "https://jaan100.github.io/Chat_Bot/",
    github: "https://github.com/JAAN100/Chat_Bot",
    image: "/ChatBot.png",
    imageAlt: "Tiling contractor website on a glass screen",
  },
  {
    title: "Syntrex Technologies",
    description:
      "Website for a technology company with a modern hero, service cards and a contact form for lead generation.",
    tags: ["WordPress", "SEO", "Responsive"],
    live: "https://syntrex.com.au",
    github: "",
    image: "/st.png",
    imageAlt: "Construction site mockup on a glass panel",
  },
  {
    title: "VOIP 24",
    description:
      "VOIP24 provides business VoIP phone systems across Australia, helping businesses streamline communication with reliable cloud-based phone solutions, call management, and scalable communication systems.",
    tags: ["WordPress", "SEO", "Responsive", "PHP", "SQL"],
    live: "https://voip24.com.au/",
    github: "",
    image: "/voip.png",
    imageAlt: "Corporate services website on frosted glass",
  },
  {
    title: "Fleet 360",
    description:
      "Writing Fleet360 is an all-in-one fleet management platform that helps businesses manage vehicles, drivers, maintenance, invoicing, and performance reports. It streamlines daily operations through automation and real-time insights, improving efficiency and reducing costs.",
    tags: ["React", "Tailwind CSS", "Responsive", "SEO", "PHP", "SQL"],
    live: "https://fleet360.com.au/",
    github: "",
    image: "/fleet360.png",
    imageAlt: "Consulting website dashboard on glass",
  },
  {
    title: "Mechanic 360",
    description:
      "Mechanic360 is a workshop management system that helps automotive businesses manage job cards, bookings, invoicing, customers, and daily workshop operations. It simplifies workflows through digital tools and automation, improving efficiency and productivity.",
    tags: [
      "WordPress",
      "Tailwind CSS",
      "Responsive",
      "SEO",
      "PHP",
      "SQL",
      "Payment Gateway Integration",
    ],
    live: "https://mechanic360.com.au/",
    github: "",
    image: "/mechanic360.png",
    imageAlt: "Holographic neural network sphere",
  },
];

export const services = [
  {
    title: "Website Design & Development",
    description:
      "Clean, modern marketing sites that load fast, look sharp on every screen and turn visitors into enquiries.",
    icon: "MonitorSmartphone",
    points: [
      "UI/UX design & prototyping",
      "SEO-friendly structure",
      "Content updates",
      "Custom Website Design",
    ],
  },
  {
    title: "Full-Stack Web Apps",
    description:
      "Complete products — authentication, databases, dashboards and APIs — built with React, Node.js or Laravel.",
    icon: "Layers",
    points: [
      "React + Node.js",
      "MongoDB / MySQL / NoSQL ",
      "Dashboards & roles",
      "REST APIs & integrations",
      "Payment gateways",
      "Authentication & security",
    ],
  },
  {
    title: "Hosting & Deployment",
    description:
      "AWS, Google Cloud, Azure, Vercel, Render and cPanel setup, including domains and SSL to keep your applications secure, scalable and running smoothly.",
    icon: "Rocket",
    points: ["Domain & DNS", "SSL certificates", "Zero-downtime deploys"],
  },
  {
    title: "IT Management & Support",
    description:
      "Ongoing technical care for your business systems updates, backups, troubleshooting and email setup.",
    icon: "ShieldCheck",
    points: [
      "System maintenance",
      "Backups & recovery",
      "Priority support",
      "Server & hosting management",
    ],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];
