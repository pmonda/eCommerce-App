export default function Cart(props) {
  return (
    <>
      {props.quantity}
      {props.name}
      {props.price}
      <img src={props.img}></img>
    </>
  );
}
