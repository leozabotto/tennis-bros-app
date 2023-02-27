import { useState, useRef } from 'react';
import { useRouter } from 'next/router';
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

import NavButton, { INavButton } from '@/components/NavButton';
import { UserTokenData } from '@/hooks/useAuth';

import TriggerButton from './TriggerButton';
import LogoutConfirmationModal from '@/components/LogoutConfirmationModal';
import { successToaster } from '@/utils/toaster';

export default function AppDrawer({ user }: { user: UserTokenData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleDrawer = (): void => {
    setIsOpen(!isOpen);
  };

  const router = useRouter();

  const handleCopyReferLink = () => {
    navigator?.share({
      url: `https://${window.location.host}/app-invite?userId=${user.id}`,
    });

    navigator?.clipboard?.writeText(
      `https://${window.location.host}/app-invite?userId=${user.id}`
    );

    setIsOpen(false);
    successToaster('Link copiado para área de transferência');
  };

  const drawerItems = useRef<INavButton[]>([
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
      onClick: () => handleCopyReferLink(),
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
      onClick: () => setIsLogoutModalOpen(true),
      label: 'Logout',
      Icon: UilSignout,
    },
  ]);

  return (
    <>
      <div className="inline-flex grow items-center">
        <TriggerButton handleDrawer={handleDrawer} />
      </div>
      <Drawer open={isOpen} onClose={handleDrawer} direction="left">
        <nav>
          <div className="flex flex-col pl-5 pr-5 pt-10">
            <ul>
              {drawerItems.current.map((item, index) => (
                <li key={index}>
                  <NavButton
                    {...item}
                    classes={'hover:bg-gray-100 p-2 rounded'}
                  />
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </Drawer>
      {isLogoutModalOpen && (
        <LogoutConfirmationModal
          isOpen={isLogoutModalOpen}
          setIsOpen={setIsLogoutModalOpen}
        />
      )}
    </>
  );
}
