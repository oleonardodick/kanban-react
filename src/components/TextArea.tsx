import React, { ComponentProps, ForwardedRef } from 'react';

export type TextAreaProps = ComponentProps<'textarea'>;

const TextArea = React.forwardRef(
  (props: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
    return (
      <textarea
        {...props}
        ref={ref}
        className="w-full rounded-md p-2 bg-transparent border border-zinc-400 resize-none"
      />
    );
  }
);

export default TextArea;
