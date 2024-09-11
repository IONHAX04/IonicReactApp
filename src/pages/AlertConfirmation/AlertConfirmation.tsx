import React from "react";
import { IonButton, IonIcon, IonTitle, IonLabel } from "@ionic/react";
import { closeCircleOutline } from "ionicons/icons";
import "./AlertConfirmation.css";

interface AlertConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  onRateIt: () => void;
}

const AlertConfirmation: React.FC<AlertConfirmationProps> = ({
  isOpen,
  onClose,
  onRateIt,
}) => {
  if (!isOpen) return null;

  return (
    <div className="alertOverlay">
      <div className="alertMessage">
        <IonTitle className="ion-margin alertTitle">Rate It !!!</IonTitle>
        <IonLabel>Would you like to rate this app?</IonLabel>
        <div className="buttons">
          <IonButton onClick={onRateIt}>Rate Now</IonButton>
          <IonButton color="medium" onClick={onClose}>
            Cancel
          </IonButton>
        </div>
      </div>
    </div>
  );
};

export default AlertConfirmation;
