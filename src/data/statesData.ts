
export interface StateBoard {
  id: string;
  name: string;
  languages: string[];
}

export const stateBoards: StateBoard[] = [
  {
    id: "maharashtra",
    name: "Maharashtra State Board",
    languages: ["Marathi", "English", "Hindi"]
  },
  {
    id: "karnataka",
    name: "Karnataka State Board",
    languages: ["Kannada", "English", "Hindi"]
  },
  {
    id: "tamilnadu",
    name: "Tamil Nadu State Board",
    languages: ["Tamil", "English"]
  },
  {
    id: "kerala",
    name: "Kerala State Board",
    languages: ["Malayalam", "English"]
  },
  {
    id: "ap",
    name: "Andhra Pradesh State Board",
    languages: ["Telugu", "English", "Hindi"]
  },
  {
    id: "up",
    name: "Uttar Pradesh State Board",
    languages: ["Hindi", "English", "Urdu"]
  },
  {
    id: "wb",
    name: "West Bengal State Board",
    languages: ["Bengali", "English", "Hindi"]
  },
  {
    id: "rajasthan",
    name: "Rajasthan State Board",
    languages: ["Hindi", "English"]
  },
  {
    id: "gujarat",
    name: "Gujarat State Board",
    languages: ["Gujarati", "English", "Hindi"]
  },
  {
    id: "bihar",
    name: "Bihar State Board",
    languages: ["Hindi", "English", "Urdu"]
  }
];

export const grades = ["5", "6", "7", "8", "9", "10", "11", "12"];

export const schoolTypes = [
  "Government School",
  "Private School",
  "Kendriya Vidyalaya",
  "Navodaya Vidyalaya",
  "Others"
];
