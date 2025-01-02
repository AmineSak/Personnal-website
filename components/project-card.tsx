import { Project } from "@/lib/types";
import { Code, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <Image src={project.image} alt={project.description} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {project.title}
          <div className="badge badge-secondary">{project.field}</div>
        </h2>
        <p>{project.description}</p>

        <div className="flex gap-5">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-content hover:text-primary"
            >
              <Code className="h-5 w-5" />
              <span>Code</span>
            </Link>
          )}
          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-content hover:text-primary"
            >
              <ExternalLink className="h-5 w-5" />
              <span>Live Demo</span>
            </Link>
          )}
        </div>
        <div className="card-actions justify-end">
          {project.technologies.map((technology, index) => (
            <div key={index} className="badge badge-outline">
              {technology}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
