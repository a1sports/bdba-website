import { EventProps } from "../const";

function EventsCards({ index, event }: { index: number; event: EventProps }) {
  return (
    <div
      className={`flex-col w-80 h-[300px] p-4 flex space-y-4 items-center justify-center bg-[#87edeb] mt-20 rounded-3xl ${
        index === 1
          ? "scale-110 shadow-lg shadow-cyan-500/50 z-10"
          : "scale-90 opacity-50"
      }`}
    >
      <p className="text-black text-3xl font-bold text-center">{event.title}</p>
      <p className="text-black font-semibold text-base">{event.month}</p>
      <p className="text-black font-semibold text-base">{event.year}</p>
    </div>
  );
}

export default EventsCards;
