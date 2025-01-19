import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { EarthIcon } from "lucide-react";
import type { ProfileData } from '@/types/about';

type ProfileSideBarProps = {
	data: Pick<ProfileData, 'location' | 'image'>;
};
export default function ProfileSidebar({data}: ProfileSideBarProps) {
	const { image, location } = data;
	return (
		<div className='sticky top-8 flex sm:flex-col items-center gap-5'>
			<Image
				src={image}
				alt='Ayberk Yavas Resume Picture'
				width={204}
				height={204}
				className='rounded-full max-sm:w-[120px] max-sm:h-[120px]'
				priority
			/>
			<div className='flex justify-start items-center md:flex-center flex-col gap-5'>
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
