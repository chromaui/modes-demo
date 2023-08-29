import { useMemo } from 'react';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Override styles
   */
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
const getSizeClasses = (size: string) => {
  switch (size) {
    case 'small': {
      return 'px-4 py-2.5';
    }
    case 'large': {
      return 'px-6 py-3';
    }
    default: {
      return 'px-5 py-2.5';
    }
  }
};

const getModeClasses = (isPrimary: ButtonProps['primary']) =>
  isPrimary
    ? 'text-slate-100 bg-blue-200 border-blue-500 dark:bg-sky-600 dark:border-sky-600'
    : 'text-slate-800 bg-transparent border-slate-400 dark:text-slate-100 dark:border-slate-100';

const BASE_BUTTON_CLASSES =
  'cursor-pointer rounded-full border font-bold leading-none inline-block text-xs';

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  label,
  className,
  ...props
}: ButtonProps) => {
  const computedClasses = useMemo(() => {
    const modeClass = getModeClasses(primary);
    const sizeClass = getSizeClasses(size);

    return [modeClass, sizeClass].join(' ');
  }, [primary, size]);

  return (
    <button
      type="button"
      className={`${BASE_BUTTON_CLASSES} ${computedClasses} ${className}`}
      {...props}
    >
      {label}
    </button>
  );
};
