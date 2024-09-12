import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
} from "@ionic/react";
import { useLocation } from "react-router-dom";
import "./BlogContents.css";

interface Blog {
  imageSrc: string;
  blogName: string;
  shortDescription: string;
  updatedDate: string;
}

interface LocationState {
  blog: Blog | null;
}

const BlogContents: React.FC = () => {
  const location = useLocation<LocationState>();
  const blog = location.state?.blog;

  if (!blog) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/tab1" />
            </IonButtons>
            <IonTitle>No Blog Data</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <p>
            Blog content may be removed by the organizaton. Please try later{" "}
            <br /> Thank you for your patience
          </p>
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tab1" />
          </IonButtons>
          <IonTitle>{blog.blogName}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <img src={blog.imageSrc} alt="Blog" style={{ width: "100%" }} />
        <div className="blog-details">
          <p>
            <strong>Published Date:</strong> {blog.updatedDate}
          </p>
          <p>{blog.shortDescription}</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default BlogContents;
