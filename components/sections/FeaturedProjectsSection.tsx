import React from 'react'
import FeaturedCard from '../FeaturedCard'
import ScrollStack from '@/components/animations/ScrollStack';
import { Project } from '@/sanity/types';

const FeaturedProjectsSection = ({featuredProjects}: {featuredProjects: Project[]}) => {
if (!featuredProjects || !(featuredProjects.length > 0)) return <p className="paragraph text-red-300">No Projects Found.</p>;
  return (
    <div className='flex w-full flex-col gap-[50px]'>
        <ScrollStack offset={0} animationDelay={0.2}>
            {featuredProjects?.map((project: Project) => (
                <FeaturedCard key={project._id} data={project} />
            ))}
        </ScrollStack>
    </div>
  )
}

export default FeaturedProjectsSection