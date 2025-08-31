import building1 from "../images/building1.jpg";
import building2 from "../images/building2.jpg";
import building3 from "../images/building3.jpg";
import building4 from "../images/building4.jpg";

const { v4: uuidv4 } = require("uuid");

const properties = [
  {
    id: uuidv4(),
    images: [building1, building3, building4, building2],
    name: "Building",
    price: "300",
    profit: 15.6,
    returns: 10.21,
    investors: 534,
  },
  {
    id: 2,
    images: [
      "https://plus.unsplash.com/premium_photo-1661963657305-f52dcaeef418?q=80&w=1212&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://st.hzcdn.com/simgs/pictures/exteriors/best-architectural-design-modern-1-5-million-2-million-dallas-builders-association-img~b751d98d0b882fe1_14-5628-1-0004054.jpg",
      "https://i.pinimg.com/736x/68/ff/b2/68ffb2fb3a419d8db1309d3f21a2a6a6.jpg",
      "https://carbineandassociates.com/wp-content/uploads/2018/11/porch-black-farmhouse-Carbine-Associates.jpg",
    ],
    name: "Home Desginer",
    price: "600",
    profit: 9.6,
    returns: 12.34,
    investors: 534,
  },
  {
    id: 3,
    images: [
      "https://images.unsplash.com/photo-1721815693498-cc28507c0ba2?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.squarespace-cdn.com/content/v1/63dde481bbabc6724d988548/d123ee8c-0406-4af2-b2ae-011a4f9ff917/0.jfif.jpg",
      "https://designnewjersey.com/wp-content/uploads/MG_1.jpg",
      "https://cdn.trendir.com/wp-content/uploads/old/house-design/italian-maze-house-with-geometric-exterior-sliding-interior-walls-1.jpg",
    ],
    name: "Contemporary",
    price: "900",
    profit: 3.6,
    returns: 5.37,
    investors: 534,
  },
];

export default properties;
