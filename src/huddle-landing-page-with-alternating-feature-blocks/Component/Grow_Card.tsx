import { cn } from "../../utils";

interface GrowCardProps {
  imgsrc: string;
  Heading: string;
  description: string;
  reverse?: boolean;
}

function Grow_Card({
  imgsrc,
  Heading,
  description,
  reverse = false,
}: GrowCardProps): JSX.Element {
  return (
    <section className="flex justify-center">
      <div
        className={cn(
          "h-[500px] w-[340px] md:w-full rounded-xl shadow-xl p-5 m-5 flex flex-col items-center",
          reverse ? "md:flex-row" : "md:flex-row-reverse"
        )}
      >
        <img
          className="object-contain h-[60%] w-full md:w-[50%] md:h-full"
          src={imgsrc}
          alt="Grow card image"
        />
        <div className="text-content w-fit ymg text-center md:text-left md:w-[40%] md:mr-16 flex flex-col justify-around">
          <div className="Heading text-xl md:text-[28px] md:font-bold font-extrabold">
            {Heading}
          </div>

          <div className="text-slate-500 font-normal text-sm md:text-base">
            {description}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Grow_Card;
