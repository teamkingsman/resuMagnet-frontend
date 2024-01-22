
import featureData from "./featureData";
import FeatureCard from "./FeatureCard";
const FeatureSection = () => {
 
    return (
        <>
        <div className='my-4 w-full h-full max-w-[2520px] mx-auto xl:px-20 md:pr-10 sm:px-2 '>
            <h1 className='text-2xl md:text-4xl text-center px-6 font-bold mx-auto'>The Professional Resume Maker and CV Builder</h1>
            <h2 className='text-lg md:text-xl text-center px-6 mx-auto  '>VisualCV is everything you need to create an online resume and make your next <br/> career move</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3 pt-5 '>
           {
                featureData?.map(item=> <FeatureCard key={item.title} icon={item.icon}  title={item.title} description={item.description} />)
           }         
            </div>
        </div>
      </>
    ); 
};

export default FeatureSection;