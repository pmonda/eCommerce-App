import Product from "../components/Product";
import Products from "../products.json";
export default function Shop() {
  //   let products = [
  //     {
  //       name: "Sneakers",
  //       price: 80.99,
  //       img: "https://cdn.thewirecutter.com/wp-content/media/2021/02/whitesneakers-2048px-4197.jpg?auto=webp&quality=75&width=1024",
  //     },

  //     {
  //       name: "Socks",
  //       price: 6.75,
  //       img: "https://dks.scene7.com/is/image/GolfGalaxy/20OBXMMVNTGSTRPCLSOX_Soft_White?qlt=70&wid=1100&fmt=webp",
  //     },
  //     {
  //       name: "T-Shirt",
  //       price: 6.99,
  //       img: "https://imgs.michaels.com/MAM/assets/1/5E3C12034D34434F8A9BAAFDDF0F8E1B/img/76DF564ED18A4D8D9F2D601019D7BB6C/MP532689_11.jpg",
  //     },

  //     {
  //       name: "Amazon Fire TV Stick",
  //       price: "26.99",
  //       img: "https://media.kohlsimg.com/is/image/kohls/5477063?wid=240&hei=240&op_sharpen=1",
  //       "": "",
  //     },
  //     {
  //       name: "Red IZOD Polo",
  //       price: "8.49",
  //       img: "https://media.kohlsimg.com/is/image/kohls/5516445_Red?wid=240&hei=240&op_sharpen=1",
  //       "": "",
  //     },
  //     {
  //       name: "Snoopy T Shirt",
  //       price: "8.49",
  //       img: "https://media.kohlsimg.com/is/image/kohls/2217791?wid=240&hei=240&op_sharpen=1",
  //       "": "",
  //     },
  //     {
  //       name: "Under Armor Backpack",
  //       price: "41.25",
  //       img: "https://media.kohlsimg.com/is/image/kohls/4154790_White?wid=240&hei=240&op_sharpen=1",
  //       "": "",
  //     },
  //   ];

  return Products.map((e) => {
    return <Product name={e.name} price={e.price} img={e.img} />;
  });
}
