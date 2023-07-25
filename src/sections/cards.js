import {IonList,IonItem, IonButton, IonHeader, IonImg, IonMenu, IonMenuButton, IonToolbar, IonSearchbar, IonRouterLink, IonGrid, IonPopover, IonLabel, IonRadioGroup, IonRadio, IonRow, IonCol, IonChip, IonCardSubtitle, IonTitle, IonMenuToggle, IonButtons } from "@ionic/react";
import { MenuRounded } from "@mui/icons-material";
import { Container } from "@mui/material";
import { Avatar } from "flowbite-react";
import React, {useState, useEffect} from "react";
import { auth } from "../components/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { IonCard, IonCardContent, IonCardHeader,  IonCardTitle } from '@ionic/react';



function Bigcard() {
  return (
    <IonCard mode="ios" color="dark">
      <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
      <IonCardHeader>
        <IonCardTitle>Card Title</IonCardTitle>
        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
    </IonCard>
  );
}


export default function Cards(){
  
  
  
    return (
       
      <>
     
        <IonRow>

     <IonCol size="12" sizeMd="4" >
     <Bigcard/>

     </IonCol>
     <IonCol size="12" sizeMd="4" >
     <Bigcard/>

     </IonCol> <IonCol size="12" sizeMd="4" >
     <Bigcard/>

     </IonCol> <IonCol size="12" sizeMd="4" >
     <Bigcard/>

     </IonCol> <IonCol size="12" sizeMd="4" >
     <Bigcard/>

     </IonCol> <IonCol size="12" sizeMd="4" >
     <Bigcard/>

     </IonCol>

     </IonRow>
     
    </>
    )
}