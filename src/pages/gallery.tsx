function Gallery() {
  return (
    <div
    className="
    w-screen h-screen flex flex-col bg-black justify-center items-center
    bg-[rgba(0,0,0,0.5)] bg-[url(./assets/images/bg-image.jpg)]
    bg-cover bg-no-repeat bg-center relative overflow-hidden
    p-4
  "
    >
     <p className="text-[#cb6ce6] font-bold text-5xl sm:text-4xl md:text-7xl italic text-center">
        COMING SOON
      </p>
    </div>
  );
}

export default Gallery;
