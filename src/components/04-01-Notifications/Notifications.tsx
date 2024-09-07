import {
  IonContent,
  IonIcon,
  IonPage,
  IonItem,
  IonThumbnail,
  IonLabel,
} from "@ionic/react";
import { megaphone, pricetags, send } from "ionicons/icons";

import "./Notifications.css";

const Notifications: React.FC = () => {
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
        <IonItem className="notificationContents ion-margin-top ion-margin-bottom">
          <IonThumbnail slot="start">
            <IonIcon src={send} className="notificationIcons" />
          </IonThumbnail>
          <IonLabel>Item Thumbnail</IonLabel>
          <div className="unread"></div>
        </IonItem>
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

export default Notifications;
