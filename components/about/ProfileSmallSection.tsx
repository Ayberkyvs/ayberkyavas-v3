import type { ProfileSmallSection } from "@/types/about";

const ProfileSmallSection = ({ title, description }: ProfileSmallSection) => (
    <div className='mt-4'>
      <h6 className='heading-6-bold'>{title}</h6>
      <p className='paragraph'>{description}</p>
    </div>
  );

  export default ProfileSmallSection;