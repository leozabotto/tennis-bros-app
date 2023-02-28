import { BottomNavigationButton } from './index';

export default function BottomNavigationButton({
  href,
  Icon,
  isActiveDefinedBy,
  currentPath,
  onClick,
}: BottomNavigationButton) {
  const handleActiveClass = (): boolean => {
    switch (isActiveDefinedBy) {
      case 'path':
        return currentPath === href;
      default:
        return false;
    }
  };

  const isActive = handleActiveClass();
  const activeClass = isActive ? 'rounded-full bg-c-green-200 text-white' : '';

  return (
    <button
      onClick={onClick}
      className={`text-gray-500 hover:text-c-gray-600 justify-center inline-block 
      text-center p-2 ${activeClass}`}
    >
      <Icon className="m-auto rounded" />
    </button>
  );
}
