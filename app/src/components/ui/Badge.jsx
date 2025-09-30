export default function Badge({ variant="secondary", className="", children }) {
  const variants = { 
    secondary: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
    outline: "border border-gray-300 dark:border-gray-600",
    default: "bg-black text-white dark:bg-white dark:text-black",
  };
  return <span className={`inline-flex items-center px-2.5 py-1 rounded-full glass text-xs ${variants[variant]} ${className}`}>{children}</span>;
}