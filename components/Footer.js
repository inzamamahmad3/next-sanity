import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl text-center">
          <a
            href={"/"}
            className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
          >
            🦄Builders
          </a>
          <p className="my-6 text-gray-500 dark:text-gray-400">
            Latest Blog about Blockchain. Latest market updates. Technology
            innovations.
          </p>
          <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
            <li>
              <Link href="/about">
                <a className="mr-4 hover:underline md:mr-6 ">About</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a className="mr-4 hover:underline md:mr-6 ">Blog</a>
              </Link>
            </li>
          </ul>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2022-2023{" "}
            <Link href="/" className="hover:underline">
              Builders
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
