export default interface StationSearch {
  key: string | undefined;
  name?: string | null;
  oldName?: string | null;
  corporationName?: string | null;
  railName?: string | null;
  type?: string | null;
  prefectureCode?: string | null;
  addGateGroup?: boolean;
}
