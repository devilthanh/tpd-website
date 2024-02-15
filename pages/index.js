import Head from 'next/head'
import Hero from '../components/hero'
import Navbar from '../components/navbar'
import SectionTitle from '../components/sectionTitle'

import { benefitOne, benefitTwo } from '../components/data'
import Video from '../components/video'
import Footer from '../components/footer'
import Testimonials from '../components/testimonials'
import Cta from '../components/cta'
import Faq from '../components/faq'
import PopupWidget from '../components/popupWidget'
import Letter from '../components/letter'
import Benefits from '../components/benefits'

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
      <SectionTitle
        title="Sứ mệnh"
      >
        Đem các sản phẩm và dịch vụ công nghệ chất lượng cao tới khách hàng, cộng đồng và xã hội. Góp phần tích cực vào sự phát triển chung của nền khoa học và công nghệ tại Việt Nam.
      </SectionTitle>
      <SectionTitle
        title="Tầm nhìn"
      >
        Trong 10 năm, phấn đấu trở thành một công ty Công nghệ thông tin uy tín tại Việt Nam với 200 nhân viên và doanh thu đạt 500 tỷ Đồng.
      </SectionTitle>
      <Benefits imgPos="right" data={benefitTwo} />
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  )
}

export default Home
