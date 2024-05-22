import { contacts } from '@/constants/data';
import Container from '@/components/common/container';
import SectionTitle from '@/components/common/sectionTitle';
import Content from '@/components/common/content';
const Contact = () => {
  return (
    <section className="w-full bg-gray-50" id="contact">
      <Container className="max-w-7xl px-8 mx-auto">
        <SectionTitle
          pretitle="Liên hệ"
          title="Liên hệ với chúng tôi"
          titleSize="5xl"
          className="text-center py-24"
        />
        <div className="grid md:grid-cols-3 gap-8 pb-24">
          {contacts.map((contact) => (
            <Content {...contact} key={contact.title} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Contact;
