import HomeCorousel from "../components/homeCorousel";

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
    </div>
  );
}

export default Home;
