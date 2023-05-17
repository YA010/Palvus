import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonMenuButton, IonMenuToggle, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react'

const items = [
  { id: 1, title: 'Back End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
  { id: 2, title: 'Front End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
  { id: 3, title: 'User Interface Designer', department: 'Design', type: 'Full-time', location: 'Remote' },
]

export default function Dashboard() {
  return (
   <>
   

       <IonGrid>
      
      
      
       <IonRow>
        <IonCol >
<IonCard mode="ios" color="secondary" id="showcard">

      <IonCardHeader id="amo">
     
        
      </IonCardHeader>
      <IonCardContent>
      <IonCardTitle id="title">y</IonCardTitle>
      <IonCardSubtitle id="subtitle">@</IonCardSubtitle>
        <IonCardSubtitle id="subtitle">joined joinedjoinedjoinedjoinedjoinedjoinedjoinedjoinedjoinedjoinedjoinedjoinedjoinedjoinedjoinedjoinedjoined</IonCardSubtitle>
     
     
      </IonCardContent>
    </IonCard>
    </IonCol>

  
   
    </IonRow>
    </IonGrid>
    
  </>
  )
}
