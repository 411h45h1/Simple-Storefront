import Item1 from "../../images/Item1.png";
import Item2 from "../../images/Item2.png";
import Item3 from "../../images/Item3.png";

const initState = {
  items: [
    {
      id: 1,
      title: "Winter body",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 110,
      img: Item1
    },
    {
      id: 2,
      title: "Adidas",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 80,
      img: Item2
    },
    {
      id: 3,
      title: "Vans",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 120,
      img: Item3
    }
  ],
  addedItems: [],
  total: 0
};
const cartReducer = (state = initState, action) => {};

export default cartReducer;
