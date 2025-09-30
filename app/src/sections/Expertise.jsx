import Badge from "@/components/ui/Badge";
import { SKILL_TAGS } from "@/data/skills";

export default function Expertise(){
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {SKILL_TAGS.map((tag, i) => (
        <span key={i} className="inline-flex items-center rounded-full px-3 py-1.5 text-sm font-medium bg-gray-100 text-gray-800 dark:bg-gray-800/70 dark:text-gray-200 ring-1 ring-gray-200 dark:ring-white/10 shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md hover:bg-gray-200/80 dark:hover:bg-gray-700/70 cursor-default select-none" aria-label={tag}>
          {tag}
        </span>
      ))}
    </div>
  );
}