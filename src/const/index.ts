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
