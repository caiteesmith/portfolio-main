import React from "react";

export default function Button({ asChild, variant="default", size="md", className="", children, ...props }) {
  const base = "inline-flex items-center gap-2 rounded-full transition px-4 py-2";
  const variants = {
    default: "bg-black text-white hover:opacity-90 dark:bg-white dark:text-black",
    outline: "border border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800",
    ghost: "hover:bg-gray-100 dark:hover:bg-gray-800",
  };
  const sizes = { sm:"px-3 py-1.5 text-sm", md:"px-4 py-2", lg:"px-5 py-2.5" };
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  if (asChild) return React.cloneElement(children, { className: `${children.props.className ?? ""} ${cls}`, ...props });
  return <button className={cls} {...props}>{children}</button>;
}