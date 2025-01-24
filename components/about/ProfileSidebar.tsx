import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Dot, EarthIcon } from "lucide-react";
import { AboutMe } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";

export default function ProfileSidebar({
	data,
}: {
	data: Pick<AboutMe, "imageSrc" | "location">;
}) {
	const { imageSrc, location } = data;
	return (
		<div className='sticky top-8 flex sm:flex-col items-center gap-5 flex-wrap'>
			<div className='relative'>
				<Image
					src={urlFor(imageSrc).width(204).url()}
					alt='Ayberk Yavas Resume Picture'
					width={204}
					height={204}
					className='rounded-full max-sm:w-[120px] max-sm:h-[120px]'
					priority
				/>
				<Badge className='absolute bottom-0 left-1/2 -translate-x-1/2  bg-green-300 border border-green-900 w-fit text-center text-xs md:text-sm truncate text-green-900'>
					Available for a hire!
				</Badge>
			</div>
			<div className='flex justify-start items-center md:flex-center flex-col gap-2'>
				<p className='flex paragraph gap-[5px] items-center'>
					<EarthIcon className='w-4 h-4' />
					{location}
				</p>
				<div className='flex gap-3'>
					<Badge variant='outline' className='text-neutral-300'>
						English
					</Badge>
					<Badge variant='outline' className='text-black bg-blue-200'>
						Turkish
					</Badge>
				</div>
			</div>
		</div>
	);
}
