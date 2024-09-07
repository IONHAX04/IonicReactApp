import {
  IonContent,
  IonHeader,
  IonPage,
  IonButton,
  IonButtons,
  IonTitle,
  IonIcon,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import icon from "../../dist/logo.png";
import { qrCodeOutline } from "ionicons/icons";

import "./Tab2.css";
import Explore from "../components/02-Explore/Explore";

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        {/* <IonHeader>
          <IonToolbar>
            <IonTitle size="large">Explore</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        <Explore />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
