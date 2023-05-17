import {IonList,IonItem, IonButton, IonHeader, IonImg, IonMenu, IonMenuButton, IonToolbar, IonSearchbar, IonRouterLink, IonGrid, IonPopover, IonLabel, IonRadioGroup, IonRadio, IonRow, IonCol, IonChip, IonCardSubtitle, IonTitle, IonMenuToggle, IonButtons } from "@ionic/react";
import { MenuRounded } from "@mui/icons-material";
import { Container } from "@mui/material";
import { Avatar } from "flowbite-react";
import React, {useState, useEffect} from "react";
import { auth } from "../components/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Dash(){
  const [user, loading, error] = useAuthState(auth);
  
  
    return (
       
        <>
      
              
      <IonHeader mode="ios" color="light" >
    <IonGrid>
     <IonRow> 
     <IonButtons >
              <IonMenuButton></IonMenuButton>
            </IonButtons>
 {user ? (<> 
  <IonRow style={{ alignItems:"center"}}> 
  <IonCol>
  <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                <a href={`/dashboard`}>
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src={require('../images/mimcologo.png')}
                    alt="Your Company"
                  />
                  </a>
                  <a href={`/dashboard`}>
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src={require('../images/mimcologo.png')}
                    alt="Your Company"
                  />
</a>
                </div>
              
                
              </div>
              </IonCol>
 <IonCardSubtitle> Welcome, {user.displayName}!</IonCardSubtitle>
</IonRow> </>) :(<> </>)}
 <IonCol sizeXs="2" offset="5" >
 <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
  <IonMenuToggle >
            <IonButton color="medium" > <MenuRounded/></IonButton>
          </IonMenuToggle>
          </IonCol>
          </IonRow>
          </IonGrid>
</IonHeader>
                
                </>
    )
}