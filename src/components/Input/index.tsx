interface InputProps {
  type: string;
  id: string;
  name?: string;
  label: string;
  hasError: boolean;
  errorMessage: string;
  [rest: string]: any;
}

export default function Input({
  type,
  name,
  label,
  id,
  hasError,
  errorMessage,
  ...rest
}: InputProps) {
  return (
    <div>
      <div className="relative">
        <input
          type={type}
          id={id}
          name={name}
          className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-c-green-200 peer ${
            hasError ? ' border-red-600 text-red-600' : ''
          }`}
          placeholder=" "
          {...rest}
        />
        <label
          htmlFor={id}
          className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-c-green-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
        >
          {label}
        </label>
      </div>
      {hasError && (
        <div>
          <p className="mt-2 text-xs text-red-600 dark:text-red-400">
            <span className="font-medium">{errorMessage}</span>
          </p>
        </div>
      )}
    </div>
  );
}
