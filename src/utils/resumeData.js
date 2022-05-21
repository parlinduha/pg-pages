/* eslint-disable import/no-anonymous-default-export */
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WebOutlinedIcon from "@mui/icons-material/WebOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
// import OfflineBoltOutlinedIcon from "@mui/icons-material/OfflineBoltOutlined";
import AspectRatioOutlinedIcon from "@mui/icons-material/AspectRatio";

export default {
  name: "Parlin Dh",
  title: "Fullstack Developer",

  birthday: "04th June 1996",
  address: "DKI Jakarta",
  phone: "0853-1236-4895",
  email: "dhparlin@gmail.com",

  socials: {
    Github: {
      link: "https://github.com/ParlinDh",
      text: "Parlin Dh",
      icon: <GitHubIcon />,
    },
    LinkIn: {
      link: "https://www.linkedin.com/in/perlindungan-duha-79466a154/",
      text: "My LinkIn",
      icon: <LinkedInIcon />,
    },
    Instagram: {
      link: "https://www.instagram.com",
      text: "Parlin Dh",
      icon: <InstagramIcon />,
    },
    Youtube: {
      link: "https://www.youtube.com",
      text: "Parlin Dh",
      icon: <YouTubeIcon />,
    },
  },

  about:
    "Started earnest brother believe an exposed so. Me he believing daughters if forfeited at furniture. Age again and stuff downs spoke. Late hour new nay able fat each sell. Nor themselves age introduced frequently use unsatiable devonshire get. They why quit gay cold rose deal park. One same they four did ask busy. Reserved opinions fat him nay position. Breakfast as zealously incommode do agreeable furniture. One too nay led fanny allow plate. \n\nQuick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat. Her bachelor honoured perceive securing but desirous ham required. Questions deficient acuteness to engrossed as. Entirely led ten humoured greatest and yourself. Besides ye country on observe. She continue appetite endeavor she judgment interest the met. For she surrounded motionless fat resolution may.",

  experiences: [
    {
      title: "Market Intelligence Analyst",
      date: "2021-Present",
      description:
        "memberikan dukungan IT di perusahaan menjadi admin penjualan online mendesain produk membuat dan memelihara website perusahaan",
    },
    {
      title: "Account Officer",
      date: "2020-2021",
      description:
        "memberikan dukungan IT di perusahaan menjadi admin penjualan online mendesain produk membuat dan memelihara website perusahaan",
    },
    {
      title: "IT Staff",
      date: "2019-2020",
      description:
        "memberikan dukungan IT di perusahaan menjadi admin penjualan online mendesain produk membuat dan memelihara website perusahaan",
    },
  ],
  educations: [
    {
      title: "Technical Information",
      date: "2016-2020",
      description: "Verified",
    },
    {
      title: "Senior High Scholl",
      date: "2011-2013",
      description: "Verified",
    },
    {
      title: "Junior High Scholl",
      date: "2009-2022",
      description: "Verified",
    },
  ],

  services: [
    {
      title: "Web Dev",
      description: "I have been working on web design for 10 years.",
      icon: <WebOutlinedIcon />,
    },

    {
      title: "Branding Identity",
      description:
        "We will make you a brand that is catchy and leaves a trace.",
      icon: <AssessmentOutlinedIcon />,
    },

    {
      title: "Illustrator",
      description: "I have been working on illustration design for 6 years.",
      icon: <AspectRatioOutlinedIcon />,
    },

    // {
    //   title: "Fast Delivery",
    //   description: "I deliver your business as fast as possible.",
    //   icon: <OfflineBoltOutlinedIcon />,
    // },
  ],

  Skills: [
    {
      title: "FRONT-END",
      description: ["Html", "ReactJs", "Typescript", "Boostrap", "Material UI"],
    },
    {
      title: "BACK-END",
      description: ["PHP", "JAVA", "NodeJS"],
    },
    {
      title: "DATABASE",
      description: ["Firebase", "Ms SQL Server", "MongoDB", "MYSQL"],
    },
    {
      title: "CONTROL SOURCE",
      description: ["Git", "Github"],
    },
  ],
  projects: [
    {
      tag: "Java",
      images: [
        "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        
      ],
      title: "Project Java App",
      description:
        "This My Project, This My Project, This My Project, This My Project",
      caption: "Show Description",
      links: [
        {
          link: "https://www.youtube.com/",
          icon: <YouTubeIcon />,
        },
        {
          link: "https://www.youtube.com/",
          icon: <GitHubIcon />,
        },
        {
          link: "https://www.youtube.com/",
          icon: <WebOutlinedIcon />,
        },
      ],
    },
  ],
};
