import React from "react";
import Form from "next/form";
import SearchFormReset from "@/components/SearchFormReset";
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const SearchForm = ({ query }: { query: string }) => {
  return (
    <Form action="/blogs" scroll={false} className="mt-4 w-full">
      <div className="flex w-full items-center space-x-2">
        <Input
          type="text"
          placeholder="Search for blogs"
          name="query"
          defaultValue={query}
        className="border-border-soft text-foreground placeholder:text-muted focus:border-brand focus:ring-brand"
        />
        {query && <SearchFormReset />}
        <Button type="submit">
          Search <Search />
        </Button>
      </div>
    </Form>
  );
};

export default SearchForm;
