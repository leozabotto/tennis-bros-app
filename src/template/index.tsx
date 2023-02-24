import Head from 'next/head';

import TopBar from './TopBar';
import BottomNavigation from './BottomNavigation';
import AppDrawer from './Drawer';

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
      <main>
        <AppDrawer />
        <BottomNavigation />
      </main>
    </>
  );
}
