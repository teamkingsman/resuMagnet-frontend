import dynamic from "next/dynamic";
// export const metadata = {
//   title: "Sing in",
//   description: "This is a Sign In page",
// };
function AuthLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default dynamic (() => Promise.resolve(AuthLayout), {ssr: false});
