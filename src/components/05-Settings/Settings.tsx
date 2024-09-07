import React from "react";
import { IonContent, IonTitle, IonItem, IonLabel } from "@ionic/react";
import SettingsCard from "../../pages/SettingsCard/SettingsCard";
import {
  documentTextOutline,
  helpCircleOutline,
  mailOutline,
  notificationsOutline,
  personCircleOutline,
  walletOutline,
  cashOutline,
  globeOutline,
  thumbsUpOutline,
  shareSocialOutline,
  informationCircleOutline,
  chatbubbleOutline,
  alertCircleOutline,
  logOutOutline,
} from "ionicons/icons";

import IonItems from "../../pages/IonItem/IonItems";

import "./Settings.css";

const Settings: React.FC = () => {
  const cardItems = [
    { icon: personCircleOutline, label: "Orders" },
    { icon: cashOutline, label: "Wishlist" },
    { icon: walletOutline, label: "Coupons" },
    { icon: helpCircleOutline, label: "Help Center" },
  ];

  const accountSettings = [
    { icon: personCircleOutline, label: "Profile", route: "/profile" },
    { icon: cashOutline, label: "Transaction History" },
    { icon: walletOutline, label: "Wallets" },
    { icon: cashOutline, label: "Credit Scores / Manage Credits" },
    { icon: notificationsOutline, label: "Notification Settings" },
  ];

  const shareSettings = [
    { icon: thumbsUpOutline, label: "Rate App" },
    { icon: shareSocialOutline, label: "Share App" },
  ];

  const supportAndPrivacy = [
    { icon: mailOutline, label: "Email Us" },
    { icon: helpCircleOutline, label: "Browse FAQ's" },
    { icon: documentTextOutline, label: "Terms of Use / Privacy Policy" },
  ];

  const additionalFeatures = [
    { icon: globeOutline, label: "Choose Language (Optional)" },
    { icon: informationCircleOutline, label: "About" },
    { icon: chatbubbleOutline, label: "Send Feedback" },
    { icon: alertCircleOutline, label: "Report Food/Restaurant/Services" },
  ];

  const logoutItem = [{ icon: logOutOutline, label: "Logout" }];

  return (
    <IonContent color="light">
      <div className="card-grid">
        {cardItems.map((item, index) => (
          <SettingsCard key={index} icon={item.icon} label={item.label} />
        ))}
      </div>

      <IonTitle className="ion-margin-top">Account Settings</IonTitle>
      <IonItems items={accountSettings} />

      <IonTitle className="ion-margin-top">Share</IonTitle>
      <IonItems items={shareSettings} />

      <IonTitle className="ion-margin-top">Support and Privacy</IonTitle>
      <IonItems items={supportAndPrivacy} />

      <IonTitle className="ion-margin-top">Additional Features</IonTitle>
      <IonItems items={additionalFeatures} />

      <IonItems items={logoutItem} />

      <IonItem lines="none">
        <IonLabel className="ion-text-center">Made with ♥ by Zadroit</IonLabel>
      </IonItem>
    </IonContent>
  );
};

export default Settings;
