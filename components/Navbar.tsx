import clsx from "clsx";
import { ModeToggle } from "./mode-toggle";
import LoginButton from "./LoginButton";
import NavbarItems from "./NavbarItems";
const Navbar = ({
  direction,
  className = "",
  itemClassName = "",
}: {
  direction: "horizontal" | "vertical";
  className?: string;
  itemClassName?: string;
}) => {
  return (
    <nav className={clsx("navbar", className)}>
      <ul
        className={clsx("md:flex-center flex gap-4", {
          "flex-col": direction === "vertical",
        })}
      >
        <NavbarItems itemClassName={itemClassName} />
        <ModeToggle className="hidden md:flex" btnVariant="secondary" />
        <LoginButton className="hidden size-10 md:flex" />
      </ul>
    </nav>
  );
};

export default Navbar;
