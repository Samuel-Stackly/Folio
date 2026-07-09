import slideImage from "../../../assets/images/work-slide-1.png";

function NumbersSlider() {
  return (
    <div className="mt-20 lg:mt-24">

      {/* Desktop */}

      <div className="hidden lg:block">
        <img
          src={slideImage}
          alt="By the Numbers"
          className="mx-auto w-full max-w-[1120px]"
        />
      </div>

      {/* Mobile */}

      <div className="lg:hidden">
        <img
          src={slideImage}
          alt="By the Numbers"
          className="w-full"
        />
      </div>

    </div>
  );
}

export default NumbersSlider;