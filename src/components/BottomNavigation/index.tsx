import { useEffect, useState } from 'react';
import Link from 'next/link';

import NavigationLink from './NavigationLink';
import BottomNavigationLinks from './Links';

export default function BottomNavigation() {
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(window.location.pathname.split('/')[1]);
  }, []);

  return (
    <>
      <section
        id="bottom-navigation"
        className="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow c-divider-top pt-2 pb-2"
      >
        <div id="tabs" className="flex justify-between pl-5 pr-5">
          {BottomNavigationLinks.map((item, index) => (
            <NavigationLink
              key={index}
              href={item.href}
              currentPath={currentPath}
              LinkIcon={item.LinkIcon}
            />
          ))}
        </div>
      </section>
    </>
  );
}
