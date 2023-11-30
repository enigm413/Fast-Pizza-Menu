//Import React Module
import React from "react";

//Import React DOM Module
import ReactDOM from "react-dom/client";

//Import external CSS file for styling
import "./index.css";

//Defining List of Pizza available
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    imagePath: "Images/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    soldOut: false,
    imagePath: "Images/margherita.jpg",
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    soldOut: false,
    imagePath: "Images/spinaci.jpg",
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    imagePath: "Images/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    imagePath: "Images/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    imagePath: "Images/prosciutto.jpg",
    soldOut: false,
  },
];

//Defining Functional Component for entire app
function App() {
  return (
    <div className="container">
      {/*Rendering Header component */}
      <Header />

      {/*Rendering Menu component */}
      <Menu />

      {/*Rendering Footer component */}
      <Footer />
    </div>
  );
}

//Defining Header Component
function Header() {
  return (
    <header className="header">
      <h1>Fast Pizza Menu</h1>
    </header>
  );
}

//Defining Menu Component
function Menu() {
  const pizzaNum = pizzaData.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {/*Checking Number of Pizza*/}
      {pizzaNum > 0 ? (
        <>
          <p>
            Authentic Italian Cuisine. 6 creative dishes to choose from. All
            from our stone oven, organic and finger licking delicious
          </p>
          <ul className="pizza-container">
            {pizzaData.map((pizza) => (
              //Rendering Pizza List COmponent
              <PizzaList pizzaObj={pizza} name={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        //Returning Statement if number of pizza is 0
        <p>We are working on menu, Please come back later </p>
      )}
    </main>
  );
}

//Defining Individual Pizza Component
function PizzaList({ pizzaObj }) {
  return (
    <li
      //Adding sold-out css class if the a pizza is marked as soldout
      className={`pizza-content ${pizzaObj.soldOut === true ? "sold-out" : ""}`}
    >
      <img src={pizzaObj.imagePath} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients} </p>
        <span>{pizzaObj.price}</span>
      </div>
    </li>
  );
}

//Defining Footer Component

function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;

  //Checking the shop is open or not
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen === true ? (
        //Rendering Order Component
        <Order closingTime={closeHour} />
      ) : (
        <p>
          We are happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}

//Defining Order Component
function Order({ closingTime }) {
  return (
    <div className="order">
      <p>We're open until {closingTime}:00 . Come visit us or order online</p>
      <button className="btn">Order</button>
    </div>
  );
}

//Definingg the container that contains the root element of the app
const root = ReactDOM.createRoot(document.querySelector("#root"));

//Rendering the App component into the root element
root.render(<App />);
