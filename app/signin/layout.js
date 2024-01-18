import dynamic from "next/dynamic";

function SignInLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default dynamic(() => Promise.resolve(SignInLayout), { ssr: false });
