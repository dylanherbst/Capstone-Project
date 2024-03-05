import CreateProductForm from "../src/Components/CreateProductForm";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("simple test", () => {
  render(<div>Test</div>);
  expect(screen.getByText("Test")).toBeInTheDocument();
});

describe("CreateProductForm", () => {
  it("renders the form and allows input", () => {
    render(<CreateProductForm onAdd={() => {}} />);

    // Check if the input fields are rendered
    const nameInput = screen.getByLabelText(/Name/i);
    const descInput = screen.getByLabelText(/Description/i);
    const priceInput = screen.getByLabelText(/Price/i);
    const stockInput = screen.getByLabelText(/Stock/i);

    expect(nameInput).toBeInTheDocument();
    expect(descInput).toBeInTheDocument();
    expect(priceInput).toBeInTheDocument();
    expect(stockInput).toBeInTheDocument();

    // Simulate user typing into the input fields
    userEvent.type(nameInput, "Test Product");
    userEvent.type(descInput, "Test Description");
    userEvent.type(priceInput, "100");
    userEvent.type(stockInput, "50");

    // Check if the input values are updated
    expect(nameInput).toHaveValue("Test Product");
    expect(descInput).toHaveValue("Test Description");
    expect(priceInput).toHaveValue(100);
    expect(stockInput).toHaveValue(50);
  });
});
