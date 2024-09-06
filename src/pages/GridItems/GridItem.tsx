import React from "react";
import {
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonImg,
  IonLabel,
} from "@ionic/react";

interface GridColumnData {
  imageSrc: string;
  label: string;
}

interface GridTemplateProps {
  data: GridColumnData[];
  title?: string;
}

const GridItem: React.FC<GridTemplateProps> = ({ data, title }) => {
  return (
    <IonGrid>
      <IonLabel className="ion-padding">{title}</IonLabel>
      <IonRow>
        {data.map((item, index) => (
          <IonCol key={index} size="3" size-sm="3" size-md="3" size-lg="3">
            <IonCard className="exploreCard">
              <IonImg src={item.imageSrc} alt={item.label} />
              <IonLabel>{item.label}</IonLabel>
            </IonCard>
          </IonCol>
        ))}
      </IonRow>
    </IonGrid>
  );
};

export default GridItem;
