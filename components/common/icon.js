import Image from 'next/image';

const Icon = ({ icon, className = '' }) => {
  return (
    <div
      className={`bg-primary-100 border-[10px] border-primary-50 p-2 rounded-[28px] w-fit ${className}`}
    >
      <Image src={icon} alt="" />
    </div>
  );
};

export default Icon;
