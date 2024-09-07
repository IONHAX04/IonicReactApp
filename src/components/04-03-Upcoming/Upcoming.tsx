import {
  IonContent,
  IonHeader,
  IonButton,
  IonIcon,
  IonButtons,
  IonAccordionGroup,
  IonAccordion,
  IonItem,
  IonPage,
  IonTitle,
  IonToolbar,
  IonLabel,
} from "@ionic/react";
import icon from "../../dist/logo.png";
import { qrCodeOutline } from "ionicons/icons";

import "./Upcoming.css";

const Upcoming: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="upcomingNotifications">
        <IonHeader>
          <IonLabel>Ongoing</IonLabel>
        </IonHeader>
        <IonAccordionGroup>
          <IonAccordion value="first">
            <IonItem slot="header" color="light">
              <IonLabel>Scheduled Activities</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              Looks like you don't have any delivery of this status.
            </div>
          </IonAccordion>
          <IonAccordion value="second">
            <IonItem slot="header" color="light">
              <IonLabel>Driver on the way to sender</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              Looks like you don't have any delivery of this status.
            </div>
          </IonAccordion>
          <IonAccordion value="third">
            <IonItem slot="header" color="light">
              <IonLabel>Item(s) picked up</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              Looks like you don't have any delivery of this status.
            </div>
          </IonAccordion>
          <IonAccordion value="fourth">
            <IonItem slot="header" color="light">
              <IonLabel>Driver on the way to recipient</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              Looks like you don't have any delivery of this status.
            </div>
          </IonAccordion>
        </IonAccordionGroup>

        <IonHeader>
          <IonLabel>Past</IonLabel>
        </IonHeader>
        <IonAccordionGroup>
          <IonAccordion value="first">
            <IonItem slot="header" color="light">
              <IonLabel>Scheduled Activities</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              Looks like you don't have any delivery of this status.
            </div>
          </IonAccordion>
          <IonAccordion value="second">
            <IonItem slot="header" color="light">
              <IonLabel>Driver on the way to sender</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              Looks like you don't have any delivery of this status.
            </div>
          </IonAccordion>
          <IonAccordion value="third">
            <IonItem slot="header" color="light">
              <IonLabel>Item(s) picked up</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              Looks like you don't have any delivery of this status.
            </div>
          </IonAccordion>
          <IonAccordion value="fourth">
            <IonItem slot="header" color="light">
              <IonLabel>Driver on the way to recipient</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              Looks like you don't have any delivery of this status.
            </div>
          </IonAccordion>
        </IonAccordionGroup>
      </IonContent>
    </IonPage>
  );
};

export default Upcoming;
