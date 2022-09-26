import { useEffect, useState } from "react";

export default function DynamicHeader(): JSX.Element {
	const [headerIsVisible, setHeaderIsVisible] = useState(false);
	useEffect(() => {
		const adjustVisibility = () => {
			setHeaderIsVisible(window.pageYOffset > screen.height / 2 - 50);
		};

		addEventListener("scroll", adjustVisibility);

		return () => removeEventListener("scroll", adjustVisibility);
	}, []);

	if (!headerIsVisible) {
		return <div></div>;
	}

	return (
		<header className="z-50 sticky top-0 bg-gray-900 shadow-md px-1">
			<div className="flex justify-between items-center shadow-sm h-12 container">
				<h1 className="text-xl font-bold text-center text-transparent bold-text bg-clip-text bg-gradient-to-r from-pink-200 via-purple-200 to-orange-200 animate-gradient-text">
					<a
						href="/"
						className="pb-2 text-xl font-bold text-center text-transparent bold-text bg-clip-text bg-gradient-to-r from-pink-200 via-purple-200 to-orange-200 animate-gradient-text"
					>
						kul<span className="text-blue-500">.</span>gg
					</a>
				</h1>
				<nav>
					<ul className="flex justify-start gap-2 items-center text-md">
						<li>
							<a href="/blog">Blog</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
