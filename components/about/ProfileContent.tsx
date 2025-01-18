import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { CalendarCheck } from "lucide-react";
import Socials from "@/components/Socials";
import Link from "next/link";

const ProfileContent = () => {
	return (
		<>
			<Link href='https://cal.com/ayberksch'>
				<Button
					variant='outline'
					className='bg-blue-300 border border-blue-100 text-blue-950 font-bold rounded-lg mb-5'
				>
					Schedule a call <CalendarCheck />
				</Button>
			</Link>
			<h1 className='max-md:text-[49px] heading-1-bold'>Ayberk Yavas</h1>
			<h4 className='heading-4 text-neutral-300'>Front-End Developer</h4>

			<div className='flex gap-4 mt-4'>
				<Socials className='text-blue-200' />
			</div>

			<p className='paragraph mt-8'>
            Creative Front-End Developer with expertise in React and the MERN stack. Experienced in building scalable applications and delivering end-to-end solutions. Skilled in modern JavaScript tools like Tanstack Query, Zustand, and Webpack. Focused on performance optimization, responsive design, and seamless user experiences. Passionate about staying up-to date with industry trends and collaborating with cross functional teams to create high-quality web applications.


			</p>

			<h2 className='heading-2-bold mt-12'>Work Experience</h2>

			<div className='mt-8'>
				<h6 className='heading-6-bold'>Reform Marine</h6>
				<p className='text-neutral-300'>Senior Design Engineer</p>
				<ul className='list-disc list-inside mt-4 paragraph'>
					<li>
						Redesigned the UI/UX for the FLY platform, resulting in a 20%
						increase in user engagement and 30% faster load times.
					</li>
					<li>
						Spearheaded the integration of AI tools into design workflows,
						enabling designers to iterate 50% faster.
					</li>
				</ul>
				<Image
					src='/laptop.png'
					alt='Reform Marine Project'
					width={254}
					height={171}
					className='mt-4 rounded-lg aspect-16/9 max-w-[254px] max-h-[171px]'
				/>
			</div>

			<div className='mt-8'>
				<h6 className='heading-6-bold'>DigiME</h6>
				<p className='text-neutral-300'>Senior Design Engineer</p>
				<ul className='list-disc list-inside mt-4 paragraph'>
					<li>
						Redesigned the UI/UX for the FLY platform, resulting in a 20%
						increase in user engagement and 30% faster load times.
					</li>
					<li>
						Spearheaded the integration of AI tools into design workflows,
						enabling designers to iterate 50% faster.
					</li>
				</ul>
				<Image
					src='/laptop.png'
					alt='DigiME Project'
					width={254}
					height={171}
					className='mt-4 rounded-lg aspect-16/9 max-w-[254px] max-h-[171px]'
				/>
			</div>

			<h2 className='heading-2-bold mt-12'>Studies</h2>
			<div className='mt-4'>
				<h6 className='heading-6-bold'>İzmir Ekonomi Üniversitesi</h6>
				<p className='paragraph'>Studied software engineering.</p>
			</div>

			<h2 className='heading-2-bold mt-12'>Certificates</h2>
			<div className='mt-4'>
				<h6 className='heading-6-bold'>Meta</h6>
				<p className='text-gray-400'>Front-End Developer</p>
				<ul className='list-disc list-inside mt-4 paragraph'>
					<li>
						Redesigned the UI/UX for the FLY platform, resulting in a 20%
						increase in user engagement and 30% faster load times.
					</li>
					<li>
						Spearheaded the integration of AI tools into design workflows,
						enabling designers to iterate 50% faster.
					</li>
				</ul>
				<Image
					src='/laptop.png'
					alt='Meta Certificate'
					width={254}
					height={171}
					className='mt-4 rounded-lg aspect-16/9 max-w-[254px] max-h-[171px]'
				/>
			</div>

			<h2 className='heading-2-bold mt-12'>Technical skills</h2>
			<div className='mt-4'>
				<h6 className='heading-6-bold'>Next.js</h6>
				<p className='paragraph'>
					Spearheaded the integration of AI tools into design workflows,
					enabling designers to iterate 50% faster.
				</p>

				<h6 className='heading-6-bold mt-4'>React</h6>
				<p className='paragraph'>
					Spearheaded the integration of AI tools into design workflows,
					enabling designers to iterate 50% faster.
				</p>
			</div>
		</>
	);
};

export default ProfileContent;
