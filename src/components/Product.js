import { useNavigate } from "react-router-dom";
import Cart from "../pages/Cart";

export default function Product(props) {
  const navigate = useNavigate();

  function add() {
    let arr = [props.name, props.price, props.img];
    let count = 0;
    var button = document.getElementById("add");
    button.addEventListener("click", () => {
      count++;
    });
    return count;
  }
  return (
    <div className="inline-table">
      <div className="rounded-xl grid h-3 place-items-center shadow-xl w-[300px] h-[400px] bg-slate-300 bg-opacity-60 mt-10 ml-10">
        <div className="px-10 py-10 rounded-xl text-3xl font-bold">
          {props.name}
        </div>
        <div className=" text-red-400 text-3xl font-light">${props.price}</div>
        <img className="shadow-xl rounded-full h-32 w-32" src={props.img}></img>
        <button
          id="add"
          onClick={() => {
            navigate("/cart");
            return (
              <Cart
                name={props.name}
                price={props.price}
                img={props.img}
              ></Cart>
            );
          }}
          className="shadow-lg text-xl px-20 py-2 bg-purple-600 text-white font-bold rounded-full"
        >
          Add to Cart
        </button>
      </div>
    </div>

    /* <thead className="shadow-xl bg-slate-300 bg-opacity-60 px-20 py-20 rounded-xl text-black text-3xl font-bold">
        {props.name}
        <div className="text-red-400 text-4xl font-light">
          ${props.price}
          <img
            className="shadow-xl rounded-full px-2 py-4 h-32 w-32"
            src={props.img}
          ></img>
          <button
            onClick={() => navigate("/cart")}
            className="mt-3 text-3xl px-20 py-3 bg-purple-600 text-white font-bold rounded-full"
          >
            Add to Cart
          </button>
        </div>
      </thead> */
  );
}
