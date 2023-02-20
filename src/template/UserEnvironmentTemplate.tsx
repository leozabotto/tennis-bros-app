import BottomNavigation from '@/components/BottomNavigation';
import Head from 'next/head';

interface UserEnvironmentTemplateProps {
  pageTitle: string;
  children?: React.ReactNode;
}

export default function UserEnvironmentTemplate({
  children,
  pageTitle,
}: UserEnvironmentTemplateProps) {
  return (
    <>
      <Head>
        <title>{pageTitle} | Tennis Bros</title>
      </Head>
      <main>
        <BottomNavigation />
      </main>
    </>
  );
}
