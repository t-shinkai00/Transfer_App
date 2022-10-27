import { useState } from "react";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { addOutline, swapVerticalOutline } from "ionicons/icons";
import "./Tab1.css";

const Tab1: React.FC = () => {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");

  const [via, setVia] = useState("");
  const [viaList, setViaList] = useState<string[]>([]);

  const [isDepartureModalOpen, setIsDepartureModalOpen] = useState(false);
  const [isViaModalOpen, setIsViaModalOpen] = useState(false);
  const [isArrivalModalOpen, setIsArrivalModalOpen] = useState(false);

  const addVia = () => {
    setViaList([...viaList, via]);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>経路探索</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">経路探索</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer name="Tab 1 page" /> */}

        <IonList>
          <IonItem onClick={() => setIsDepartureModalOpen(true)}>
            <IonLabel>
              <IonText>出発地:</IonText>
            </IonLabel>
            {departure === "" ? (
              <IonText>未入力</IonText>
            ) : (
              <IonText>{departure}</IonText>
            )}
          </IonItem>

          {viaList.map((via, idx) => (
            <IonItem key={idx}>
              <IonLabel>
                <IonText>経由地{idx + 1}:</IonText>
              </IonLabel>
              <IonText>{via}</IonText>
            </IonItem>
          ))}

          <IonItem>
            <IonButtons slot="start">
              <IonButton fill="outline">
                <IonIcon icon={swapVerticalOutline}></IonIcon>
                <IonText>逆順にする</IonText>
              </IonButton>
            </IonButtons>
            <IonButtons slot="end">
              <IonButton fill="outline" onClick={() => setIsViaModalOpen(true)}>
                <IonIcon icon={addOutline}></IonIcon>
                <IonText>経由地を追加</IonText>
              </IonButton>
            </IonButtons>
          </IonItem>

          <IonItem onClick={() => setIsArrivalModalOpen(true)}>
            <IonLabel>
              <IonText>到着地:</IonText>
            </IonLabel>
            {arrival === "" ? (
              <IonText>未入力</IonText>
            ) : (
              <IonText>{arrival}</IonText>
            )}
          </IonItem>
        </IonList>
        <IonButton expand="block">
          <IonText>探索する</IonText>
        </IonButton>

        <IonModal isOpen={isDepartureModalOpen}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>出発地</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setIsDepartureModalOpen(false)}>
                  Close
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonItem>
              <IonLabel position="stacked">出発地を入力</IonLabel>
              <IonInput
                onIonChange={(e) => {
                  setDeparture(e.detail.value!);
                }}
              />
            </IonItem>
          </IonContent>
        </IonModal>

        <IonModal isOpen={isViaModalOpen}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>経由地</IonTitle>
              <IonButtons slot="end">
                <IonButton
                  onClick={() => {
                    setIsViaModalOpen(false);
                    addVia();
                  }}
                >
                  Close
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonItem>
              <IonLabel position="stacked">経由地を入力</IonLabel>
              <IonInput
                onIonChange={(e) => {
                  setVia(e.detail.value!);
                }}
              />
            </IonItem>
          </IonContent>
        </IonModal>

        <IonModal isOpen={isArrivalModalOpen}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>到着地</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setIsArrivalModalOpen(false)}>
                  Close
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonItem>
              <IonLabel position="stacked">到着地を入力</IonLabel>
              <IonInput
                onIonChange={(e) => {
                  setArrival(e.detail.value!);
                }}
              />
            </IonItem>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
