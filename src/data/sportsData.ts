export interface Sport {
  id: number;
  name: string;
  image: string;
  description: string;
  coordinator: {
    name: string;
    contact: string;
  };
}

export const sportsData: Sport[] = [
  {
    id: 1,
    name: "Football",
    image: "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg",
    description: "Our football program emphasizes tactical awareness, physical conditioning, and teamwork. Join our elite training program led by experienced coaches.",
    coordinator: {
      name: "Venansha Shrivastav",
      contact: "football@nst-sports.edu"
    }
  },
  {
    id: 2,
    name: "Cricket",
    image: "https://images.pexels.com/photos/3657154/pexels-photo-3657154.jpeg",
    description: "Our cricket program focuses on developing all aspects of the game - batting, bowling, and fielding, with specialized training sessions for each discipline.",
    coordinator: {
      name: "Venansha Shrivastav",
      contact: "cricket@nst-sports.edu"
    }
  },
  {
    id: 3,
    name: "Basketball",
    image: "https://images.pexels.com/photos/3755440/pexels-photo-3755440.jpeg",
    description: "Our basketball program is highly competitive with men's and women's teams that have consistently performed well in regional tournaments.",
    coordinator: {
      name: "Venansha Shrivastav",
      contact: "basketball@nst-sports.edu"
    }
  },
  {
    id: 4,
    name: "Volleyball",
    image: "https://images.pexels.com/photos/1263426/pexels-photo-1263426.jpeg",
    description: "Our volleyball program emphasizes teamwork, communication, and advanced techniques for players of all levels.",
    coordinator: {
      name: "Venansha Shrivastav",
      contact: "volleyball@nst-sports.edu"
    }
  },
  {
    id: 5,
    name: "Tennis",
    image: "https://images.pexels.com/photos/8224057/pexels-photo-8224057.jpeg",
    description: "Our tennis program offers top-notch coaching on newly renovated courts, focusing on both individual and team competitions.",
    coordinator: {
      name: "Venansha Shrivastav",
      contact: "tennis@nst-sports.edu"
    }
  },
  {
    id: 6,
    name: "Badminton",
    image: "https://images.pexels.com/photos/3660204/pexels-photo-3660204.jpeg",
    description: "Our badminton program provides comprehensive training in singles and doubles play, with focus on technique, footwork, and strategy.",
    coordinator: {
      name: "Venansha Shrivastav",
      contact: "badminton@nst-sports.edu"
    }
  },
  {
    id: 7,
    name: "Chess",
    image: "https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg",
    description: "Our chess program develops strategic thinking and analytical skills through expert coaching and regular tournament participation.",
    coordinator: {
      name: "Venansha Shrivastav",
      contact: "chess@nst-sports.edu"
    }
  }
];