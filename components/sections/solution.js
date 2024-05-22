import Container from '@/components/common/container';
import { ZapFastIcon } from '@/constants/assets';
import Icon from '@/components/common/icon';
import { motion } from 'framer-motion';
import { solutions } from '@/constants/data';

const Solution = () => {
  return (
    <section className="w-full py-24" id="solution">
      <Container className="max-w-7xl m-auto px-8 grid md:grid-cols-3 gap-16">
        <motion.div
          className="col-span-1"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={{
            offscreen: {
              y: 200,
              opacity: 0,
            },
            onscreen: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.8,
              },
            },
          }}
        >
          <Icon icon={ZapFastIcon} className="mb-6" />
          <h3 className="mb-5 text-4xl text-gray-900 font-semibold">
            Giải pháp
          </h3>
          <p className="text-gray-600 text-xl">
            Ở đây chúng tôi cung cấp các giải pháp như sau
          </p>
        </motion.div>
        <div className="md:col-span-2 flex flex-col gap-16">
          {solutions.map((solution, index) => (
            <SolutionItem {...solution} key={index} offset={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

const SolutionItem = ({ title, desc, offset }) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      variants={{
        offscreen: {
          x: 200,
          opacity: 0,
        },
        onscreen: {
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.8 + offset / 5,
          },
        },
      }}
    >
      <div className="mb-2 font-semibold text-xl text-gray-900">{title}</div>
      <p className="text-gray-600">{desc}</p>
    </motion.div>
  );
};

export default Solution;
