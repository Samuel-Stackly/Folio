import Container from "../common/Container";

import RecentWorksHeader from "./RecentWorksHeader";
import RecentWorksGrid from "./RecentWorksGrid";

function RecentWorks() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-32">
      <Container>

        <div className="relative">

          {/* Header */}

          <RecentWorksHeader />

          {/* Cards */}

          <div className="mt-16 lg:mt-20">
            <RecentWorksGrid />
          </div>

        </div>

      </Container>
    </section>
  );
}

export default RecentWorks;