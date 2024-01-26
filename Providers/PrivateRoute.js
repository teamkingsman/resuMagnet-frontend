'use client'
import { useRouter } from 'next/navigation'; // Import from 'next/navigation'
import Logo from '@/components/LogoAnimation/Logo';
import useAuth from '@/hooks/useAuth';

const PrivateRoute = ({ children }) => {
  const router = useRouter();
  const { user, loading } = useAuth();

  if (loading){
    return
    <>
    <div className="h-screen w-full flex items-center justify-center justify-items-center mx-auto">
       <Logo className="w-full md:w-1/2 lg:w-1/3" />
     </div>
   </> 
  }

  if (!user?.email) {
    // Redirect to /login with 'replace' behavior
    router.replace('/signin'); // Use router.replace for "replace" behavior
    return null;
  }

  return children;
};

export default PrivateRoute;
