export default function Textarea(props) {
  return <textarea {...props} className={`w-full rounded-xl glass border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-black/40 px-3 py-2 outline-none focus:ring-2 focus:ring-black/30 dark:focus:ring-white/30 ${props.className||""}`} />;
}