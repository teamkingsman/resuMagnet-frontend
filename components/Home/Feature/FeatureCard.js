import FeatureLottieIcon from "./FeatureLottieIcon";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <>
      <div className="m-2 p-2 rounded-xl   shadow-4xl text-white bg-gray-800 dark:bg-gray-900 dark:text-gray-50  shadow-inner  shadow-sub_color hover:shadow-lg hover:shadow-sub_color">
        <FeatureLottieIcon icon={icon} />
        <h2 className="font-bold text-center  mb-4">{title}</h2>
        <p className="text-center">{description}</p>
      </div>
    </>
  );
};

export default FeatureCard;
