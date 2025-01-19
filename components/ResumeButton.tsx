import { Download } from "lucide-react";
import { Button } from "./ui/button";
import { RESUME_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

const ResumeButton = async () => {
	const resume = await fetch(RESUME_QUERY);
    console.log(resume)
	return (
		<Link href='#'>
			<Button
				variant='secondary'
				size='lg'
				className='nav-link p-0 px-2 py-4 text-black'
			>
				Resume <Download />
			</Button>
		</Link>
	);
};

export const ResumeButtonSkeleton = () => (
    <Button variant='secondary' size='lg' className='nav-link p-0 px-2 py-4 text-black'>
        Loading...
    </Button>
);
export default ResumeButton;
