import React from "react";
import {
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonLabel,
  IonList,
  IonItem,
  IonToolbar,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  home,
  compassOutline,
  libraryOutline,
  notificationsOutline,
  settingsOutline,
} from "ionicons/icons";
import { Route, Redirect } from "react-router-dom";
import Tab1 from "../../pages/Tab1";
import Tab2 from "../../pages/Tab2";
import Tab3 from "../../pages/Tab3";
import Tab4 from "../../pages/Tab4";
import Tab5 from "../../pages/Tab5";

import Profile from "../06-Profile/Profile";
import Example from "../../pages/DraftTestings/Example";

import "./MainLayout.css";

const MainLayout: React.FC = () => (
  <IonPage>
    <IonMenu contentId="main-content" side="start" type="push">
      <IonList>
        <IonItem>
          <IonLabel>Pokémon Yellow</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Mega Man X</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>The Legend of Zelda</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Pac-Man</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Super Mario World</IonLabel>
        </IonItem>
      </IonList>
    </IonMenu>

    <IonHeader>
      <IonToolbar>
        <IonTitle>Application Name</IonTitle>
        <IonMenuButton slot="start" />
      </IonToolbar>
    </IonHeader>

    <IonContent id="main-content">
      <IonRouterOutlet>
        <Route exact path="/tab1" component={Tab1} />
        <Route exact path="/tab2" component={Tab2} />
        <Route exact path="/tab3" component={Tab3} />
        <Route exact path="/tab4" component={Tab4} />
        <Route exact path="/tab5" component={Tab5} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/example" component={Example} />
        <Route exact path="/" render={() => <Redirect to="/tab1" />} />
      </IonRouterOutlet>
    </IonContent>

    <IonTabBar slot="bottom">
      <IonTabButton tab="tab1" href="/tab1">
        <IonIcon aria-hidden="true" icon={home} />
        <IonLabel>Home</IonLabel>
      </IonTabButton>
      <IonTabButton tab="tab2" href="/tab2">
        <IonIcon aria-hidden="true" icon={compassOutline} />
        <IonLabel>Explore</IonLabel>
      </IonTabButton>
      <IonTabButton tab="tab3" href="/tab3">
        <IonIcon aria-hidden="true" icon={libraryOutline} />
        <IonLabel>Activity</IonLabel>
      </IonTabButton>
      <IonTabButton tab="tab4" href="/tab4">
        <IonIcon aria-hidden="true" icon={notificationsOutline} />
        <IonLabel>Alerts</IonLabel>
      </IonTabButton>
      <IonTabButton tab="tab5" href="/tab5">
        <IonIcon aria-hidden="true" icon={settingsOutline} />
        <IonLabel>Settings</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonPage>
);

export default MainLayout;
