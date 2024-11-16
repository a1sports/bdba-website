import { GalleryProps } from "../const";

function GalleryCard({ index, gallery }: { index: number; gallery: GalleryProps }) {
  return (
    <div
      className={`flex-col w-72 sm:w-80 md:w-[350px] h-[250px] sm:h-[300px] p-4 flex space-y-4 items-center justify-center bg-[#87edeb] mt-8 sm:mt-20 rounded-3xl ${
        index === 1
          ? "scale-110 shadow-lg shadow-cyan-500/50 z-10"
          : "scale-90 opacity-50"
      }`}
    >
      <img
        src={gallery.imagePath}
        alt={gallery.description}
        className="object-cover w-full h-full rounded-lg" // Ensures image covers the entire container
      />
    </div>
  );
}

export default GalleryCard;
