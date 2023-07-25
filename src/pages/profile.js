import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import { IonAccordion, IonAccordionGroup, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonItem, IonLabel, IonMenuButton, IonRow, IonTitle, IonToolbar } from '@ionic/react';

import { Grid } from '@mui/material';
import moment from 'moment/moment';
import { app,auth, firestore } from '../components/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { Google } from '@mui/icons-material';

export default function Profile () {

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
  
       {user ? (<> 
    
       <IonGrid>
      
      
    
       <IonRow>
        <IonCol sizeXs='12'>
<IonCard mode="ios" color="secondary" id="showcard">

      <IonCardHeader id="amo">
      <Avatar  variant="rounded">
<img src={user.photoURL}/>
</Avatar>
      
        
      </IonCardHeader>
      <IonCardContent>
      <IonCardTitle id="title">{user.displayName}</IonCardTitle>
      <IonCardSubtitle id="subtitle">@{user.email}</IonCardSubtitle>
        <IonCardSubtitle id="subtitle">joined {moment(user.metadata.creationTime).fromNow()}</IonCardSubtitle>
     
      <IonButton onClick={() => signOut(auth)}>Log out</IonButton>
      </IonCardContent>
    </IonCard>
    </IonCol>
    <IonCol sizeXs='12'>
<IonCard mode="ios" color="secondary" id="showcard">

      <IonCardHeader id="amo">
      <Avatar  variant="rounded">
<img src={user.photoURL}/>
</Avatar>
      
        
      </IonCardHeader>
      <IonCardContent>
      <IonCardTitle id="title">{user.displayName}</IonCardTitle>
      <IonCardSubtitle id="subtitle">@{user.email}</IonCardSubtitle>
        <IonCardSubtitle id="subtitle">joined {moment(user.metadata.creationTime).fromNow()}</IonCardSubtitle>
     
      <IonButton onClick={() => signOut(auth)}>Log out</IonButton>
      </IonCardContent>
    </IonCard>
    </IonCol>
    <IonCol sizeXs='12'>
<IonCard mode="ios" color="secondary" id="showcard">

      <IonCardHeader id="amo">
      <Avatar  variant="rounded">
<img src={user.photoURL}/>
</Avatar>
      
        
      </IonCardHeader>
      <IonCardContent>
      <IonCardTitle id="title">{user.displayName}</IonCardTitle>
      <IonCardSubtitle id="subtitle">@{user.email}</IonCardSubtitle>
        <IonCardSubtitle id="subtitle">joined {moment(user.metadata.creationTime).fromNow()}</IonCardSubtitle>
     
      <IonButton onClick={() => signOut(auth)}>Log out</IonButton>
      </IonCardContent>
    </IonCard>
    </IonCol> <IonCol sizeXs='12'>
<IonCard mode="ios" color="secondary" id="showcard">

      <IonCardHeader id="amo">
      <Avatar  variant="rounded">
<img src={user.photoURL}/>
</Avatar>
      
        
      </IonCardHeader>
      <IonCardContent>
      <IonCardTitle id="title">{user.displayName}</IonCardTitle>
      <IonCardSubtitle id="subtitle">@{user.email}</IonCardSubtitle>
        <IonCardSubtitle id="subtitle">joined {moment(user.metadata.creationTime).fromNow()}</IonCardSubtitle>
     
      <IonButton onClick={() => signOut(auth)}>Log out</IonButton>
      </IonCardContent>
    </IonCard>
    </IonCol> <IonCol sizeXs='12'>
<IonCard mode="ios" color="secondary" id="showcard">

      <IonCardHeader id="amo">
      <Avatar  variant="rounded">
<img src={user.photoURL}/>
</Avatar>
      
        
      </IonCardHeader>
      <IonCardContent>
      <IonCardTitle id="title">{user.displayName}</IonCardTitle>
      <IonCardSubtitle id="subtitle">@{user.email}</IonCardSubtitle>
        <IonCardSubtitle id="subtitle">joined {moment(user.metadata.creationTime).fromNow()}</IonCardSubtitle>
     
      <IonButton onClick={() => signOut(auth)}>Log out</IonButton>
      </IonCardContent>
    </IonCard>
    </IonCol>
  
   
    </IonRow>
    </IonGrid>
   
  

   
    </> )   : loading && !user ? <>  </> :(<>
      
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
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
      </div> 
     
     </> )}
         
   
        
</>
    )
}
