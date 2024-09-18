import Free_Button from "./Free_Button";

function Hero(): JSX.Element {
  return (
    <section className="min-h-screen w-full bg-bgim p-5 flex flex-col items-center text-center lg:text-left justify-around">
      <div className="Header w-full flex items-center justify-around">
        <img
          src="./huddle-landing-page-with-alternating-feature-blocks-Assets/Logo.svg"
          alt="Huddle Logo"
        />
        <button className="drop-shadow-lg rounded-full bg-white px-10 py-2">
          Try it Free
        </button>
      </div>
      <div className="master-content w-[80%] flex flex-col md:flex-row justify-around">
        <div className="Text-Content flex flex-col my-5 ymg">
          <div className="bigheading font-bold text-2xl lg:text-6xl leading-relaxed">
            Build The Community Your Fans Will Love
          </div>
          <div className="discription font-medium lg:text-lg">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </div>
          <Free_Button />
        </div>
        <img
          className="w-full"
          src="./huddle-landing-page-with-alternating-feature-blocks-Assets/Hero_diag.svg"
          alt="Hero Diagram"
        />
      </div>
    </section>
  );
}

export default Hero;
