import Router from "next/router";
import heroImage from "../../../../../public/images/launch.jpeg";

function HeroSection() {
  return (
    <div
      className=" overflow-hidden bg-no-repeat bg-cover "
      style={{
        backgroundImage: `url(${heroImage.src})`,
        height: "100vh",
        backgroundPosition: "center",
      }}
    >
      <div
        className=" top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <div className="flex justify-left items-center h-full">
          <div className=" text-white px-6 md:px-12">
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
              <span className="text-base tracking-wide">RECENT LAUNCH </span>{" "}
              <br />
              STARLINK MISSION
            </h1>

            <button
              type="button"
              className="inline-block px-7 py-3 border-2 border-white text-white font-medium text-sm leading-snug uppercase rounded hover:bg-white transition-colors duration-200 focus:outline-none focus:ring-0  hover:text-black  ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              onClick={() => Router.push("/login")}
            >
              VIEW LAUNCHES
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
