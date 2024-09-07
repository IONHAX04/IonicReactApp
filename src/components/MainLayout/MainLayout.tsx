import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonTabButton,
  IonRouterOutlet,
  IonLabel,
  IonTabBar,
  IonButton,
  IonAccordionGroup,
  IonAccordion,
  IonItem,
  IonButtons,
  IonIcon,
} from "@ionic/react";
import { Route, Redirect } from "react-router-dom";
import {
  fastFood,
  bicycle,
  libraryOutline,
  notificationsOutline,
  settingsOutline,
  qrCodeOutline,
  compass,
  menuOutline,
  home,
  compassOutline,
  cartOutline,
  bagHandleOutline,
  homeOutline,
  library,
  notifications,
  settings,
  notificationsSharp,
} from "ionicons/icons";
import Tab1 from "../../pages/Tab1";
import Tab2 from "../../pages/Tab2";
import Tab3 from "../../pages/Tab3";
import Tab4 from "../../pages/Tab4";
import Tab5 from "../../pages/Tab5";
import Profile from "../06-Profile/Profile";
import DropDownMenu from "../../pages/DropDownMenu/DropDownMenu";
import "./MainLayout.css";
import ComingSoon from "../ComingSoon/ComingSoon";
import Example from "../../pages/DraftTestings/Example";

const MainLayout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("/");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const foodItems = [
    { label: "Quick Start", route: "/quick-start", icon: fastFood },
    { label: "Wallet", route: "/wallet", icon: bicycle },
    {
      label: "Restaurant List",
      route: "/restaurant-list",
      icon: libraryOutline,
    },
    { label: "Blogs", route: "/blogs", icon: notificationsOutline },
    { label: "Cart", route: "/cart", icon: settingsOutline },
  ];

  const rideItems = [
    { label: "Quick Start", route: "/quick-start", icon: fastFood },
    {
      label: "Recently Visited Places",
      route: "/recent-places",
      icon: bicycle,
    },
    {
      label: "Favorite Places",
      route: "/favorite-places",
      icon: libraryOutline,
    },
  ];

  const martItems = [
    { label: "Quick Start", route: "/quick-start", icon: fastFood },
    { label: "Products", route: "/products", icon: bicycle },
    { label: "Wishlist", route: "/wishlist", icon: libraryOutline },
    { label: "Cart", route: "/cart", icon: settingsOutline },
    { label: "Offers", route: "/offers", icon: notificationsOutline },
  ];

  const parcelItems = [
    { label: "Quick Start", route: "/quick-start", icon: fastFood },
    {
      label: "Transaction History",
      route: "/transaction-history",
      icon: libraryOutline,
    },
    { label: "Address", route: "/address", icon: settingsOutline },
  ];

  return (
    <IonPage>
      <IonMenu
        contentId="main-content"
        side="start"
        type="push"
        onIonDidOpen={() => setIsMenuOpen(true)}
        onIonDidClose={() => setIsMenuOpen(false)}
      >
        <IonAccordionGroup expand="inset">
          <IonAccordion value="first">
            <IonItem slot="header" color="light">
              <IonIcon icon={fastFood} />
              <IonLabel className="ion-margin-start">Food</IonLabel>
            </IonItem>
            <DropDownMenu items={foodItems} />
          </IonAccordion>

          <IonAccordion value="second">
            <IonItem slot="header" color="light">
              <IonIcon icon={bicycle} />
              <IonLabel className="ion-margin-start">Ride</IonLabel>
            </IonItem>
            <DropDownMenu items={rideItems} />
          </IonAccordion>

          <IonAccordion value="third">
            <IonItem slot="header" color="light">
              <IonIcon icon={cartOutline} />
              <IonLabel className="ion-margin-start">Mart</IonLabel>
            </IonItem>
            <DropDownMenu items={martItems} />
          </IonAccordion>

          <IonAccordion value="fourth">
            <IonItem slot="header" color="light">
              <IonIcon icon={bagHandleOutline} />
              <IonLabel className="ion-margin-start">Parcel</IonLabel>
            </IonItem>
            <DropDownMenu items={parcelItems} />
          </IonAccordion>
        </IonAccordionGroup>
      </IonMenu>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Application Name</IonTitle>
          <IonMenuButton slot="start" onClick={toggleMenu}>
            <IonIcon
              icon={menuOutline}
              style={{
                transform: isMenuOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            />
          </IonMenuButton>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon icon={qrCodeOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent id="main-content">
        <IonRouterOutlet>
          <Route
            exact
            path="/tab1"
            render={() => {
              setActiveTab("/tab1");
              return <Tab1 />;
            }}
          />
          <Route
            exact
            path="/tab2"
            render={() => {
              setActiveTab("/tab2");
              return <Tab2 />;
            }}
          />
          <Route
            exact
            path="/tab3"
            render={() => {
              setActiveTab("/tab3");
              return <Tab3 />;
            }}
          />
          <Route
            exact
            path="/tab4"
            render={() => {
              setActiveTab("/tab4");
              return <Tab4 />;
            }}
          />
          <Route
            exact
            path="/tab5"
            render={() => {
              setActiveTab("/tab5");
              return <Tab5 />;
            }}
          />
          <Route
            exact
            path="/example"
            render={() => {
              setActiveTab("/example");
              return <Example />;
            }}
          />
          <Route
            exact
            path="/comingSoon"
            render={() => {
              setActiveTab("/comingSoon");
              return <ComingSoon />;
            }}
          />
          <Route
            exact
            path="/profile"
            render={() => {
              setActiveTab("/profile");
              return <Profile />;
            }}
          />
        </IonRouterOutlet>
      </IonContent>

      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/tab1">
          <IonIcon
            aria-hidden="true"
            icon={activeTab === "/tab1" ? home : homeOutline}
          />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/tab2">
          <IonIcon
            aria-hidden="true"
            icon={activeTab === "/tab2" ? compass : compassOutline}
          />
          <IonLabel>Explore</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/tab3">
          <IonIcon
            aria-hidden="true"
            icon={activeTab === "/tab3" ? library : libraryOutline}
          />
          <IonLabel>Activity</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab4" href="/tab4">
          <IonIcon
            aria-hidden="true"
            icon={activeTab === "/tab4" ? notifications : notificationsSharp}
          />
          <IonLabel>Alerts</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab5" href="/tab5">
          <IonIcon
            aria-hidden="true"
            icon={activeTab === "/tab5" ? settings : settingsOutline}
          />
          <IonLabel>Settings</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonPage>
  );
};

export default MainLayout;
