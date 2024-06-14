import React, { ComponentProps, ForwardedRef } from 'react';

export type InputProps = ComponentProps<'input'>;

const Input = React.forwardRef(
  (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <input
        {...props}
        ref={ref}
        className="w-full rounded-md p-2 bg-transparent border border-zinc-400"
      />
    );
  }
);

export default Input;
