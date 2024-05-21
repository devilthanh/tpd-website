import React from 'react';
import Container from './container';

const variants = {
  vertical: { container: 'flex flex-col' },
  horizontal: {
    container: `md:grid md:grid-cols-12 grid-cols-1`,
    title: 'col-span-7',
    desc: 'col-span-5',
  },
};

const titleSizes = {
  '3xl': 'text-3xl lg:text-4xl',
  '5xl': 'text-4xl lg:text-5xl',
};

const SectionTitle = ({
  title,
  pretitle,
  children,
  variant = 'vertical',
  titleSize = '3xl',
  className = '',
}) => {
  return (
    <Container className={`${variants[variant].container} ${className}`}>
      <div className={`${variants[variant].title || ''}`}>
        {pretitle && (
          <div className="font-semibold tracking-wider text-primary-700">
            {pretitle}
          </div>
        )}

        {title && (
          <h2
            className={`mt-3 font-semibold leading-snug tracking-tight text-gray-800 lg:leading-tight ${titleSizes[titleSize]} dark:text-white`}
          >
            {title}
          </h2>
        )}
      </div>
      {children && (
        <div
          className={`mt-12 text-gray-600 font-normal text-lg lg:text-xl xl:text-xl dark:text-gray-300 ${
            variants[variant].desc || ''
          }`}
        >
          {children}
        </div>
      )}
    </Container>
  );
};

export default SectionTitle;
