import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const FetchStation = (
  name: string | null = null,
  oldName: string | null = null,
  corporationName: string | null = null,
  railName: string | null = null,
  type: string | null = null,
  prefectureCode: string | null = null,
  addGateGroup: boolean = false
) => {
  const params = {
    key: API_KEY,
    name: name,
    oldName: oldName,
    corporationName: corporationName,
    railName: railName,
    type: type,
    prefectureCode: prefectureCode,
    addGateGroup: addGateGroup,
  };

  axios
    .get("https://api.ekispert.jp/v1/json/station", {
      params: params,
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error.response);
    });
};

export default FetchStation;
