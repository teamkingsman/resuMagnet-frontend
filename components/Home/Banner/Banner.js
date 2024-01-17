import Link from "next/link"
import BannerLottie from "./BannerLottie"

const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-evenly gap-6 items-center max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      <div className="">
        <h1 className="text-5xl">Unlock Your Potential with
          Our Exceptional Resume
          Building Platform</h1>
        <p className="text-base my-6">
          Discover the art of self-presentation and open the doors
          to new opportunities, because your success story begins
          with a resume that truly stands out. Elevate your career
          prospects and showcase your unique strengths.
        </p>
        <Link href="/login">
        <button className="btn rounded-full btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-main">Get Started - it&apos;s free</button>
        </Link>
      </div>
      <div>
        <BannerLottie />
      </div>
    </div>
  )
}

export default Banner