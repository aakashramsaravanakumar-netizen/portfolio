export const personalInfo = {
  name: "Aakashram S",
  fullName: "AakashRam Saravanakumar",
  roles: [
    "Full-Stack Developer",
    "AI & Computer Vision Engineer",
    "Hackathon Winner",
    "Agentic AI Builder"
  ],
  tagline: "Computer Science Engineering student crafting intelligent full-stack applications, deep learning vision systems, and scalable web experiences.",
  location: "Melur, Madurai, Tamil Nadu, India",
  shortLocation: "Melur, Madurai, Tamil Nadu",
  phone: "+91 9092936131",
  email: "aakashram.dev@gmail.com", // Replace with your primary email
  github: "https://github.com/aakashramsaravanakumar-netizen", // Replace with your GitHub profile
  linkedin: "https://www.linkedin.com/in/aakashram-saravanakumar-a1157a328/", // Replace with your LinkedIn profile
  resumeUrl: "https://drive.google.com/file/d/1esGS7DLWsaVTikJvRNr7YzXQtrkav_ee/view?usp=sharing", // Replace with direct resume PDF link or path
  availability: "Available for Opportunities & Internships",
  bio: "Passionate Computer Science Engineering undergraduate specializing in full-stack web architectures, deep learning vision pipelines, and intelligent agentic workflows. Constantly solving complex algorithmic challenges and engineering scalable software with modern stacks.",
  codeBio: {
    developer: "Aakashram S",
    degree: "B.E. Computer Science & Engineering",
    institution: "PSNA College of Engineering and Technology",
    location: "Melur, Madurai, Tamil Nadu, India",
    coreSpecialties: [
      "Full-Stack Web Development",
      "Computer Vision & Deep Learning (OpenCV, CNN)",
      "Agentic AI & LLM Systems",
      "Scalable REST APIs & Databases"
    ],
    status: "Seeking Impactful Software Engineering & AI Roles",
    coffeeFuel: "100%",
    passions: [
      "Building high-impact hackathon solutions",
      "Real-time visual inference algorithms",
      "Crafting 60fps polished cyber-grade web UX"
    ]
  }
};

export const education = {
  degree: "B.E. in Computer Science and Engineering",
  institution: "PSNA College of Engineering and Technology",
  location: "Dindigul, Tamil Nadu",
  period: "2022 – 2026",
  highlights: [
    "Focus on Data Structures, Algorithms, Computer Vision & Distributed Systems",
    "Consistent top performer in institutional coding competitions and hackathons",
    "Active member of the Technical Innovation and AI Research Club"
  ]
};

export const languages = [
  { name: "English", proficiency: "Professional Working Proficiency", level: "Fluent" },
  { name: "Tamil", proficiency: "Native Proficiency", level: "Native" }
];

