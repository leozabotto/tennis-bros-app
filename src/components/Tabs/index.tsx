export interface ITabItem {
  name: string;
  label: string;
  onClick: () => void;
  currentTab?: string;
}

interface ITabs {
  items: ITabItem[];
  classes?: string;
  currentTab: string;
}

const activeTabClasses = 'text-c-green-200 border-c-green-200';

const TabItem = ({ name, currentTab, label, onClick }: ITabItem) => {
  const isThisTabCurrent = name === (currentTab as string);

  return (
    <li className="mr-2">
      <a
        href="#"
        className={`inline-block whitespace-nowrap font-semibold p-4 border-b-2 rounded-t-lg hover:text-c-green-100 hover:border-c-green-100 ${
          isThisTabCurrent ? activeTabClasses : ''
        }`}
        aria-current={isThisTabCurrent ? 'page' : false}
        onClick={onClick}
      >
        {label}
      </a>
    </li>
  );
};

export default function Tabs({ items, currentTab, classes = '' }: ITabs) {
  return (
    <div
      className={`text-sm font-medium text-center text-gray-500 border-b border-gray-200 bg-white w-full ${classes}`}
    >
      <ul className="flex -mb-px overflow-x-auto">
        {items.map((tab, index) => (
          <TabItem key={index} {...tab} currentTab={currentTab} />
        ))}
      </ul>
    </div>
  );
}
