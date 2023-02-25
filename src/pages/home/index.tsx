import { useState, useRef } from 'react';

import Tabs, { ITabItem } from '@/components/Tabs';
import TemplatePage from '@/template';
import NewInvites from './components/NewInvites';
import MyInvites from './components/MyInvites';
import AcceptedInvites from './components/AcceptedInvites';
import RejectedInvites from './components/RejectedInvites';

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

export default function Home() {
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
    <TemplatePage pageTitle="Home">
      <Tabs currentTab={currentTab} items={homeTabs.current} />
      <div className="pt-5">{getHomePagesByTabs(currentTab)}</div>
    </TemplatePage>
  );
}
