import React from "react";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

const BlogCard = () => {
	return (
		<>
			<Card className="flex flex-col aspect-auto items-start bg-background-400 border-border">
				<CardHeader className="gap-4 w-full">
					<CardTitle className='heading-6-bold'>
						Arriving to a new milestone in my career
					</CardTitle>
				</CardHeader>
				<CardContent className='w-full'>
					<p className='paragraph'>
						Every career is a journey, filled with challenges, growth, and those
						significant moments that mark a shift in our path
					</p>
				</CardContent>
				<CardFooter className="h-fit">
                    <Button variant="secondary">as</Button>
                </CardFooter>
			</Card>
		</>
	);
};

export default BlogCard;
