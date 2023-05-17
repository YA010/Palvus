/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import GoogleIcon from '@mui/icons-material/Google';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './firebase';
import { Google } from '@mui/icons-material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';
function AuthenticationWrapper({ children }) {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (loading) {
      return; // Wait until Firebase authentication is complete
    }

    if (!user && location.pathname !== '/login') {
      navigate('/login');
    } else if (user && location.pathname === '/login') {
      navigate('/dashboard');
    }
  }, [user, loading, navigate, location]);

  return children;
}
export default function Login() {

  const [user, loading, error] = useAuthState(auth);
  const signInWithGoogle = async (e) => {
     
    e.preventDefault();

    try {
     
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
     console.log(result)
      // Upload user's uid to Firestore
    } catch (error) {
      console.error(error);
   
    } 
  };
  return (
    
    <>
    <AuthenticationWrapper>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      {!loading && !user ?  <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in or sign up 
          </h2>
        </div>

        <div className="mt-10  sm:mx-auto sm:w-full sm:max-w-sm">
          
        <div class="mt-12 flex-wrap sm:grid gap-6 grid-cols-1 flex items-center justify-center">
        <button
        onClick={signInWithGoogle}
          class="w-full h-11 rounded-full border border-gray-300/75 bg-white px-6 transition active:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-800 dark:hover:border-gray-700"
        >
          <div class="w-max mx-auto flex items-center justify-center space-x-4">
           <Google color="primary"/>
            <span class="block w-max text-sm font-semibold tracking-wide text-cyan-700 dark:text-white"
              >With Google</span
            >
          </div>
        </button>
           </div>

         
         

          <p className="mt-10 text-center text-sm text-gray-500">
           Email sign up coming soon{' '}
            
          </p>
        </div>
      </div>  : loading && !user ? <>  </>  : <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      
        <div className="mt-10  sm:mx-auto sm:w-full sm:max-w-sm">
          
      

         
         

          <p className="mt-10 text-center text-sm text-gray-500">
           You are being redirected ,   <Link to={`/dashboard`}>click here if you are not redirected</Link>
            
          </p>
        </div>
      </div>
       </> }
      
       </AuthenticationWrapper>
    </>
  )
}
