import React from "react";
import {
  IonSearchbar,
  IonToolbar,
  IonContent,
  IonRow,
  IonGrid,
  IonCol,
  IonCard,
  IonTitle,
  IonButton,
  IonButtons,
  IonIcon,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";
import {
  carOutline,
  fastFoodOutline,
  cubeOutline,
  listOutline,
} from "ionicons/icons";
import IconCard from "../../pages/IconCards/IconCards";
import RecommendCards from "../../pages/RecommendCards/RecommendCards";
import RecommendedRestaurants from "../../pages/HorizontalRecFeeds/HorizontalRecCardFeeds";
import MapComponent from "../../pages/GoogleMaps/MapComponent";
import Lottie from "react-lottie";
import foodGif from "../../assets/food.json";
import BlogCard from "../../pages/BlogCard/BlogCard";

import { returnUpForwardOutline } from "ionicons/icons";
import "./Home.css";

function Home() {
  const [placeholder, setPlaceholder] = React.useState("Search");
  const words = ["Places...", "Foods...", "Services..."];

  const iconData = [
    { icon: carOutline, name: "Ride" },
    { icon: fastFoodOutline, name: "Food" },
    { icon: cubeOutline, name: "Package" },
    { icon: listOutline, name: "All" },
    { icon: carOutline, name: "Ride" },
    { icon: fastFoodOutline, name: "Food" },
    { icon: cubeOutline, name: "Package" },
    { icon: listOutline, name: "All" },
  ];

  const cardData = {
    imageSrc: "https://ionicframework.com/docs/img/demos/card-media.png",
    title: "Restaurant Blogs",
    subtitle: "Date of publish",
    content:
      "On going offers - 20% if you place order between 10:00 AM to 11:00 AM",
  };

  const restaurantData = [
    {
      header: "Restaurant Data",
      imageSrc: "https://via.placeholder.com/100",
      name: "Restaurant 1",
      isAd: true,
      distance: "1.2 km",
      rating: "4.5",
    },
    {
      imageSrc: "https://via.placeholder.com/100",
      name: "Restaurant 2",
      isAd: false,
      distance: "3.4 km",
      rating: "4.0",
    },
    {
      imageSrc: "https://via.placeholder.com/100",
      name: "Restaurant 3",
      isAd: false,
      distance: "2.1 km",
      rating: "4.7",
    },
    {
      imageSrc: "https://via.placeholder.com/100",
      name: "Restaurant 1",
      isAd: true,
      distance: "1.2 km",
      rating: "4.5",
    },
    {
      imageSrc: "https://via.placeholder.com/100",
      name: "Restaurant 2",
      isAd: false,
      distance: "3.4 km",
      rating: "4.0",
    },
    {
      imageSrc: "https://via.placeholder.com/100",
      name: "Restaurant 3",
      isAd: false,
      distance: "2.1 km",
      rating: "4.7",
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

  React.useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let isAdding = true;

    const updatePlaceholder = () => {
      const currentWord = words[wordIndex];
      if (isAdding) {
        charIndex++;
        if (charIndex === currentWord.length) {
          isAdding = false;
        }
      } else {
        charIndex--;
        if (charIndex === 0) {
          isAdding = true;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }
      setPlaceholder(`Search ${currentWord.substring(0, charIndex)}`);
    };

    const intervalId = setInterval(updatePlaceholder, 200);

    return () => clearInterval(intervalId);
  }, []);

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: foodGif,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <IonContent className="homeContents" color="light">
      <div className="ion-margin-top">
        <IonSearchbar placeholder={placeholder}></IonSearchbar>
      </div>

      <IonGrid>
        <IonRow className="horizontal-scroll">
          {iconData.map((item, index) => (
            <IconCard key={index} icon={item.icon} name={item.name} />
          ))}
        </IonRow>
      </IonGrid>

      <RecommendCards
        imageSrc={cardData.imageSrc}
        title={cardData.title}
        subtitle={cardData.subtitle}
        content={cardData.content}
      />

      <RecommendedRestaurants restaurantData={restaurantData} />

      <RecommendedRestaurants restaurantData={restaurantData} />

      <RecommendedRestaurants restaurantData={restaurantData} />

      <RecommendedRestaurants restaurantData={restaurantData} />

      <MapComponent />

      <div className="bannerContainer">
        <div className="bannerContent">
          <IonCardHeader>
            <IonCardTitle>Delicious Food Offers</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              <strong>Food Name:</strong> Amazing Dish
            </p>
            <p>
              <strong>Available At:</strong> Best Restaurant
            </p>
            <p>
              <strong>Offer/Discount:</strong> 25% Off
            </p>
            <p>
              <strong>Price:</strong> $15.00
            </p>
          </IonCardContent>
        </div>
        <div className="bannerLottie">
          <Lottie options={lottieOptions} height={200} width={200} />
        </div>
      </div>

      <RecommendedRestaurants restaurantData={restaurantData} />

      <div className="header-content">
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
}

export default Home;
