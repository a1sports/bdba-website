import { useEffect, useRef, useState } from "react";
import { galleries } from "../const";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Gallerycard from "../components/Gallerycard";

function Galleries() {
  const [visibleEvents, setVisibleEvents] = useState(galleries.slice(0, 3));
  const carouselRef = useRef<HTMLDivElement>(null);

  const shiftLeft = () => {
    setVisibleEvents((prev) => {
      const newEvents = [...prev];
      const firstEvent =
      galleries[
          (galleries.findIndex((e) => e.id === newEvents[0].id) -
            1 +
            galleries.length) %
            galleries.length
        ];
      newEvents.unshift(firstEvent);
      newEvents.pop();
      return newEvents;
    });
  };

  const shiftRight = () => {
    setVisibleEvents((prev) => {
      const newEvents = [...prev];
      const lastEvent =
      galleries[
          (galleries.findIndex((e) => e.id === newEvents[2].id) + 1) %
          galleries.length
        ];
      newEvents.push(lastEvent);
      newEvents.shift();
      return newEvents;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      shiftRight();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
    w-screen h-screen flex flex-col bg-black justify-center items-center
    bg-[rgba(0,0,0,0.5)] bg-[url(./assets/images/bg-image.jpg)]
    bg-cover bg-no-repeat bg-center relative overflow-hidden
    p-4">
      <div
        ref={carouselRef}
        className="flex justify-center items-center space-x-10"
      >
        {visibleEvents.map((gallery, index) => (
          <Gallerycard key={gallery.id} index={index} gallery={gallery} />
        ))}
      </div>
      <button
        onClick={shiftRight}
        className="
          absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-cyan-500 
          border-cyan-500 hover:bg-gray-700 z-10 p-2 rounded-full
        "
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      <button
        onClick={shiftLeft}
        className="
          absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-cyan-500 
          border-cyan-500 hover:bg-gray-700 z-10 p-2 rounded-full
        "
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
    </div>
  );
}

export default Galleries;
