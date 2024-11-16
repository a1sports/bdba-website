import HomeCorousel from "../components/homeCorousel";
import Shettle from "../assets/images/shettle.png";

function Home() {
  return (
    <div
    className="
      w-screen h-screen flex flex-col bg-black justify-center items-center
      bg-[rgba(0,0,0,0.5)] bg-[url(./assets/images/bg-image.jpg)]
      bg-cover bg-no-repeat bg-center relative overflow-hidden
      p-4
    "
    >
      <HomeCorousel />
      {/* <img
        src={Shettle}
        className="
          h-24 w-24 rotate-[135deg] mt-4 absolute -right-12 bottom-8
          sm:h-20 sm:w-20 md:h-56 md:w-56
        "
      /> */}
    </div>
  );
}

export default Home;
