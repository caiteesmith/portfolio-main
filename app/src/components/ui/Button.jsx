import React from "react";

function cn(...xs) { return xs.filter(Boolean).join(" "); }

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium px-4 py-2 " +
  "transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

const variants = {
  default:
    "bg-[color:var(--pill-bg)] text-[color:var(--pill-fg)] " +
    "border border-[color:var(--pill-border)] hover:bg-[color:var(--pill-hover)] " +
    "focus-visible:ring-[color:var(--link)]",

  outline:
    "bg-transparent text-[color:var(--pill-fg)] " +
    "border border-[color:var(--pill-border)] hover:bg-[color:var(--pill-bg)] " +
    "focus-visible:ring-[color:var(--link)]",

  ghost:
    "bg-transparent text-[color:var(--pill-fg)] border border-transparent " +
    "hover:bg-[color:var(--pill-bg)] focus-visible:ring-[color:var(--link)]",

  primaryPink:
    "btn-cta bg-[color:var(--cta-pink)] text-[color:var(--cta-fg)] " +
    "border border-transparent shadow-sm " +
    "hover:brightness-95 active:brightness-90 " +
    "focus-visible:ring-2 focus-visible:ring-[color:var(--cta-ring)]",

  primaryOrange:
    "btn-cta bg-[color:var(--cta-orange)] text-[color:var(--cta-fg)] " +
    "border border-transparent shadow-sm " +
    "hover:brightness-95 active:brightness-90 " +
    "focus-visible:ring-2 focus-visible:ring-[color:var(--cta-ring)]",

  /* Outlines (flat color) */
  outlinePink:
    "bg-transparent text-[color:var(--cta-pink)] " +
    "border border-[color:var(--cta-pink)] " +
    "hover:bg-[color:var(--panel-hover)] " +
    "focus-visible:ring-2 focus-visible:ring-[color:var(--cta-ring)]",

  outlineOrange:
    "bg-transparent text-[color:var(--cta-orange)] " +
    "border border-[color:var(--cta-orange)] " +
    "hover:bg-[color:var(--panel-hover)] " +
    "focus-visible:ring-2 focus-visible:ring-[color:var(--cta-ring)]",

  /* Solid gradients */
  gradientPink:
    "btn-cta text-[color:var(--cta-fg)] border-0 shadow-sm " +
    "[background:linear-gradient(90deg,var(--cta-pink-from),var(--cta-pink-to))] " +
    "hover:saturate-110 active:saturate-125 " +
    "focus-visible:ring-2 focus-visible:ring-[color:var(--cta-ring)]",

  gradientOrange:
    "btn-cta text-[color:var(--cta-fg)] border-0 shadow-sm " +
    "[background:linear-gradient(90deg,var(--cta-orange-from),var(--cta-orange-to))] " +
    "hover:saturate-110 active:saturate-125 " +
    "focus-visible:ring-2 focus-visible:ring-[color:var(--cta-ring)]",

  /* Gradient borders (outline). Uses two backgrounds: inner fill + gradient border */
  gradientPinkOutline:
    "bg-transparent text-[color:var(--cta-pink-from)] border border-transparent " +
    "[background:linear-gradient(var(--button-fill),var(--button-fill)),linear-gradient(90deg,var(--cta-pink-from),var(--cta-pink-to))] " +
    "[background-origin:border-box] [background-clip:padding-box,border-box] " +
    "hover:brightness-110 focus-visible:ring-2 focus-visible:ring-[color:var(--cta-ring)]",

  gradientOrangeOutline:
    "bg-transparent text-[color:var(--cta-orange-from)] border border-transparent " +
    "[background:linear-gradient(var(--button-fill),var(--button-fill)),linear-gradient(90deg,var(--cta-orange-from),var(--cta-orange-to))] " +
    "[background-origin:border-box] [background-clip:padding-box,border-box] " +
    "hover:brightness-110 focus-visible:ring-2 focus-visible:ring-[color:var(--cta-ring)]",

  outlineHoverPink:
  "bg-transparent border border-[color:var(--panel-border)] " +
  "text-[color:var(--ink)]/80 hover:text-[color:var(--cta-pink)] " +
  "hover:border-[color:var(--cta-pink)] " +
  "focus-visible:ring-2 focus-visible:ring-[color:var(--cta-ring)] " +
  "transition-colors",

  outlineHoverOrange:
    "bg-transparent border border-[color:var(--panel-border)] " +
    "text-[color:var(--ink)]/80 hover:text-[color:var(--cta-orange)] " +
    "hover:border-[color:var(--cta-orange)] " +
    "focus-visible:ring-2 focus-visible:ring-[color:var(--cta-ring)] " +
    "transition-colors",
};

export default function Button({
  variant = "default",
  asChild = false,
  className = "",
  children,
  ...props
}) {
  const classes = cn(base, variants[variant] ?? variants.default, className);

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: cn(children.props.className, classes),
      ...props,
    });
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}