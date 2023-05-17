import React from 'react';
import { IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { personCircle, map, desktop,informationCircle,searchCircle } from 'ionicons/icons';
import { DashboardOutlined } from '@mui/icons-material';

const Tab = () => {
  return (
    <IonTabBar mode="ios" slot="bottom" color="primary">
          <IonTabButton id="home" tab="home" href="/dashboard">
            <IonIcon icon={desktop} />
            <IonLabel>Dashboard</IonLabel>
          </IonTabButton>
          <IonTabButton id="Search" tab="search" href="/search">
            <IonIcon icon={searchCircle} />
            <IonLabel>Search</IonLabel>
          </IonTabButton>
          <IonTabButton id="profile" tab="profile" href="/profile">
            <IonIcon icon={personCircle} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
  );
};

export default Tab;
