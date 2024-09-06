import React from "react";
import { IonCard, IonImg, IonLabel } from "@ionic/react";

interface NewArrivalData {
  imageSrc: string;
  label: string;
}

interface NewArrivalsProps {
  data: NewArrivalData[];
}

const NewArrivals: React.FC<NewArrivalsProps> = ({ data }) => {
  return (
    <div className="newArrivals">
      {data.map((item, index) => (
        <div key={index} className="newArrivalItem">
          <IonCard>
            <IonImg src={item.imageSrc} />
            <IonLabel>{item.label}</IonLabel>
          </IonCard>
        </div>
      ))}
    </div>
  );
};

export default NewArrivals;
