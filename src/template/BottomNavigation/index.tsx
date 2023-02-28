import { useEffect, useState, useRef } from 'react';

import {
  Icon,
  UilChartLine,
  UilEnvelopeShare,
  UilEstate,
  UilTennisBall,
} from '@iconscout/react-unicons';

import BottomNavigationButton from './BottomNavigationButton';
import { UserTokenData } from '@/hooks/useAuth';
import { infoToaster, successToaster } from '@/utils/toaster';
import { useRouter } from 'next/router';

export type BottomNavigationButton = {
  href: string;
  Icon: Icon;
  currentPath?: string;
  isActiveDefinedBy?: string;
  onClick?: () => any;
};

export default function BottomNavigation({ user }: { user: UserTokenData }) {
  const [currentPath, setCurrentPath] = useState('');
  const router = useRouter();

  const handleCopyReferLink = () => {
    navigator?.share({
      url: `https://${window.location.host}/app-invite?userId=${user.id}`,
    });

    navigator?.clipboard?.writeText(
      `https://${window.location.host}/app-invite?userId=${user.id}`
    );

    successToaster('Link copiado para área de transferência');
  };

  useEffect(() => {
    setCurrentPath(window.location.pathname.split('/')[1]);
  }, []);

  const navigationItems = useRef<BottomNavigationButton[]>([
    {
      href: '/home',
      isActiveDefinedBy: 'path',
      onClick: () => router.push('home'),
      Icon: UilEstate,
    },
    {
      href: '/matches',
      isActiveDefinedBy: 'path',
      onClick: () => infoToaster('Em desenvolvimento'),
      Icon: UilTennisBall,
    },
    {
      href: '/stats',
      isActiveDefinedBy: 'path',
      onClick: () => infoToaster('Em desenvolvimento'),
      Icon: UilChartLine,
    },
    {
      href: '/refer-friend',
      isActiveDefinedBy: 'path',
      onClick: () => handleCopyReferLink(),
      Icon: UilEnvelopeShare,
    },
  ]);

  return (
    <>
      <nav
        id="bottom-navigation"
        className="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow c-divider-top pt-2 pb-2"
      >
        <div
          id="bottom-navigation-tabs"
          className="flex justify-between pl-5 pr-5"
        >
          {navigationItems.current.map(
            (item: BottomNavigationButton, index: number) => (
              <BottomNavigationButton key={index} {...item} />
            )
          )}
        </div>
      </nav>
    </>
  );
}
