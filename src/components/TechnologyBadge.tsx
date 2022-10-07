import type { Technology } from "../data/projects";

export interface TechnologyBadgeProps {
  technology: Technology;
  size?: string;
}

export default function TechnologyBadge({
  technology,
  size,
}: TechnologyBadgeProps): JSX.Element {
  const backgroundClass = "bg-blue-800";
  const textClass = "text-gray-300";
  const sizeClass = size ?? "text-sm";

  return (
    <span
      className={`${sizeClass} font-semibold px-2.5 py-0.5 rounded ${backgroundClass} ${textClass} whitespace-nowrap`}
    >
      {technology.name}
    </span>
  );
}
