
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

export interface Chapter {
  id: string;
  title: string;
  description: string;
  subjectId: string;
  grade: string;
  hasVideo: boolean;
  hasAudio: boolean;
  hasQuiz: boolean;
  hasGame: boolean;
}

export const chapters: { [key: string]: Chapter[] } = {
  "mathematics": [
    {
      id: "math-ch1",
      title: "Number Systems",
      description: "Introduction to different number systems and their properties",
      subjectId: "mathematics",
      grade: "8",
      hasVideo: true,
      hasAudio: true,
      hasQuiz: true,
      hasGame: false
    },
    {
      id: "math-ch2",
      title: "Algebra Basics",
      description: "Introduction to algebraic expressions and equations",
      subjectId: "mathematics",
      grade: "8",
      hasVideo: true,
      hasAudio: true,
      hasQuiz: true,
      hasGame: true
    },
    {
      id: "math-ch3",
      title: "Geometry",
      description: "Understanding shapes, angles and properties of 2D figures",
      subjectId: "mathematics",
      grade: "8",
      hasVideo: true,
      hasAudio: false,
      hasQuiz: true,
      hasGame: false
    }
  ],
  "science": [
    {
      id: "sci-ch1",
      title: "Cell Structure",
      description: "Understanding the basic unit of life - the cell",
      subjectId: "science",
      grade: "8",
      hasVideo: true,
      hasAudio: true,
      hasQuiz: true,
      hasGame: false
    },
    {
      id: "sci-ch2",
      title: "Force and Pressure",
      description: "Introduction to concepts of force and pressure",
      subjectId: "science",
      grade: "8",
      hasVideo: true,
      hasAudio: true,
      hasQuiz: true,
      hasGame: true
    },
    {
      id: "sci-ch3",
      title: "Chemical Effects of Electric Current",
      description: "Understanding how electricity can cause chemical changes",
      subjectId: "science",
      grade: "8",
      hasVideo: false,
      hasAudio: true,
      hasQuiz: true,
      hasGame: false
    }
  ]
};

export const getSubjectsForStudent = (state: string, grade: string) => {
  return subjects.filter(subject => 
    subject.stateId.includes(state) && subject.grades.includes(grade)
  );
};

export const getChaptersForSubject = (subjectId: string, grade: string) => {
  const subjectChapters = chapters[subjectId] || [];
  return subjectChapters.filter(chapter => chapter.grade === grade);
};
