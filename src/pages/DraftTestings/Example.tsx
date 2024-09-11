import React, { useState } from "react";
import {
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonContent,
} from "@ionic/react";
import Profile from "../../components/06-Profile/Profile";

const SegmentContent1: React.FC = () => (
  <div>
    <Profile />
  </div>
);

const SegmentContent2: React.FC = () => (
  <div>
    <h2>Segment Content</h2>
    <p>This is the content for the Segment segment.</p>
  </div>
);

function Example() {
  const [selectedSegment, setSelectedSegment] = useState<string>("default");

  return (
    <>
      <IonSegment
        mode="ios"
        value={selectedSegment}
        onIonChange={(e) => setSelectedSegment(e.detail.value as string)}
      >
        <IonSegmentButton value="default">
          <IonLabel>Default</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="segment">
          <IonLabel>Segment</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="new">
          <IonLabel>New</IonLabel>
        </IonSegmentButton>
      </IonSegment>

      <IonContent>
        <div className="segment-content">
          {selectedSegment === "default" && <SegmentContent1 />}
          {selectedSegment === "segment" && <SegmentContent2 />}
        </div>
      </IonContent>
    </>
  );
}

export default Example;
