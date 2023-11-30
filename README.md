# Fast Pizza

## Project Description

A single-page static webpage that contains a menu of different types of pizza.
We can view project in given link

## React Concept Covered In Projects

The goal of the project is used to teaches the following topic

- Importing Modules
- Defining Components
- Define the nested components
- Passing props to components
- Recieving props that are passed

## JavaScript Concept Covered In Projects

- Map Function
- Destructuring Arrays
- Ternery Oparator

## Project Explanation

### **Dependencies and Styling**

- It imports React and ReactDOM modules from React libraries.
- It imports an external CSS file (**`index.css`**) for styling.
- It defines an array **`pizzaData`** containing information about different pizzas available, such as their name, ingredients, price, image path, and availability.

### **Components**

- **App:** The main component of the application that renders the Header, Menu, and Footer components within a container div.
- **Header:** Renders a simple header with the text "Fast Pizza".
- **Menu:** Renders the list of pizzas (**`PizzaList`**) using the data from **`pizzaData`**. It also handles the condition where if there are no pizzas available, it displays a message.
- **PizzaList:** Renders individual pizza items as list elements (**`li`**). It displays the pizza's image, name, ingredients, and price. It applies a "sold-out" class if a pizza is marked as sold out.
- **Footer:** Displays a footer with information about the shop's open hours and whether it's currently open. If open, it renders the **`Order`** component, otherwise, it displays a message about the opening hours.
- **Order:** Renders a message about the closing time and provides a button to place an order.

### **Rendering**

- It creates a root container element using **`ReactDOM.createRoot`**.
- It renders the **`App`** component into the root container element using **`root.render(<App />)`**.
