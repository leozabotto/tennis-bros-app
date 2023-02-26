interface ButtonProps {
  children: React.ReactNode;
  classes?: string;
  disabled?: boolean;
  onClick: () => void;
}

export default function Button({
  disabled,
  children,
  onClick,
  classes,
  ...rest
}: ButtonProps & React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={children as string}
      {...rest}
      className={`w-full text-white bg-c-green-200 hover:bg-c-green-300 focus:outline-none focus:ring-4 focus:ring-c-green-100 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 disabled:bg-gray-200 disabled:text-gray-300 ${classes}`}
      type="button"
    >
      {children}
    </button>
  );
}
