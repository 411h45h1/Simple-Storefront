import Item1 from "../../images/shoe.jpg";
import Item2 from "../../images/shoe.jpg";
import Item3 from "../../images/shoe.jpg";
import Item4 from "../../images/shoe.jpg";
import Item5 from "../../images/shoe.jpg";
import Item6 from "../../images/shoe.jpg";

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
    },
    {
      id: 4,
      title: "Winter body",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 110,
      img: Item4
    },
    {
      id: 5,
      title: "Adidas",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 80,
      img: Item5
    },
    {
      id: 6,
      title: "Vans",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 120,
      img: Item6
    }
  ],
  addedItems: [],
  total: 0
};

export default cartReducer;
