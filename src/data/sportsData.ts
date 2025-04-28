export interface Sport {
  id: number;
  name: string;
  image: string;
  description: string;
  coach: string;
  schedule: string;
  achievements: string[];
}

export const sportsData: Sport[] = [
  {
    id: 1,
    name: "Basketball",
    image: "https://images.pexels.com/photos/3755440/pexels-photo-3755440.jpeg",
    description: "Our basketball program is highly competitive with men's and women's teams that have consistently performed well in regional tournaments.",
    coach: "Michael Jordan, former NBA player with 15+ years of coaching experience",
    schedule: "Monday, Wednesday, Friday: 4-6 PM",
    achievements: [
      "Regional Champions 2023",
      "State Finalists 2022",
      "3 players recruited to Division I colleges last year"
    ]
  },
  {
    id: 2,
    name: "Soccer",
    image: "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg",
    description: "Our soccer teams are known for their technical skills and tactical awareness, competing at the highest collegiate levels.",
    coach: "Carlos Silva, UEFA licensed coach with international experience",
    schedule: "Tuesday, Thursday: 3-5 PM, Saturday: 10 AM-12 PM",
    achievements: [
      "National Tournament Quarterfinalists 2023",
      "Conference Champions 2021, 2022",
      "Produced 5 professional players in the last decade"
    ]
  },
  {
    id: 3,
    name: "Swimming",
    image: "https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg",
    description: "Our swimming program focuses on individual development while fostering a strong team environment, with access to Olympic-sized facilities.",
    coach: "Sarah Williams, former Olympic swimmer and certified trainer",
    schedule: "Monday-Friday: 6-8 AM and 4-6 PM",
    achievements: [
      "8 Individual National Champions since 2020",
      "Relay Team Record Holders",
      "Swimming Excellence Award 2022"
    ]
  },
  {
    id: 4,
    name: "Tennis",
    image: "https://images.pexels.com/photos/8224057/pexels-photo-8224057.jpeg",
    description: "Our tennis program offers top-notch coaching on newly renovated courts, focusing on both individual and team competitions.",
    coach: "Robert Chen, PTA Certified Professional with Grand Slam experience",
    schedule: "Tuesday, Thursday: 2-4 PM, Sunday: 1-3 PM",
    achievements: [
      "Men's Singles Champion 2023",
      "Women's Team Regional Finalists 2022",
      "Doubles Tournament Winners 2021"
    ]
  },
  {
    id: 5,
    name: "Volleyball",
    image: "https://images.pexels.com/photos/1263426/pexels-photo-1263426.jpeg",
    description: "Our volleyball program emphasizes teamwork, communication, and advanced techniques for players of all levels.",
    coach: "Elena Martinez, former professional player with 12 years coaching experience",
    schedule: "Monday, Wednesday: 5-7 PM, Friday: 4-6 PM",
    achievements: [
      "Conference Champions 2023",
      "National Tournament Appearance 2022",
      "All-American Player selections for 3 consecutive years"
    ]
  },
  {
    id: 6,
    name: "Track & Field",
    image: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg",
    description: "Our track and field program covers all events from sprints to throws, with specialized coaching for each discipline.",
    coach: "James Thompson, USA Track & Field certified coach",
    schedule: "Monday-Friday: 3-5 PM, Saturday: 9-11 AM (specialized training)",
    achievements: [
      "5 Conference Records currently held",
      "National Champions in 400m and Long Jump",
      "Olympic Trials Qualifiers in 2020 and 2024"
    ]
  }
];