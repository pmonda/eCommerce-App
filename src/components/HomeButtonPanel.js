import { useNavigate } from "react-router-dom";

export default function HomeButtonPanel() {
  const navigate = useNavigate();
  let normalButton =
    "rounded-full shadow-xl text-white font-bold rounded bg-red-500 hover:bg-red-600 px-2 py-4";
  let signup =
    "rounded-full shadow-xl text-white font-bold rounded bg-green-500 hover:bg-green-600 px-2 py-4";
  return (
    <div className="grid px-40 py-10">
      <div className="">
        <div className="mb-4 bg-white shadow-lg   grid-cols-4 rounded-full w-[6px] h-[6px]"></div>

        <div className="mb-4 bg-white shadow-lg   grid-cols-4 rounded-full w-[12px] h-[12px]"></div>
        <div className="mb-4 bg-white shadow-lg px-2  grid-cols-4 rounded-full w-[25px] h-[25px]"></div>
        <div className="bg-white shadow-lg px-2 py-4 grid-cols-4 rounded-full w-[50px] h-[50px]"></div>
      </div>

      <div className="bg-white rounded-full shadow-xl grid grid-cols-2 grid-rows-1  gap-20 bg-white h-[150px] w-[500px] px-10 py-10">
        <button onClick={() => navigate("/shop")} className={normalButton}>
          Shop
        </button>
        <button className={signup}>Sign Up</button>
      </div>
    </div>
  );
}
