import React from "react";
import Image from "next/image";
// import Logo from "../public/inzamam-ahmad.jpg";
import Picture from "../public/inzama-ahmad.jpg";

const about = () => {
  return (
    <div>
      <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 sm:p-1 md-p-4 lg:p-6 ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-sans m-6 font-bold">
            Hello EveryOne, I&apos;m Inzamam Ahmad
          </h1>
          <div>
            <Image
              className="rounded-2xl shadow-md border border-gray-900 m-10 mb-10 p-10"
              src={Picture}
              height={300}
              width={300}
              alt="inzamam-ahmad"
            />
          </div>
          <div className="m-2 mb-3 sm:m-3 md:m-6 lg:m-10 p-2 sm:p-3 md:p-6 lg:p-10">
            <p className="m-auto text-xl ">
              I&apos;m a full stack software engineer. Currently Learning
              Blockchain Developement.
              <br /> Love to write about technical concepts. Currently building
              a tech community for Blockchain. <br />
              Web 3 advocate If you wanna write for this website you can
              directly msg. <br />
              This is for community. Contact me
            </p>
          </div>
          <div>
            <a
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              href="mailto:enzee274@gmail.com"
            >
              Contact Me 👉
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
