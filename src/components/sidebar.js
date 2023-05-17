import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonLabel, IonMenu, IonMenuButton, IonMenuToggle, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { BookOnlineRounded, DesktopMacRounded, HelpCenterRounded, Person2Outlined, Person2Rounded, Person3Rounded } from "@mui/icons-material";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import moment from "moment";
import { IonSplitPane } from "@ionic/react";
import Header from "./header";
import Dash from "../sections/header";
import '../css/sidebar.css'
import { Avatar } from "flowbite-react";
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
export default function Sidebar() {
    const [user, loading, error] = useAuthState(auth);
    const [activeButton, setActiveButton] = useState(null);
   const location = useLocation()
   useEffect(() => {
    // Check if the current location matches any of the button paths
    const buttonPaths = ['/dashboard', '/profile', '/learn', '/signout', '/help'];
    const matchingButton = buttonPaths.find((path) => path === location.pathname);

    if (matchingButton) {
      setActiveButton(matchingButton);
    }
  }, [location]);
    return (
<> 
<AuthenticationWrapper>
  {user && !loading ?  <> 
  
    <IonSplitPane when="md" contentId="main">
<IonMenu contentId="main"  >
<IonHeader >
  <IonToolbar>
  <NavLink id="icons" to="/dashboard">
  <a  class="flex items-center pl-1.5 ">
  <img
                   class="h-6 mr-3 sm:h-7"
                    src={require('../images/mimcologo.png')}
                    alt="Your Company"
                  />
        
      </a>
      </NavLink>
  </IonToolbar>
</IonHeader>

<IonContent>
  <div id="side" class="px-3 py-4 ">
     
      <ul class="space-y-2 font-medium">
         <li>
         <NavLink id="icons" to="/dashboard">
            <a className={activeButton === '/dashboard' ? 'flex items-center p-2 bg-blue-100 text-blue-500 rounded-lg dark:text-white hover:bg-blue-100 hover:text-gray-800  dark:hover:bg-gray-700' : 'flex items-center p-2 text-gray-100 rounded-lg dark:text-white hover:bg-gray-100 hover:text-gray-800  dark:hover:bg-gray-700'} >
               
               <svg aria-hidden="true" class="w-6 h-6 text-grey-100 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
               <span class="flex-1 ml-3 whitespace-nowrap">Dashboard</span>
               <span class="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
            </a>
            </NavLink>
         </li>
         <li>
         <NavLink id="icons" to="/profile">
            <a className={activeButton === '/profile' ? 'flex items-center p-2 bg-blue-100 text-blue-500 rounded-lg dark:text-white hover:bg-blue-100 hover:text-gray-800  dark:hover:bg-gray-700' : 'flex items-center p-2 text-gray-100 rounded-lg dark:text-white hover:bg-gray-100 hover:text-gray-800  dark:hover:bg-gray-700'} >
               
               <svg aria-hidden="true" class="w-6 h-6 text-grey-100 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
               <span class="flex-1 ml-3 whitespace-nowrap">Profile</span>
               <span class="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
            </a>
            </NavLink>
         </li>
        
        
      </ul>

    
      <div id="dropdown-cta" class="p-4 mt-6 rounded-lg bg-blue-50 dark:bg-blue-900" role="alert">
         <div class="flex items-center mb-3">
         <a  class="flex items-center ">
  <img
                   class="h-6 mr-3 sm:h-10"
                    src={user.photoURL}
                    alt="Your Company"
                  />
        
      </a>
      <p style={{overflowWrap: "break-word",fontWeight:"700"}} class="mb-3 text-sm text-blue-800 dark:text-blue-400">{user.displayName}</p>
         </div>
         
         <p style={{overflowWrap: "break-word", fontWeight:"600"}} class="mb-3 text-sm text-blue-900 dark:text-blue-400">@{user.email}</p>
         <p style={{overflowWrap: "break-word"}} class="mb-3 text-sm text-blue-900 dark:text-blue-400">joined {moment(user.metadata.creationTime).fromNow()}</p>
         <IonButton onClick={() => signOut(auth)}>Log out</IonButton>
               </div>

   </div>
   </IonContent>


         
</IonMenu>

<IonContent id="main">
      <Outlet/>
      </IonContent>
           
    </IonSplitPane></> : <> </>}


    </AuthenticationWrapper>

</>
    )
}