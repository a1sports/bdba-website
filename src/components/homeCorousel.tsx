import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Team1 from "../assets/images/team1.jpg";
import Team2 from "../assets/images/team2.jpg";
import Team3 from "../assets/images/team3.jpg";
import Team4 from "../assets/images/team4.jpg";
import Team5 from "../assets/images/team5.jpg";
import Team6 from "../assets/images/team6.jpg";
import Shettle from "../assets/images/shettle.png";

function HomeCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      date: "NOV 15 - NOV 17",
      content: (
        <div className="flex flex-col space-y-4 justify-center items-center">
          <p className="text-[#cb6ce6] font-bold text-5xl sm:text-4xl italic">
            BDBA
          </p>
          <p className="text-[#d34237] font-bold text-3xl sm:text-2xl italic">
            PRESENTS
          </p>
          <p className="text-[#cb6ce6] font-bold text-5xl sm:text-4xl italic text-center">
            BADMINTON PREMIERE LEAGUE
          </p>
          <p className="text-[#d34237] font-bold text-3xl sm:text-2xl">
            NOV 15 - NOV 17
          </p>
          <img
            src={Shettle}
            className="h-40 w-40 sm:h-40 sm:w-40 rotate-[135deg]"
          />
        </div>
      ),
    },
    {
      content: (
        <div className="flex flex-col items-center mt-10">
          <p className="text-[#d34237] font-bold text-4xl sm:text-3xl italic">
            BDBL SEASON 1
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 mt-10">
            {/* Responsive Image Sizes */}
            <img
              src={Team1}
              className="w-20 h-20 sm:w-16 sm:h-16 md:w-28 md:h-28 rounded-full"
              alt="Team 1"
            />
            <img
              src={Team2}
              className="w-20 h-20 sm:w-16 sm:h-16 md:w-28 md:h-28 rounded-full"
              alt="Team 2"
            />
            <img
              src={Team3}
              className="w-20 h-20 sm:w-16 sm:h-16 md:w-28 md:h-28 rounded-full"
              alt="Team 3"
            />
            <img
              src={Team4}
              className="w-20 h-20 sm:w-16 sm:h-16 md:w-28 md:h-28 rounded-full"
              alt="Team 4"
            />
            <img
              src={Team5}
              className="w-20 h-20 sm:w-16 sm:h-16 md:w-28 md:h-28 rounded-full"
              alt="Team 5"
            />
            <img
              src={Team6}
              className="w-20 h-20 sm:w-16 sm:h-16 md:w-28 md:h-28 rounded-full"
              alt="Team 6"
            />
          </div>
        </div>
      ),
    },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full">
      <main className="flex-grow h-full w-full flex flex-col items-center justify-center relative">
        <div className="z-10 text-center">{slides[currentSlide].content}</div>
      </main>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
        <button onClick={prevSlide}>
          <ChevronLeft className="h-6 w-6 sm:h-4 sm:w-4" />
        </button>

        <button onClick={nextSlide}>
          <ChevronRight className="h-6 w-6 sm:h-4 sm:w-4" />
        </button>
      </div>
    </div>
  );
}

export default HomeCarousel;
