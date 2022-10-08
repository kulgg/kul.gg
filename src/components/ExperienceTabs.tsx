import { useState } from "react";
import Education from "./Education";
import FadeDownContainer from "./FadeDownContainer";
import Technologies from "./Technologies";

const tabs: string[] = ["Education", "Technologies"];

export default function ExperienceTabs(): JSX.Element {
  const [activeTab, setActiveTab] = useState("Education");

  return (
    <div className="">
      <div className="text-sm font-semibold text-center border-b text-gray-400 border-gray-700">
        <ul className="flex flex-wrap -mb-px">
          {tabs.map((tab) => {
            return tab === activeTab ? (
              <li className="mr-2" key={tab}>
                <a
                  className="cursor-pointer inline-block p-4 rounded-t-lg border-b-2 active text-blue-500 border-blue-500"
                  aria-current="page"
                >
                  {tab}
                </a>
              </li>
            ) : (
              <li className="mr-2" onClick={() => setActiveTab(tab)} key={tab}>
                <a className="cursor-pointer inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:border-gray-300 hover:text-gray-300">
                  {tab}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="my-3"></div>
      {activeTab === "Education" && (
        <FadeDownContainer delay={0.05}>
          <Education />
        </FadeDownContainer>
      )}
      {activeTab === "Technologies" && (
        <FadeDownContainer delay={0.05}>
          <Technologies />
        </FadeDownContainer>
      )}
    </div>
  );
}
