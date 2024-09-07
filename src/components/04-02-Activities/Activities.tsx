import {
  IonContent,
  IonIcon,
  IonPage,
  IonItem,
  IonThumbnail,
  IonLabel,
} from "@ionic/react";
import { megaphone, pricetags, send } from "ionicons/icons";

import "./Activities.css";

const Activities: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonItem className="notificationContents ion-margin-top ion-margin-bottom">
          <IonThumbnail slot="start">
            <IonIcon src={megaphone} className="notificationIcons" />
          </IonThumbnail>
          <IonLabel>Item Thumbnail</IonLabel>
          <div className="unread"></div>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Activities;
