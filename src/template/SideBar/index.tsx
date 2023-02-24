import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import {
  UilEstate,
  UilTennisBall,
  UilChartLine,
  UilEnvelopeShare,
  UilUserCircle,
  UilSignout,
} from '@iconscout/react-unicons';

import userProfilePlaceholder from '@/assets/images/user-profile-placeholder.png';

import NavButton, { INavButton } from '@/components/NavButton';

export default function Sidebar() {
  const router = useRouter();

  const navItems = useRef<INavButton[]>([
    {
      href: '/home',
      isActiveDefinedBy: 'path',
      onClick: () => router.push('home'),
      label: 'Início',
      Icon: UilEstate,
    },
    {
      href: '/matches',
      isActiveDefinedBy: 'path',
      onClick: () => router.push('matches'),
      label: 'Minhas Partidas',
      Icon: UilTennisBall,
    },
    {
      href: '/stats',
      isActiveDefinedBy: 'path',
      onClick: () => router.push('stats'),
      label: 'Estatísticas',
      Icon: UilChartLine,
    },
    {
      href: '/refer-friend',
      isActiveDefinedBy: 'path',
      onClick: () => router.push('refer-friend'),
      label: 'Convidar Amigo',
      Icon: UilEnvelopeShare,
    },
    {
      href: '/profile',
      isActiveDefinedBy: 'path',
      onClick: () => router.push('profile'),
      label: 'Perfil',
      Icon: UilUserCircle,
    },
    {
      isActiveDefinedBy: 'elementOpen',
      isElementOpen: false,
      onClick: () => alert('Open logout confirmation'),
      label: 'Logout',
      Icon: UilSignout,
    },
  ]);

  return (
    <>
      <aside
        id="default-sidebar"
        className="invisible md:visible fixed top-0 c-pt-15 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-white border-r border-gray-200">
          <div className="mt-5">
            <div className="flex justify-center">
              <Image
                src={userProfilePlaceholder}
                width={100}
                height={100}
                priority={true}
                alt="Imagem de Perfil do Usuário"
              />
            </div>
            <span className="block text-center mt-2">Leonardo Zabotto</span>
            <span className="block text-center text-c-gray-200">
              @leozabotto
            </span>
          </div>
          <ul className="flex flex-col mt-10">
            {navItems.current.map((item, index) => (
              <li key={index} className="hover:bg-gray-100 p-2 w-full rounded">
                <NavButton key={index} {...item} />
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}
