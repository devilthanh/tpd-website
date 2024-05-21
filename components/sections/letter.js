import Image from 'next/image';
import React from 'react';
import Container from '@/components/common/container';
import SectionTitle from '@/components/common/sectionTitle';

const Letter = ({ data }) => {
  return (
    <section id="letter" className="w-full lg:pb-16 lg:pt-24">
      <Container className="flex max-w-7xl md:gap-16 flex-col items-center md:flex-row mx-auto px-8">
        <div className="w-full">
          <SectionTitle
            pretitle="Giới thiệu"
            title="Thư ngỏ"
            className="px-0 mx-0"
          >
            <p className="text-lg font-normal">
              "Công ty Cổ phần công nghệ số Thiên Phú (TPC) xin gửi tới Quý
              khách hàng lời chào trân trọng và xin bày tỏ lòng biết ơn tới Quý
              khách hàng đã luôn ủng hộ và đồng hành cùng chúng tôi trong suốt
              những năm qua. Chúng tôi đã và đang triển khai thành công nhiều dự
              án CNTT cho các khách hàng lớn là các Bộ, ban ngành, các tổng công
              ty và tập đoàn lớn trong nước. Bằng sự nỗ lực và trách nhiệm -
              cùng với khả năng làm chủ công nghệ của mình, chúng tôi cam kết sẽ
              không ngừng nâng cao trình độ, cải tiến sản phẩm và quy trình để
              có thể làm hài lòng Quý khách hàng hơn nữa. Chúng tôi luôn lắng
              nghe và mong sẽ tiếp tục nhận được những ý kiến đóng góp, sự chia
              sẻ và ủng hộ của Quý khách trong thời gian tới - góp phần mang lại
              lợi ích cho cả hai bên.""
            </p>
            <p className="mt-5 text-lg font-normal">
              Chủ tịch HĐQT Công ty cổ phần công nghệ số Thiên Phú
            </p>
            <p className="mt-5 text-lg font-normal">Đoàn Trọng Nam Anh</p>
          </SectionTitle>
        </div>
        <div className="flex items-center justify-center w-full">
          <div>
            <Image
              src={data.image}
              width="576"
              height="auto"
              alt="Benefits"
              className={'object-cover mt-12 md:mt-0'}
              placeholder="blur"
              blurDataURL={data.image.src}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Letter;
