import Image from 'next/image';
import Container from '@/components/common/container';
import Button from '@/components/common/button';
import { HeroImage } from '@/constants/assets';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="w-full pt-16 pb-24 mt-20">
      <Container className="flex flex-col items-center md:flex-row max-w-7xl md:gap-x-8 mx-auto px-8">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, translateX: -300 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
        >
          <Image
            src={HeroImage}
            width="592"
            height="640"
            className={'w-full'}
            alt="TDP"
            loading="eager"
            placeholder="blur"
          />
        </motion.div>
        <motion.div
          className="flex items-center w-full mt-12 md:mt-0"
          initial={{ opacity: 0, translateX: 300 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
        >
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-semibold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
              Định hình tương lai số hóa cùng TPD
            </h1>
            <p className="mt-6 mb-12 text-xl leading-normal text-gray-500">
              Tại TPD, chúng tôi không chỉ xây dựng phần mềm, chúng tôi là những
              nhà kiến tạo, là những người mạnh mẽ đứng sau sự đổi mới. Với đội
              ngũ chuyên gia tận tâm và sự tinh thần tiên phong, chúng tôi sẵn
              sàng đưa bạn đến với những giải pháp phần mềm tối ưu nhất.
            </p>
            <Button text="Liên hệ ngay" />
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
