import { useState } from "react";
import {
  IonLabel,
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import "./Tab2.css";

import FetchStationInfo from "../components/FetchStationInfo";
import Prefecture from "../interfaces/PrefectureInterface";
import { prefectures, isSamePrefecture } from "../components/Prefecture";

const Tab2: React.FC = () => {
  const [name, setName] = useState("");
  const [oldName, setOldName] = useState("");
  const [corporationName, setCorporationName] = useState("");
  const [railName, setRailName] = useState("");
  const [type, setType] = useState("");
  const [prefectureCode, setPrefectureCode] = useState("");
  const [addGateGroup, setAddGateGroup] = useState(true);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>駅情報</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">駅情報検索</IonTitle>
          </IonToolbar>
        </IonHeader>

        {/* <IonText>指定された条件に当てはまる駅の情報を返します．</IonText> */}
        <IonList>
          <IonItem>
            <IonLabel position="floating">キーワード</IonLabel>
            <IonInput
              onIonChange={(e) => {
                setName(e.detail.value!);
              }}
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">駅の旧名称</IonLabel>
            <IonInput
              onIonChange={(e) => {
                setOldName(e.detail.value!);
              }}
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">会社名</IonLabel>
            <IonInput
              onIonChange={(e) => {
                setCorporationName(e.detail.value!);
              }}
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">平均路線名</IonLabel>
            <IonInput
              onIonChange={(e) => {
                setRailName(e.detail.value!);
              }}
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">交通種別</IonLabel>
            <IonInput
              onIonChange={(e) => {
                setType(e.detail.value!);
              }}
            />
          </IonItem>
          <IonItem>
            <IonLabel position="fixed">都道府県</IonLabel>
            <IonSelect
              placeholder="選択"
              compareWith={isSamePrefecture}
              onIonChange={(e) => {
                const prefectures = e.detail.value;
                const prefectureCodes = prefectures.map(
                  (prefecture: Prefecture) => {
                    return prefecture.id;
                  }
                );
                setPrefectureCode(prefectureCodes.join(":"));
              }}
              multiple={true}
            >
              {prefectures.map((prefecture) => (
                <IonSelectOption key={prefecture.id} value={prefecture}>
                  {prefecture.name}
                </IonSelectOption>
              ))}
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">出口グループ</IonLabel>
            <IonInput
              onIonChange={(e) => {
                setAddGateGroup(true);
              }}
            />
          </IonItem>
        </IonList>
        <IonButton
          expand="block"
          onClick={async () => {
            const data = await FetchStationInfo(
              name,
              oldName,
              corporationName,
              railName,
              type,
              prefectureCode,
              addGateGroup
            );
            console.log(data);
          }}
        >
          検索する
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
