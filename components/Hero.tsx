import Image from "next/image";
import HeroSplash from "~/images/backlog-splash.webp";

const Hero = () => {
  return (
    <section className="hero min-h-screen">
      <Image
        alt="gaming keyboard on fire"
        src={HeroSplash}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold">A Better Backlog</h1>
          <p className="mb-5">
            Keeping track of the games you want to play and saving you money
          </p>
          <button className="btn glass">Get Tracking</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
