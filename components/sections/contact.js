import { contacts } from '@/constants/data';
import Container from '@/components/common/container';
import SectionTitle from '@/components/common/sectionTitle';
import Content from '@/components/common/content';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="w-full bg-gray-50" id="contact">
      <Container className="max-w-7xl px-8 mx-auto">
        <SectionTitle
          pretitle="Liên hệ"
          title="Liên hệ với chúng tôi"
          titleSize="5xl"
          className="text-center max-auto py-24"
          motionTitle="vertical"
        />
        <motion.div
          className="grid md:grid-cols-3 gap-8 pb-24"
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
          {contacts.map((contact) => (
            <Content {...contact} key={contact.title} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;
