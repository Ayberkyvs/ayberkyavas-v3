import { Eye, Loader } from "lucide-react";
import { Button } from "./ui/button";
import { RESUME_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

const ResumeButton = async () => {
	const { Resume: resumeLink } = await client.fetch(RESUME_QUERY);
	return (
		<Link href={resumeLink} title="View Ayberk Yavas Resume">
			<Button
				variant='secondary'
				size='lg'
				className='nav-link p-0 px-2 py-4 text-black'
			>
				View CV <Eye />
			</Button>
		</Link>
	);
};

export const ResumeButtonSkeleton = () => (
    <Button variant='secondary' size='lg' className='nav-link p-0 px-2 py-4 text-black' disabled>
        <p>Fetching</p> <Loader />
    </Button>
);
export default ResumeButton;
