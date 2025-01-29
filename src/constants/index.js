import project1 from "../assets/projects/project_1.png";
import project2 from "../assets/projects/project_2.png";
import project3 from "../assets/projects/project_3.png";
import project4 from "../assets/projects/project_4.png";

export const HERO_CONTENT = `I’m a full-stack developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js). With hands-on experience in building scalable, user-centric web applications, I focus on creating innovative solutions and delivering seamless user experiences. Always learning and staying updated with the latest tech trends, I’m committed to building impactful, dynamic applications.`;

export const ABOUT_TEXT = `A dedicated Full-Stack Developer with expertise in the MERN stack (MongoDB, Express.js, React.js, Node.js). Passionate about crafting scalable, user-friendly web applications. Proficient in React, Tailwind CSS, and backend technologies like API development and database management. Continuously learning and staying ahead of the curve with emerging web technologies to build innovative solutions that drive digital transformation.`;


export const EXPERIENCES = [ 
  {
    year: "2024 - Present",
    role: "MERN Stack Developer Intern",
    company: "Luminar Technolab",
    description: `Currently developing and maintaining dynamic web applications using React.js and Node.js. Building RESTful APIs for seamless backend communication and integrating MongoDB for efficient data management. Independently delivering high-quality projects on time.`,
    technologies: ["JavaScript", "React.js", "Node.js", "Express.js", "MongoDB"],
  },
];


export const PROJECTS = [
  {
    title: "Budget Management Application",
    image: project1,
    description:
      "An interactive budget management application featuring dynamic budget creation, real-time expense tracking, and CRUD operations for budgets and expenses.",
    technologies: ["React", "React Router DOM", "React Bootstrap", "Local Storage API"],
  },
  {
    title: "To-Do List Application",
    image: project2,
    description:
      "A user-friendly task management app with features such as task creation, priority assignment, status updates, and task deletion.",
    technologies: ["React.js", "React-Bootstrap", "CSS", "JSON Server"],
  },
  {
    title: "Weather Viewer App",
    image: project3,
    description:
      "A responsive weather app displaying real-time weather data for user-specified locations.",
    technologies: ["React", "Fetch API", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Parallax Website",
    image: project4,
    description:
      "An immersive forest-themed website with calming imagery and parallax scrolling.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];


export const CONTACT = {
  address: "Thrissur, Kerala, India",
  phoneNo: "+91-6235441863",
  email: "adwaithnilajen007@gmail.com",
};
