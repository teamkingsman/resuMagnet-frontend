import FeatureSection from "@/components/Home/Feature/FeatureSection";
import Banner from '@/components/Home/Banner/Banner'
import Template from '@/components/Home/Template/Template'
import Reviews from '@/components/Home/Review/Reviews'
// import Slider from '@/components/Home/Review/Slider'
import Image from 'next/image'



export default function Home() {
  return (
 <>
      <Banner />
      <Template />
      <FeatureSection />
      <Reviews/>
    </>
    )
}