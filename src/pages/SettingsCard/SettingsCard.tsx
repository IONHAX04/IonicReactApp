import React from "react";
import { IonCard, IonCardContent, IonIcon, IonLabel } from "@ionic/react";

interface SettingsCardProps {
  icon: string;
  label: string;
}

const SettingsCard: React.FC<SettingsCardProps> = ({ icon, label }) => {
  return (
    <IonCard className="settings-card ion-margin-top">
      <IonCardContent className="settings-card-content">
        <IonIcon icon={icon} className="settings-card-icon" />
        <IonLabel className="settings-card-label">{label}</IonLabel>
      </IonCardContent>
    </IonCard>
  );
};

export default SettingsCard;
