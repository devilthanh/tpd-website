import Link from 'next/link';
import Image from 'next/image';
import { navigation } from '@/contants/navigation';
import { LogoImage } from '@/constants/assets';

const Footer = () => {
  return (
    <div className="w-full font-sans bg-[#0C111D]">
      <nav className="container relative flex justify-between items-start md:items-center py-10 px-8 mx-auto max-w-8xl flex-col md:flex-row gap-5">
        <Link href="/">
          <span className="flex items-center space-x-2 text-3xl font-bold text-gray-500 max-w-[112px]">
            <Image src={LogoImage} alt="TPD" width={112} height={32} />
          </span>
        </Link>
        <div>
          <ul className="items-center grid gap-x-10 grid-cols-2 sm:grid-cols-4">
            {navigation.map((menu, index) => (
              <li className="nav__item" key={index}>
                <Link
                  href={`#${menu.path}`}
                  scroll={false}
                  className="inline-block py-2 text-base font-semibold text-white no-underline rounded-md hover:text-gray-500 active:text-gray-500"
                >
                  {menu.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="items-center flex">
          <span className="text-gray-600">@2023 TDP</span>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
