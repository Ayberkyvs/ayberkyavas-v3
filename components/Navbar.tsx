import clsx from "clsx";
import { Suspense } from "react";
import ResumeButton, { ResumeButtonSkeleton } from "./ResumeButton";
import NavbarItems from "./NavbarItems";

export const experimental_ppr = true;

const Navbar = ({
	direction,
	className = "",
}: {
	direction: "horizontal" | "vertical";
	className?: string;
}) => {
	return (
		<nav className={`nav ${className}`}>
			<ul
				className={clsx("flex gap-5", { "flex-col": direction === "vertical" })}
			>
				<NavbarItems />
				<li>
					<Suspense fallback={<ResumeButtonSkeleton />}>
						<ResumeButton />
					</Suspense>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
