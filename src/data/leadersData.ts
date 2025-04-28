interface Leader {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  sport?: string;
}

export const leadersData: Leader[] = [
  {
    id: 1,
    name: "Dr. Emily Rodriguez",
    role: "Sports Director",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg",
    bio: "Dr. Rodriguez has over 15 years of experience in sports management and physical education. She has been instrumental in developing our college's sports programs to national recognition."
  },
  {
    id: 2,
    name: "Coach Thomas Wilson",
    role: "Head of Basketball Program",
    image: "https://images.pexels.com/photos/6551174/pexels-photo-6551174.jpeg",
    bio: "Former professional basketball player with extensive coaching experience. Coach Wilson has led our basketball teams to three regional championships.",
    sport: "Basketball"
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Swimming Coach",
    image: "https://images.pexels.com/photos/2167673/pexels-photo-2167673.jpeg",
    bio: "Olympic medalist and certified swimming instructor with a passion for developing young talent. Sarah has coached multiple students to national competitions.",
    sport: "Swimming"
  },
  {
    id: 4,
    name: "Marco Perez",
    role: "Head of Soccer Program",
    image: "https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg",
    bio: "UEFA-licensed coach with international experience. Marco brings tactical expertise and technical training to our soccer teams.",
    sport: "Soccer"
  },
  {
    id: 5,
    name: "Jessica Taylor",
    role: "Student Sports Representative",
    image: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg",
    bio: "A senior student and champion volleyball player who represents student interests in sports administration. Jessica helps organize inter-college events."
  },
  {
    id: 6,
    name: "David Chen",
    role: "Tennis Coach",
    image: "https://images.pexels.com/photos/9301100/pexels-photo-9301100.jpeg",
    bio: "Former ATP professional with coaching experience at all levels. David has revitalized our tennis program with modern techniques and personalized training.",
    sport: "Tennis"
  }
];