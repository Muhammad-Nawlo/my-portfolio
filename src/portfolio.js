/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Nawlo",
  title: "Hi all, I'm Muhammad",
  location: emoji("📍 Based in Riyadh, Saudi Arabia · Open to full-time roles in KSA"),
  subTitle: emoji(
    `Senior Full-Stack & DevOps Engineer with 6+ years designing, building and operating business-critical systems end to end:
GRC/compliance platforms, ERP and project management, core banking, healthcare, multi-tenant SaaS, headless CMS and
multi-vendor e-commerce. I deliver across the full stack (ASP.NET Core, Laravel, Node.js, React/Next.js, TypeScript) and
own the whole delivery lifecycle: Docker, CI/CD pipelines, Terraform, AWS and Azure, Linux hardening, backups and
zero-downtime releases with automatic rollback. 30+ production websites and platforms shipped for clients in Saudi Arabia,
the USA, Germany, France, the UAE and Japan. Native Arabic speaker, fluent in English.`
  ),
  resumeLink: `${process.env.PUBLIC_URL}/Muhammad_Nawlo_CV.pdf`, // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};


// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Muhammad-Nawlo",
  linkedin: "https://www.linkedin.com/in/muhammad-nawlo",
  gmail: "eng.muhammad.nawlo.it@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "SENIOR FULL-STACK & DEVOPS ENGINEER · .NET · LARAVEL · NODE.JS · REACT/NEXT.JS · AWS & AZURE",
  skills: [
    emoji(
      "⚡ Build business-critical platforms: GRC/compliance, ERP & project management, banking, healthcare, CMS and multi-vendor e-commerce"
    ), emoji(
      "⚡ Design secure backends and REST/GraphQL APIs with ASP.NET Core, Laravel and Node.js, including RBAC, claims-based auth, workflows and multi-tenancy"
    ), emoji(
      "⚡ Architect multi-tenant SaaS: database-per-tenant isolation, Stripe subscription billing and event-driven financial ledgers"
    ), emoji(
      "⚡ Develop config-driven, multilingual (Arabic/English, RTL) frontends with React, Next.js, TypeScript and Tailwind CSS"
    ), emoji(
      "⚡ Model and optimise data in SQL Server, Oracle, PostgreSQL, MySQL and MongoDB, including reporting and OLAP-style data cubes"
    ), emoji(
      "⚡ Own the DevOps lifecycle: Docker, CI/CD (Bitbucket, GitLab, GitHub Actions, Jenkins), Terraform, AWS and Azure, automatic rollbacks, backups, monitoring and Linux hardening"
    ), emoji(
      "⚡ Publish open-source Laravel/Filament packages and build AI-powered tooling with the Claude API"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C# / .NET",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Filament / Livewire",
      fontAwesomeClassname: "fas fa-layer-group"
    },
    {
      skillName: "Node.js / Express",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js-square"
    },
    {
      skillName: "React / Next.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Strapi (Headless CMS)",
      fontAwesomeClassname: "fas fa-feather-alt"
    },
    {
      skillName: "Tailwind / Sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "SQL Server / Oracle / PostgreSQL / MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB / Redis",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "Terraform",
      fontAwesomeClassname: "fas fa-cubes"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Bitbucket Pipelines",
      fontAwesomeClassname: "fab fa-bitbucket"
    },
    {
      skillName: "GitLab CI/CD",
      fontAwesomeClassname: "fab fa-gitlab"
    },
    {
      skillName: "GitHub Actions",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "Linux / Nginx",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "AI / LLM (Claude API)",
      fontAwesomeClassname: "fas fa-robot"
    },
  ],
  display: true // Set false to hide this section, defaults to true
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
      descBullets: [
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend (ASP.NET Core / Laravel / Node.js)", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Laravel / PHP / Filament",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend (React / Next.js / TypeScript)",
      progressPercentage: "80%"
    },
    {
      Stack: "Databases (SQL Server / Oracle / PostgreSQL / MySQL / MongoDB)",
      progressPercentage: "80%"
    }, {
      Stack: "DevOps (Docker / CI/CD / Linux / Nginx)",
      progressPercentage: "80%"
    }, {
      Stack: "Cloud (AWS / Azure / Terraform)",
      progressPercentage: "70%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
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
        "Built a scalable RBAC system for three governance lines with dynamic role-to-resource mapping and claims-based authorization",
        "Developed a workflow/approval module for the asset lifecycle (programs, contracts, BIA, RIA) with automated e-mail alerts",
        "Engineered a reporting subsystem (risk matrices, protection-needs, outsourcing) plus an OLAP-style data cube for self-service analysis",
        "Built REST APIs and configurable import/export pipelines over Oracle and SQL Server (Dapper/EF Core) for integrations and system migration",
        "Led security hardening (input validation, encryption at rest and in transit) and coordinated regular penetration testing",
        "Own production operations: Dockerised .NET + Next.js services behind Nginx, Bitbucket CI/CD with health-checked automatic rollback",
        "Provisioned and operate AWS infrastructure with Terraform (ECS Fargate, RDS SQL Server, ALB, ECR, Secrets Manager, OIDC deploys) and manage the Azure environments",
      ]
    },
    {
      role: "Full-Stack Developer",
      company: "Azurreo",
      companylogo: require("./assets/images/azurreo.png"),
      date: "Jun 2025 – Apr 2026",
      desc: "Paris-based (Remote) global telecom-outsourcing and technical services company with 15+ years in telecommunications.",
      descBullets: [
        "Developed new features and resolved production issues in the company's main platform, from implementation through code review, testing and release",
        "Maintained and extended the internal tool suite used by 8 teams to communicate, coordinate work and generate invoices",
        "Designed and built a real-time notification system used across the company's internal tools",
        "Led the upgrade and modernisation of the internal tool suite: framework/dependency upgrades, refactoring and bug fixing",
        "Containerised the internal tools with Docker and introduced CI/CD pipelines for automated testing and deployment",
        "Managed the tools' cloud environments on Azure and AWS: virtual machines, storage, access control, backups and monitoring",
        "Acted as the go-to engineer for internal teams, triaging and resolving their issues and feature requests",
      ]
    },
    {
      role: "Full-Stack Developer",
      company: "Reterra",
      companylogo: require("./assets/images/reterra.jpg"),
      date: "Jan 2025 – Jun 2025",
      desc: "Prop-tech company building real-estate management solutions.",
      descBullets: [
        "Implemented new features end to end (backend APIs, database and UI) in the main real-estate platform, and diagnosed and fixed production bugs",
        "Built companion mini-CMS and mini-ERP modules integrated with the core platform",
        "Provisioned and managed development, staging and production environments on AWS (EC2, RDS, S3) with Docker, Nginx and SSL",
        "Built CI/CD pipelines for automated deployments and set up backups and monitoring for production",
      ]
    },
    {
      role: "Freelance Senior Full-Stack & DevOps Engineer",
      company: "Self-employed",
      companylogo: require("./assets/images/freelancer.png"),
      date: "Feb 2021 – Present",
      desc: "Continuous freelance delivery alongside full-time roles: ERPs, e-commerce, CMS, SaaS and cloud/server operations for clients in Saudi Arabia, the USA and Syria.",
      descBullets: [
        "Saudi Arabia: built and run a group of 12+ multi-vendor online stores (Al-Hasnaa, Oriental Steps, Sofia's Stores, Mtgry and more) on the Laravel-based Aimeos framework",
        "Re-platformed the group to headless: one multi-site Aimeos backend (JSON:API/GraphQL) plus one Next.js storefront codebase released to 16 brand targets by a GitLab CI/CD fan-out pipeline, with Fatora payments and webhooks",
        "USA: sole developer (frontend, backend and deployment) of Strapi + Next.js CMS websites for 7+ Hermosa medical group clinics and Tarabichi Hip & Knee",
        "Cut CSS payload by 57% and added ISR caching, technical SEO (hreflang, JSON-LD) and security headers; patched CVE-2025-66478 across client sites",
        "Dockerised every client stack, with GitLab CI/CD deploying over SSH, automatic backup and rollback, and Linux VPS administration (Nginx, PM2, SSL)",
        "Asraa (Saudi Arabia): project management platform (Laravel + Filament) with Kanban, workflow stages, form builder, analytics dashboards and HR modules",
        "Medboss: Laravel REST API (~100 endpoints), React student app and React + Ant Design admin for a medical exam-prep platform",
        "Earlier client work (2021–2023): social-video and social-network backends, inventory & accounting, restaurant menus, Yii2 apps",
      ]
    },
    {
      role: "Full-Stack Developer",
      company: "Prokoders",
      companylogo: require("./assets/images/prokoders.jpeg"),
      date: "Apr 2023 – Oct 2023",
      desc: "UAE-based (Remote) software company delivering custom web solutions.",
      descBullets: [
        "Developed features for an airport management system",
        "Built the core of the company's custom CMS, used as the foundation for client websites and the company's main website",
        "Improved technical SEO across client websites and resolved defects in existing projects",
        "Managed the Linux staging servers (Nginx, SSL) and the deployment process for client projects",
      ]
    },
    {
      role: "Full-Stack Developer",
      company: "RemoColla (SMA Group)",
      companylogo: require("./assets/images/sma.png"),
      date: "Aug 2021 – Nov 2022",
      desc: "Tokyo-based (Remote) ICT consulting and software company.",
      descBullets: [
        "Developed 32 ERP modules (user management, attendance management, ...) and a central platform for managing multiple ERP instances",
        "Built REST APIs (Yii2, JWT) for a pharmaceutical manufacturer (Aphamea), including Excel reporting and barcode generation",
        "Built Chrome extensions to support client workflows, and Angular front ends backed by PHP APIs",
        "Managed the staging server and Git workflow for the development team",
      ]
    },
    {
      role: "Backend Developer",
      company: "Automata4",
      companylogo: require("./assets/images/automata.png"),
      date: "Aug 2020 – Feb 2021",
      desc: "Syrian company providing custom IT solutions and consulting services.",
      descBullets: [
        "Developed new services and features for a core banking system, within the security and reliability constraints of the financial sector",
        "Contributed to ERP systems for hospitals and universities",
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Client platforms, open-source packages and products I have built, from e-commerce in Saudi Arabia to AI tooling.",
  projects: [
    {
      image: '',
      projectName: "Case Study: Multi-Vendor E-Commerce Group (Saudi Arabia)",
      projectDesc: "Client: a business in Saudi Arabia running a group of online stores (Al-Hasnaa, Oriental Steps, Mtgry, Sofia's Stores and more). " +
        "Phase 1: built and customised multi-vendor stores on the Laravel-based Aimeos framework, with a reusable extension for per-store theme and config. " +
        "Phase 2: re-platformed to headless, with one multi-site Aimeos backend (JSON:API/GraphQL) serving 10+ storefront brands, a multilingual Next.js storefront, " +
        "Fatora payment gateway with webhooks, multi-site order dashboards, tax and blog management, and GitLab CI/CD. " +
        "Stack: PHP, Laravel, Aimeos, Next.js, TypeScript, MySQL.",
      footerLink: [
        {
          name: "Oriental Steps",
          url: "https://oriental-steps.com"
        },
        {
          name: "Sofia's Stores",
          url: "https://sofiasstores.com"
        }
      ]
    },
    {
      image: '',
      projectName: "AutoDeploy: AI Deployment Platform (Own Product)",
      projectDesc: "Deployment platform for non-technical builders: upload a zip or connect a repo, and AutoDeploy detects the stack, generates a hardened multi-stage Dockerfile and serves the app on an HTTPS subdomain. " +
        "An AI Deploy Doctor uses the Claude API to diagnose failed builds in plain English. " +
        "Runs on an Azure VM behind Traefik with Let's Encrypt, with automated Postgres backups to Azure Blob, container limits, host hardening and monitoring. " +
        "Stack: TypeScript, Next.js 15, BullMQ, PostgreSQL, Redis, Docker, Traefik, Azure, Claude API, pnpm + Turborepo.",
      footerLink: []
    },
    {
      image: '',
      projectName: "Multi-Tenant SaaS E-Commerce (Own Product)",
      projectDesc: "Turns my Aimeos e-commerce experience into a self-serve SaaS where merchants subscribe and launch their own store. Modular-monolith SaaS with a database per tenant: Stripe subscription billing for the landlord, and per-tenant catalog, cart, checkout, orders, " +
        "inventory (multi-location), invoicing and an event-driven financial ledger with reconciliation. Multi-currency, GDPR export, OpenAPI docs. " +
        "Stack: Laravel 12, Filament, stancl/tenancy, Stripe, Redis, Horizon, Pest.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Muhammad-Nawlo/saas-ecommerce"
        }
      ]
    },
    {
      image: '',
      projectName: "Filament Sitemap Generator",
      projectDesc: "Open-source Laravel/Filament plugin generating XML sitemaps with splitting, news, image and alternate-language entries, and search-engine ping. Pest tests, PHPStan and GitHub Actions CI.",
      footerLink: [
        {
          name: "Plugin Page",
          url: "https://filamentphp.com/plugins/muhammad-nawlo-sitemap-generator"
        },
        {
          name: "GitHub",
          url: "https://github.com/Muhammad-Nawlo/filament-sitemap-generator"
        }
      ]
    }, {
      image: '',
      projectName: "Filament Scout Manager",
      projectDesc: "Open-source Filament plugin to discover Scout-searchable models and manage Laravel Scout search indexes and settings from the admin panel.",
      footerLink: [
        {
          name: "Plugin Page",
          url: "https://filamentphp.com/plugins/muhammad-nawlo-scout-manager"
        },
        {
          name: "GitHub",
          url: "https://github.com/Muhammad-Nawlo/filament-scout-manager"
        }
      ]
    },
    {
      image: '',
      projectName: "Filament Multitenant Plugin",
      projectDesc: "Open-source Filament plugin for multi-tenant apps: tenant management, custom domains, automatic tenant databases and role-based permissions on top of stancl/tenancy.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Muhammad-Nawlo/multitenant-plugin"
        }
      ]
    },
    {
      image: '',
      projectName: "Laravel Route Tracker",
      projectDesc: "Open-source Laravel package that logs hit counts and last-used timestamps for every route via middleware, stored on any filesystem disk (local, S3).",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Muhammad-Nawlo/route-tracker"
        }
      ]
    },
    {
      image: '',
      projectName: "Healthcare Websites (USA)",
      projectDesc: "Sole developer (frontend, backend and deployment) of headless CMS websites (Strapi + Next.js/TypeScript) for a US group of medical and cosmetic clinics: urgent care, autism therapy, allergy, endocrinology and cosmetics. " +
        "Multilingual, SEO-optimised (hreflang, JSON-LD, ISR) and Dockerised, shipped through GitLab CI/CD with automatic backup and rollback.",
      footerLink: [
        {
          name: "AUC",
          url: "https://24advancedcare.com"
        }, {
          name: "ACT",
          url: "https://autismcaretherapy.com"
        }, {
          name: "ALS",
          url: "https://autismlearningspace.com"
        },
        {
          name: "Hermosa Allergy",
          url: "https://hermosaallergy.com"
        }, {
          name: "Elite Endocrinology",
          url: "https://eliteendocrinology.com"
        }, {
          name: "Hermosa Cosmetic",
          url: "https://hermosacosmeticcenter.com"
        },
        {
          name: "Hermosa Medical",
          url: "https://hermosamedicalcenter.com"
        },
      ]
    },
    {
      image: '',
      projectName: "Tarabichi Hip & Knee (USA)",
      projectDesc: "Website for an orthopaedic surgery practice, built end to end: Strapi CMS backend, Next.js + TypeScript + Tailwind frontend, appointment booking, surgeries catalogue, " +
        "flip-book patient booklet (PDF), blog and gallery, plus SEO (sitemap, robots, analytics). Dockerised, with a GitLab CI/CD pipeline that backs up and rolls back automatically.",
      footerLink: []
    },
    {
      image: '',
      projectName: "Medboss",
      projectDesc: "Exam-preparation platform for medical students preparing for the national licensing exam. Laravel REST API (~100 endpoints): question banks, quizzes, " +
        "Excel question import, subscription codes, FCM push notifications, PDF generation and RBAC. Also a React + TypeScript student app and a React + Ant Design admin dashboard.",
      footerLink: [
        {
          name: "Visit the website",
          url: "http://medboss.info"
        }
      ]
    },
    {
      image: '',
      projectName: "Asraa: Project Management Platform (Saudi Arabia)",
      projectDesc: "Laravel + Filament platform for a Saudi client to manage projects, tasks, departments and workflow stages with confidentiality levels: Kanban board, dynamic form builder with templates, " +
        "role-based policies, location picker and analytics dashboards (progress, overdue tasks, department activity), plus HR modules (payroll, loans, attendance, assets, contracts). Arabic and English.",
      footerLink: []
    },
    {
      image: '',
      projectName: "Reterra",
      projectDesc: "Prop-tech real-estate management platform with companion mini-CMS and mini-ERP modules.",
      footerLink: [
        {
          name: "Visit the website",
          url: "https://reterra.io"
        }
      ]
    }, {
      image: '',
      projectName: "Prokoders",
      projectDesc: "Company website running on the custom CMS core I built at Prokoders.",
      footerLink: [
        {
          name: "Visit the website",
          url: "https://prokoders.com"
        }
      ]
    },
    {
      image: '',
      projectName: "Residential Complex Management",
      projectDesc: "Team-built microservices system for a multi-service residential compound: user, real-estate, restaurant, car, services, ads and mail services behind an API gateway (Node.js, Express, MongoDB, Firebase), plus a React + Ant Design dashboard.",
      footerLink: [
        {
          name: "Backend Repository",
          url: "https://github.com/Muhammad-Nawlo/backend-city-management-system"
        },
        {
          name: "Dashboard Repository",
          url: "https://github.com/Muhammad-Nawlo/dashboard-city-management-system"
        }
      ]
    },
    {
      image: '',
      projectName: "Acquisitions SaaS: Full DevOps Lifecycle",
      projectDesc: "SaaS backend (Node.js, Express, Drizzle ORM, Neon Postgres) run through the complete DevOps lifecycle: multi-stage Docker dev/prod targets, ephemeral per-developer DB branches (Neon Local), " +
        "GitHub Actions for lint, format and tests (Jest/Supertest), and multi-arch (amd64/arm64) image builds pushed with branch, SHA and timestamp tags. Hardened with JWT, Arcjet rate limiting and bot protection, Helmet and Winston logging.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Muhammad-Nawlo/acquisitions"
        }
      ]
    },
    {
      image: '',
      projectName: "Aphamea",
      projectDesc: "REST APIs (Yii2, JWT) for managing Aphamea, a pharmaceutical manufacturing company, with Excel reporting and barcode generation.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Muhammad-Nawlo/aphamea"
        }
      ]
    },
    {
      image: '',
      projectName: "Listing Party",
      projectDesc: "Real-time podcast listening-party app with live chat, built with Laravel Reverb (WebSockets), Livewire Volt and Flux.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Muhammad-Nawlo/listing-party"
        }
      ]
    },
    {
      image: '',
      projectName: "Mimic",
      projectDesc: "REST APIs for a video-based social media app: stories, challenges, rankings, comments and multilingual content, with Passport/JWT auth, FFmpeg video processing and Firebase notifications.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Muhammad-Nawlo/Mimic"
        }
      ]
    },
    {
      image: '',
      projectName: "KBC Social Platform Backend",
      projectDesc: "Laravel backend for a social platform with groups, events, real-time messaging over WebSockets (Pusher), reactions and media handling.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Muhammad-Nawlo/KBC-Back-end"
        }
      ]
    },
    {
      image: '',
      projectName: "Make It Easy: Inventory & Accounting",
      projectDesc: "Laravel inventory and accounting system: stores, items and units, pricing, customers, suppliers, treasuries and invoices, with barcode generation and DataTables.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Muhammad-Nawlo/Make_It_Easy"
        }
      ]
    },
    {
      image: '',
      projectName: "Parking API",
      projectDesc: "Laravel REST API for zone-based parking: vehicles and parking sessions, documented with Scribe.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Muhammad-Nawlo/Parking_Api"
        }
      ]
    },
    {
      image: '',
      projectName: "Shopping Cart (Angular + Yii2)",
      projectDesc: "Angular single-page shop with JWT authentication, backed by a Yii2 REST API.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Muhammad-Nawlo/Shopping-Cart"
        }
      ]
    },
    {
      image: '',
      projectName: "PHP MVC Micro-framework",
      projectDesc: "A lightweight MVC framework written in vanilla PHP, covering routing, controllers, views, migrations and a DI container from scratch.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Muhammad-Nawlo/MVC"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Training & Certifications 🏆 "),
  subtitle:
    "Professional training alongside my software engineering degree.",

  achievementsCards: [
    {
      title: "CCNA",
      subtitle:
        "Cisco CCNA networking coursework: routing, switching and network fundamentals.",
      image: require("./assets/images/ccna.jpg"),
      imageAlt: "CCNA",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "IT Support",
      subtitle:
        "Google IT Support training: hardware, operating systems, networking and security.",
      image: require("./assets/images/itSupport.png"),
      imageAlt: "IT Support",
      footerLink: [
        // {
        //   name: "View Google Assistant Action",
        //   url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        // }
      ]
    }, {
      title: "Server Administration",
      subtitle:
        "MCSA Windows Server Administration course, New Horizons.",
      image: require("./assets/images/mcsa.jpeg"),
      imageAlt: "Server Administration",
      footerLink: [
        // {
        //   name: "View Google Assistant Action",
        //   url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        // }
      ]
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/share/p/1C5mApnWXG/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Based in Riyadh and open to full-time opportunities in Saudi Arabia. Call, WhatsApp or e-mail me.",
  number: "+966560637563",
  email_address: "eng.muhammad.nawlo.it@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
  isHireable
};
