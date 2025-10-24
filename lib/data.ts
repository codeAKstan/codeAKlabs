// Mock data for services, case studies, and projects

export const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom web applications built with modern technologies and best practices.",
    icon: "code",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that users love to interact with.",
    icon: "palette",
  },
  {
    id: 3,
    title: "Digital Strategy",
    description: "Strategic guidance to transform your business through technology.",
    icon: "target",
  },
  {
    id: 4,
    title: "Performance Optimization",
    description: "Lightning-fast applications that convert and retain users.",
    icon: "zap",
  },
]

export const caseStudies = [
  {
    id: 1,
    title: "E-Commerce Platform Redesign",
    category: "Web Development",
    image: "/ecommerce-dashboard.png",
    problem: "Legacy platform with poor UX causing 40% cart abandonment rate.",
    approach: "Complete redesign with modern tech stack and user-centric design.",
    results: {
      conversionIncrease: "65%",
      loadTimeReduction: "70%",
      userSatisfaction: "4.8/5",
    },
    technologies: ["Next.js", "React", "Tailwind CSS", "PostgreSQL"],
    link: "/case-studies/ecommerce-redesign",
  },
  {
    id: 2,
    title: "SaaS Dashboard Development",
    category: "Web Development",
    image: "/saas-dashboard-analytics.jpg",
    problem: "Complex data visualization needs with real-time updates.",
    approach: "Built scalable dashboard with WebSocket integration.",
    results: {
      performanceGain: "3x faster",
      userRetention: "92%",
      dataAccuracy: "99.9%",
    },
    technologies: ["Next.js", "WebSocket", "D3.js", "Node.js"],
    link: "/case-studies/saas-dashboard",
  },
  {
    id: 3,
    title: "Mobile App Launch",
    category: "Mobile Development",
    image: "/mobile-app-interface.png",
    problem: "Need for cross-platform mobile solution with offline support.",
    approach: "React Native app with local-first architecture.",
    results: {
      downloads: "50K+",
      rating: "4.7/5",
      activeUsers: "15K monthly",
    },
    technologies: ["React Native", "Firebase", "Redux", "Expo"],
    link: "/case-studies/mobile-app",
  },
]

export const projects = [
  {
    id: 1,
    title: "AI Content Generator",
    description: "Intelligent tool for generating marketing content.",
    image: "/ai-content-generator-interface.png",
    tags: ["AI", "Next.js", "OpenAI"],
  },
  {
    id: 2,
    title: "Real-time Collaboration Tool",
    description: "Live editing platform for teams.",
    image: "/collaboration-tool-interface.png",
    tags: ["WebSocket", "React", "Node.js"],
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description: "Comprehensive analytics and reporting system.",
    image: "/analytics-dashboard-charts.png",
    tags: ["Data Viz", "React", "PostgreSQL"],
  },
  {
    id: 4,
    title: "E-Learning Platform",
    description: "Interactive online learning management system.",
    image: "/elearning-platform-courses.jpg",
    tags: ["Education", "Next.js", "Stripe"],
  },
]

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStartup Inc",
    content:
      "codeAKLabs transformed our vision into reality. Their expertise and dedication were instrumental in our success.",
    image: "/professional-woman-headshot.png",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager, Digital Co",
    content: "Working with the team was seamless. They delivered on time, on budget, and exceeded our expectations.",
    image: "/professional-man-headshot.png",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Founder, Creative Agency",
    content: "The attention to detail and creative problem-solving was outstanding. Highly recommended!",
    image: "/professional-woman-headshot.png",
  },
]

export const stats = [
  { label: "Projects Completed", value: 150 },
  { label: "Happy Clients", value: 85 },
  { label: "Team Members", value: 12 },
  { label: "Years Experience", value: 8 },
]
