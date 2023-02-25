import { Fragment } from 'react';
import { Icon, UilEllipsisV } from '@iconscout/react-unicons';
import { Menu, Transition } from '@headlessui/react';

type DropdownMenuItem = {
  label: string;
  Icon?: Icon;
  onClick: () => void;
  isHidden: boolean;
};

interface DropdownMenuProps {
  items?: DropdownMenuItem[];
}

export default function DropdownMenu({ items }: DropdownMenuProps) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-auto justify-center rounded-md border border-gray-200 bg-white px-1 py-1 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-c-green-200 focus:ring-offset-2 focus:ring-offset-gray-100">
          <UilEllipsisV aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-auto origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {items
              ?.filter((item) => !item.isHidden)
              .map(({ Icon, label, onClick }: DropdownMenuItem, index) => (
                <Menu.Item key={index}>
                  <a
                    href="#"
                    className={
                      'flex flex-nowrap w-auto items-center gap-4 text-gray-700 block px-4 py-2 text-sm'
                    }
                    onClick={onClick}
                  >
                    {Icon && <Icon />}
                    {label}
                  </a>
                </Menu.Item>
              ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
