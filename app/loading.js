import Logo from "@/components/LogoAnimation/Logo";

const loading = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center justify-items-center mx-auto ">
      <Logo className="w-full  md:w-1/2 lg:w-1/3"/>
    </div>
  )
}

export default loading