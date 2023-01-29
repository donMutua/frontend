import React from "react";
import Image from "next/image";

interface CardProps {
  mission_name: string;
  launch_date_local: string;
  flikr_image: string;
}

const fallBackImage =
  "https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1308&q=80";

function Card({ mission_name, launch_date_local, flikr_image }: CardProps) {
  const handleError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.src = fallBackImage;
  };

  return (
    <div className="relative bg-black overflow-hidden  ">
      <Image
        className="w-full h-75 object-cover object-center"
        src={flikr_image}
        alt={mission_name}
        onError={handleError}
        width={500}
        height={500}
      />
      <div className="p-10 ">
        <p className="text-white py-5">{launch_date_local}</p>
        <h3 className="text-lg font-medium py-5 text-white">{mission_name}</h3>

        <button
          type="button"
          className="inline-block px-7 py-3 border-2 border-white text-white font-medium text-sm leading-snug uppercase rounded hover:bg-white transition-colors duration-200 focus:outline-none focus:ring-0  hover:text-black  ease-in-out"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
        >
          VIEW LAUNCH
        </button>
      </div>
    </div>
  );
}

export default Card;
