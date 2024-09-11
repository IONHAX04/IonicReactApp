import React from "react";
import { IonIcon, IonItem, IonRouterLink } from "@ionic/react";

const DropDownMenu: React.FC<{
  items: { label: string; route: string; icon: string }[];
}> = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <div key={index} className="ion-padding contents" slot="content">
          <IonRouterLink
            className="ion-padding contents"
            routerLink={item.route}
          >
            {item.label}
          </IonRouterLink>
        </div>
      ))}
    </>
  );
};

export default DropDownMenu;
