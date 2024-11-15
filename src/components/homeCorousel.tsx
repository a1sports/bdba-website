import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Team1 from "../assets/images/team1.jpg";
import Team2 from "../assets/images/team2.jpg";
import Team3 from "../assets/images/team3.jpg";
import Team4 from "../assets/images/team4.jpg";
import Team5 from "../assets/images/team5.jpg";
import Team6 from "../assets/images/team6.jpg";
import Shettle from "../assets/images/shettle.png";

function HomeCorousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      date: "NOV 15 - NOV 17",
      content: (
        <div className="flex flex-col space-y-4 justify-center items-center mt-10">
          <p className="text-[#cb6ce6] font-bold text-7xl italic">BDBA </p>
          <p className="text-[#d34237] font-bold text-4xl italic">PRESENTS</p>
          <p className="text-[#cb6ce6] font-bold text-7xl italic">
            BADMINTON PREMIERE LEAGUE
          </p>
          <p className="text-[#d34237] font-bold text-4xl">NOV 15 - NOV 17</p>
          <img src={Shettle} className="h-56 w-56 rotate-[135deg]" />
        </div>
      ),
    },
    {
      content: (
        <div className="flex-col justify-center items-center space-x-4  mt-20">
          <p className="text-[#d34237] font-bold text-7xl italic">
            BDBL SEASON 1
          </p>
          <div className="flex items-center space-x-24 justify-center mt-20  w-[100%]">
            <img src={Team1} className="w-28 h-28 rounded-full" />
            <img src={Team2} className="w-28 h-28 rounded-full" />
            <img src={Team3} className="w-28 h-28 rounded-full" />
            <img src={Team4} className="w-28 h-28 rounded-full" />
            <img src={Team5} className="w-28 h-28 rounded-full" />
            <img src={Team6} className="w-28 h-28 rounded-full" />
          </div>
        </div>
      ),
    },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div>
      <main className="flex-grow h-[100%] w-[100%] flex flex-col items-center justify-center relative">
        <div className="z-10 text-center">{slides[currentSlide].content}</div>
      </main>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
        <button onClick={prevSlide}>
          <ChevronLeft className="h-4 w-4" />
        </button>

        <button onClick={nextSlide}>
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export default HomeCorousel;
