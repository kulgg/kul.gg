export interface Technology {
	name: string;
	type: string;
}

export interface Project {
	title: string;
	description: string;
	technologies: Technology[];
	githubLink: string;
	liveLink: string;
}

const projects: Project[] = [
	{
		title: "worktime",
		description: "A work time tracker built using all modules of the T3 Stack",
		technologies: [
			{ name: "TypeScript", type: "language" },
			{ name: "Next.js", type: "framework" },
			{ name: "Tailwind CSS", type: "framework" },
			{ name: "Prisma", type: "framework" },
			{ name: "NextAuth.js", type: "framework" },
			{ name: "tRPC", type: "framework" },
		],
		githubLink: "https://github.com/kulgg/worktime",
		liveLink: "https://worktime.kul.gg",
	},
];

export { projects };
