import axios from "axios";

import StationSearch from "../interfaces/StationSearchInterface";
import { setStationSearchParams } from "./setSearchParams";
const API_KEY = process.env.REACT_APP_API_KEY;

const FetchStation = async (
  name: string | null = null,
  oldName: string | null = null,
  corporationName: string | null = null,
  railName: string | null = null,
  type: string | null = null,
  prefectureCode: string | null = null,
  addGateGroup: boolean = false
): Promise<string> => {
  const params: StationSearch = setStationSearchParams(
    API_KEY,
    name,
    oldName,
    corporationName,
    railName,
    type,
    prefectureCode,
    addGateGroup
  );

  const data: string = await axios
    .get("https://api.ekispert.jp/v1/json/station", {
      params: params,
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error.response);
    });

  return data;
};

export default FetchStation;
