/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import EditProductForm from "../components/EditProductForm";
import userEvent from "@testing-library/user-event";

const product = {
  _id: "63dab3fe8bb1d472a17574e8",
  title: "Amazon Kindle E-reader",
  quantity: 5,
  price: 79.99
}

test("Form contains appropriate heading", () => {
  render(<EditProductForm product={product} />);
  const heading = screen.getByRole("heading");
  expect(heading).toHaveTextContent("Edit Product");
});

test("Title initial value is the product title", () => {
  render(<EditProductForm product={product} />);
  const inputTitle = screen.getByRole("textbox", { name: "Product Name" });
  expect(inputTitle).toHaveValue(product.title);
});

test("Title state changes on input", async () => {
  render(<EditProductForm product={product} />);
  const inputTitle = screen.getByRole("textbox", { name: "Product Name" });
  const user = userEvent.setup();
  await user.type(inputTitle, " V2");
  expect(inputTitle).toHaveValue(`${product.title} V2`);
});


// test("author state changes on input", async () => {
//   render(<AddCommentForm />);
//   const user = userEvent.setup();
//   const inputAuthor = screen.getByRole("textbox", { name: "Your Name" });
//   await user.type(inputAuthor, "Srdjan");
//   expect(inputAuthor).toHaveValue("Srdjan");
// });

test("onEditProduct called with the newProduct", async () => {
  const func = jest.fn();
  render(<EditProductForm product={product} onEditProduct={func} />);
  const user = userEvent.setup();

  const inputTitle = screen.getByRole("textbox", { name: "Product Name" });
  await user.type(inputTitle, " V2");

  const newProduct = {
    price: String(product.price),
    quantity: String(product.quantity),
    title: `${product.title} V2`
  }

  const link = screen.getByTestId("submit");
  await user.click(link)
  expect(func).toHaveBeenCalledTimes(1);
  expect(func.mock.calls[0][1]).toEqual(newProduct)
});