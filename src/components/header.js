import { Fragment, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase'
import { Navbar, Text, Avatar, Dropdown } from "@nextui-org/react";
import { IonContent } from '@ionic/react'

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
  const location = useLocation();
  const collapseItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  return (
    <AuthenticationWrapper>

      <Navbar  variant="sticky">
        
        <Navbar.Brand
       
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
           <img
                    className="h-12 w-auto lg:block"
                    src={require('../images/palvus.png')}
                    alt="Palvus"
                  />
        
        </Navbar.Brand>
      
        <Navbar.Content id="navbar"
          css={{
            "@xs": {
              w: "19%",
              jc: "flex-end",
            },
          }}
        > 
         {user && !loading ?  < > 
        <Navbar.Link style={{fontWeight:"1000"}} as={Link} to="/dashboard" isActive={location.pathname === '/dashboard'}>
        Dashboard
      </Navbar.Link>
      </> : <>  <Navbar.Link as={Link} to="/login" isActive={location.pathname === '/login'}>
        Log In
      </Navbar.Link></>}
         
        </Navbar.Content>
        
      </Navbar>
  
      
      <Outlet/>
     
    </AuthenticationWrapper>
  );
}
