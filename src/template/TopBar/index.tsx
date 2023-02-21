import Image from 'next/image';

import logo from '@/assets/images/tennis-bros-logo.png';
import Link from 'next/link';

export default function TopBar() {
  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="container grid grid-cols-3 md:grid-cols-1 mx-auto">
        <div>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex grow items-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Abrir Menu Lateral</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex grow justify-center">
          <Link href="home">
            <Image
              src={logo}
              className="h-7 w-7 sm:h-9 sm:w-9"
              alt="Tennis Bros Logo"
              width={512}
              height={512}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
