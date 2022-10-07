import { languages, frameworks, tools } from "../data/technologies";
import TechnologyBadge from "./TechnologyBadge";

export default function Technologies(): JSX.Element {
  return (
    <div className="flex flex-col justify-start gap-3 w-full">
      <div>
        <h3 className="text-md">Languages</h3>
        <div className="flex flex-wrap gap-2">
          {languages.map((language) => {
            return (
              <TechnologyBadge
                technology={{ type: "language", name: language }}
                key={language}
              />
            );
          })}
        </div>
      </div>
      <div>
        <h3 className="text-md">Frameworks</h3>
        <div className="flex flex-wrap gap-2">
          {frameworks.map((framework) => {
            return (
              <TechnologyBadge
                technology={{ type: "framework", name: framework }}
                key={framework}
              />
            );
          })}
        </div>
      </div>
      <div>
        <h3 className="text-md">Tools & Platforms</h3>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => {
            return (
              <TechnologyBadge
                technology={{ type: "tool", name: tool }}
                key={tool}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
