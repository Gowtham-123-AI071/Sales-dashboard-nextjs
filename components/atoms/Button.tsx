import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'ghost' };
export default function Button({ variant='primary', children, ...rest }: Props) {
  const base = 'px-3 py-1 rounded-md text-sm font-medium';
  const cls = variant === 'primary'
    ? base + ' bg-blue-600 text-white hover:bg-blue-700'
    : base + ' bg-transparent border border-gray-300';
  return <button className={cls} {...rest}>{children}</button>;
}
