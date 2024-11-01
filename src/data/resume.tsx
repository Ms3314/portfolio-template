import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Samiuddin",
  initials: "MS",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/hyderabad",
  description:
    "I do cooding , designing and lastly Marketting ",
  summary:
    "people summarize me as Enthusiastic , I love the three things I do and cooding is the one thing that I love the most , My personal goal is to build a startup and build meaningfull products",
  avatarUrl: "/plane.jpg",
  skills: [
    "React",
    "Next.js",
    "MongoDB",
    "Javascript",
    "Firebase",
    "AWS",
    "Tailwind",
    "Node.js",
    "Python",
    "C++",
    "Java",
    "Figma",
    "Canva",

  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "mdsamiuddin2005@outlook.com",
    tel: "+918125624958",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Ms3314",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/sami-linkdin",
        icon: Icons.linkedin,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Samiuddin",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Google Developer Clubs MJCET",
      badges: [],
      location: "Remote",
      title: "Wed Lead",
      logoUrl: "/Google.jpeg",
      start: "September 2024",
      end: "present",
      description:
        "Working with the design and the tech team to make amazing products fot GDG MJCET",
    },
    {
      company: "Club Optimus",
      badges: [],
      location: "Remote",
      title: "Technical team member",
      logoUrl: "/optimus.jpeg",
      start: "July 2024",
      end: "present",
      description:
        "Learning to build robots and some other amazing stuff",
    },
    {
      company: "Computer Society of India MJCET",
      badges: [],
      location: "Santa Clara, CA",
      title: "Marketting Head",
      logoUrl: "/CSI.jpeg",
      start: "November 2023",
      end: "present",
      description:
        "Initated Marketting campains such as in person Marketting and class to class Marketting ",
    },
    {
      company: "Esports MJCET",
      badges: [],
      location: "San Jose, CA",
      title: "Design Team",
      logoUrl: "/Esports.png",
      start: "February 2024",
      end: "present",
      description:
        "Made Designs for instagram posts and also for the posters",
    },
    
  ],
  education: [
    {
      school: "Muffakham Jah College of Engineering & Technology",
      href: "https://mjcollege.ac.in/",
      degree: "Bachelor's of Engineering in Computer Science (BE)",
      logoUrl: "/mjcet.png",
      start: "2023",
      end: "2027",
    },
    
  ],
  projects: [
    {
      title: "Blog Editor",
      href: "https://blog-editor-frontend.onrender.com/",
      active: true,
      description:
        "A Medium clone were you can write blogs and read others blogs ... still working on it !!",
      technologies: [
        "Editor.js",
        "Javascript",
        "Firebase",
        "MongoDB",
        "TailwindCSS",
        "Express",
        "Node JS",
        "React",
      ],
      links: [
        {
          type: "Website",
          href: "https://blog-editor-frontend.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/blog.png",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    }
]} as const;
