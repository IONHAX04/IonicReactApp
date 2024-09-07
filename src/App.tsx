import React, { useEffect } from "react";
import {
  IonApp,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { SplashScreen } from "@capacitor/splash-screen";
import "./app.css";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

// import "@ionic/react/css/palettes/dark.system.css";

import "./theme/variables.css";

import MainLayout from "./components/MainLayout/MainLayout";

setupIonicReact();

const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.show();

    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (
    <IonApp>
      <IonReactRouter>
        <MainLayout />
      </IonReactRouter>
    </IonApp>

    // <IonApp>
    //   <IonReactRouter>
    //     <IonTabs>
    //       <IonRouterOutlet>
    //         <Route exact path="/tab1">
    //           <Tab1 />
    //         </Route>
    //         <Route exact path="/tab2">
    //           <Tab2 />
    //         </Route>
    //         <Route exact path="/tab3">
    //           <Tab3 />
    //         </Route>
    //         <Route exact path="/tab4">
    //           <Tab4 />
    //         </Route>
    //         <Route exact path="/tab5">
    //           <Tab5 />
    //         </Route>
    //         <Route exact path="/profile">
    //           <Profile />
    //         </Route>
    //         <Route exact path="/">
    //           <Redirect to="/tab1" />
    //         </Route>
    //         <Route exact path="/example">
    //           <Example />
    //         </Route>
    //       </IonRouterOutlet>

    //       <IonTabBar slot="bottom">
    //         <IonTabButton tab="tab1" href="/tab1">
    //           <IonIcon aria-hidden="true" icon={home} />
    //           <IonLabel>Home</IonLabel>
    //         </IonTabButton>
    //         <IonTabButton tab="tab2" href="/tab2">
    //           <IonIcon aria-hidden="true" icon={compassOutline} />
    //           <IonLabel>Explore</IonLabel>
    //         </IonTabButton>
    //         <IonTabButton tab="tab3" href="/tab3">
    //           <IonIcon aria-hidden="true" icon={libraryOutline} />
    //           <IonLabel>Activity</IonLabel>
    //         </IonTabButton>
    //         <IonTabButton tab="tab4" href="/tab4">
    //           <IonIcon aria-hidden="true" icon={notificationsOutline} />
    //           <IonLabel>Alerts</IonLabel>
    //         </IonTabButton> 
    //         <IonTabButton tab="tab5" href="/tab5">
    //           <IonIcon aria-hidden="true" icon={settingsOutline} />
    //           <IonLabel>Settings</IonLabel>
    //         </IonTabButton>
    //       </IonTabBar>
    //     </IonTabs>
    //   </IonReactRouter>
    // </IonApp>
  );
};

export default App;
