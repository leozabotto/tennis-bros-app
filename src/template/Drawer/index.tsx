import { useState, useRef } from 'react';
import dynamic from 'next/dynamic';

const Drawer = dynamic(() => import('react-modern-drawer'), { ssr: false });
import 'react-modern-drawer/dist/index.css';

import {
  Icon,
  UilChartLine,
  UilEnvelopeShare,
  UilEstate,
  UilSignout,
  UilTennisBall,
  UilUserCircle,
} from '@iconscout/react-unicons';

import TriggerButton from './TriggerButton';
import { useRouter } from 'next/router';

type DrawerItem = {
  label: string;
  Icon: Icon;
  onClick: () => any;
  isActiveDefinedBy: string;
  href?: string;
  isElementOpen?: boolean;
};

const DrawerItemButton = ({
  label,
  Icon,
  onClick,
  isActiveDefinedBy,
  isElementOpen,
  href,
}: DrawerItem) => {
  const router = useRouter();
  const currentPath = router.pathname;

  const handleActiveClass = (): boolean => {
    switch (isActiveDefinedBy) {
      case 'path':
        return currentPath === href;
      case 'elementOpen':
        return isElementOpen as boolean;
      default:
        return false;
    }
  };

  const isActive = handleActiveClass();
  const activeClass = isActive ? 'rounded-full bg-c-green-200 text-white' : '';

  return (
    <button className="flex items-center gap-5" onClick={onClick}>
      <span
        className={`text-gray-500 hover:text-c-gray-600 ${activeClass} p-2`}
      >
        <Icon />
      </span>
      <span>{label}</span>
    </button>
  );
};

export default function AppDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawer = (): void => {
    setIsOpen(!isOpen);
  };

  const router = useRouter();

  const drawerItems = useRef<DrawerItem[]>([
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
      <TriggerButton handleDrawer={handleDrawer} />
      <Drawer open={isOpen} onClose={handleDrawer} direction="left">
        <div className="flex flex-col pl-5 pt-10">
          {drawerItems.current.map((item, index) => (
            <DrawerItemButton key={index} {...item} />
          ))}
        </div>
      </Drawer>
    </>
  );
}
