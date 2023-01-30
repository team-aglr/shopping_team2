import React from "react";
import ReactDOM from "react-dom/client";

const Product = ({ name, price, quantity, }) => {
  return React.createElement("div", { className: "product" },
    React.createElement("div", { className: "product-details" }, [
      React.createElement("h3", null, name),
      React.createElement("p", { className: "price" }, `$${price}`),
      React.createElement("p", { className: "quantity" }, `${quantity} left in stock`),
      React.createElement("div", { className: "actions product-actions" }, [
        React.createElement("a", { className: "button add-to-cart" }, "Add to Cart"),
        React.createElement("a", { className: "button edit" }, "Edit"),
      ]),
      React.createElement("a", { className: "delete-button" }, [
        React.createElement("span", null, "X"),
      ]),
    ]))
}

const App = () => {
  return React.createElement("main", null, [
    React.createElement("div", { className: "product-listing" }, [
      React.createElement("h2", null, "Products"),
      React.createElement(Product, {
        name: "Amazon Kindle E-reader",
        price: 79.99,
        quantity: 5
      }),
      React.createElement(Product, {
        name: "Apple 10.5-Inch iPad Pro",
        price: 649.99,
        quantity: 2
      }),
      React.createElement(Product, {
        name: "Yamaha Portable Keyboard",
        price: 155.99,
        quantity: 0
      }),
    ])
  ])
}

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(App());