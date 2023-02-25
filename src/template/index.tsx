import Head from 'next/head';

import TopBar from './TopBar';
import BottomNavigation from './BottomNavigation';
import AppDrawer from './Drawer';
import Sidebar from './SideBar';

interface TemplatePageProps {
  pageTitle: string;
  children?: React.ReactNode;
}

export default function TemplatePage({
  children,
  pageTitle,
}: TemplatePageProps) {
  return (
    <>
      <Head>
        <title>{`${pageTitle} | Tennis Bros`}</title>
      </Head>

      <TopBar />

      <Sidebar />
      <AppDrawer />

      <main>
        <div className="p-4 pt-2 md:ml-64 pb-16 md:pb-0">{children}</div>
      </main>

      <BottomNavigation />
    </>
  );
}
