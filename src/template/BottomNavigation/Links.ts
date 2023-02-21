import {
  Icon,
  UilChartLine,
  UilEnvelopeShare,
  UilEstate,
  UilTennisBall,
} from '@iconscout/react-unicons';

export type BottomNavigationLink = {
  href: string;
  LinkIcon: Icon;
  currentPath?: string;
};

const BottomNavigationLinks: BottomNavigationLink[] = [
  {
    href: 'home',
    LinkIcon: UilEstate,
  },
  {
    href: 'matches',
    LinkIcon: UilTennisBall,
  },
  {
    href: 'stats',
    LinkIcon: UilChartLine,
  },
  {
    href: 'refer-friend',
    LinkIcon: UilEnvelopeShare,
  },
];

export default BottomNavigationLinks;
