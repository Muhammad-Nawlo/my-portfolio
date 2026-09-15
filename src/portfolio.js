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
  subTitle: emoji(
    `Senior Full-Stack Engineer with 5+ years building and running business-critical systems end to end: GRC/compliance
platforms, ERP, banking, CMS and multi-vendor e-commerce. I deliver across the full stack (ASP.NET Core, Laravel,
Node.js, React/Next.js) and own what happens after the merge: Docker, CI/CD pipelines, AWS (ECS, RDS) with Terraform
and Linux production servers. Native Arabic speaker, fluent in English.`
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
  subTitle: "SENIOR FULL-STACK ENGINEER · .NET · LARAVEL · REACT/NEXT.JS · AWS & DEVOPS",
  skills: [
    emoji(
      "⚡ Build business-critical platforms: GRC/compliance, ERP, banking, CMS and multi-vendor e-commerce"
    ), emoji(
      "⚡ Design secure backends and REST APIs with ASP.NET Core, Laravel and Node.js, including RBAC, claims-based auth and multi-tenancy"
    ), emoji(
      "⚡ Develop config-driven, responsive frontends with React, Next.js and Tailwind CSS"
    ), emoji(
      "⚡ Model and optimise data in SQL Server, Oracle, MySQL and MongoDB, including reporting and OLAP-style data cubes"
    ), emoji(
      "⚡ Ship and operate production: Docker, CI/CD pipelines, AWS (ECS, RDS) with Terraform, Nginx and Linux servers"
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
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
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
      skillName: "Sass / CSS",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "SQL Server / Oracle / MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
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
      skillName: "CI/CD",
      fontAwesomeClassname: "fab fa-bitbucket"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
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
      Stack: "Laravel / PHP",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend (React / Next.js)",
      progressPercentage: "80%"
    },
    {
      Stack: "Databases (SQL Server / Oracle / MySQL)",
      progressPercentage: "80%"
    }, {
      Stack: "DevOps (Docker / CI/CD / Linux)",
      progressPercentage: "75%"
    }, {
      Stack: "Cloud (AWS / Terraform)",
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
        "Built REST APIs and configurable import/export pipelines over Oracle and SQL Server (Dapper/EF) for integrations and system migration",
        "Led security hardening (input validation, encryption at rest and in transit) and coordinated regular penetration testing",
        "Own production operations: Dockerised .NET + Next.js services behind Nginx, Bitbucket CI/CD with health-checked automatic rollback",
        "Provisioned and operate AWS infrastructure with Terraform (ECS Fargate, RDS SQL Server, ALB, ECR, Secrets Manager, OIDC deploys)",
      ]
    },
    {
      role: "Full-Stack Developer",
      company: "Azurreo",
      companylogo: require("./assets/images/azurreo.png"),
      date: "Jun 2025 – Apr 2026",
      desc: "Paris-based (Remote) global telecom-outsourcing and technical services company with 15+ years in telecommunications.",
      descBullets: [
        "Designed and built a real-time notification system used across the company's internal tools",
        "Led the upgrade and modernisation of the internal tool suite: framework/dependency upgrades, refactoring and bug fixing",
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
        "Developed features for the core real-estate management platform, plus companion mini-CMS and mini-ERP modules",
        "Set up and managed development, staging and production server environments",
      ]
    },
    {
      role: "Freelance Full-Stack Developer",
      company: "Self-employed",
      companylogo: require("./assets/images/freelancer.png"),
      date: "Jan 2024 – Present",
      desc: "Remote projects for clients in Saudi Arabia, the USA and Syria.",
      descBullets: [
        "Saudi Arabia client: built and customised multi-vendor e-commerce stores on the Laravel-based Aimeos framework",
        "USA client: developed and maintain CMS websites for the Hermosa medical group (7+ clinic sites)",
        "Medboss: built an exam-preparation platform for medical students preparing for the national licensing exam",
        "Published two open-source Filament (Laravel) plugins listed on filamentphp.com",
      ]
    },
    {
      role: "Full-Stack Developer",
      company: "Prokoders",
      companylogo: require("./assets/images/prokoders.jpeg"),
      date: "Apr 2023 – Oct 2023",
      desc: "UAE-based (Remote) software company delivering custom web solutions.",
      descBullets: [
        "Built the core of the company's custom CMS, used as the foundation for client websites",
        "Improved technical SEO across client websites and resolved defects in existing projects",
        "Managed staging servers and deployments",
      ]
    },
    {
      role: "Full-Stack Developer",
      company: "RemoColla (SMA Group)",
      companylogo: require("./assets/images/sma.png"),
      date: "Aug 2021 – Nov 2022",
      desc: "Tokyo-based (Remote) ICT consulting and software company.",
      descBullets: [
        "Developed ERP systems and built a central platform for managing multiple ERP instances",
        "Built Chrome extensions to support client workflows",
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
  projects: [
    {
      image: '',
      projectName: "Filament Sitemap Generator",
      projectDesc: "Open-source Laravel/Filament plugin generating XML sitemaps with splitting, news, image and alternate-language entries, and search-engine ping.",
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
      projectDesc: "Open-source Filament plugin to manage Laravel Scout search indexes from the admin panel.",
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
      projectName: "E-Commerce Group (Saudi Arabia)",
      projectDesc: "Multi-vendor e-commerce stores for a Saudi client, built on and customised from the Laravel-based Aimeos framework.",
      footerLink: [
        {
          name: "Al-Hasnaa Store",
          url: "https://alhasnaa.site"
        },
        {
          name: "Oriental Steps",
          url: "https://orientalsteps.site"
        },
        {
          name: "Mtgry Store",
          url: "https://mtgry.site"
        }
      ]
    },
    {
      image: '',
      projectName: "Hermosa Medical Group (USA)",
      projectDesc: "CMS websites for a US group of medical and cosmetic clinics: advanced care, autism therapy, allergy, endocrinology and cosmetics.",
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
      projectName: "Medboss",
      projectDesc: "Exam-preparation platform for medical students preparing for the national licensing exam.",
      footerLink: [
        {
          name: "Visit the website",
          url: "http://medboss.info"
        }
      ]
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
      projectDesc: "Microservice-based system, with a separate backend and dashboard, for managing a multi-service residential compound.",
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
      projectName: "Aphamea",
      projectDesc: "REST APIs for managing Aphamea, a pharmaceutical manufacturing company.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Muhammad-Nawlo/aphamea"
        }
      ]
    },
    {
      image: '',
      projectName: "Mimic",
      projectDesc: "REST APIs for a social media application.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Muhammad-Nawlo/Mimic"
        }
      ]
    },
    {
      image: '',
      projectName: "PHP MVC Micro-framework",
      projectDesc: "A lightweight MVC framework written in vanilla PHP, covering routing, controllers and views from scratch.",
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
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+963953211985",
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
