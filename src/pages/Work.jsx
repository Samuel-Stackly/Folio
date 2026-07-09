import ContactSection from "../components/contact/ContactSection";
import CTASection from "../components/cta/CTASection";
import RecentWorks from "../components/RecentWorks/RecentWorks";
import VisualIdentity from "../components/VisualIdentity/VisualIdentity";
import NumbersSection from "../components/work/numbers/NumbersSection";
import OverviewSection from "../components/work/overview/OverviewSection";
import WorkHero from "../components/work/WorkHero";

function Work() {
  return (
    <>
      <WorkHero />
      <OverviewSection />
      <NumbersSection />
      <VisualIdentity />
      <CTASection />
      <RecentWorks />
      <ContactSection />
    </>
  );
}

export default Work;