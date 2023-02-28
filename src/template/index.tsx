import Head from 'next/head';

import TopBar from './TopBar';
import BottomNavigation from './BottomNavigation';
import Sidebar from './SideBar';
import { UserTokenData } from '@/hooks/useAuth';

interface TemplatePageProps {
  pageTitle: string;
  children?: React.ReactNode;
  user: UserTokenData;
}

export default function TemplatePage({
  children,
  pageTitle,
  user,
}: TemplatePageProps) {
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

      <BottomNavigation user={user} />
    </>
  );
}