export const projects = [
  {
    id: "talent-track",
    title: "Talent Track – AI Athlete Management System",
    shortTitle: "Talent Track",
    category: "AI / ML",
    badge: "AI + Vision + Full-Stack",
    description: "Full-stack athlete management platform powered by computer vision and deep learning for automated performance analysis and tracking.",
    longDescription: "Talent Track revolutionizes sports analytics by using camera video feeds to track human pose estimations, joint angles, and sprint velocity in real time. It automatically generates performance analytics, fatigue heatmaps, and progress metrics for coaches and athletes inside an integrated Node.js/Express dashboard.",
    techStack: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "TensorFlow", "OpenCV", "MySQL"],
    highlights: [
      "Real-time motion/performance tracking via OpenCV & TensorFlow pose estimation",
      "Full-stack analytics dashboard with MySQL relational tracking",
      "Automated fatigue index and recovery recommendations for coaches"
    ],
    color: "cyan",
    accent: "#06B6D4",
    interactiveType: "talent-track",
    github: "https://github.com/aakashram-s/talent-track",
    demo: "#"
  },
  {
    id: "agro-ai",
    title: "AgroAI – Live Plant Disease Prediction",
    shortTitle: "AgroAI",
    category: "AI / ML",
    badge: "Computer Vision & Deep Learning",
    description: "AI-powered agricultural companion helping farmers detect and predict crop diseases at an early stage using deep learning image analysis.",
    longDescription: "AgroAI empowers farmers with mobile-friendly diagnostic capabilities. Using Convolutional Neural Networks (CNN) and Recurrent Neural Networks (RNN) alongside OpenCV image preprocessing, it analyzes leaf damage patterns, predicts infection types with over 94% accuracy, and recommends eco-friendly organic remedies.",
    techStack: ["HTML", "CSS", "OpenCV", "CNN", "RNN", "Firebase"],
    highlights: [
      "Early-stage crop disease classification using CNN/RNN computer vision models",
      "Sub-second image processing and localized leaf lesion segmentation",
      "Firebase real-time backend synchronization and field diagnosis history"
    ],
    color: "emerald",
    accent: "#10B981",
    interactiveType: "agro-ai",
    github: "https://github.com/aakashram-s/agro-ai",
    demo: "#"
  },
  {
    id: "bike-service",
    title: "Online Bike Service Management System",
    shortTitle: "Bike Service System",
    category: "Full-Stack",
    badge: "Full-Stack Architecture",
    description: "Full-stack online advance booking platform designed to streamline bike servicing schedules, reduce customer wait times, and improve workshop efficiency.",
    longDescription: "An end-to-end workshop automation platform featuring dynamic calendar slot reservation, technician task allocation, inventory parts tracking, and live job-card status updates powered by AngularJS and MongoDB.",
    techStack: ["HTML", "CSS", "JavaScript", "AngularJS", "MongoDB"],
    highlights: [
      "Real-time slot reservation system eliminating physical queue delays",
      "Role-based dashboards for customers, mechanics, and service managers",
      "Automated SMS/Email notification alerts for service stage progression"
    ],
    color: "cyan",
    accent: "#06B6D4",
    interactiveType: "bike-service",
    github: "https://github.com/aakashram-s/bike-service-system",
    demo: "#"
  },
  {
    id: "number-guessing",
    title: "Interactive Number Guessing Game",
    shortTitle: "Number Guessing Game",
    category: "Core",
    badge: "Playable Interactive Game",
    description: "Browser-based interactive game built with vanilla JavaScript and dynamic DOM manipulation with tactile audio-visual feedback.",
    longDescription: "A game engineered to demonstrate DOM rendering speed, state machine handling, and dynamic hint algorithms. Visitors can play this game directly in the portfolio with instant scoring, attempt trackers, and confetti victory effects!",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    highlights: [
      "Dynamic state management with high-precision hot/cold proximity hints",
      "Responsive UI feedback, interactive streak counter, and visual celebratory effects",
      "Direct playable preview embedded right in the portfolio!"
    ],
    color: "emerald",
    accent: "#10B981",
    interactiveType: "number-game",
    github: "https://github.com/aakashram-s/number-guessing-game",
    demo: "#"
  }
];

export const skillCategories = [
  { id: "all", label: "All Skills" },
  { id: "ai-ml", label: "AI / ML" },
  { id: "full-stack", label: "Full-Stack" },
  { id: "databases", label: "Databases" },
  { id: "core", label: "Core" }
];

