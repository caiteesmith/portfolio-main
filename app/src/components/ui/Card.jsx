export function Card({ className="", children }) {
  return (
    <div className={`rounded-2xl glass border border-gray-200 dark:border-gray-800 bg-white dark:bg-black/40 transition-transform duration-300 will-change-transform hover:-translate-y-1 hover:shadow-lg ${className}`}>
      {children}
    </div>
  );
}
export const CardHeader = ({ children, className="" }) => <div className={`px-4 pt-4 ${className}`}>{children}</div>;
export const CardTitle = ({ children, className="" }) => <h3 className={`font-semibold ${className}`}>{children}</h3>;
export const CardDescription = ({ children, className="" }) => <p className={`text-sm text-gray-500 dark:text-gray-400 ${className}`}>{children}</p>;
export const CardContent = ({ children, className="" }) => <div className={`px-4 pb-2 ${className}`}>{children}</div>;
export const CardFooter = ({ children, className="" }) => <div className={`px-4 pb-4 pt-2 flex items-center gap-2 ${className}`}>{children}</div>;