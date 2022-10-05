import type { Technology } from "../data/projects";

export interface TechnologyBadgeProps {
  technology: Technology;
  size?: string;
}

export default function TechnologyBadge({
  technology,
  size,
}: TechnologyBadgeProps): JSX.Element {
  const backgroundClass =
    technology.type === "language"
      ? "bg-blue-200"
      : technology.type === "framework"
      ? "bg-purple-200"
      : "bg-red-200";

  const textClass =
    technology.type === "language"
      ? "text-blue-800"
      : technology.type === "framework"
      ? "text-purple-900"
      : "text-red-900";

  const sizeClass = size ?? "text-sm";

  return (
    <span
      className={`${sizeClass} font-semibold mr-2 px-2.5 py-0.5 rounded ${backgroundClass} ${textClass}`}
    >
      {technology.name}
    </span>
  );
}
