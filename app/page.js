import FeatureSection from "@/components/Home/Feature/FeatureSection";
import Banner from '@/components/Home/Banner/Banner'
import Template from '@/components/Home/Template/Template'
import Reviews from '@/components/Home/Review/Reviews'

export const metadata = {
    title: 'Home - ResuMagnet',
    description: 'A resume builder that will help you land your dream job.',
  };

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