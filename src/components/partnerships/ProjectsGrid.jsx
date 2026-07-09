import { projects } from "../../constants/projects";
import ProjectCard from "./ProjectCard";

function ProjectsGrid() {
  const cards = projects.filter((item) => !item.featured);

  return (
    <section className="mt-36 lg:mt-52">
      {/* Desktop */}
      <div className="hidden lg:grid grid-cols-2 gap-x-28 gap-y-44">
        {cards.map((project, index) => (
          <div
            key={project.id}
            className={index % 2 !== 0 ? "mt-40" : ""}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {/* Mobile */}
      <div className="space-y-20 lg:hidden">
        {cards.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            mobile
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsGrid;