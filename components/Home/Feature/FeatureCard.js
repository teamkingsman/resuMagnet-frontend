import FeatureLottieIcon from "./FeatureLottieIcon";

const FeatureCard = ({ icon, title,description}) => {
    return (
        <>
            <div className='w-96 rounded-xl p-4  shadow-4xl text-white bg-gray-800 dark:bg-gray-900 dark:text-gray-50 '>
                     <FeatureLottieIcon icon={icon}/>
                       <h2 className='font-bold text-center  mb-4'>{title}</h2>
                      <p className='text-center'>{description}</p>  
                      </div>
        </>
    );
};

export default FeatureCard;