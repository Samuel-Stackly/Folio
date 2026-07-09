import whoweare from "../../assets/images/whoweare.png";
import circularPath from "../../assets/images/circularpath.svg";

function Showcase() {
  return (
    <div className="relative">
      <img
        src={circularPath}
        alt=""
        className="absolute -left-20 top-0 w-[180px] opacity-20 lg:-left-40 lg:-top-24 lg:w-auto"
      />

      <img
        src={whoweare}
        alt="Who We Are"
        className="relative z-10 mx-auto w-full max-w-[780px]"
      />
    </div>
  );
}

export default Showcase;