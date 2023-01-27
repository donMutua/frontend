import Image from "next/image";
import spacexSVG from "../../../public/images/spacex-logo.svg";

interface Props {
  loggedIn: boolean;
}

export default function NavBar({ loggedIn }: Props) {
  return (
    <header className="bg-black">
      <nav
        className="max-w-7xl mx-auto px-4 items-center  sm:px-6 lg:px-8"
        aria-label="Top"
      >
        <div className="w-full py-6 flex items-center justify-between border-b border-white lg:border-none">
          <div className="flex items-center">
            <a href="#">
              <span className="sr-only">space-x</span>

              <Image
                src={spacexSVG}
                style={{ width: "150px" }}
                alt="space x logo"
              />
            </a>
          </div>
          <div className="ml-10 space-x-4">
            {loggedIn ? (
              <a
                href="#"
                className="inline-block px-7 py-3 border-2 border-white text-white font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              >
                Sign out
              </a>
            ) : (
              <a
                href="#"
                className="inline-block px-7 py-3 border-2 border-white text-white font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              >
                Sign in
              </a>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
