"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const SearchFormReset = () => {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;
    if (form) form.reset();
  };
  return (
    <Button
      type="reset"
      onClick={reset}
      title="Clear search"
      variant="destructive"
      size="icon"
      className="px-4"
    >
      <Link href="/blogs" className="text-white">
        <X />
      </Link>
    </Button>
  );
};

export default SearchFormReset;
