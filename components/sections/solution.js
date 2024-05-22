import Container from '@/components/common/container';
import { ZapFastIcon } from '@/constants/assets';
import Icon from '@/components/common/icon';

const Solution = () => {
  return (
    <section className="w-full py-24" id="solution">
      <Container className="max-w-7xl m-auto px-8 grid md:grid-cols-3 gap-16">
        <div className="col-span-1">
          <Icon icon={ZapFastIcon} className="mb-6" />
          <h3 className="mb-5 text-4xl text-gray-900 font-semibold">
            Giải pháp
          </h3>
          <p className="text-gray-600 text-xl">
            Ở đây chúng tôi cung cấp các giải pháp như sau
          </p>
        </div>
        <div className="md:col-span-2 flex flex-col gap-16">
          <div>
            <div className="mb-2 font-semibold text-xl text-gray-900">
              Thiết kế, triển khai hạ tầng CNTT
            </div>
            <p className="text-gray-600">
              Với giải pháp Thiết kế và Triển khai Hạ tầng CNTT của chúng tôi,
              chúng tôi cam kết mang đến cho bạn một hệ thống CNTT mạnh mẽ, linh
              hoạt và hiệu quả.
            </p>
          </div>
          <div>
            <div className="mb-2 font-semibold text-xl text-gray-900">
              Tư vấn đầu tư ứng dụng CNTT
            </div>
            <p className="text-gray-600">
              Giải pháp Tư vấn Đầu tư Ứng dụng CNTT của chúng tôi nhằm mục đích
              hỗ trợ khách hàng trong việc tối ưu hóa đầu tư vào công nghệ thông
              tin và áp dụng các ứng dụng CNTT một cách hiệu quả nhất.
            </p>
          </div>
          <div>
            <div className="mb-2 font-semibold text-xl text-gray-900">
              Thiết kế, triển khai giải pháp chuyển đổi số
            </div>
            <p className="text-gray-600">
              Giải pháp Thiết kế và Triển khai Chuyển đổi Số của chúng tôi nhằm
              mục đích hỗ trợ các tổ chức trong việc chuyển đổi từ mô hình kinh
              doanh truyền thống sang mô hình số hóa, tận dụng các công nghệ mới
              nhất để cải thiện hiệu suất và tăng cường cạnh tranh.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Solution;
