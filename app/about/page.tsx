import ProfileContent from "@/components/about/ProfileContent";
import ProfileSidebar from "@/components/about/ProfileSidebar";
import { Badge } from "@/components/ui/badge";
import { EarthIcon } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: "About me",
};
const Page = () => {
	return (
		<>
			<section className='layout-prefix w-full mt-[60px] md:mt-[80px]'>
				<div className='grid max-sm:grid-rows-[auto_1fr] max-sm:auto-rows-auto grid-cols-2 xs:grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-[15px]'>
					<div className='col-span-12 sm:col-span-2'>
            <ProfileSidebar />
          </div>
					<div className='col-span-12 sm:col-start-3 lg:col-start-4 xs:col-end-5 sm:col-end-9 lg:col-end-13'>
            <ProfileContent />
          </div>
				</div>
			</section>
		</>
	);
};

export default Page;
