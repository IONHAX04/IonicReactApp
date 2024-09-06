import React from "react";
import { IonContent, IonPage } from "@ionic/react";
import "./ComingSoon.css";

import comingSoon from "../../assets/comingSoon.gif";

const ComingSoon: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="centeredContent" fullscreen>
        <img src={comingSoon} alt="Coming Soon" className="comingSoonGif" />
      </IonContent>
    </IonPage>
  );
};

export default ComingSoon;
