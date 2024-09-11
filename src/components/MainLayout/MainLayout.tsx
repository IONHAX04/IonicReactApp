import React, { useState, useEffect } from "react";
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
import { Route, useHistory, useLocation } from "react-router-dom";
import {
  fastFood,
  bicycle,
  libraryOutline,
  notificationsOutline,
  settingsOutline,
  qrCodeOutline,
  menuOutline,
  home,
  compassOutline,
  cartOutline,
  bagHandleOutline,
  homeOutline,
  library,
  notifications,
  settings,
  compass,
  closeCircleOutline,
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
import Alerts from "../04-Alerts/Alerts";
import Login from "../LoginPage/Login";

const MainLayout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("/");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const history = useHistory();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const currentPath = window.location.pathname;
    console.log("currentPath", currentPath);
    setActiveTab(currentPath);

    const userData = JSON.parse(localStorage.getItem("userData") || "{}");
    setIsLoggedIn(userData.isLoggedIn === true);
  }, [activeTab]);

  const handleTabClick = (path: string) => {
    setActiveTab(path);
    history.push(path);
  };

  const shouldShowTabBar = [
    "/",
    "",
    "/tab1",
    "/tab2",
    "/tab3",
    "/tab4",
    "/tab5",
  ].includes(location.pathname);

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
      {shouldShowTabBar && (
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
      )}

      {shouldShowTabBar && (
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
      )}

      <IonContent id="main-content" className={isLoggedIn ? "" : "blurred"}>
        <IonRouterOutlet>
          <Route exact path="/" component={Tab1} />
          <Route exact path="/tab1" component={Tab1} />
          <Route exact path="/tab2" component={Tab2} />
          <Route exact path="/tab3" component={Tab3} />
          <Route exact path="/tab4" component={Alerts} />
          <Route exact path="/tab5" component={Tab5} />
          <Route exact path="/example" component={Example} />
          <Route exact path="/comingSoon" component={ComingSoon} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
        </IonRouterOutlet>
      </IonContent>

      {shouldShowTabBar && isLoggedIn && (
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" onClick={() => handleTabClick("/tab1")}>
            <IonIcon
              aria-hidden="true"
              icon={activeTab === "/tab1" ? home : homeOutline}
            />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" onClick={() => handleTabClick("/tab2")}>
            <IonIcon
              aria-hidden="true"
              icon={activeTab === "/tab2" ? compass : compassOutline}
            />
            <IonLabel>Explore</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" onClick={() => handleTabClick("/tab3")}>
            <IonIcon
              aria-hidden="true"
              icon={activeTab === "/tab3" ? library : libraryOutline}
            />
            <IonLabel>Activity</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab4" onClick={() => handleTabClick("/tab4")}>
            <IonIcon
              aria-hidden="true"
              icon={
                activeTab === "/tab4" ? notifications : notificationsOutline
              }
            />
            <IonLabel>Alerts</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab5" onClick={() => handleTabClick("/tab5")}>
            <IonIcon
              aria-hidden="true"
              icon={activeTab === "/tab5" ? settings : settingsOutline}
            />
            <IonLabel>Settings</IonLabel>
          </IonTabButton>
        </IonTabBar>
      )}

      {!isLoggedIn && (
        <div className="loginOverlay">
          <div className="loginMessage">
            <div className="closeButton">
              <IonIcon
                className="closeIcon"
                icon={closeCircleOutline}
                onClick={() => setIsLoggedIn(true)}
              />
            </div>
            <IonTitle>You are not logged in</IonTitle>
            <IonLabel>Please sign in to continue</IonLabel>
            <div className="buttons ion-margin">
              <IonButton onClick={() => setIsLoggedIn(true)}>Sign In</IonButton>
              <IonButton fill="outline" onClick={() => setIsLoggedIn(true)}>
                Sign Up
              </IonButton>
            </div>
          </div>
        </div>
      )}
    </IonPage>
  );
};

export default MainLayout;
