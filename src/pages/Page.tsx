import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonButton } from '@ionic/react';
import './Page.css';

const Page: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Página Principal</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        {/* Div de centralização do botão */}
        <div className="botão-login">
          <IonButton routerLink="/login">
            Login
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Page;