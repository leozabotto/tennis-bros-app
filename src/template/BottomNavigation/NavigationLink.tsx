import Link from 'next/link';

import { BottomNavigationLink } from './Links';

export default function NavigationLink({
  href,
  LinkIcon,
  currentPath,
}: BottomNavigationLink) {
  const activeClass =
    currentPath === href ? 'w-10 rounded-full bg-c-green-200 text-white' : '';

  return (
    <Link
      href={href}
      className={`text-gray-500 hover:text-c-gray-600 justify-center inline-block 
      text-center p-2 ${activeClass}`}
    >
      <LinkIcon className="m-auto rounded" />
    </Link>
  );
}
