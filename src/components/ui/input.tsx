import * as React from 'react';
import { cn } from '../../lib/utils/tools';
import PhoneInputLib from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-gray-800 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

interface IPhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const PhoneInput = (props: IPhoneInputProps) => {
  return (
    <PhoneInputLib
      inputClass={cn(
        'flex !h-10 !w-full rounded-md !border !border-gray-800 bg-background px-3 !py-2 text-sm ring-offset-background !file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        props.className
      )}
      placeholder="+7 999 999 99 99"
      country={'ru'}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export { Input, PhoneInput };
