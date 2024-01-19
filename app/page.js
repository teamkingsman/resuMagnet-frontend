import FeatureSection from "@/components/Home/Feature/FeatureSection";
import Banner from '@/components/Home/Banner/Banner'
import Template from '@/components/Home/Template/Template'
import Reviews from '@/components/Home/Review/Reviews'



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