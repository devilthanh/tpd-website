import React from 'react';
import Container from './container';
import { motion } from 'framer-motion';

const motionsTitle = {
  default: {
    offscreen: {
      x: -300,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  },
  vertical: {
    offscreen: {
      y: 300,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  },
};

const motionsChild = {
  default: {
    offscreen: {
      x: -300,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  },
  vertical: {
    offscreen: {
      y: 300,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  },
};

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
  motionTitle = 'default',
  motionChild = 'default',
}) => {
  return (
    <Container className={`${variants[variant].container} ${className}`}>
      <motion.div
        className={`${variants[variant].title || ''}`}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={motionsTitle[motionTitle]}
      >
        {pretitle && (
          <div className="font-semibold tracking-wider text-primary-700">
            {pretitle}
          </div>
        )}

        {title && (
          <h2
            className={`mt-3 font-semibold leading-snug tracking-tight text-gray-800 lg:leading-tight ${titleSizes[titleSize]}`}
          >
            {title}
          </h2>
        )}
      </motion.div>
      {children && (
        <motion.div
          className={`mt-12 text-gray-600 font-normal text-lg lg:text-xl xl:text-xl ${
            variants[variant].desc || ''
          }`}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={motionsChild[motionChild]}
        >
          {children}
        </motion.div>
      )}
    </Container>
  );
};

export default SectionTitle;
