
const Hero = () => {
  return (
    <div className="bg-hero-bg h-[600px] bg-cover bg-top bg-no-repeat">
      <div className="w-8/12 mx-auto md:grid grid-cols-12 text-white items-center justify-center h-full">
        <div className="col-span-5"></div>
        <div className="col-span-7 ">
          <div >
            <h1 className="font-rancho text-5xl">Would you like a Cup of Delicious Coffee?</h1>
            <p className="my-3">
              It&apos;s coffee time - Sip & Savor - Relaxation in every sip! Get
              the nostalgia back!! Your companion of every moment!!! Enjoy the
              beautiful moments and make them memorable.
            </p>
            <button className="hero_btn"> Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
