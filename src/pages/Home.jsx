import WhoWeAre from "../components/ who-we-are/WhoWeAre";
import ContactSection from "../components/contact/ContactSection";
import CTASection from "../components/cta/CTASection";
import Hero from "../components/home/Hero";
import Jobs from "../components/Jobs/Jobs";
import Partnerships from "../components/partnerships/Partnerships";
import WhatWeDo from "../components/what-we-do/WhatWeDo";

function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <WhatWeDo />
      <Partnerships />
      <CTASection />
      <Jobs />
      <ContactSection />
    </>
  );
}

export default Home;