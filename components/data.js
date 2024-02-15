import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Thư ngỏ",
  image: benefitOneImg,
  bullets: [
    "Công ty Cổ phần công nghệ số Thiên Phú (TPC) xin gửi tới Quý khách hàng lời chào trân trọng và xin bày tỏ lòng biết ơn tới Quý khách hàng đã luôn ủng hộ và đồng hành cùng chúng tôi trong suốt những năm qua. Chúng tôi đã và đang triển khai thành công nhiều dự án CNTT cho các khách hàng lớn là các Bộ, ban ngành, các tổng công ty và tập đoàn lớn trong nước.",
    "Bằng sự nỗ lực và trách nhiệm - cùng với khả năng làm chủ công nghệ của mình,  chúng tôi cam kết sẽ không ngừng nâng cao trình độ, cải tiến sản phẩm và quy trình để có thể làm hài lòng Quý khách hàng hơn nữa. Chúng tôi luôn lắng nghe và mong sẽ tiếp tục nhận được những ý kiến đóng góp, sự chia sẻ và ủng hộ của Quý khách trong thời gian tới - góp phần mang lại lợi ích cho cả hai bên.",
    "Chủ tịch HĐQT Công ty cổ phần công nghệ số Thiên Phú,",
    "Đoàn Trọng Nam Anh."
  ],
};

const benefitTwo = {
  title: "Giá trị cốt lõi",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "TÍN",
      desc: "Luôn thực hiện đúng cam kết và không ngừng nỗ lực làm tốt hơn cả sự mong đợi để tạo dựng niềm tin của khách hàng.",
      icon: <SunIcon />,
    },
    {
      title: "TÂM",
      desc: "Luôn duy trì đạo đức kinh doanh; cân bằng quyền lợi giữa Khách hàng – Cộng đồng và Doanh nghiệp.",
      icon: <SunIcon />,
    },
    {
      title: "TRÍ",
      desc: "Luôn coi trọng và khuyến khích sự sáng tạo, đề cao tinh thần học hỏi để mang đến các sản phẩm và dịch vụ có gía trị cao hơn cho khách hàng.",
      icon: <SunIcon />,
    },
    {
      title: "NHÂN",
      desc: "Luôn coi người lao động là tài sản quý giá nhất, hướng tới xây dựng môi trường làm việc thân thiện, chia sẻ trách nhiệm và khuyến khích sự cống hiến.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
