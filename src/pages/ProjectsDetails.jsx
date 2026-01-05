import { useParams } from "react-router-dom";
import { projects } from "../data/Projects";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold">{project.name}</h1>
      <p className="mt-4">{project.description}</p>

      <p className="mt-4"><strong>Tech Stack:</strong> {project.stack.join(", ")}</p>
      <p><strong>Challenges:</strong> {project.challenges}</p>
      <p><strong>Future Plans:</strong> {project.future}</p>

      <div className="mt-6 flex gap-4">
        <a href={project.live} className="text-accent">Live</a>
        <a href={project.github} className="text-accent">GitHub</a>
      </div>
    </div>
  );
}
