"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Ping from "./ui/ping";
import { NavbarItemsData } from "@/lib/consts";
import { cn } from "@/lib/utils";

const NavbarItems = ({ itemClassName }: { itemClassName?: string }) => {
  const items = NavbarItemsData;
  const path = usePathname();
  return (
    <>
      {items &&
        items.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>
              <Button
                className={cn("w-fit md:size-fit", {
                  "nav-link_active": path === item.href,
                  "nav-link p-0": item.btnType === "link",
                  "relative pr-2": item.name === "Status",
                  ...(itemClassName ? { [itemClassName]: true } : {}),
                })}
                variant={(item.btnType as any) || "link"}
              >
                {item.name}
                {item.name === "Status" && (
                  <Ping
                    isAvailable
                    colors={{
                      success: "bg-green-500",
                      error: "bg-red-500",
                    }}
                    className="absolute -top-[2px] right-0 z-[3] size-3 -translate-y-1/2"
                  />
                )}
              </Button>
            </Link>
          </li>
        ))}
    </>
  );
};

export default NavbarItems;
