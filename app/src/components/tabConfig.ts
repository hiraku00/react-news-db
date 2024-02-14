interface Color {
  background: string;
  border: string;
}

const BTS = "BTS";
const BLACKPINK = "BLACKPINK";
const NEWJEANS = "NewJeans";
const LE_SSERAFIM = "LE SSERAFIM";
const AESPA = "aespa";
const IVE = "IVE";
const TWICE = "Twice";
const ITZY = "ITZY";

export const colors: { [key: string]: Color } = {
  [BTS]: { background: "bg-red-500", border: "border-red-500" },
  [BLACKPINK]: { background: "bg-orange-400", border: "border-orange-400" },
  [NEWJEANS]: { background: "bg-green-400", border: "border-green-400" },
  [LE_SSERAFIM]: { background: "bg-yellow-400", border: "border-yellow-400" },
  [AESPA]: { background: "bg-blue-400", border: "border-blue-400" },
  [IVE]: { background: "bg-purple-400", border: "border-purple-400" },
  [TWICE]: { background: "bg-red-500", border: "border-red-500" },
  [ITZY]: { background: "bg-orange-400", border: "border-orange-400" },
  default: { background: "bg-green-400", border: "border-green-400" },
};

export const tabs = [
  { label: BTS, searchKeyword: BTS },
  { label: BLACKPINK, searchKeyword: BLACKPINK },
  { label: NEWJEANS, searchKeyword: NEWJEANS },
  { label: LE_SSERAFIM, searchKeyword: LE_SSERAFIM },
  { label: AESPA, searchKeyword: AESPA },
  { label: IVE, searchKeyword: IVE },
  { label: TWICE, searchKeyword: TWICE },
  { label: ITZY, searchKeyword: ITZY },
];
