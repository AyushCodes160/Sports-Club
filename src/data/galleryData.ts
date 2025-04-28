interface GalleryImage {
  id: number;
  image: string;
  title: string;
  caption?: string;
  category: string;
}

export const galleryData: GalleryImage[] = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/3755440/pexels-photo-3755440.jpeg",
    title: "Basketball Championship Finals",
    caption: "Our team competing in the 2023 Regional Basketball Championship",
    category: "Basketball"
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg",
    title: "Soccer Team Practice",
    caption: "Early morning practice session at our college stadium",
    category: "Soccer"
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg",
    title: "Swimming Competition",
    caption: "Our swimmers taking part in the annual Inter-College Meet",
    category: "Swimming"
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/8224057/pexels-photo-8224057.jpeg",
    title: "Tennis Tournament Finals",
    caption: "Mixed doubles championship match",
    category: "Tennis"
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/1263426/pexels-photo-1263426.jpeg",
    title: "Volleyball Team Victory",
    caption: "Celebrating after winning the conference championship",
    category: "Volleyball"
  },
  {
    id: 6,
    image: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg",
    title: "Track & Field Practice",
    caption: "Long jump training session",
    category: "Track & Field"
  },
  {
    id: 7,
    image: "https://images.pexels.com/photos/4753928/pexels-photo-4753928.jpeg",
    title: "Team Building Retreat",
    caption: "Annual retreat for all sports teams",
    category: "Events"
  },
  {
    id: 8,
    image: "https://images.pexels.com/photos/261030/pexels-photo-261030.jpeg",
    title: "Training Facility",
    caption: "Our state-of-the-art indoor training center",
    category: "Facilities"
  },
  {
    id: 9,
    image: "https://images.pexels.com/photos/3760790/pexels-photo-3760790.jpeg",
    title: "Awards Ceremony",
    caption: "Annual sports recognition night",
    category: "Events"
  },
  {
    id: 10,
    image: "https://images.pexels.com/photos/2526875/pexels-photo-2526875.jpeg",
    title: "Coaching Session",
    caption: "One-on-one coaching with our experienced staff",
    category: "Training"
  },
  {
    id: 11,
    image: "https://images.pexels.com/photos/258395/pexels-photo-258395.jpeg",
    title: "Basketball Court",
    caption: "Our recently renovated basketball facility",
    category: "Facilities"
  },
  {
    id: 12,
    image: "https://images.pexels.com/photos/12902388/pexels-photo-12902388.jpeg",
    title: "Sports Festival",
    caption: "Annual college sports festival",
    category: "Events"
  }
];