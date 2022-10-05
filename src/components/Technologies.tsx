import { languages, frameworks, tools } from "../data/technologies";
import TechnologyBadge from "./TechnologyBadge";

const Technologies = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-start gap-3">
      <div>
        <h3 className="text-md">Languages</h3>
        {languages.map((language) => {
          return (
            <TechnologyBadge
              technology={{ type: "language", name: language }}
            />
          );
        })}
      </div>
      <div>
        <h3 className="text-md">Frameworks</h3>
        {frameworks.map((framework) => {
          return (
            <TechnologyBadge
              technology={{ type: "framework", name: framework }}
            />
          );
        })}
      </div>
      <div>
        <h3 className="text-md">Tools & Platforms</h3>
        {tools.map((tool) => {
          return <TechnologyBadge technology={{ type: "tool", name: tool }} />;
        })}
      </div>
    </div>
  );
};

export default Technologies;
