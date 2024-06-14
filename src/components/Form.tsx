import { ComponentProps, ReactNode } from 'react';

export type FormProps = ComponentProps<'form'>;

export function Form({ ...props }: FormProps) {
  return (
    <form {...props} className="flex flex-col gap-1">
      {props.children}
    </form>
  );
}

export function FormField({ children }: { children: ReactNode }) {
  return <div className="flex flex-col gap-2">{children}</div>;
}
