/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Shubh Arya",
  logo_name: "ShubhArya",
  
  subTitle:
    "",
  resumeLink:
    "mailto:learner.shubh@gmail.com",
  portfolio_repository: "",
};

const socialMediaLinks = [
  
  {
    name: "Github",
    link: "https://github.com/shubh-learner",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shubhashrestha-bohra-a5357788/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCLJSeaYDoDlMym1xmrm-NFg",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:learner.shubh@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/shubharyame",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/Arya.Shubh/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/i_like_artists/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Machine Learning & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website and hosting on platforms.",
        "⚡ Developing web applications using Flask",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        
      ],
      softwareSkills: [
       
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "",
    },
  ],
};

const degrees = {
  degrees: [
    {
     
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Kirill Eremenko",
      logo_path: "small-udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-d3b621a8-7777-4717-93f3-28e026496a4f/",
      alt_name: "",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning and Computer Vision",
      subtitle: "- Hadelin de Ponteves",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-0cc7dbb7-a428-4ba4-9100-4f03fc2e75fa/",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "AWS - Well Architechted",
      subtitle: "- GCP Training",
      logo_path: "aws_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1qdTEMo0jvP1GjS11Q8TlEByf7S9-xz-0/view?usp=sharing",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },

    {
      title: "Microsoft Certified Professional",
      subtitle: "",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1As6k6AMfehQTTLSphNjpY2W70Ny-A4cV/view?usp=sharing",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Microsoft Technology Specialist",
      subtitle: "SQL Server",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1He2DBNbdBNBSoHaJ8Z9NnJ9V8oB8gsfE/view?usp=sharing",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    }
    
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Volunteership",
  description:
    "I have worked with evolving startups as ML Developer and Automation Lead. I have also worked with a well established MNCs.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "IT Experience",
      experiences: [
        {
          title: "Data Scientist",
          company: "RecruitInflux Ltd.",

          logo_path: "legato_logo.png",
          duration: "Dec 2019 - PRESENT",
          
          location: "Pune, Maharashtra",
          color: "#0879bf",
        },
        {
          title: "Team Lead",
          company: "Infosys Ltd.",
          
          logo_path: "infosys_logo.png",
          duration: "2.5 Years",
          location: "London, UK",
           color: "#9b1578",
        },
        {
          title: "System Engineer/Test Analyst",
          company: "Infosys Ltd.",
           logo_path: "infosys_logo.png",
          duration: "6 Years",
          location: "Hyderabad, Andhra Pradesh",
                color: "#fc1f20",
        },
      ],
    },
    
    {
      title: "Volunteerships",
      experiences: [
       
        {
          title: "Contributor",
          company: "Github, Kaggle, StackOverflow",
           logo_path: "github_logo.png",
                 color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Individual Projects",
  description:
    "These projects are developed on variety of Machine Learning and AI concepts, and then deployed on the cloud services. Please Note: These projects are developed outside my Organization capacity.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "",
    description:
      "Say Hi on any of the below mentioned platform. We can even discuss on topics like machine learning, data science or AI, if you like. Feel free to drop an email if you are facing any issue on my individual projects mentioned in the 'Project' category.",
  },
 
  addressSection: {
    title: "Address",
    subtitle:
      "Pune, Maharastra, India - 411057",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/oba1Yatj1TVB5Kv97",
  },
  phoneSection: {
    title: "Email",
    subtitle: "learner.shubh@gmail.com",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
