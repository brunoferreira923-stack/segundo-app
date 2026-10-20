import { IonCard, IonContent, IonButton, IonItem, IonInput, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Login.css';

const Login: React.FC = () => {

  const { name = '' } = useParams<{ name: string; }>();

  return (
    <div className='tela-login'>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle color="Primary">ACESSAR</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          <IonItem>
            <IonInput type="email" label="E-mail" labelPlacement="floating" placeholder="Insira o texto"></IonInput>
          </IonItem>
          <IonItem>
            <IonInput type="password" label="Senha" labelPlacement="floating" placeholder="Insira a senha"></IonInput>
          </IonItem>
          <IonItem>
            <IonButton fill='clear'>Esqueci a senha/e-mail</IonButton>
          </IonItem>
          <IonItem className='teste'>
            <IonButton size='full' color="secondary">Login</IonButton>
            <IonButton size='full' fill='clear'>Cadastre-se</IonButton>
          </IonItem>

        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default Login;
