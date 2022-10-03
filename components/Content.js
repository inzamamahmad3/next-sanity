import React from "react";
import Image from "next/image";
import First from "../public/Metaverse.jpg";
import Second from "../public/blockchain.png";

const Content = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              We didn&apos;t reinvent the wheel
            </h2>
            <p className="mb-4">
              We are strategists, designers and developers. Innovators and
              problem solvers. Using existed resources to give you highly
              curated blog posts. Thats help to make decision about you next
              project investments etc.
            </p>
            <p>
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <Image
              className="w-full rounded-lg"
              src={First}
              alt="office content 1"
            />
            <Image
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src={Second}
              alt="office content 2"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;
