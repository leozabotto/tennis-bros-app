import Image from 'next/image';
import Link from 'next/link';

import logo from '@/assets/images/tennis-bros-logo.png';
import AppDrawer from '../Drawer';

export default function TopBar() {
  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="container grid grid-cols-3 md:grid-cols-1 mx-auto">
        <div>
          <AppDrawer />
        </div>
        <div className="flex grow justify-center">
          <Link href="home">
            <Image
              src={logo}
              className="h-7 w-7 sm:h-9 sm:w-9"
              alt="Tennis Bros Logo"
              width={512}
              height={512}
              priority={true}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
