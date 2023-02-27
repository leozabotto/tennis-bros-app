import { useState, useRef } from 'react';
import { GetServerSidePropsContext } from 'next';

import Tabs, { ITabItem } from '@/components/Tabs';
import TemplatePage from '@/template';
import NewInvites from './components/NewInvites';
import MyInvites from './components/MyInvites';
import AcceptedInvites from './components/AcceptedInvites';
import RejectedInvites from './components/RejectedInvites';

import { authPrivate } from '@/utils/auth';
import { UserTokenData } from '@/hooks/useAuth';

type HomeTabs =
  | 'new-invites'
  | 'my-invites'
  | 'accepted-invites'
  | 'rejected-invites';

const getHomePagesByTabs = (currentTab: HomeTabs) => {
  switch (currentTab) {
    case 'new-invites':
      return <NewInvites />;
    case 'my-invites':
      return <MyInvites />;
    case 'accepted-invites':
      return <AcceptedInvites />;
    case 'rejected-invites':
      return <RejectedInvites />;
    default:
      return <></>;
  }
};

export default function Home({ user }: { user: UserTokenData }) {
  const [currentTab, setCurrentTab] = useState<HomeTabs>('new-invites');

  const handleTabChange = (tab: HomeTabs) => setCurrentTab(tab);

  const homeTabs = useRef<ITabItem[]>([
    {
      label: 'Novos',
      name: 'new-invites',
      onClick: () => handleTabChange('new-invites'),
    },
    {
      label: 'Meus Convites',
      name: 'my-invites',
      onClick: () => handleTabChange('my-invites'),
    },
    {
      label: 'Aceitos',
      name: 'accepted-invites',
      onClick: () => handleTabChange('accepted-invites'),
    },
    {
      label: 'Rejeitados',
      name: 'rejected-invites',
      onClick: () => handleTabChange('rejected-invites'),
    },
  ]);

  return (
    <TemplatePage pageTitle="Home" user={user}>
      <Tabs
        currentTab={currentTab}
        items={homeTabs.current}
        classes="fixed pt-10"
      />
      <div className="mt-20">{getHomePagesByTabs(currentTab)}</div>
    </TemplatePage>
  );
}

export const getServerSideProps = (cx: GetServerSidePropsContext) => {
  return authPrivate(cx);
};