export const technicalSkills = [
  // Programming Languages
  { name: "Java", category: "core", level: "Advanced", icon: "Coffee", color: "#F89820" },
  { name: "Python", category: "ai-ml", level: "Advanced", icon: "Terminal", color: "#3776AB" },
  { name: "C", category: "core", level: "Proficient", icon: "Cpu", color: "#A8B9CC" },
  { name: "JavaScript", category: "full-stack", level: "Advanced", icon: "Code2", color: "#F7DF1E" },

  // Web Technologies
  { name: "HTML5", category: "full-stack", level: "Mastery", icon: "Globe", color: "#E34F26" },
  { name: "CSS3 / Tailwind", category: "full-stack", level: "Mastery", icon: "Palette", color: "#06B6D4" },
  { name: "Node.js", category: "full-stack", level: "Advanced", icon: "Server", color: "#339933" },
  { name: "Express.js", category: "full-stack", level: "Advanced", icon: "Layers", color: "#68A063" },
  { name: "AngularJS", category: "full-stack", level: "Proficient", icon: "Compass", color: "#DD0031" },

  // AI & Machine Learning
  { name: "TensorFlow", category: "ai-ml", level: "Proficient", icon: "Brain", color: "#FF6F00" },
  { name: "OpenCV", category: "ai-ml", level: "Advanced", icon: "Eye", color: "#5C3EE8" },
  { name: "Agentic AI", category: "ai-ml", level: "Advanced", icon: "Bot", color: "#10B981" },
  { name: "CNN (ConvNets)", category: "ai-ml", level: "Advanced", icon: "Network", color: "#06B6D4" },
  { name: "RNN (Recurrent)", category: "ai-ml", level: "Proficient", icon: "Activity", color: "#8B5CF6" },

  // Databases
  { name: "MySQL", category: "databases", level: "Advanced", icon: "Database", color: "#4479A1" },
  { name: "MongoDB", category: "databases", level: "Proficient", icon: "HardDrive", color: "#47A248" },
  { name: "Firebase", category: "databases", level: "Proficient", icon: "Flame", color: "#FFCA28" },

  // Core Concepts
  { name: "Data Structures & Algorithms", category: "core", level: "Advanced", icon: "GitBranch", color: "#06B6D4" },
  { name: "Object-Oriented Programming (OOP)", category: "core", level: "Advanced", icon: "Boxes", color: "#10B981" },
  { name: "Database Management (DBMS)", category: "core", level: "Advanced", icon: "FolderArchive", color: "#38BDF8" },
  { name: "REST APIs & Architecture", category: "core", level: "Advanced", icon: "Share2", color: "#A855F7" }
];

export const marqueeSkills = [
  "TensorFlow", "OpenCV", "Python", "Java", "JavaScript", "Node.js", "Express.js",
  "React", "Tailwind CSS", "MySQL", "MongoDB", "Firebase", "CNN / Vision", "Agentic AI",
  "AngularJS", "REST APIs", "DSA & Algorithms", "Git & GitHub"
];

export const awardsAndHackathons = [
  {
    year: "2026",
    title: "Winner – Internal Smart India Hackathon (SIH) 2026",
    organization: "Smart India Hackathon (Internal Institutional Round)",
    badge: "1st Place Winner",
    category: "Hackathon",
    description: "Led the development of an intelligent AI-driven solution addressing critical real-world problem statements, securing 1st rank among hundreds of competing multidisciplinary teams.",
    icon: "Trophy",
    color: "cyan"
  },
  {
    year: "2026",
    title: "Shortlisted – CIH 2026",
    organization: "Commonwealth Innovation & Hackathon (CIH)",
    badge: "National Shortlist",
    category: "National Level",
    description: "Selected and shortlisted among top collegiate engineering teams across the country for innovative technological architecture and scalable impact.",
    icon: "Star",
    color: "emerald"
  },
  {
    year: "2025",
    title: "Winner – Internal Smart India Hackathon (SIH) 2025",
    organization: "Smart India Hackathon (Internal Institutional Round)",
    badge: "1st Place Winner",
    category: "Hackathon",
    description: "Recognized as Champion team in SIH 2025 for designing and deploying a high-performance computer vision prototype evaluated by industry jurors.",
    icon: "Award",
    color: "cyan"
  },
  {
    year: "Design",
    title: "Winner – Future Tech Website Design",
    organization: "Design & UX Innovations Challenge (Figma)",
    badge: "Best UX / UI Design",
    category: "UI / UX Design",
    description: "Awarded 1st prize for creating an ultra-modern, accessibility-conscious futuristic tech dashboard and website interface prototype in Figma.",
    icon: "Sparkles",
    color: "emerald"
  },
  {
    year: "Leadership",
    title: "Team Leader – College Hackathons",
    organization: "PSNA College of Engineering and Technology",
    badge: "Leadership & Strategy",
    category: "Leadership",
    description: "Spearheaded multidisciplinary hackathon teams across ideation, architectural design, full-stack sprint execution, and jury defense presentations.",
    icon: "Users",
    color: "cyan"
  }
];

export const stats = [
  { label: "Hackathon Wins & Honors", value: "5+" },
  { label: "Core Projects Built", value: "10+" },
  { label: "Tech Stack Technologies", value: "15+" },
  { label: "Deep Learning & Vision Models", value: "94%+" }
];

