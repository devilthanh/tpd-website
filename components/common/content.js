import Icon from './icon';

const Content = ({ icon, title, desc }) => {
  return (
    <div className="flex flex-col items-center gap-5 text-center">
      <Icon icon={icon} />
      <div className="text-xl font-semibold text-gray-900">{title}</div>
      <p className="font-semibold text-primary-700">{desc}</p>
    </div>
  );
};

export default Content;
