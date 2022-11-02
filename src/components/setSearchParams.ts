import StationSearch from "../interfaces/StationSearchInterface";

export const setStationSearchParams = (
  key: string | undefined,
  name: string | null = null,
  oldName: string | null = null,
  corporationName: string | null = null,
  railName: string | null = null,
  type: string | null = null,
  prefectureCode: string | null = null,
  addGateGroup: boolean = true
) => {
  const params: StationSearch = {
    key: key,
    name: name,
    oldName: oldName,
    corporationName: corporationName,
    railName: railName,
    type: type,
    prefectureCode: prefectureCode,
    addGateGroup: addGateGroup,
  };

  if (name === "") delete params.name;
  if (oldName === "") delete params.oldName;
  if (corporationName === "") delete params.corporationName;
  if (railName === "") delete params.railName;
  if (type === "") delete params.type;
  if (prefectureCode === "") delete params.prefectureCode;
  if (addGateGroup === true) delete params.addGateGroup;

  return params;
};
