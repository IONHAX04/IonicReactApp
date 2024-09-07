import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTabs,
  IonTabButton,
  IonLabel,
  IonTabBar,
  IonIcon,
  IonTitle,
  IonToolbar,
  IonRouterOutlet,
} from "@ionic/react";

import "./Tab1.css";
import Alerts from "../components/04-Alerts/Alerts";

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <Alerts />
    </IonPage>
  );
};

export default Tab4;
