import BannerLottie from "./BannerLottie"

const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-evenly gap-6 items-center max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      <div>
        <p>Contant</p>
      </div>
      <div>
       <BannerLottie/>
      </div>
    </div>
  )
}

export default Banner