import React from "react";
import {
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonNavLink,
  IonButton,
} from "@ionic/react";
import Profile from "../../components/06-Profile/Profile";

interface SettingsItem {
  icon: string;
  label: string;
  route?: string;
}

interface SettingsListProps {
  items: SettingsItem[];
}

const IonItems: React.FC<SettingsListProps> = ({ items }) => {
  return (
    <IonList inset={true} lines="full">
      {items.map((item, index) => (
        <IonItem button key={index} href={item.route ? item.route : undefined}>
          <IonIcon icon={item.icon} slot="start" />
          <IonLabel className="ion-padding-start">{item.label}</IonLabel>
        </IonItem>
      ))}
    </IonList>
  );
};

export default IonItems;
