const isSearchable = (
  name: string | null = null,
  oldName: string | null = null,
  corporationName: string | null = null,
  railName: string | null = null,
  type: string | null = null,
  prefectureCode: string | null = null
) => {
  if (
    name === "" &&
    oldName === "" &&
    corporationName === "" &&
    railName === "" &&
    type === "" &&
    prefectureCode === ""
  )
    return false;
  else return true;
};

export default isSearchable;
