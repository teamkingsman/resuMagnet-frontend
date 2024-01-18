import dynamic from "next/dynamic"

export const metadata = {
  title: "Sing Up",
  description: "This is a Sign up page",
};
 function SignUpLayout({ children }) {
    return (
      
        <main>{children}</main>
     
    )
  }
  export default dynamic (()=>Promise.resolve(SignUpLayout),{ssr:false})
