import { ComponentProps } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const button = tv({
  base: 'font-medium rounded-md p-2',
  variants: {
    color: {
      primary: 'bg-zinc-600 hover:bg-zinc-700 text-white',
      secondary:
        'bg-zinc-200 hover:bg-zinc-300 border border-zinc-600 text-zinc-600',
    },
    size: {
      md: 'w-24',
      icon: 'w-max h-max p-0',
    },
  },
});

export type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof button>;

export default function Button({ color, size, ...props }: ButtonProps) {
  return (
    <button {...props} className={button({ color, size })}>
      {props.children}
    </button>
  );
}
