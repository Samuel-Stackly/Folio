import { ArrowRight } from "lucide-react";
import ctaImage from "../../assets/images/cta.png";

function JobCard({ job }) {
  if (job.featured) {
    return (
      <div className="flex items-center justify-between overflow-hidden rounded-[28px] bg-[#252547] p-8 shadow-xl">

        <div>
          <h3 className="text-[28px] font-bold text-white">
            {job.title}
          </h3>

          <p className="mt-3 text-gray-400">
            {job.experience}
          </p>

          <button className="mt-8 text-white">
            <ArrowRight size={22} />
          </button>
        </div>

        <div className="ml-8 rounded-[24px] bg-[#5865F2] p-5">
          <img
            src={ctaImage}
            alt={job.title}
            className="w-[130px]"
          />
        </div>

      </div>
    );
  }

  return (
    <div className="rounded-[28px] bg-white p-8 shadow-[0_25px_60px_rgba(0,0,0,0.06)] transition hover:-translate-y-1">

      <div className="flex items-center gap-3">
        <h3 className="text-[28px] font-bold text-[#252547]">
          {job.title}
        </h3>

        {job.count && (
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#356AE6] text-xs font-semibold text-white">
            {job.count}
          </span>
        )}
      </div>

      <p className="mt-3 text-gray-500">
        {job.experience}
      </p>

      <button className="mt-8 text-[#252547]">
        <ArrowRight size={22} />
      </button>

    </div>
  );
}

export default JobCard;