import {
  IonContent,
  IonHeader,
  IonPage,
  IonButton,
  IonButtons,
  IonIcon,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import icon from "../../dist/logo.png";
import { qrCodeOutline } from "ionicons/icons";

import "./Tab1.css";

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Notifications</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Notifications page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
