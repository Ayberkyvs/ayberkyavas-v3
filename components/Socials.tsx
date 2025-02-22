import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface SocialsProps {
  className: string;
  socials: Array<{ name: string; link: string }>;
}
const Socials = ({ className, socials }: SocialsProps) => {
  return (
    <>
      <div className="flex size-fit flex-wrap gap-[10px]">
        {socials?.map((social, index: number) => (
          <Link
            href={social.link || "#"}
            className={`flex-center w-fit gap-[5px] ${className}`}
            key={social.link + index}
          >
            <span>{social.name}</span>
            <ArrowUpRight className="size-[1.2em]" />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Socials;
