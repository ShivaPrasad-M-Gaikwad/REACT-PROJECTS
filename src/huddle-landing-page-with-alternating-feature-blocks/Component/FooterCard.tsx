import Free_Button from "./Free_Button";

function FooterCard():JSX.Element {
  return (
    <div className="h-48 w-[80%] p-5 border mx-auto relative top-20 flex flex-col ymg justify-center items-center bg-white rounded-xl">
      <p className="text-xl font-semibold">Ready To Build Your Community?</p>
      <Free_Button />
    </div>
  );
}

export default FooterCard;
