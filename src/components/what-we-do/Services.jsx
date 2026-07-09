import { services } from "../../constants/services";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <section className="mt-16 lg:mt-24">
      {/* Desktop */}
      <div className="hidden lg:block">
        <div className="mx-auto flex h-[340px] max-w-[1180px] items-center justify-between rounded-[38px] bg-white px-12 shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="space-y-5 lg:hidden">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            mobile
          />
        ))}
      </div>
    </section>
  );
}

export default Services;