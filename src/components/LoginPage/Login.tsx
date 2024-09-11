import React, { useState, useEffect } from "react";
import {
  IonContent,
  IonPage,
  IonButton,
  IonImg,
  IonIcon,
  IonSpinner,
} from "@ionic/react";
import "./Login.css";

import logo1 from "../../assets/icons/food.png";
import logo2 from "../../assets/icons/food1.png";
import logo3 from "../../assets/icons/food2.png";
import { chevronBackOutline, chevronForwardOutline } from "ionicons/icons";

const Login: React.FC = () => {
  const [showLogo, setShowLogo] = useState(true);
  const [showImage, setShowImage] = useState(false);
  const [step, setStep] = useState(1);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showLogo) {
      const revealTimer = setTimeout(() => {
        setShowImage(true);
      }, 500);

      return () => clearTimeout(revealTimer);
    }
  }, [showLogo]);

  useEffect(() => {
    setAnimationClass("");
  }, [step]);

  const getLogoForStep = (step: number) => {
    switch (step) {
      case 1:
        return logo1;
      case 2:
        return logo2;
      case 3:
        return logo3;
      default:
        return logo1;
    }
  };

  const getTextForStep = (step: number) => {
    switch (step) {
      case 1:
        return "Welcome to Step 1";
      case 2:
        return "You are now on Step 2";
      case 3:
        return "Final Step 3";
      default:
        return "";
    }
  };

  const handleRightButtonClick = () => {
    if (step < 3) {
      setAnimationClass("slide-out-right");
      setTimeout(() => {
        setStep(step + 1);
        setAnimationClass("slide-in-left");
      }, 200);
    }
  };

  const handleLeftButtonClick = () => {
    if (step > 1) {
      setAnimationClass("slide-out-left");
      setTimeout(() => {
        setStep(step - 1);
        setAnimationClass("slide-in-right");
      }, 200);
    }
  };

  return (
    <IonPage>
      <IonContent>
        {showLogo ? (
          <div className="splashScreen">
            <IonImg src={logo1} alt="App Logo" />
            <IonSpinner className="ion-margin" name="bubbles"></IonSpinner>
          </div>
        ) : (
          <div className="introContents">
            {showImage && (
              <div className={`imageContainer ${animationClass}`}>
                <IonImg src={getLogoForStep(step)} alt={`Step ${step}`} />
              </div>
            )}
            <div className="stepText">{getTextForStep(step)}</div>
            <div className="buttonContainer">
              <IonIcon
                className={`introPageNavIcons ${step === 1 ? "disabled" : ""}`}
                icon={chevronBackOutline}
                onClick={handleLeftButtonClick}
                style={{
                  pointerEvents: step === 1 ? "none" : "auto",
                  opacity: step === 1 ? 0.2 : 1,
                }}
              />
              <div className="dotContainer">
                {[1, 2, 3].map((dot) => (
                  <span
                    key={dot}
                    className={`dot ${dot === step ? "active" : "inactive"}`}
                  ></span>
                ))}
              </div>
              <IonIcon
                className="introPageNavIcons"
                icon={chevronForwardOutline}
                onClick={handleRightButtonClick}
              />
            </div>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Login;
