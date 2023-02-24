import { Icon } from '@iconscout/react-unicons';
import { useRouter } from 'next/router';

export interface INavButton {
  label: string;
  Icon: Icon;
  onClick: () => any;
  isActiveDefinedBy: string;
  href?: string;
  isElementOpen?: boolean;
  classes?: string;
}

export default function NavButton({
  label,
  Icon,
  onClick,
  isActiveDefinedBy,
  isElementOpen,
  href,
  classes = '',
}: INavButton) {
  const router = useRouter();
  const currentPath = router.pathname;

  const handleActiveClass = (): boolean => {
    switch (isActiveDefinedBy) {
      case 'path':
        return currentPath === href;
      case 'elementOpen':
        return isElementOpen as boolean;
      default:
        return false;
    }
  };

  const isActive = handleActiveClass();
  const activeClass = isActive ? 'rounded-full bg-c-green-200 text-white' : '';

  return (
    <button
      className={`flex items-center gap-5 w-full ${classes}`}
      onClick={onClick}
    >
      <span
        className={`text-gray-500 hover:text-c-gray-600 ${activeClass} p-2`}
      >
        <Icon />
      </span>
      <span>{label}</span>
    </button>
  );
}
