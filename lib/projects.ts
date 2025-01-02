import { Project } from "./types";
import codeflow_pic from "@/public/assets/images/codeflow_pic.png";

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
];
