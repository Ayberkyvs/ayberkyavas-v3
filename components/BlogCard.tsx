import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { Blog } from "@/sanity/types";

const BlogCard = ({data}: {data: Blog}) => {
	return (
		<>
			<Card className="flex flex-col aspect-auto items-start bg-background-400 border-border">
				<CardHeader className="gap-4 w-full">
					<CardTitle className='heading-6-bold'>
						{data.title}
					</CardTitle>
				</CardHeader>
				<CardContent className='w-full'>
					<p className='paragraph'>
						{data.description}
					</p>
				</CardContent>
				<CardFooter className="h-fit">
					<Badge variant='secondary'>{data.category}</Badge>
                </CardFooter>
			</Card>
		</>
	);
};

export default BlogCard;
