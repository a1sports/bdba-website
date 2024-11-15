import HomeCorousel from "../components/homeCorousel";
import Shettle from "../assets/images/shettle.png";

function Home() {
  return (
    <div
      className="
  w-screen flex flex-col h-auto md:h-screen bg-black justify-center items-center
   bg-[rgba(0,0,0,0.5)]
    bg-[url(./assets/images/bg-image.jpg)] 
  bg-cover bg-no-repeat bg-center p-4
  md:bg-cover sm:bg-top sm:h-auto relative overflow-hidden"
    >
      <HomeCorousel />
      <img
        src={Shettle}
        className="h-56 w-56 rotate-[135deg] mt-4 absolute -right-28 bottom-12"
      />
    </div>
  );
}

export default Home;
