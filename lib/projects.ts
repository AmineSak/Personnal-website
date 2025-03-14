import { Project } from "./types";
import codeflow_pic from "@/public/assets/images/codeflow_pic.png";
import website from "@/public/assets/images/website.png";
import maze from "@/public/assets/images/maze.png";

export const projects: Project[] = [
  {
    id: 1,
    title: "CodeFlow",
    description:
      "A social plateform for the computer science department of my school",
    technologies: ["Next.js", "MongoDB", "React"],
    link: "https://code-flow-kappa.vercel.app/",
    github: "https://github.com/AmineSak/CodeFlow",
    image: codeflow_pic,
    field: "WEB DEV",
  },
  {
    id: 2,
    title: "Personal Page",
    description: "My personal website to showcase my experience and portfolio",
    technologies: ["Next.js", "Hugging Face API"],
    link: "https://www.aminesakouhi.com/",
    github: "https://github.com/AmineSak/Personnal-website",
    image: website,
    field: "WEB DEV",
  },
  {
    id: 3,
    title: "Maze Runner",
    description: "Training an AI agent to solve mazes efficiently",
    technologies: ["Python", "Pytorch"],
    link: "https://github.com/AmineSak/MAZE-RUNN3R",
    github: "https://github.com/AmineSak/MAZE-RUNN3R",
    image: maze,
    field: "Reinforcement Learning",
  },
];
