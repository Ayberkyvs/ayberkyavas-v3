import React from "react";
import Form from "next/form";
import SearchFormReset from "@/components/SearchFormReset";
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const SearchForm = ({ query }: { query: string }) => {
	return (
		<Form action="/blogs" scroll={false} className="w-full mt-4">
			<div className="flex w-full items-center space-x-2">
				<Input
					type="text"
					placeholder="Search for blogs"
					name="query"
					defaultValue={query}
					className="text-white placeholder:text-neutral-500 border-neutral-800"
				/>
				{query && <SearchFormReset />}
				<Button type="submit" className="bg-blue-500 text-white">
					Search <Search />
				</Button>
			</div>
		</Form>
	);
};

export default SearchForm;
