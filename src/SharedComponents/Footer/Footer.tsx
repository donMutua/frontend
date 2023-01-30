function Footer() {
  return (
    <footer className="bg-black  text-white py-10">
      <div className="flex w-full text-xs justify-center md:flex-row flex-col text-center">
        <p className="mr-4 ">SPACEX © 2022</p>
        <p className="mb-0">
          <a href="#" className=" hover:text-gray-300">
            TWITTER
          </a>
          <a href="#" className=" hover:text-gray-300 ml-4">
            YOUTUBE
          </a>
          <a href="#" className=" hover:text-gray-300 ml-4">
            INSTAGRAM
          </a>
          <a href="#" className=" hover:text-gray-300 ml-4">
            FLICKR
          </a>
          <a href="#" className=" hover:text-gray-300 ml-4">
            LINKEDIN
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
