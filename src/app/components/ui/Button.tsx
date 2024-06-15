import React, { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps<T extends React.ElementType> {
  as?: T;
}

export function ButtonColored<T extends React.ElementType = "button">({
  as,
  ...props
}: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) {
  const Component = as || "button";

  return (
    <Component
      {...props}
      className={twMerge(
        " flex items-center justify-center rounded-md   text-gray-800  disabled:bg-gray-200 dark:disabled:bg-gray-600",
        props.className
      )}
    />
  );
}

export function ButtonNoOutline<T extends React.ElementType = "button">({
    as,
    ...props
  }: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) {
    const Component = as || "button";
  
    return (
      <Component
        {...props}
        className={twMerge(
          " flex ",
          props.className
        )}
      />
    );
  }
  
