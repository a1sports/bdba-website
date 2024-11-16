import { useEffect, useRef, useState } from "react";
import { events } from "../const";
import EventsCards from "../components/eventCards";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Events() {
  const [visibleEvents, setVisibleEvents] = useState(events.slice(0, 3));
  const carouselRef = useRef<HTMLDivElement>(null);

  const shiftLeft = () => {
    setVisibleEvents((prev) => {
      const newEvents = [...prev];
      const firstEvent =
        events[
          (events.findIndex((e) => e.id === newEvents[0].id) -
            1 +
            events.length) %
            events.length
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
        events[
          (events.findIndex((e) => e.id === newEvents[2].id) + 1) %
            events.length
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
    p-4
  "
    >
      <div
        ref={carouselRef}
        className="flex justify-center items-center space-x-10"
      >
        {visibleEvents.map((event, index) => (
          <EventsCards key={event.id} index={index} event={event} />
        ))}
      </div>
      <button
        onClick={shiftRight}
        className="absolute right-10 top-1/2 -translate-y-1/2 translate-x-1/2 bg-gray-800 text-cyan-500 border-cyan-500 hover:bg-gray-700"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
      <button
        onClick={shiftLeft}
        className="absolute left-10 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-gray-800 text-cyan-500 border-cyan-500 hover:bg-gray-700"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
    </div>
  );
}

export default Events;
