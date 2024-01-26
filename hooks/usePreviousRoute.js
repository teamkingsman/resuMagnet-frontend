import { useRouter } from 'next/router'; // Import from 'next/router', not 'next/navigation'
import { useEffect, useRef } from 'react';

const usePreviousRoute = () => {
  const router = useRouter();
  const previousRouteRef = useRef(null);

  useEffect(() => {
    // Update the previousRouteRef whenever the route changes
    previousRouteRef.current = router.asPath; // Use router.asPath in Next.js
  }, [router]); // Dependency array should include router object

  return previousRouteRef.current;
};

export default usePreviousRoute;