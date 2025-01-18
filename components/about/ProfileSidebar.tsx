import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { EarthIcon } from "lucide-react";

export default function ProfileSidebar() {
	return (
		<div className='sticky top-8 flex flex-col items-center gap-5'>
			<Image
				src='/avatar.png'
				alt='Ayberk Yavas Resume Picture'
				width={204}
				height={204}
				className='rounded-full'
				priority
			/>
			<div className='flex justify-start items-center md:flex-center flex-col gap-5'>
				<p className='flex paragraph gap-[5px] items-center'>
					<EarthIcon className='w-4 h-4' />
					Izmir/Turkey
				</p>
				<div className='flex gap-3'>
					<Badge variant='outline' className='text-neutral-300'>
						English
					</Badge>
					<Badge variant='outline' className='text-neutral-300'>
						Turkish
					</Badge>
				</div>
			</div>
		</div>
	);
}
