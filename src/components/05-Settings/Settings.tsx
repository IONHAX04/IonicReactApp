import React, { useState, useEffect } from "react";
import {
  IonContent,
  IonTitle,
  IonItem,
  IonLabel,
  IonList,
  IonSkeletonText,
  IonToolbar,
  IonProgressBar,
  IonHeader,
} from "@ionic/react";
import SettingsCard from "../../pages/SettingsCard/SettingsCard";
import IonItems from "../../pages/IonItem/IonItems";
import { Share } from "@capacitor/share";
import RateAppModal from "../../pages/AlertConfirmation/AlertConfirmation";

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

import "./Settings.css";

const Settings: React.FC = () => {
  const [showRateAppModal, setShowRateAppModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleShareApp = async () => {
    const appPackageName = window.location.hostname;
    const appPlayStoreUrl = `https://play.google.com/store/apps/details?id=${appPackageName}`;
    console.log("appPlayStoreUrl", appPlayStoreUrl);

    try {
      await Share.share({
        title: "Check out this app!",
        text: `Check out ${appPlayStoreUrl}`,
        url: appPlayStoreUrl,
        dialogTitle: "Share with",
      });

      console.log("Share successful");
    } catch (error) {
      console.error("Error sharing", error);
    }
  };

  const handleRateApp = () => {
    setShowRateAppModal(true);
  };

  const goToAppStore = () => {
    const appPackageName = window.location.hostname;
    const isAndroid = /android/i.test(navigator.userAgent);
    const playStoreUrl = `https://play.google.com/store/apps/details?id=${appPackageName}`;
    const appStoreUrl = `https://apps.apple.com/app/id${appPackageName}`;

    if (isAndroid) {
      window.open(playStoreUrl, "_blank");
    } else {
      window.open(appStoreUrl, "_blank");
    }
  };

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
    { icon: thumbsUpOutline, label: "Rate App", onClick: handleRateApp },
    { icon: shareSocialOutline, label: "Share App", onClick: handleShareApp },
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
      <IonHeader>
        {loading && <IonProgressBar type="indeterminate" />}
      </IonHeader>

      {loading ? (
        <IonList>
          <IonItem>
            <IonLabel>
              <IonSkeletonText animated style={{ width: "80%" }} />
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              <IonSkeletonText animated style={{ width: "80%" }} />
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              <IonSkeletonText animated style={{ width: "80%" }} />
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              <IonSkeletonText animated style={{ width: "80%" }} />
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              <IonSkeletonText animated style={{ width: "80%" }} />
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              <IonSkeletonText animated style={{ width: "80%" }} />
            </IonLabel>
          </IonItem>
        </IonList>
      ) : (
        <>
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
            <IonLabel className="ion-text-center">
              Made with ♥ by Zadroit
            </IonLabel>
          </IonItem>

          <RateAppModal
            isOpen={showRateAppModal}
            onClose={() => setShowRateAppModal(false)}
            onRateIt={goToAppStore}
          />
        </>
      )}
    </IonContent>
  );
};

export default Settings;
