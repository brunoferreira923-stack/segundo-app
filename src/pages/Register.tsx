import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonCard, IonCardHeader, IonCardTitle, 
  IonCardSubtitle, IonCardContent, IonItem, IonLabel, IonInput, IonButton } from '@ionic/react';
import './Register.css';

const Register: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="tela-register">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Cadastro</IonCardTitle>
            <IonCardSubtitle>Informações Pessoais</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            <IonItem>
              <IonLabel position="stacked">Nome</IonLabel>
              <IonInput type="text" placeholder="Insira o seu nome" />
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">E-mail</IonLabel>
              <IonInput type="email" placeholder="Insira o seu e-mail" />
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Telefone</IonLabel>
              <IonInput type="tel" placeholder="Insira o seu telefone" />
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Senha</IonLabel>
              <IonInput type="password" placeholder="Insira a sua senha" />
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Confirme sua senha</IonLabel>
              <IonInput type="password" placeholder="Confirme sua senha" />
            </IonItem>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Endereço</IonCardTitle>
            <IonCardSubtitle>Informações de Localização</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            <IonItem>
              <IonLabel position="stacked">CEP</IonLabel>
              <IonInput type="text" placeholder="00000-000" />
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Rua / Logradouro</IonLabel>
              <IonInput type="text" placeholder="Insira a sua rua ou avenida" />
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Número</IonLabel>
              <IonInput type="number" placeholder="Ex: 123" />
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Complemento</IonLabel>
              <IonInput type="text" placeholder="Apto, Bloco, etc." />
            </IonItem>

            <IonButton expand="block" className="ion-margin-top">
              Confirmar Cadastro
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Register;