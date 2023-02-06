/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Product from "../components/Product";
import userEvent from "@testing-library/user-event";

const product = {
  _id: "63dab3fe8bb1d472a17574e8",
  title: "Amazon Kindle E-reader",
  quantity: 5,
  price: 79.99
}

test("Contains h3 heading with proper title", () => {
  render(<Product product={product} />);
  const title = screen.getByRole("heading");
  expect(title).toBeInTheDocument();
  expect(title).toHaveTextContent(product.title);
});

test("Contains p element with proper price", () => {
  render(<Product product={product} />);
  const price = screen.getByTestId("price");
  expect(price).toBeInTheDocument();
  expect(price).toHaveTextContent(`$${product.price}`);
});

test("Contains p element with proper quantity", () => {
  render(<Product product={product} />);
  const quantity = screen.getByTestId("quantity");
  expect(quantity).toBeInTheDocument();
  expect(quantity).toHaveTextContent(`${product.quantity} left in stock`);
});

test("onDelete is called when delete link is clicked", async () => {
  const func = jest.fn();
  render(<Product product={product} onDeleteProduct={func} />);
  const user = userEvent.setup();
  const link = screen.getByTestId("delete");
  await user.click(link);
  expect(func).toHaveBeenCalledTimes(1)
});

test("onDelete is called with the product id", async () => {
  const func = jest.fn();
  render(<Product product={product} onDeleteProduct={func} />);
  const user = userEvent.setup();
  const link = screen.getByTestId("delete");
  await user.click(link);
  expect(func.mock.calls[0][0]).toEqual(product._id);
});

test("On initial render, edit product form is not shown", () => {
  render(<Product product={product} />);

  const editForm = screen.queryByTestId("edit-form");
  expect(editForm).not.toBeInTheDocument();
})

test("Clicking edit product shows edit product form", async () => {
  render(<Product product={product} />);
  const link = screen.getByTestId("edit");
  const user = userEvent.setup();
  await user.click(link);

  const editForm = screen.getByTestId("edit-form");
  expect(editForm).toBeInTheDocument();
});

afterEach(() => {
  jest.clearAllMocks();
});