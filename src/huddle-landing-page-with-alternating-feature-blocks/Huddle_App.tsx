import Footer from "./Component/Footer";
import Grow_Card from "./Component/Grow_Card";
import Hero from "./Component/Hero";

interface GrowContentType {
  img: string;
  heading: string;
  description: string;
  reverse: boolean;
}

function Huddle_App(): JSX.Element {
  const GrowContent: GrowContentType[] = [
    {
      img: "./huddle-landing-page-with-alternating-feature-blocks-Assets/1.svg",
      heading: "Grow Together",
      description:
        "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.",
      reverse: false,
    },
    {
      img: "./huddle-landing-page-with-alternating-feature-blocks-Assets/2.svg",
      heading: "Flowing Conversations",
      description:
        "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
      reverse: true,
    },
    {
      img: "./huddle-landing-page-with-alternating-feature-blocks-Assets/3.svg",
      heading: "Your Users",
      description:
        "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
      reverse: false,
    },
  ];

  return (
    <>
      <Hero />
      {GrowContent.map((data, index) => (
        <Grow_Card
          key={index}
          imgsrc={data.img}
          Heading={data.heading}
          description={data.description}
          reverse={data.reverse}
        />
      ))}
      <Footer />
    </>
  );
}

export default Huddle_App;
