import {
  IonContent,
  IonHeader,
  IonButton,
  IonIcon,
  IonButtons,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import icon from "../../dist/logo.png";
import { qrCodeOutline } from "ionicons/icons";

import "./Tab3.css";

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">QR Scan</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="QR Scan page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
