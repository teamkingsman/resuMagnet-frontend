
import featureData from "./featureData";
import FeatureCard from "./FeatureCard";
const FeatureSection = () => {
 
    return (
        <>
        <div className='mt-4 w-full h-full max-w-[2520px] mx-auto xl:px-20 md:pr-10 sm:px-2 '>
            <h1 className='text-2xl md:text-4xl text-center font-bold  w-72 ml-16 mb-2 lg:w-full lg:ml-0'>The Professional Resume Maker and CV Builder</h1>
            <h2 className='text-lg md:text-xl text-center w-64 ml-16  lg:w-full lg:ml-0'>VisualCV is everything you need to create an online resume and make your next <br/> career move</h2>
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