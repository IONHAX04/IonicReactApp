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
  homeOutline,
  personOutline,
  chatbubbleOutline,
  alertCircleOutline,
  extensionPuzzleOutline,
  mailUnreadOutline,
} from "ionicons/icons";

import Home from "../../components/01-Home/Home";
import Profile from "../../components/06-Profile/Profile";

const ControlledTabsExample: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("home");

  return (
    <IonPage>
      <IonTabBar slot="top">
        <IonTabButton
          tab="home"
          onClick={() => setSelectedTab("home")}
          selected={selectedTab === "home"}
        >
          <IonIcon icon={alertCircleOutline} />
          <IonLabel>Notifications</IonLabel>
        </IonTabButton>
        <IonTabButton
          tab="profile"
          onClick={() => setSelectedTab("profile")}
          selected={selectedTab === "profile"}
        >
          <IonIcon icon={extensionPuzzleOutline} />
          <IonLabel>Activities</IonLabel>
        </IonTabButton>
        <IonTabButton
          tab="contact"
          onClick={() => setSelectedTab("contact")}
          selected={selectedTab === "contact"}
        >
          <IonIcon icon={mailUnreadOutline} />
          <IonLabel>Upcoming</IonLabel>
        </IonTabButton>
      </IonTabBar>
      <IonContent>
        <div className="tab-content">
          {selectedTab === "home" && <Home />}
          {selectedTab === "profile" && <Profile />}
          {/* {selectedTab === "contact" && <Contact />} */}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ControlledTabsExample;
