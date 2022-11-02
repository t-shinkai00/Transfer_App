import Type from "../interfaces/TypeInterface";

const isSameType = (o1: Type, o2: Type) => {
  if (!o1 || !o2) {
    return o1 === o2;
  }
  if (Array.isArray(o2)) {
    return o2.some((o) => o.value === o1.value);
  }
  return o1.value === o2.value;
};

const types: Type[] = [
  { name: "鉄道", value: "train" },
  { name: "飛行機", value: "plane" },
  { name: "船", value: "ship" },
  { name: "路線バス", value: "bus.local" },
  { name: "連絡バス", value: "bus.connection" },
  { name: "高速バス", value: "bus.highway" },
  { name: "深夜急行バス", value: "bus.midnight" },
  // { name: "徒歩", value: "walk" },
  // {name:"特殊",value:"strange"},
];

export { types, isSameType };
