// src/pages/Explore.tsx
import React from "react";
import {
  IonContent,
  IonTitle,
  IonRow,
  IonCol,
  IonButton,
  IonButtons,
  IonIcon,
  IonLabel,
  IonGrid,
  IonList,
  IonItem,
  IonCard,
  IonImg,
} from "@ionic/react";

import RecommendCards from "../../pages/RecommendCards/RecommendCards";
import GridTemplate from "../../pages/GridItems/GridItem";
import NewArrivals from "../../pages/NewArrivals/NewArrivals";
import BlogCard from "../../pages/BlogCard/BlogCard";

import foodIcon from "../../assets/icons/food.png";
import rideIcon from "../../assets/icons/taxi.png";
import martIcon from "../../assets/icons/mart.png";
import parcelIcon from "../../assets/icons/parcel.png";

import places from "../../assets/icons/places.png";

import food1 from "../../assets/icons/food1.png";
import food2 from "../../assets/icons/food2.png";
import food3 from "../../assets/icons/food3.png";
import food4 from "../../assets/icons/food4.png";
import grocery from "../../assets/icons/grocery.png";

import {
  chevronForwardOutline,
  returnUpBackOutline,
  returnUpForwardOutline,
} from "ionicons/icons";

import "./Explore.css";

const Explore: React.FC = () => {
  const cardData = [
    {
      imageSrc: "https://ionicframework.com/docs/img/demos/card-media.png",
      title: "Restaurant Blogs 1",
      subtitle: "Date of publish",
      content:
        "On going offers - 20% if you place order between 10:00 AM to 11:00 AM",
    },
    {
      imageSrc: "https://ionicframework.com/docs/img/demos/card-media.png",
      title: "Restaurant Blogs 2",
      subtitle: "Date of publish",
      content:
        "Special discount - 15% if you use code 'SPECIAL15' before 2:00 PM",
    },
    {
      imageSrc: "https://ionicframework.com/docs/img/demos/card-media.png",
      title: "Restaurant Blogs 3",
      subtitle: "Date of publish",
      content:
        "Buy one get one free offer on selected items from 5:00 PM to 6:00 PM",
    },
  ];

  const blogData = [
    {
      imageSrc: "https://via.placeholder.com/150",
      blogName: "Amazing Dish Recipe",
      shortDescription: "A quick and easy recipe for a delicious dish.",
      updatedDate: "September 1, 2024",
    },
    {
      imageSrc: "https://via.placeholder.com/150",
      blogName: "Healthy Eating Tips",
      shortDescription: "Tips and tricks for maintaining a healthy diet.",
      updatedDate: "August 28, 2024",
    },
    {
      imageSrc: "https://via.placeholder.com/150",
      blogName: "Cooking with Kids",
      shortDescription: "Fun and easy recipes to make with your kids.",
      updatedDate: "July 15, 2024",
    },
    {
      imageSrc: "https://via.placeholder.com/150",
      blogName: "Vegetarian Delights",
      shortDescription: "Explore some amazing vegetarian recipes.",
      updatedDate: "June 10, 2024",
    },
    {
      imageSrc: "https://via.placeholder.com/150",
      blogName: "Amazing Dish Recipe",
      shortDescription: "A quick and easy recipe for a delicious dish.",
      updatedDate: "September 1, 2024",
    },
    {
      imageSrc: "https://via.placeholder.com/150",
      blogName: "Healthy Eating Tips",
      shortDescription: "Tips and tricks for maintaining a healthy diet.",
      updatedDate: "August 28, 2024",
    },
    {
      imageSrc: "https://via.placeholder.com/150",
      blogName: "Cooking with Kids",
      shortDescription: "Fun and easy recipes to make with your kids.",
      updatedDate: "July 15, 2024",
    },
    {
      imageSrc: "https://via.placeholder.com/150",
      blogName: "Vegetarian Delights",
      shortDescription: "Explore some amazing vegetarian recipes.",
      updatedDate: "June 10, 2024",
    },
  ];

  const gridColumnData = [
    { imageSrc: food1, label: "Food 1" },
    { imageSrc: food2, label: "Food 2" },
    { imageSrc: food3, label: "Food 3" },
    { imageSrc: food4, label: "Food 4" },
    { imageSrc: food3, label: "Food 5" },
    { imageSrc: food1, label: "Food 6" },
    { imageSrc: food4, label: "Food 7" },
    { imageSrc: food2, label: "Food 8" },
  ];

  const overAllMenu = [
    { imageSrc: foodIcon, label: "Food" },
    { imageSrc: rideIcon, label: "Ride" },
    { imageSrc: martIcon, label: "Mart" },
    { imageSrc: parcelIcon, label: "Parcel" },
  ];

  const newArrivalsData = [
    { imageSrc: food1, label: "Try This Food" },
    { imageSrc: food2, label: "Explore This Page" },
    { imageSrc: parcelIcon, label: "Use Our Parcel Service" },
    { imageSrc: martIcon, label: "Visit Our Mart" },
    { imageSrc: grocery, label: "Buy Our Grocery Products" },
  ];

  const nearbyPlaces = [
    { imageSrc: places, label: "Place 1" },
    { imageSrc: places, label: "Place 2" },
    { imageSrc: places, label: "Place 3" },
    { imageSrc: places, label: "Place 4" },
    { imageSrc: places, label: "Place 5" },
  ];

  return (
    <IonContent color="light" className="exploreContents">
      <IonTitle className="ion-padding-top exploreTitle">
        Our (App Name) Home
      </IonTitle>

      <GridTemplate data={overAllMenu} />

      <IonRow>
        <IonCol>
          <div className="horizontalScroll">
            {cardData.map((card, index) => (
              <div key={index} className="card-container">
                <RecommendCards
                  imageSrc={card.imageSrc}
                  title={card.title}
                  subtitle={card.subtitle}
                  content={card.content}
                />
              </div>
            ))}
          </div>
        </IonCol>
      </IonRow>

      <div className="headerContent ion-margin-top">
        <IonTitle>Quick Start</IonTitle>
        <IonButtons>
          <IonButton>
            <IonIcon icon={returnUpForwardOutline} />
          </IonButton>
        </IonButtons>
      </div>
      <GridTemplate data={gridColumnData} title="Order Food" />

      <div className="newArr ion-margin-top">
        <IonTitle>Experience new foods ..</IonTitle>
        <NewArrivals data={newArrivalsData} />
      </div>

      <div className="newArr ion-margin-top">
        <IonTitle>Explore places near by ..</IonTitle>
        <NewArrivals data={nearbyPlaces} />
      </div>

      <IonTitle className="ion-margin-top">Suggested Places ..</IonTitle>
      <IonList inset={true} lines="full">
        <IonItem>
          <IonLabel>Mart 1</IonLabel>
          <IonIcon icon={chevronForwardOutline} />
        </IonItem>
        <IonItem>
          <IonLabel>Restaurant 1</IonLabel>
          <IonIcon icon={chevronForwardOutline} />
        </IonItem>
        <IonItem>
          <IonLabel>Restaurant 2</IonLabel>
          <IonIcon icon={chevronForwardOutline} />
        </IonItem>
        <IonItem>
          <IonLabel>Hotel 1</IonLabel>
          <IonIcon icon={chevronForwardOutline} />
        </IonItem>
        <IonItem>
          <IonLabel>Hotel 2</IonLabel>
          <IonIcon icon={chevronForwardOutline} />
        </IonItem>
      </IonList>

      <div className="headerContent">
        <IonTitle>Recent Blogs</IonTitle>
        <IonButtons>
          <IonButton>
            <IonIcon icon={returnUpForwardOutline} />
          </IonButton>
        </IonButtons>
      </div>

      <IonGrid>
        <IonRow>
          {blogData.map((blog, index) => (
            <IonCol key={index} size="6" className="blog-col">
              <BlogCard
                imageSrc={blog.imageSrc}
                blogName={blog.blogName}
                shortDescription={blog.shortDescription}
                updatedDate={blog.updatedDate}
              />
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default Explore;
