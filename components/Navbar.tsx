import clsx from "clsx";
import { Suspense } from "react";
import ResumeButton, { ResumeButtonSkeleton } from "./ResumeButton";
import NavbarItems from "./NavbarItems";

export const revalidate = 120;
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
				className={clsx("flex md:flex-center gap-[15px]", { "flex-col": direction === "vertical" })}
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
