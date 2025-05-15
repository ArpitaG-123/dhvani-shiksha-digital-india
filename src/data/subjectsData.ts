export interface Subject {
  id: string;
  name: string;
  icon: string;
  color: string;
  stateId: string[];
  grades: string[];
}

export const subjects: Subject[] = [
  {
    id: "mathematics",
    name: "Mathematics",
    icon: "📐",
    color: "bg-eduBlue",
    stateId: ["maharashtra", "karnataka", "tamilnadu", "kerala", "ap", "up", "wb", "rajasthan", "gujarat", "bihar"],
    grades: ["5", "6", "7", "8", "9", "10", "11", "12"]
  },
  {
    id: "science",
    name: "Science",
    icon: "🧪",
    color: "bg-eduGreen",
    stateId: ["maharashtra", "karnataka", "tamilnadu", "kerala", "ap", "up", "wb", "rajasthan", "gujarat", "bihar"],
    grades: ["5", "6", "7", "8", "9", "10"]
  },
  {
    id: "physics",
    name: "Physics",
    icon: "⚛️",
    color: "bg-eduPurple",
    stateId: ["maharashtra", "karnataka", "tamilnadu", "kerala", "ap", "up", "wb", "rajasthan", "gujarat", "bihar"],
    grades: ["11", "12"]
  },
  {
    id: "chemistry",
    name: "Chemistry",
    icon: "🧪",
    color: "bg-eduYellow",
    stateId: ["maharashtra", "karnataka", "tamilnadu", "kerala", "ap", "up", "wb", "rajasthan", "gujarat", "bihar"],
    grades: ["11", "12"]
  },
  {
    id: "biology",
    name: "Biology",
    icon: "🌱",
    color: "bg-eduGreen",
    stateId: ["maharashtra", "karnataka", "tamilnadu", "kerala", "ap", "up", "wb", "rajasthan", "gujarat", "bihar"],
    grades: ["11", "12"]
  },
  {
    id: "history",
    name: "History",
    icon: "📜",
    color: "bg-eduOrange",
    stateId: ["maharashtra", "karnataka", "tamilnadu", "kerala", "ap", "up", "wb", "rajasthan", "gujarat", "bihar"],
    grades: ["5", "6", "7", "8", "9", "10", "11", "12"]
  },
  {
    id: "geography",
    name: "Geography",
    icon: "🌍",
    color: "bg-eduBlue",
    stateId: ["maharashtra", "karnataka", "tamilnadu", "kerala", "ap", "up", "wb", "rajasthan", "gujarat", "bihar"],
    grades: ["5", "6", "7", "8", "9", "10", "11", "12"]
  },
  {
    id: "english",
    name: "English",
    icon: "📝",
    color: "bg-eduPurple",
    stateId: ["maharashtra", "karnataka", "tamilnadu", "kerala", "ap", "up", "wb", "rajasthan", "gujarat", "bihar"],
    grades: ["5", "6", "7", "8", "9", "10", "11", "12"]
  },
  {
    id: "hindi",
    name: "Hindi",
    icon: "📚",
    color: "bg-eduOrange",
    stateId: ["maharashtra", "karnataka", "ap", "up", "wb", "rajasthan", "gujarat", "bihar"],
    grades: ["5", "6", "7", "8", "9", "10", "11", "12"]
  },
  {
    id: "marathi",
    name: "Marathi",
    icon: "📖",
    color: "bg-eduGreen",
    stateId: ["maharashtra"],
    grades: ["5", "6", "7", "8", "9", "10", "11", "12"]
  },
  {
    id: "tamil",
    name: "Tamil",
    icon: "📖",
    color: "bg-eduGreen",
    stateId: ["tamilnadu"],
    grades: ["5", "6", "7", "8", "9", "10", "11", "12"]
  },
  {
    id: "telugu",
    name: "Telugu",
    icon: "📖",
    color: "bg-eduGreen",
    stateId: ["ap"],
    grades: ["5", "6", "7", "8", "9", "10", "11", "12"]
  }
];

export const getSubjectsForStudent = (state: string, grade: string) => {
  return subjects.filter(subject => 
    subject.stateId.includes(state) && subject.grades.includes(grade)
  );
};
