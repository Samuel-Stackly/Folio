import { ArrowRight } from "lucide-react";

function ProjectCard({ project, mobile = false }) {
  if (mobile) {
    return (
      <article>
        <div
          className="relative overflow-hidden rounded-[24px]"
          style={{
            background: project.bg,
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full transition duration-500"
          />
        </div>

        <h3 className="mt-8 text-[34px] font-bold text-[#252547]">
          {project.title}
        </h3>

        <p className="mt-4 text-base leading-8 text-[#66667A]">
          {project.description}
        </p>

        <button className="mt-8 flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#252547] transition hover:bg-[#252547] hover:text-white">
          <ArrowRight size={22} />
        </button>
      </article>
    );
  }

  return (
    <article className="group">
      <h3 className="mb-8 text-[42px] font-bold text-[#252547]">
        {project.title}
      </h3>

      <div
        className="relative flex h-[430px] items-center justify-center overflow-hidden rounded-[28px] transition duration-500 group-hover:-translate-y-2"
        style={{
          background: project.bg,
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-[320px] transition duration-500 group-hover:scale-105"
        />

        <button className="absolute bottom-8 right-8 flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#252547] bg-white transition hover:bg-[#252547] hover:text-white">
          <ArrowRight size={22} />
        </button>
      </div>

      <p className="mt-8 max-w-[360px] text-base leading-8 text-[#66667A]">
        {project.description}
      </p>
    </article>
  );
}

export default ProjectCard;