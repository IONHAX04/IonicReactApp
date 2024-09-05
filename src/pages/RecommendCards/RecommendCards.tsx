import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
} from "@ionic/react";

interface CardComponentProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  content: string;
}

const RecommendCards: React.FC<CardComponentProps> = ({
  imageSrc,
  title,
  subtitle,
  content,
}) => {
  return (
    <IonCard className="ion-margin ionCards">
      <img
        alt={title}
        src={imageSrc}
        style={{ height: "140px", width: "100%", objectFit: "cover" }}
      />
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
        <IonCardSubtitle className="ion-margin-top">{subtitle}</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>{content}</IonCardContent>
    </IonCard>
  );
};

export default RecommendCards;
