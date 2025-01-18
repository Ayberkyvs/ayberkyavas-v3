interface SkillProps {
    name: string;
    description: string;
  }
const ProfileInfoSection = ({ name, description }: SkillProps) => (
    <div className='mt-4'>
      <h6 className='heading-6-bold'>{name}</h6>
      <p className='paragraph'>{description}</p>
    </div>
  );

  export default ProfileInfoSection;