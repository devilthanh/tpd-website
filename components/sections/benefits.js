import Image from 'next/image';
import React from 'react';
import Container from '@/components/common/container';
import SectionTitle from '@/components/common/sectionTitle';

const Benefits = (props) => {
  const { data } = props;
  return (
    <Container className="flex flex-wrap max-w-7xl mx-auto px-8 pb-24 pt-0 lg:pt-24 lg:gap-10 lg:flex-nowrap">
      <div className="w-full">
        <SectionTitle
          pretitle="Giới thiệu"
          title={data.title}
          className="px-0 mx-0"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between w-full mt-16 gap-6">
          {data.bullets.map((item, index) => (
            <Benefit key={index} title={item.title} icon={item.icon}>
              {item.desc}
            </Benefit>
          ))}
        </div>
      </div>
    </Container>
  );
};

function Benefit(props) {
  return (
    <div className="px-6 pt-6 bg-gray-50 pb-12 sm:pb-20 xl:pb-28 col-span-1">
      <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-primary-600 rounded-[10px] w-11 h-11 ">
        {React.cloneElement(props.icon, {
          className: 'w-7 h-7',
        })}
      </div>
      <div>
        <h4 className="text-xl mt-8 sm:mt-16 font-semibold text-gray-900">
          {props.title}
        </h4>
        <p className="mt-2 text-gray-600">{props.children}</p>
      </div>
    </div>
  );
}

export default Benefits;
