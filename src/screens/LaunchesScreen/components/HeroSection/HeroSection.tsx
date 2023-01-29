import heroImage from "../../../../../public/images/launch2.jpeg";

function HeroSection() {
  return (
    <div
      className=" relative overflow-hidden bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${heroImage.src})`,
        height: "80vh",
        backgroundPosition: "center",
      }}
    >
      <div
        className=" top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <div className="flex justify-center items-center h-full">
          <div className=" text-white text-center px-6 md:px-12">
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
              <span className="text-base tracking-wide">WELCOME TO ALL</span>{" "}
              <br />
              LAUNCHES
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
