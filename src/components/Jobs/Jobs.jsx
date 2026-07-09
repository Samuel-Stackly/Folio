import { ArrowRight } from "lucide-react";

import Container from "../common/Container";
import JobCard from "./JobCard";

import { jobs } from "../../constants/jobs";

import circularPath from "../../assets/images/circularpath.svg";
import logo from "../../assets/icons/logo.svg";

function Jobs() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">

      <img
        src={circularPath}
        alt=""
        className="pointer-events-none absolute left-20 top-0 w-[520px] opacity-40"
      />

      <Container>

        <div className="grid gap-20 lg:grid-cols-[420px_1fr]">

          {/* Left */}

          <div className="relative z-10">

            <div className="flex items-center gap-5">

              <img
                src={logo}
                alt=""
                className="h-6"
              />

              <span className="text-sm font-semibold text-[#5865F2]">
                05.
              </span>

              <span className="text-sm font-semibold text-[#5865F2]">
                We are hiring
              </span>

            </div>

            <h2 className="mt-8 text-[64px] font-bold leading-none text-[#252547]">
              Jobs
            </h2>

            <p className="mt-8 max-w-[340px] text-lg leading-9 text-[#66667A]">
              Agency is a full-service agency, busy designing and building beautiful digital products, brands, and experiences.
            </p>

            <div className="mt-14 flex items-center gap-4">

              <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C58AF7] text-white">
                <ArrowRight size={18} />
              </button>

              <span className="text-[#66667A]">
                Available jobs
              </span>

            </div>

          </div>

          {/* Right */}

          <div className="space-y-8">

            {jobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
              />
            ))}

          </div>

        </div>

      </Container>

    </section>
  );
}

export default Jobs;