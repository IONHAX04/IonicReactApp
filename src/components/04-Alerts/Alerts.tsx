import React, { useState } from "react";
import {
  IonContent,
  IonPage,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon,
} from "@ionic/react";
import {
  alertCircleOutline,
  alertCircle as alertCircleFill,
  extensionPuzzleOutline,
  extensionPuzzle as extensionPuzzleFill,
  mailUnreadOutline,
  mailUnread as mailUnreadFill,
} from "ionicons/icons";

import Notifications from "../04-01-Notifications/Notifications";
import Activities from "../04-02-Activities/Activities";
import Upcoming from "../04-03-Upcoming/Upcoming";

const Alerts: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("notifications");

  return (
    <IonPage>
      <IonTabBar slot="top">
        <IonTabButton
          tab="notifications"
          onClick={() => setSelectedTab("notifications")}
          selected={selectedTab === "notifications"}
        >
          <IonIcon
            icon={
              selectedTab === "notifications"
                ? alertCircleFill
                : alertCircleOutline
            }
          />
          <IonLabel>Notifications</IonLabel>
        </IonTabButton>
        <IonTabButton
          tab="profile"
          onClick={() => setSelectedTab("profile")}
          selected={selectedTab === "profile"}
        >
          <IonIcon
            icon={
              selectedTab === "profile"
                ? extensionPuzzleFill
                : extensionPuzzleOutline
            }
          />
          <IonLabel>Activities</IonLabel>
        </IonTabButton>
        <IonTabButton
          tab="contact"
          onClick={() => setSelectedTab("contact")}
          selected={selectedTab === "contact"}
        >
          <IonIcon
            icon={
              selectedTab === "contact" ? mailUnreadFill : mailUnreadOutline
            }
          />
          <IonLabel>Upcoming</IonLabel>
        </IonTabButton>
      </IonTabBar>
      <IonContent>
        <div className="tab-content">
          {selectedTab === "notifications" && <Notifications />}
          {selectedTab === "profile" && <Activities />}
          {selectedTab === "contact" && <Upcoming />}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Alerts;
