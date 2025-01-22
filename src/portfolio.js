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
  title: "Hi all, I'm Muhmmad",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Laravel / PHP and some other cool libraries and frameworks for +4 years."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1HbtkaTopv1-ZDhES3tJGSksVpdI7xZDb/view?usp=drive_link", // Set to empty to hide the button
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
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ), emoji(
      "⚡ Create responsive and user-friendly web pages"
    ), emoji(
      "⚡ Develop server-side components and functionality."
    ), emoji(
      "⚡ Make efficient APIs."
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Ameen institution",
      logo: '',
      subHeader: "Bachelor's degree",
      duration: "2018 - 2019",
      desc: "Score : 93.7%",
      descBullets: [
      ]
    },
    {
      schoolName: "Aleppo University",
      logo: require("./assets/images/university-aleppo.jpeg"),
      subHeader: "Informatics Engineer",
      duration: "2019 - 2024",
      desc: "Score : 79.80%",
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
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "MERN Stack",
      progressPercentage: "70%"
    },
    {
      Stack: "Laravel/PHP",
      progressPercentage: "80%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Backend Developer",
      company: "Automata4",
      companylogo: require("./assets/images/automata.png"),
      date: "08/2020 - 02/2021",
      desc: "Automata4 Group is a Syrian company dedicated to providing high quality custom IT solutions and Consulting services.",
      descBullets: [
        'Working on Bank systems',
        'Learning how a system work',
        'Adding more service to a bank system',
      ]
    },
    {
      role: "Full-Stack Developer",
      company: "Remocolla (SMA Group)",
      companylogo: require("./assets/images/sma.png"),
      date: "08/2021 - 11/2022",
      desc: "RemoColla is a Japanese ICT company located in Tokyo. It oﬀers high-quality business and ICT consulting services as well as software application"
      , descBullets: [
        'Working on ERP Systems',
        'Creating platform of ERPs management',
        'Developing chrome extensions',
        'Managing staging server and git',
      ]
    },
    {
      role: "Full-Stack Developer",
      company: "Prokoders",
      companylogo: require("./assets/images/prokoders.jpeg"),
      date: "04/2023 - 10/2023",
      desc: "Prokoders drives growth and innovation globally through cutting-edge software solutions."
      , descBullets: [
        'Working on CMS Systems',
        'Building The core of custom CMS System',
        'Increase SEO in their websites',
        'improving/ﬁxing some issues in previous projects',
        'Managing staging servers',
      ]
    },
    {
      role: "Full-Stack Developer",
      company: "Freelancer",
      companylogo: require("./assets/images/freelancer.png"),
      date: "01/2024 - present",
      desc: "Working with Three different people who have their own projects"
      , descBullets: [
        'Working on CMS Systems',
        'Working on open-source E-commerce System called Aimeos',
        'Working on a medicine platform called Medboss',
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
      projectName: "Medboss",
      projectDesc: "Student platform for medical students to study for the national exam",
      footerLink: [
        {
          name: "Visit the website",
          url: "http://medboss.info"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: '',
      projectName: "Hermosa Group",
      projectDesc: "A group of sites related to the medical and cosmetic sector (AUC,Hermosa Allergy,Elite,Hermosa Cosmatic,Hermosa Medical,...)",
      footerLink: [
        {
          name: "AUC",
          url: "https://24advancedcare.com"
        },
        {
          name: "Hermosa Allergy",
          url: "https://hermosaallergy.com"
        }, {
          name: "Elite",
          url: "https://eliteendocrinology.com"
        }, {
          name: "Hermosa Cosmatic",
          url: "https://hermosacosmeticcenter.com"
        },
        {
          name: "Hermosa Medical",
          url: "https://hermosamedicalcenter.com"
        },
        //  you can add extra buttons here.
      ]
    },
    {
      image: '',
      projectName: "E-Commerce Group",
      projectDesc: "A group of e-commerce using aimeos framework and customize it",
      footerLink: [
        {
          name: "Hasna Store",
          url: "https://alhasnaa.site"
        },
        {
          name: "Oriental steps",
          url: "https://orientalsteps.site"
        },
        {
          name: "Mtgry Store",
          url: "https://mtgry.site"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: '',
      projectName: "Multi-Service residential complex",
      projectDesc: "A microservice project for managing residential complex",
      footerLink: [
        {
          name: "Dashboard Repository",
          url: "https://github.com/Muhammad-Nawlo/dashboard-city-management-system"
        },
        {
          name: "Backend Repository",
          url: "https://github.com/Muhammad-Nawlo/backend-city-management-system"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: '',
      projectName: "Mimic",
      projectDesc: "Social app (developing apis)",
      footerLink: [
        {
          name: "Visit Github Repo",
          url: "https://github.com/Muhammad-Nawlo/Mimic"
        }
      ]
    },
    {
      image: '',
      projectName: "Aphamea",
      projectDesc: "I created APIs for managing aphamea company (A company specialized in creating pharmaceuticals)",
      footerLink: [
        {
          name: "Visit Github Repo",
          url: "https://github.com/Muhammad-Nawlo/aphamea"
        }
      ]
    },
    {
      image: '',
      projectName: "Popup system",
      projectDesc: "This is a basic implementation of popup builder using laravel framework and sweet alert library",
      footerLink: [
        {
          name: "Visit Github Repo",
          url: "https://github.com/Muhammad-Nawlo/Pop-up_System"
        }
      ]
    }, {
      image: '',
      projectName: "Youtube clone",
      projectDesc: "I created youtube clone using Yii2 framework for improving my skills in this framework",
      footerLink: [
        {
          name: "Visit Github Repo",
          url: "https://github.com/Muhammad-Nawlo/Youtube-Clone"
        }
      ]
    }, {
      image: '',
      projectName: "Shopping Cart",
      projectDesc: "I created youtube clone using Yii2 framework for improving my skills in this framework",
      footerLink: [
        {
          name: "Visit Github Repo",
          url: "https://github.com/Muhammad-Nawlo/Shopping-Cart"
        }
      ]
    },
    {
      image: '',
      projectName: "Micro framework",
      projectDesc: "This is a simple implementation of mvc framework via vanilla php",
      footerLink: [
        {
          name: "Visit Github Repo",
          url: "https://github.com/Muhammad-Nawlo/MVC"
        }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "CCNA",
      subtitle:
        "Passionate about networking, pursuing CCNA for the sheer love of it.",
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
        "Starting to take google course in IT Support",
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
        "Taking MCSA Course from New Horizon Center",
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
      event_url: "https://www.facebook.com/events/2339906106275053/"
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
