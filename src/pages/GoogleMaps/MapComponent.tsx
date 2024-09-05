import React from "react";
import {
  IonAlert,
  IonButton,
  IonButtons,
  IonTitle,
  IonIcon,
} from "@ionic/react";
import { returnUpForwardOutline } from "ionicons/icons";

interface Position {
  lat: number;
  lng: number;
}

const MapComponent = () => {
  // const [currentPosition, setCurrentPosition] = useState<Position | null>(null);
  // const [locationEnabled, setLocationEnabled] = useState(true);

  // useEffect(() => {
  //   if ("geolocation" in navigator) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         setCurrentPosition({
  //           lat: position.coords.latitude,
  //           lng: position.coords.longitude,
  //         });
  //       },
  //       (error) => {
  //         if (error.code === error.PERMISSION_DENIED) {
  //           setLocationEnabled(false);
  //         }
  //       }
  //     );
  //   } else {
  //     setLocationEnabled(false);
  //   }
  // }, []);

  return (
    <div className="mapComponentContents">
      <IonAlert
        isOpen={false}
        onDidDismiss={() => {}}
        header={"Location Disabled"}
        message={"Please enable location services to use this feature."}
        buttons={["OK"]}
      />

      <div className="header-content" style={{ marginBottom: "10px" }}>
        <IonTitle>Explore More</IonTitle>
        <IonButtons>
          <IonButton>
            <IonIcon icon={returnUpForwardOutline} />
          </IonButton>
        </IonButtons>
      </div>
      <div
        style={{
          width: "calc(90% - 20px)",
          height: "200px",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.6848929363327!2d78.14989567513577!3d11.64578838856086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babef6bdbbc3f7d%3A0x404c804a4826efdf!2sZAdroit%20IT%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1725434103762!5m2!1sen!2sin"
          width="600"
          height="200"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default React.memo(MapComponent);
