/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000, // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true, // Set to false to use static SVG
};

const greeting = {
  username: "Nawlo",
  title: "Hi, I'm Muhammad Nawlo",
  location: emoji(
    "📍 Based in Riyadh, Saudi Arabia · Open to full-time roles in KSA"
  ),
  subTitle: emoji(
    "Senior Full-Stack & DevOps Engineer with 6+ years building and operating business-critical systems: GRC/compliance, ERP, core banking, healthcare, multi-tenant SaaS and e-commerce. I ship across ASP.NET Core, Laravel, Node.js and React/Next.js, and own releases end to end with Docker, CI/CD, Terraform, AWS and Azure. 30+ production platforms delivered for clients in Saudi Arabia, the USA, Europe, the UAE and Japan."
  ),
  resumeLink: `${process.env.PUBLIC_URL}/Muhammad_Nawlo_CV.pdf`, // Set to empty to hide the button
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Muhammad-Nawlo",
  linkedin: "https://www.linkedin.com/in/muhammad-nawlo",
  gmail: "eng.muhammad.nawlo.it@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "SENIOR FULL-STACK & DEVOPS ENGINEER · .NET · LARAVEL · NODE.JS · REACT/NEXT.JS · AWS & AZURE",
  skills: [
    emoji(
      "⚡ Build business-critical platforms: GRC/compliance, ERP & project management, banking, healthcare, CMS and multi-vendor e-commerce"
    ),
    emoji(
      "⚡ Design secure backends and REST/GraphQL APIs with ASP.NET Core, Laravel and Node.js, including RBAC, claims-based auth, workflows and multi-tenancy"
    ),
    emoji(
      "⚡ Architect multi-tenant SaaS: database-per-tenant isolation, Stripe subscription billing and event-driven financial ledgers"
    ),
    emoji(
      "⚡ Develop config-driven, multilingual (Arabic/English, RTL) frontends with React, Next.js, TypeScript and Tailwind CSS"
    ),
    emoji(
      "⚡ Model and optimise data in SQL Server, Oracle, PostgreSQL, MySQL and MongoDB, including reporting and OLAP-style data cubes"
    ),
    emoji(
      "⚡ Own the DevOps lifecycle: Docker, CI/CD (Bitbucket, GitLab, GitHub Actions, Jenkins), Terraform, AWS and Azure, automatic rollbacks, backups, monitoring and Linux hardening"
    ),
    emoji(
      "⚡ Publish open-source Laravel/Filament packages and build AI-powered tooling with the Claude API"
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C# / ASP.NET / .NET",
      fontAwesomeClassname: "fab fa-microsoft",
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel",
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php",
    },
    {
      skillName: "Filament / Livewire",
      fontAwesomeClassname: "fas fa-layer-group",
    },
    {
      skillName: "Node.js / Express",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js-square",
    },
    {
      skillName: "React / Next.js",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "Strapi (Headless CMS)",
      fontAwesomeClassname: "fas fa-feather-alt",
    },
    {
      skillName: "Tailwind / Sass",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "SQL Server / Oracle / PostgreSQL / MySQL",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "MongoDB / Redis",
      fontAwesomeClassname: "fas fa-server",
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fas fa-cloud",
    },
    {
      skillName: "Terraform",
      fontAwesomeClassname: "fas fa-cubes",
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker",
    },
    {
      skillName: "Bitbucket Pipelines",
      fontAwesomeClassname: "fab fa-bitbucket",
    },
    {
      skillName: "GitLab CI/CD",
      fontAwesomeClassname: "fab fa-gitlab",
    },
    {
      skillName: "GitHub Actions",
      fontAwesomeClassname: "fab fa-github",
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins",
    },
    {
      skillName: "Linux / Nginx",
      fontAwesomeClassname: "fab fa-linux",
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt",
    },
    {
      skillName: "AI / LLM (Claude API)",
      fontAwesomeClassname: "fas fa-robot",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Aleppo",
      logo: require("./assets/images/university-aleppo.jpeg"),
      subHeader: "Bachelor of Informatics Engineering – Software Engineering",
      duration: "2019 - 2024",
      desc: "Grade: 79.8%",
      descBullets: [],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend (ASP.NET / ASP.NET Core / Laravel / Node.js)", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Laravel / PHP / Filament",
      progressPercentage: "90%",
    },
    {
      Stack: "Frontend (React / Next.js / TypeScript)",
      progressPercentage: "80%",
    },
    {
      Stack: "Databases (SQL Server / Oracle / PostgreSQL / MySQL / MongoDB)",
      progressPercentage: "80%",
    },
    {
      Stack: "DevOps (Docker / CI/CD / Linux / Nginx)",
      progressPercentage: "80%",
    },
    {
      Stack: "Cloud (AWS / Azure / Terraform)",
      progressPercentage: "70%",
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Full-Stack & DevOps Engineer",
      company: "T-NEX GmbH",
      companylogo: require("./assets/images/tnex.png"),
      date: "Apr 2026 – Present",
      desc: "German software company (Remote) building compliance (GRC), AI-powered business tools and SaaS products.",
      descBullets: [
        "Designed a config-driven UI engine (React + ASP.NET Core) that renders nested business processes from JSON, cutting new-form development time by ~70%",
        "Built an RBAC system for three governance lines with dynamic role-to-resource mapping and claims-based authorisation",
        "Developed a workflow and approval module for the asset lifecycle (programs, contracts, BIA, RIA) with automated alerts",
        "Engineered risk and compliance reporting plus an OLAP-style data cube for self-service analysis",
        "Led security hardening and coordinated regular penetration testing",
        "Provisioned AWS with Terraform (ECS Fargate, RDS, ALB, ECR, OIDC deploys) behind Bitbucket CI/CD with health-checked automatic rollback",
      ],
    },
    {
      role: "Full-Stack Developer",
      company: "Azurreo",
      companylogo: require("./assets/images/azurreo.png"),
      date: "Jun 2025 – Apr 2026",
      desc: "Paris-based (Remote) global telecom-outsourcing and technical services company; team of 80.",
      descBullets: [
        "Owned the internal tool suite that 8 teams rely on to communicate, coordinate work and generate invoices",
        "Designed and built a real-time notification system (WebSockets) used across all internal tools",
        "Led the modernisation of the tool suite: framework upgrades, refactoring and bug fixing",
        "Containerised the tools with Docker and replaced manual releases with CI/CD",
        "Ran the tools' Azure and AWS environments: VMs, storage, access control, backups and monitoring",
      ],
    },
    {
      role: "Full-Stack Developer",
      company: "Reterra",
      companylogo: require("./assets/images/reterra.jpg"),
      date: "Jan 2025 – Jun 2025",
      desc: "Prop-tech company building real-estate management solutions; team of 10.",
      descBullets: [
        "Shipped features end to end on the core real-estate platform and built companion mini-CMS and mini-ERP modules",
        "Provisioned dev, staging and production on AWS (EC2, RDS, S3) with Docker, Nginx, CI/CD, backups and monitoring",
      ],
    },
    {
      role: "Freelance Senior Full-Stack & DevOps Engineer",
      company: "Self-employed",
      companylogo: require("./assets/images/freelancer.png"),
      date: "Feb 2021 – Present",
      desc: "Part-time delivery alongside full-time roles for clients in Saudi Arabia, the USA and Syria.",
      descBullets: [
        "Built and run 12+ stores for a Saudi e-commerce group, then re-platformed them to one headless Aimeos backend and one Next.js storefront released to 16 brand targets",
        "Sole developer of Strapi + Next.js websites for 8+ US clinics; cut CSS by 57% and patched CVE-2025-66478 across all sites within days",
        "Dockerised every client stack with GitLab CI/CD that backs up before each release and rolls back automatically",
        "Asraa (Saudi Arabia): bilingual Laravel + Filament project-management platform with Kanban, form builder and HR modules",
        "Medboss: Laravel REST API (~100 endpoints) plus React student app and admin dashboard",
      ],
    },
    {
      role: "Full-Stack Developer",
      company: "Prokoders",
      companylogo: require("./assets/images/prokoders.jpeg"),
      date: "Apr 2023 – Oct 2023",
      desc: "UAE-based (Remote) software company delivering custom web solutions; team of 20.",
      descBullets: [
        "Built the core of the company's custom CMS, the foundation for client websites and the company's own site",
        "Delivered airport-management features, improved technical SEO and managed Linux staging servers",
      ],
    },
    {
      role: "Full-Stack Developer",
      company: "RemoColla (SMA Group)",
      companylogo: require("./assets/images/sma.png"),
      date: "Aug 2021 – Nov 2022",
      desc: "Tokyo-based (Remote) ICT consulting and software company; team of 30.",
      descBullets: [
        "Delivered 32 ERP modules and a central platform for managing multiple ERP instances",
        "Built REST APIs (Yii2, JWT) for a pharmaceutical manufacturer, plus Angular front ends and Chrome extensions",
      ],
    },
    {
      role: "Backend Developer",
      company: "Automata4",
      companylogo: require("./assets/images/automata.png"),
      date: "Aug 2020 – Feb 2021",
      desc: "Syrian company providing custom IT solutions and consulting services.",
      descBullets: [
        "Built services for a core banking system under financial-sector security constraints, and for hospital and university ERPs",
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Featured Work",
  subtitle:
    "Selected case studies: what the problem was, what I built and what changed.",
  projects: [
    {
      image: require("./assets/images/projects/ecommerce.jpg"),
      projectName: "Multi-Vendor E-Commerce Group (Saudi Arabia)",
      projectDesc:
        "Role: lead full-stack & DevOps engineer. " +
        "Problem: 12+ separately run stores were slow to change and costly to release. " +
        "Solution: re-platformed them to headless, with one multi-site Aimeos backend (JSON:API/GraphQL) and one multilingual Next.js storefront, " +
        "Fatora payments with stock-syncing webhooks, and multi-site order dashboards. " +
        "Result: a single codebase released to 16 brand targets by one GitLab CI/CD fan-out pipeline. " +
        "Stack: Laravel, Aimeos, Next.js, TypeScript, MySQL, Docker.",
      footerLink: [
        {
          name: "Oriental Steps",
          url: "https://oriental-steps.com",
        },
      ],
    },
    {
      image: require("./assets/images/projects/healthcare.jpg"),
      projectName: "Healthcare Websites (USA)",
      projectDesc:
        "Role: sole developer, from front end and back end to deployment. " +
        "Built Strapi + Next.js/TypeScript websites for 8+ clinics and practices (urgent care, autism therapy, allergy, endocrinology, orthopaedics). " +
        "Result: CSS payload cut by 57% (906 KB to 389 KB), ISR caching, technical SEO (hreflang, JSON-LD), security headers, " +
        "and CVE-2025-66478 patched across all sites within days of disclosure. Every release backs up first and rolls back automatically on failure.",
      footerLink: [
        {
          name: "Hermosa Allergy",
          url: "https://hermosaallergy.com",
        },
        {
          name: "Autism Care Therapy",
          url: "https://autismcaretherapy.com",
        },
        {
          name: "Advanced Urgent Care",
          url: "https://24advancedcare.com",
        },
        {
          name: "Elite Endocrinology",
          url: "https://eliteendocrinology.com",
        },
      ],
    },
    {
      image: require("./assets/images/projects/autodeploy.jpg"),
      projectName: "AutoDeploy: AI Deployment Platform (Own Product)",
      projectDesc:
        "Problem: non-technical builders can't containerise and host their apps. " +
        "Solution: upload a zip or connect a repo, and AutoDeploy detects the stack, generates a hardened multi-stage Dockerfile and serves the app on an HTTPS subdomain. " +
        "An AI Deploy Doctor uses the Claude API to explain failed builds in plain English. " +
        "Runs on Azure behind Traefik with Let's Encrypt, automated Postgres backups, container limits and host hardening. " +
        "Stack: TypeScript, Next.js 15, BullMQ, PostgreSQL, Redis, Docker, pnpm + Turborepo.",
      footerLink: [],
    },
    {
      image: require("./assets/images/projects/saas.jpg"),
      projectName: "Multi-Tenant SaaS E-Commerce (Own Product)",
      projectDesc:
        "Turns my Aimeos experience into a self-serve SaaS where merchants subscribe and launch their own store. " +
        "Modular monolith with a database per tenant, Stripe subscription billing, multi-location inventory, invoicing, " +
        "an event-driven financial ledger with reconciliation, multi-currency, GDPR export and OpenAPI docs. " +
        "Stack: Laravel 12, Filament, stancl/tenancy, Stripe, Redis, Horizon, Pest.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Muhammad-Nawlo/saas-ecommerce",
        },
      ],
    },
    {
      image: require("./assets/images/projects/filament.jpg"),
      projectName: "Open-Source Laravel / Filament Packages",
      projectDesc:
        "Four open-source packages, two of them listed on filamentphp.com: Sitemap Generator (splitting, news, image and hreflang entries), " +
        "Scout Manager (manage Laravel Scout indexes from the admin panel), Multitenant Plugin (custom domains, per-tenant databases, role-based permissions) " +
        "and Route Tracker (route hit counts on any disk). All ship with Pest tests, PHPStan and GitHub Actions CI.",
      footerLink: [
        {
          name: "Sitemap Generator",
          url: "https://github.com/Muhammad-Nawlo/filament-sitemap-generator",
        },
        {
          name: "Scout Manager",
          url: "https://github.com/Muhammad-Nawlo/filament-scout-manager",
        },
        {
          name: "Multitenant Plugin",
          url: "https://github.com/Muhammad-Nawlo/multitenant-plugin",
        },
        {
          name: "Route Tracker",
          url: "https://github.com/Muhammad-Nawlo/route-tracker",
        },
      ],
    },
    {
      image: require("./assets/images/projects/medboss.jpg"),
      projectName: "Medboss: Medical Exam-Prep Platform",
      projectDesc:
        "Exam preparation for medical students sitting the national licensing exam. " +
        "Built the Laravel REST API (~100 endpoints): question banks, quizzes, Excel question import, subscription codes, FCM push notifications, PDF generation and RBAC, " +
        "plus a React + TypeScript student app and a React + Ant Design admin dashboard.",
      footerLink: [
        {
          name: "Visit the website",
          url: "https://medboss.info",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Training 🏆"),
  subtitle: "Professional training alongside my software engineering degree.",

  achievementsCards: [
    {
      title: "CCNA",
      subtitle:
        "Cisco CCNA networking coursework: routing, switching and network fundamentals.",
      image: require("./assets/images/ccna.jpg"),
      imageAlt: "CCNA",
      footerLink: [],
    },
    {
      title: "IT Support",
      subtitle:
        "Google IT Support training: hardware, operating systems, networking and security.",
      image: require("./assets/images/itSupport.png"),
      imageAlt: "IT Support",
      footerLink: [],
    },
    {
      title: "Server Administration",
      subtitle: "MCSA Windows Server Administration course, New Horizons.",
      image: require("./assets/images/mcsa.jpeg"),
      imageAlt: "Server Administration",
      footerLink: [],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE"),

  talks: [],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Based in Riyadh and open to full-time opportunities in Saudi Arabia. Call, WhatsApp or e-mail me.",
  number: "+966560637563",
  email_address: "eng.muhammad.nawlo.it@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
};
