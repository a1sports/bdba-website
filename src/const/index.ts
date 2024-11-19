export interface EventProps {
  id: number;
  title: string;
  month: string;
  year: string;
}

export const events: EventProps[] = [
  {
    id: 1,
    title: "Inter School Badminton League",
    month: "January",
    year: "2024",
  },
  {
    id: 2,
    title: "Junior Badminton Championship",
    month: "February",
    year: "2025",
  },
  {
    id: 3,
    title: "Inter School Badminton League",
    month: "March",
    year: "2025",
  },
];

export interface GalleryProps {
  id: number;
  description: string;
  imagePath: string;
}

export const galleries: GalleryProps[] = [
  {
    id: 1,
    description: "Inter School Badminton League",
    imagePath: "/assets/images/gallery/anthem.jpeg", // Reference the path from the public folder
  },
  {
    id: 2,
    description: "Junior Badminton Championship",
    imagePath: "../assets/images/gallery/audience.jpeg",
  },
  {
    id: 3,
    description: "Inter School Badminton League",
    imagePath: "/assets/images/gallery/event.jpeg",
  },
  {
    id: 4,
    description: "Badminton Finals",
    imagePath: "/assets/images/gallery/event1.jpeg",
  },
  {
    id: 5,
    description: "Match Highlights",
    imagePath: "/assets/images/gallery/event3.jpeg",
  },
  {
    id: 6,
    description: "Game Day",
    imagePath: "/assets/images/gallery/event4.jpeg",
  },
  {
    id: 7,
    description: "Game Time",
    imagePath: "/assets/images/gallery/game1.jpeg",
  },
  {
    id: 8,
    description: "Spectator's View",
    imagePath: "/assets/images/gallery/game2.jpeg",
  },
  {
    id: 9,
    description: "Match Moments",
    imagePath: "/assets/images/gallery/game3.jpeg",
  },
  {
    id: 10,
    description: "Presentation Ceremony",
    imagePath: "/assets/images/gallery/presentation.jpeg",
  },
  {
    id: 11,
    description: "Awarding Ceremony",
    imagePath: "/assets/images/gallery/presentation1.jpeg",
  },
  {
    id: 12,
    description: "Game Start",
    imagePath: "/assets/images/gallery/start.jpeg",
  },
  {
    id: 13,
    description: "Game Begins",
    imagePath: "/assets/images/gallery/start2.jpeg",
  },
  {
    id: 14,
    description: "Talk Session",
    imagePath: "/assets/images/gallery/talk.jpeg",
  },
  {
    id: 15,
    description: "Talk at Event",
    imagePath: "/assets/images/gallery/talk2.jpeg",
  },
  {
    id: 16,
    description: "Event Talk",
    imagePath: "/assets/images/gallery/talk3.jpeg",
  },
  {
    id: 17,
    description: "Award Trophy",
    imagePath: "/assets/images/gallery/trophy.jpeg",
  },
  {
    id: 18,
    description: "Final Match",
    imagePath: "/assets/images/gallery/final.jpeg",
  },
  {
    id: 19,
    description: "Final Match",
    imagePath: "/assets/images/gallery/presentation1.jpeg",
  },
  {
    id: 20,
    description: "Champion Celebration",
    imagePath: "/assets/images/gallery/champion.jpeg",
  },
  {
    id: 21,
    description: "Champion Celebration",
    imagePath: "/assets/images/gallery/champion2.jpeg",
  },
  {
    id: 22,
    description: "Champion Celebration",
    imagePath: "/assets/images/gallery/champion3.jpeg",
  },
  {
    id: 23,
    description: "Champion Celebration",
    imagePath: "/assets/images/gallery/champion4.jpeg",
  },
  {
    id: 24,
    description: "Champion Celebration",
    imagePath: "/assets/images/gallery/champion5.jpeg",
  },
];


