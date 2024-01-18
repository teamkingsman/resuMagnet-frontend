import dynamic from "next/dynamic"

// export const metadata = {
//   title: "Sing Up",
//   description: "This is a Sign up page",
// };
function SignUpLayout({ children }) {
  return (

    <html lang="en">
      <body>{children}</body>
    </html>

  )
}
export default dynamic(() => Promise.resolve(SignUpLayout), { ssr: false })
