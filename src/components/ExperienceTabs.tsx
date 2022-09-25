import { useState } from "react";

const tabs: string[] = ["Education", "Technologies"];

const ExperienceTabs = (): JSX.Element => {
	const [activeTab, setActiveTab] = useState("Education");

	return (
		<div>
			<div className="text-sm font-medium text-center border-b text-gray-400 border-gray-700">
				<ul className="flex flex-wrap -mb-px">
					{tabs.map((tab) => {
						return tab === activeTab ? (
							<li className="mr-2">
								<a
									className="cursor-pointer inline-block p-4 rounded-t-lg border-b-2 active text-blue-400 border-blue-400"
									aria-current="page"
								>
									{tab}
								</a>
							</li>
						) : (
							<li className="mr-2" onClick={() => setActiveTab(tab)}>
								<a className="cursor-pointer inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:border-gray-300 hover:text-gray-300">
									{tab}
								</a>
							</li>
						);
					})}
				</ul>
			</div>
			{activeTab === "Education" && <div>Education</div>}
		</div>
	);
};

export default ExperienceTabs;
