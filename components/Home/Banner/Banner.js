import Link from "next/link"
import BannerLottie from "./BannerLottie"

const  Banner = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 justify-evenly gap-6 items-center max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 my-4 pt-10 ">
      <div className="">
        <h1 className="text-2xl font-semibold md:text-3xl lg:text-5xl text-main uppercase py-1">Unlock Your Potential with

          Our Exceptional Resume
          Building Platform</h1>
        <p className="text-base md:text-xl my-6  ">
          Discover the art of self-presentation and open the doors
          to new opportunities, because your success story begins
          with a resume that truly stands out. Elevate your career
          prospects and showcase your unique strengths.
        </p>
        <Link href="/signup">
        <button className="btn rounded-full btn-sm md:btn-md lg:btn-lg shadow-highlight_color shadow-lg hover:shadow-sub_color hover:shadow-xl bg-sub_color text-neutral-50 hover:bg-highlight_color hover:text-main  font-semibold">Get Started - it&apos;s free</button>

        </Link>
      </div>
      <div>
        <BannerLottie />
      </div>
    </div>
  )
}

export default Banner