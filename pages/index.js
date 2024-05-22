import Head from 'next/head';
import Hero from '@/components/sections/hero';
import Navbar from '@/components/headers/navbar';
import SectionTitle from '@/components/common/sectionTitle';
import { benefitOne, benefitTwo } from '@/constants/data';
import PopupWidget from '@/components/popupWidget';
import Letter from '@/components/sections/letter';
import Benefits from '@/components/sections/benefits';
import Solution from '@/components/sections/solution';
import Contact from '@/components/sections/contact';

const Home = () => {
  return (
    <>
      <Head>
        <title>Thien Phu Digital</title>
        <meta name="description" content="Thien Phu Digital " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />

      <Letter data={benefitOne} />
      <section className="w-full" id="su-menh">
        <SectionTitle
          pretitle="Giới thiệu"
          title="Sứ mệnh"
          variant="horizontal"
          titleSize="5xl"
          className="max-w-7xl py-24 mx-auto px-8"
        >
          Đem các sản phẩm và dịch vụ công nghệ chất lượng cao tới khách hàng,
          cộng đồng và xã hội. Góp phần tích cực vào sự phát triển chung của nền
          khoa học và công nghệ tại Việt Nam.
        </SectionTitle>
      </section>
      <section className="w-full" id="tam-nhin">
        <SectionTitle
          pretitle="Giới thiệu"
          title="Tầm nhìn"
          variant="horizontal"
          titleSize="5xl"
          className="max-w-7xl lg:pt-24 pt-0 pb-24 mx-auto px-8"
        >
          Trong 10 năm, phấn đấu trở thành một công ty Công nghệ thông tin uy
          tín tại Việt Nam với 200 nhân viên và doanh thu đạt 500 tỷ Đồng.
        </SectionTitle>
      </section>
      <Benefits imgPos="right" data={benefitTwo} />
      <Solution />
      <Contact />
      <PopupWidget />
    </>
  );
};

export default Home;
