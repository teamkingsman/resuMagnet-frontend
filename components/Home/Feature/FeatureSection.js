
import featureData from "./featureData";
import FeatureCard from "./FeatureCard";
const FeatureSection = () => {
 
    return (
        <>
        <div className='  h-full max-w-[2520px] mx-auto xl:px-20 md:pr-10 sm:px-2 pt-20 pb-20 bg-gradient-to-r from-[#EAF2F8] to-[#D6EAF8]'>
            <h1 className='text-2xl font-semibold  lg:text-5xl  md:text-3xl text-center px-6 mx-auto text-main uppercase'>The Professional Resume Maker and CV Builder</h1>
            <h2 className='text-base md:text-xl my-6 text-center px-6 mx-auto  '>VisualCV is everything you need to create an online resume and make your next <br/> career move</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3 pt-5 w-9/12 mx-auto'>
           {
                featureData?.map(item=> <FeatureCard key={item.title} icon={item.icon}  title={item.title} description={item.description} />)
           }         
            </div>
        </div>
      </>
    ); 
};

export default FeatureSection;