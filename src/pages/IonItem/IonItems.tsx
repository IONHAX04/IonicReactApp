import React from "react";
import { IonList, IonItem, IonIcon, IonLabel } from "@ionic/react";

interface SettingsItem {
  icon: string;
  label: string;
  route?: string;
  onClick?: () => void;
}

interface SettingsListProps {
  items: SettingsItem[];
}

const IonItems: React.FC<SettingsListProps> = ({ items }) => {
  return (
    <IonList inset={true} lines="full">
      {items.map((item, index) => (
        <IonItem
          button
          key={index}
          href={item.route ? item.route : undefined}
          onClick={(e) => {
            if (item.onClick) {
              e.preventDefault();
              item.onClick();
            }
          }}
        >
          <IonIcon icon={item.icon} slot="start" />
          <IonLabel>{item.label}</IonLabel>
        </IonItem>
      ))}
    </IonList>
  );
};

export default IonItems;
