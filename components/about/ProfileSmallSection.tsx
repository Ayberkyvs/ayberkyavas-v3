import type { ProfileSmallSection } from "@/types/about";

const ProfileSmallSection = ({ name, description }: ProfileSmallSection) => (
    <div className='mt-4'>
      <h6 className='heading-6-bold'>{name}</h6>
      <p className='paragraph'>{description}</p>
    </div>
  );

  export default ProfileSmallSection;