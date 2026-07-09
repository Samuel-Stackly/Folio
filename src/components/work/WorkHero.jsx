import WorkHeroDesktop from "./WorkHeroDesktop";
import WorkHeroMobile from "./WorkHeroMobile";

function WorkHero() {
  return (
    <>
      <div className="hidden lg:block">
        <WorkHeroDesktop />
      </div>

      <div className="lg:hidden">
        <WorkHeroMobile />
      </div>
    </>
  );
}

export default WorkHero;