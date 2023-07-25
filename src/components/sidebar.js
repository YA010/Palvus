'use client';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import { Link, NavLink, Outlet, ScrollRestoration, useLocation, useNavigate } from "react-router-dom";
import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonLabel, IonMenu, IonMenuButton, IonMenuToggle, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { AddBoxRounded, ArrowUpwardOutlined, ArrowUpwardRounded, BookOnlineRounded, ChatBubbleOutline, ChatBubbleOutlineRounded, ChatBubbleRounded, CopyrightRounded, DarkModeRounded, DeleteOutlineRounded, DesktopMacRounded, Facebook, GitHub, HelpCenterRounded, HomeMiniRounded, HouseRounded, Instagram, LightModeRounded, MenuBookRounded, Person2Outlined, Person2Rounded, Person3Rounded, Twitter } from "@mui/icons-material";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { Navbar, Text, Avatar, Dropdown, User } from "@nextui-org/react";
import { Collapse,  Grid, } from "@nextui-org/react";
import moment from "moment";
import { IonSplitPane } from "@ionic/react";
import Header from "./header";

import axios from "axios";
import '../css/sidebar.css'
import { Footer } from "flowbite-react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Typography } from "@mui/material";
import { Button } from "flowbite-react";

import { useWindowScroll } from '@mantine/hooks';
import { Affix, Transition, rem } from '@mantine/core';

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


export default function Sidebarx() {

 
  
  function Demo() {
    const [scroll, scrollTo] = useWindowScroll();
  
    return (
      <>
        <Text align="center">Affix is located at the bottom of the screen, scroll to see it</Text>
        <Affix position={{ bottom: rem(20), right: rem(20) }}>
          <Transition transition="slide-up" mounted={scroll.y > 0}>
            {(transitionStyles) => (
              <Button
                leftIcon={<ArrowUpwardRounded />}
                style={transitionStyles}
                onClick={() => scrollTo({ y: 0 })}
              ><ArrowUpwardOutlined />
                Scroll to top
              </Button>
            )}
          </Transition>
        </Affix>
      </>
    );
  }

const systemMessage = "You are Palvus, your personal AI-powered doctor companion.\n\nWho you are:\n- You always end every response with 'This is not medical advice and is merely informational, please seek proper medical advice/attention' or 'Please keep in mind that while I can offer informational advice, I'm not a substitute for a licensed medical professional and cannot provide medical advice.'\n- You are an AI-powered medical assistant.\n- You were created to ask the user for information about their condition and continue asking about any further health/medical information until the user says they don't have any other conditions to address. Then, offer personalized health advice and medical information with a disclaimer of not being a medical professional.\n- You are knowledgeable, compassionate, and dedicated to improving health outcomes.\n- You always ask the user for more information about their condition and continue asking until the user says they don't have any other conditions to address.";

const App = () => {
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  }

  const makeAPIRequest = async () => {
    const options = {
      method: 'POST',
      url: 'https://openai80.p.rapidapi.com/chat/completions',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '57e455a35cmsh9a02f7993bd1d89p1dd6cfjsnc3b24add851e',
        'X-RapidAPI-Host': 'openai80.p.rapidapi.com'
      },
      data: {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: "You are Palvus, your personal AI-powered doctor companion. Who you are:\n- You always end every response with 'This is not medical advice and is merely informational, please seek proper medical advice/attention' or 'Please keep in mind that while I can offer informational advice, I'm not a substitute for a licensed medical professional and cannot provide medical advice.'\n- You are an AI-powered medical assistant.\n- You were created to ask the user for information about their condition and continue asking about any further health/medical information until the user says they don't have any other conditions to address. Then, offer personalized health advice and medical information with a disclaimer of not being a medical professional.\n- You are knowledgeable, compassionate, and dedicated to improving health outcomes.\n- You always ask the user for more information about their condition and continue asking until the user says they don't have any other conditions to address."
          },
          {
            role: 'user',
            content: 'hey'
          }
        ]
      }
    };
    

    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  

  return (
    <>
      <input type="text" value={userInput} onChange={handleInputChange} />
      <button onClick={makeAPIRequest}>Make API Request</button>
    </>
  );
}


  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  

  // Listen for changes to the prefers-color-scheme media query
  prefersDark.addListener((mediaQuery) => toggleDarkTheme(mediaQuery.matches));

  // Add or remove the "dark" class based on if the media query matches
  function toggleDarkTheme(shouldAdd) {
    document.body.classList.toggle('dark', shouldAdd);
   
  }
  toggleDarkTheme(prefersDark.matches);
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

  const [side,setSide] = useState(false);


  const [width,setWidth] = useState("");
  function getSize() {
    setWidth(window.innerWidth)
  }

  useEffect(()=> 
{
window.addEventListener('resize',getSize);
if(width < 400) {
setSide(true)
}
else{
  setSide(false)
}
return () =>{
  window.removeEventListener('resize',getSize())
}

},[window.innerWidth]
)
 
    return (
<> 
<AuthenticationWrapper>
  {user && !loading ?  <> 


  
  
    <Navbar isBordered variant="sticky">
    <Navbar.Content showIn="xs">
    <Dropdown placement="bottom-left">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="primary"
                  size="md"
                  src={require('../images/mimcologo.png')}
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="secondary"
              
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  zoey@example.com
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider>
                My Settings
              </Dropdown.Item>
              <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
              <Dropdown.Item key="analytics" withDivider>
                Analytics
              </Dropdown.Item>
              <Dropdown.Item key="system">System</Dropdown.Item>
              <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
              <Dropdown.Item key="help_and_feedback" withDivider>
                Help & Feedback
              </Dropdown.Item>
              <Dropdown.Item key="logout" withDivider color="error">
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
         </Navbar.Content>
          <Navbar.Brand
       
      
     >
        <img
                 className="h-12 w-auto lg:block"
                 src={require('../images/palvus.png')}
                 alt="Palvus"
               />
     
     </Navbar.Brand>
        
        <Navbar.Content enableCursorHighlight hideIn="xs" variant="highlight-rounded">

        <Link to='/dashboard'>
          <Navbar.Link  isActive={location.pathname === '/dashboard'} > Dashboard</Navbar.Link>
         </Link>
         <Link to='/dashboard'>
          <Navbar.Link  isActive={location.pathname === '/profile'} > Dashboard</Navbar.Link>
         </Link>
          
        </Navbar.Content>
        <Navbar.Content>
        <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="primary"
                  size="md"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="secondary"
              
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  zoey@example.com
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider>
                My Settings
              </Dropdown.Item>
              <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
              <Dropdown.Item key="analytics" withDivider>
                Analytics
              </Dropdown.Item>
              <Dropdown.Item key="system">System</Dropdown.Item>
              <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
              <Dropdown.Item key="help_and_feedback" withDivider>
                Help & Feedback
              </Dropdown.Item>
              <Dropdown.Item key="logout" withDivider color="error">
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>
      
      </Navbar>
     
        <Outlet/>
       





      
  


   <Demo/> </> : <> </>}
</AuthenticationWrapper>

</>
    )
}