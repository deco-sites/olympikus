import { forwardRef } from "preact/compat";

import type { ComponentType, JSX } from "preact";

import Spinner from "./Spinner.tsx";

export type Props =
  & Omit<JSX.IntrinsicElements["button"], "as" | "size" | "loading">
  & {
    as?: keyof JSX.IntrinsicElements | ComponentType;
    variant?: keyof typeof variants;
    loading?: boolean;
  };

const variants = {
  primary:
    "p-4 rounded bg-badge dark:bg-transparent font-button text-default-inverse dark:text-white dark:border-white dark:border-2 focus:outline-none text-xs uppercase",
  secondary:
    "p-4 rounded bg-transparent font-button text-critical dark:text-white focus:outline-none text-xs uppercase border-critical dark:border-white border-2",
  tertiary:
    "h-[36px] px-3 rounded bg-interactive-inverse font-button text-button border-transparent hover:bg-hover dark:hover:bg-interactive-inverse active:border-interactive disabled:border-transparent disabled:text-subdued focus:outline-none",
  icon:
    "h-[36px] px-2 rounded-full bg-transparent text-default border-transparent hover:bg-hover active:border-interactive disabled:text-subdued disabled:bg-interactive-inverse focus:outline-none",
};

const Button = forwardRef<HTMLButtonElement, Props>(({
  variant = "primary",
  as = "button",
  type = "button",
  class: _class = "",
  children,
  loading,
  disabled,
  ...props
}, ref) => {
  const Component = as as ComponentType<
    { disabled?: boolean; className: string; type: string }
  >;
  const styles = variants[variant];

  return (
    <Component
      {...props}
      className={`inline-flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed transition-colors duration-150 ease-in border ${styles} ${_class}`}
      disabled={disabled || loading}
      type={type}
      ref={ref}
    >
      {loading === true ? <Spinner size={24} /> : children}
    </Component>
  );
});

export default Button;
