import { parseCookies } from 'nookies';

import Head from 'next/head';

import TopBar from './TopBar';
import BottomNavigation from './BottomNavigation';
import AppDrawer from './Drawer';
import Sidebar from './SideBar';
import useAuth, { UserTokenData } from '@/hooks/useAuth';

interface TemplatePageProps {
  pageTitle: string;
  children?: React.ReactNode;
}

export default function TemplatePage({
  children,
  pageTitle,
}: TemplatePageProps) {
  const { user } = useAuth();

  return (
    <>
      <Head>
        <title>{`${pageTitle} | Tennis Bros`}</title>
      </Head>

      <div>
        <TopBar user={user} />
        <Sidebar user={user} />
      </div>

      <main>
        <div className="p-4 md:ml-64 pb-16 md:pb-0">{children}</div>
      </main>

      <BottomNavigation />
    </>
  );
}
