import { Fragment, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase'

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
function AuthenticationWrapper({ children }) {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  let location = useLocation();
  useEffect(() => {
    if (loading) {
      return; // Wait until Firebase authentication is complete
    }
  
  
  }, [user, loading, navigate]);

  return children;
}

export default function Header() {
  const [user, loading, error] = useAuthState(auth);
  return (
    <AuthenticationWrapper>
    <div className="min-h-full">
    <Disclosure as="nav" className="sticky" >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-between ">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
              
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                <a href={`/`}>
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src={require('../images/mimcologo.png')}
                    alt="Your Company"
                  />
                  </a>
                  <a href={`/`}>
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src={require('../images/mimcologo.png')}
                    alt="Your Company"
                  />
</a>
                </div>
              
                
              </div>

              {/* make sure to add useauth() here to change login to user icon if logged in   */}
              {!loading && user ? <>
                <div className="py-6">
                  
                  <a href={`/dashboard`} className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Dashboard</a>
                 
              </div>
              </> : loading && !user ? <>  </> : <>  <div className="py-6">
                  
                    <Link to={`login`} className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"> Log in</Link>
                   
                </div></>}
             

              
            </div>
          </div>
         
        </>
      )}
    </Disclosure>
    <div id="detail">
      <Outlet/>
    </div>
   
   </div>
   </AuthenticationWrapper>
  )
}
