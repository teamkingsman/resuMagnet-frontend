import dynamic from "next/dynamic"

 function SignUpLayout({ children }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    )
  }
  export default dynamic (()=>Promise.resolve(SignUpLayout),{ssr:false})
