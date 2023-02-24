interface IDrawerTriggerButton {
  handleDrawer: () => void;
}

export default function DrawerTriggerButton({
  handleDrawer,
}: IDrawerTriggerButton) {
  return (
    <button
      type="button"
      className="inline-flex grow items-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      onClick={handleDrawer}
    >
      <span className="sr-only">Abrir Menu Lateral</span>
      <svg
        className="w-6 h-6"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clipRule="evenodd"
        ></path>
      </svg>
    </button>
  );
}
