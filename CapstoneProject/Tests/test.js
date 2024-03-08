import CreateProductForm from "../src/Components/CreateProductForm";
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";

describe("CreateProductForm", () => {
  it("renders the form and allows input", async () => {
    const mockOnAdd = jest.fn(); // Create a mock function for onAdd
    render(<CreateProductForm onAdd={mockOnAdd} />);

    // Check if the input fields are rendered
    const nameInput = await screen.findByLabelText(/Name/i);
    // const descInput = await screen.findByLabelText(/Description/i);

    // Simulate user typing into the input fields
    userEvent.type(nameInput, "Test JEST Product");
    // userEvent.type(descInput, "Test DESCRIPTION");

    // Wait for the value to be updated
    await waitFor(() => {
      expect(nameInput).toHaveValue("Test JEST Product");
      // expect(descInput).toHaveValue("Test DESCRIPTION");
    });

    // Simulate submitting the form
    const submitButton = screen.getByRole("button", { name: /Add Product/i });
    userEvent.click(submitButton);

    // Check if the mockOnAdd function was called
    await waitFor(() => {
      expect(mockOnAdd).toHaveBeenCalled();
    });
  });
});

// import CreateProductForm from "../src/Components/CreateProductForm";
// import React from "react";
// import { render, screen, fireEvent, waitFor } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import axios from "axios";

// describe("CreateProductForm", () => {
//   it("renders the form and allows input", async () => {
//     const mockOnAdd = jest.fn(); // Create a mock function for onAdd
//     render(<CreateProductForm onAdd={mockOnAdd} />);

//     // Check if the input fields are rendered
//     const nameInput = await screen.findByLabelText(/Name/i);
//     const descInput = screen.getByLabelText(/Description/i);
//     const priceInput = screen.getByLabelText(/Price/i);
//     const stockInput = screen.getByLabelText(/Stock/i);

//     // Simulate user typing into the input fields
//     userEvent.type(nameInput, "Test JEST Product");

//     // Simulate submitting the form
//     const submitButton = screen.getByRole("button", { name: /Add Product/i });
//     userEvent.click(submitButton);

//     console.log(`nameInput value: ${nameInput.value}`);
//     // Check if the input values are updated
//     // await waitFor(() => {
//     //   console.log(`nameInput value after typing: ${nameInput.value}`);
//     //   expect(nameInput).toHaveValue("Test JEST Product");
//     // });
//     // // Check if the mockOnAdd function was called
//     // expect(mockOnAdd).toHaveBeenCalled();
//   });
// });

// jest.mock("axios");

// const mockResponse = {
//   data: {
//     name: "Test Product",
//     desc: "Test Description",
//     price: 100,
//     stock: 50,
//   },
// };

// describe("CreateProductForm", () => {
//   it("renders the form and allows input", async () => {
//     axios.post.mockResolvedValue(mockResponse);
//     render(<CreateProductForm onAdd={() => {}} />);

//     // Simulate user typing into the input fields
//     userEvent.type(screen.getByLabelText(/Name/i), "Test Product");
//     userEvent.type(screen.getByLabelText(/Description/i), "Test Description");
//     userEvent.type(screen.getByLabelText(/Price/i), "100");
//     userEvent.type(screen.getByLabelText(/Stock/i), "50");

//     // Simulate form submission
//     await fireEvent.submit(
//       screen.getByRole("button", { name: /Add Product/i })
//     );

//     // Wait for the mock to be called
//     await waitFor(() => expect(axios.post).toHaveBeenCalled());

//     // Check if axios.post was called with the correct arguments
//     expect(axios.post).toHaveBeenCalledWith(
//       "http://localhost:8081/api/products",
//       expect.any(FormData),
//       { headers: { "Content-Type": "multipart/form-data" } }
//     );
//   });
// });

// describe("CreateProductForm", () => {
//   it("renders the form and allows input", async () => {
//     render(<CreateProductForm onAdd={() => {}} />);

//     const nameInput = screen.getByLabelText(/Name/i);
//     const descInput = screen.getByLabelText(/Description/i);
//     const priceInput = screen.getByLabelText(/Price/i);
//     const stockInput = screen.getByLabelText(/Stock/i);

//     // userEvent.type(nameInput, "Test JEST Product");
//     fireEvent.change(nameInput, { target: { value: "Test JEST Product" } });
//     userEvent.type(descInput, "Test Description");
//     userEvent.type(priceInput, "100");
//     userEvent.type(stockInput, "50");

//     await waitFor(
//       () => {
//         console.log(`nameInput value after typing: ${nameInput.value}`);
//         expect(nameInput).toHaveValue("Test JEST Product");
//       },
//       { timeout: 5000 }
//     ); // Increase the timeout to 5000ms

//     await waitFor(
//       () => {
//         expect(descInput).toHaveValue("Test Description");
//         expect(priceInput).toHaveValue(100);
//         expect(stockInput).toHaveValue(50);
//       },
//       { timeout: 5000 }
//     ); // Increase the timeout to 5000ms
//   });
// });
