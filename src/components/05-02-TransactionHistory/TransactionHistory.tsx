import React from "react";
import { IonContent, IonPage } from "@ionic/react";
import "./TransactionHistory.css";

const TransactionHistory: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="centeredContent" fullscreen>
        {/* <img src={TransactionHistory} alt="Coming Soon" className="TransactionHistoryGif" /> */}
      </IonContent>
    </IonPage>
  );
};

export default TransactionHistory;
