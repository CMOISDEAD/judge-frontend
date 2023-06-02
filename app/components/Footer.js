export const Footer = () => {
  return (
    <footer className="bg-neutral-900 rounded shadow">
      <div className="w-full max-w-screen-xl mx-auto p-4 bg-neutral-900">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0"
          >
            <div className="inline-flex gap-1 self-center text-2xl font-extrabold whitespace-nowrap text-transparent bg-gradient-to-tr from-green-500 to-blue-400 bg-clip-text group transition ease-in-out delay-150">
              <div className="self-center text-2xl font-extrabold whitespace-nowrap text-transparent bg-gradient-to-tr from-green-500 to-blue-400 bg-clip-text inline-flex">
                [ X<span className="hidden group-hover:block">CUTION</span>
              </div>
              <div>]</div>
            </div>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-neutral-500 sm:mb-0">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a
                href="https://doom-portfolio.vercel.app/"
                className="hover:underline"
                target="_blank"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-2 border-neutral-500 sm:mx-auto" />
        <span className="block text-sm text-neutral-500 sm:text-center">
          © 2023{" "}
          <a href="https://github.com/CMOISDEAD" className="hover:underline">
            XCUTION™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
