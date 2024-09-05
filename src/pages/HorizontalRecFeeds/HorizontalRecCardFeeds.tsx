import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonCol,
  IonRow,
  IonGrid,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { returnUpForwardOutline } from "ionicons/icons";

interface RestaurantData {
  // header: string;
  imageSrc: string;
  name: string;
  isAd?: boolean;
  distance?: string;
  rating?: string;
  // content?: string;
  // date?: string;
}

interface RecommendedRestaurantsProps {
  restaurantData: RestaurantData[];
}

const HorizontalRecCardFeeds: React.FC<RecommendedRestaurantsProps> = ({
  restaurantData,
}) => {
  return (
    <div className="recommendationFeeds">
      <div className="header-content">
        <IonTitle>Recommended Restaurants</IonTitle>
        <IonButtons>
          <IonButton>
            <IonIcon icon={returnUpForwardOutline} />
          </IonButton>
        </IonButtons>
      </div>

      <IonGrid className="restaurant-grid">
        <IonRow className="horizontal-scroll">
          {restaurantData.map((restaurant, index) => (
            <IonCol key={index} className="scroll-item">
              <IonCard className="restaurant-card">
                <img
                  alt={`Image of ${restaurant.name}`}
                  src={restaurant.imageSrc}
                  className="restaurant-image"
                />
                <IonCardHeader>
                  <IonCardTitle className="restaurant-title">
                    {restaurant.name}
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <div className="restaurantInfo">
                    {restaurant.isAd && <span className="ad-label">Ad</span>}
                    <span className="distance-rating">
                      {restaurant.distance}
                    </span>
                    <span className="distance-rating">
                      {restaurant.rating}⭐
                    </span>
                  </div>
                  {/* <div className="restaurantInfo">
                    <span className="distance-rating">
                      {restaurant.content}
                    </span>
                    <span className="distance-rating">{restaurant.date}</span>
                  </div> */}
                </IonCardContent>
              </IonCard>
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default HorizontalRecCardFeeds;
