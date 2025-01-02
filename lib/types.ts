import { StaticImageData } from "next/image";

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  github: string;
  image: StaticImageData;
  field: string;
}
