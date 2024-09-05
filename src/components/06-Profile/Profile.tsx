import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonAvatar,
  IonButton,
  IonButtons,
  IonItem,
  IonLabel,
  IonIcon,
  IonBackButton,
  IonInput,
} from "@ionic/react";
import {
  personCircleOutline,
  mailOutline,
  arrowBackOutline,
  createOutline,
} from "ionicons/icons";
import "./Profile.css";

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tab5" />
          </IonButtons>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <div className="profile-avatar-container">
          <IonAvatar className="profile-avatar">
            <img
              src="https://www.gravatar.com/avatar?d=mp&s=200"
              alt="Profile"
            />
          </IonAvatar>
        </div>

        <IonItem lines="none">
          <IonIcon icon={personCircleOutline} slot="start" />
          <IonLabel>Name</IonLabel>
          <IonInput value="John Doe" disabled />
          <IonIcon
            className="ion-margin-start"
            icon={createOutline}
            slot="end"
          />
        </IonItem>

        <IonItem lines="none">
          <IonIcon icon={mailOutline} slot="start" />
          <IonLabel>Email</IonLabel>
          <IonInput value="johndoe@example.com" disabled />
          <IonIcon
            className="ion-margin-start"
            icon={createOutline}
            slot="end"
          />
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
