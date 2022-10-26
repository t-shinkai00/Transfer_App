import React, { useState, useEffect } from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { addOutline } from "ionicons/icons";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";

const Tab1: React.FC = () => {
  const [departure, setDeparture] = useState("");
  const [via, setVia] = useState("");
  const [arrival, setArrival] = useState("");

  const [viaNum, setViaNum] = useState(0);
  const [isInputVia, setIsInputVia] = useState(false);
  const [viaList, setViaList] = useState<string[]>([]);

  useEffect(() => {
    if (!via) {
      setIsInputVia(false);
    } else {
      setIsInputVia(true);
    }
  }, [via]);

  const addVia = () => {
    setViaList([...viaList, via]);
  };

  const handleClick = () => {
    setIsInputVia(false);
    addVia();
    setVia("");
    setViaNum(viaNum + 1);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>経路探索</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">経路探索</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer name="Tab 1 page" /> */}

        <IonList>
          {/* <IonListHeader>
            <IonLabel>経路探索</IonLabel>
          </IonListHeader> */}
          <IonItem counter={true}>
            <IonLabel position="floating">出発地</IonLabel>
            <IonInput
              placeholder="出発地を入力"
              value={departure}
              onIonChange={(e) => {
                setDeparture(e.detail.value!);
              }}
            ></IonInput>
          </IonItem>
          {viaList.map((via, idx) => (
            <IonItem key={idx}>
              <IonLabel>経由地{idx + 1}</IonLabel>
              <IonText>{via}</IonText>
            </IonItem>
          ))}

          <IonItem>
            <IonLabel position="floating">経由地{viaNum + 1}</IonLabel>
            <IonInput
              placeholder="経由地を入力"
              value={via}
              onIonChange={(e) => {
                setVia(e.detail.value!);
              }}
            ></IonInput>
          </IonItem>

          <IonItem counter={true}>
            {isInputVia ? (
              <IonButton
                onClick={() => {
                  handleClick();
                }}
              >
                <IonIcon icon={addOutline} />
                経由地を追加
              </IonButton>
            ) : (
              <IonButton disabled={true}>
                <IonIcon icon={addOutline} />
                経由地を追加
              </IonButton>
            )}
          </IonItem>
          <IonItem counter={true}>
            <IonLabel position="floating">到着地</IonLabel>
            <IonInput
              placeholder="到着地を入力"
              value={arrival}
              onIonChange={(e) => {
                setArrival(e.detail.value!);
              }}
            ></IonInput>
          </IonItem>
        </IonList>
        <IonItem>
          <IonButton>探索する</IonButton>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
