import {
  IonContent,
  IonHeader,
  IonPage,
  IonButton,
  IonButtons,
  IonTitle,
  IonToolbar,
  IonIcon,
} from "@ionic/react";

import { qrCodeOutline } from "ionicons/icons";
import ExploreContainer from "../components/ExploreContainer";
import icon from "../../dist/logo.png";

import "./Tab1.css";
import Home from "../components/01-Home/Home";

const Tab1: React.FC = () => {
  return (
    <>
      <IonPage>
        {/* <IonHeader>
          <IonToolbar>
            <IonTitle>Application Name</IonTitle>
            <IonButtons slot="end">
              <IonButton>
                <IonIcon icon={qrCodeOutline} />
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader> */}
        <IonContent fullscreen>
          {/* <IonHeader>
            <IonToolbar>
              <IonTitle size="large">Home</IonTitle>
            </IonToolbar>
          </IonHeader> */}
          <Home />
        </IonContent>
      </IonPage>
    </>
  );
};

export default Tab1;
