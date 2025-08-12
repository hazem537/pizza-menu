import react from "react";
import reactDom from "react-dom/client";
import "./index.css";
let pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
const Header = () => (
  <header className="header">
    <h1> Hazem pizaa store </h1>
  </header>
);
const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 20;
  const isOpen = hour >= openHour && hour <= closeHour;
  //   console.log(isOpen);
  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p> we still open for {closeHour}:00 </p>
          <button className="btn"> order now</button>
        </div>
      ) : (
        <p> We colse now </p>
      )}
    </footer>
  );
};

const Pizza = ({ pizzaObj }) => {
  // if (pizzaObj.soldOut) return null
  return (
    <div className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name} </h3>
        <p> {pizzaObj.ingredients}</p>
        <span> {pizzaObj.soldOut ? "Sold Out" : pizzaObj.price} </span>
      </div>
    </div>
  );
};

const Menu = () => {
  // pizzaData =[]
  return (
    <div className="menu">
      <h2>Hello in our Menu </h2>
      {pizzaData.length > 0 ? (
        <div className="pizzas">
          {pizzaData.map((pizaa, index) => (
            <Pizza pizzaObj={pizaa} key={index} />
          ))}
        </div>
      ) : (
        <p> we working on the menu try again later </p>
      )}
    </div>
  );
};

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const root = reactDom.createRoot(document.getElementById("root"));
root.render(
  <react.StrictMode>
    <App />
  </react.StrictMode>
);
