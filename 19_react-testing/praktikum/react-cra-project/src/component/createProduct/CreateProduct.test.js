import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Form from "./Form";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import store from "../../store/store";

test("Form input Product Name dapat menerima input teks dan menampilkannya di halaman", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Form />
      </MemoryRouter>
    </Provider>
  );
  const productNameInput = screen.getByLabelText("Product Name");

  fireEvent.change(productNameInput, { target: { value: "Sample Product Name" } });

  expect(productNameInput.value).toBe("Sample Product Name");
});

test("Pilihan setiap form yang dipilih dapat disimpan dan ditampilkan dengan benar", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Form />
        </MemoryRouter>
      </Provider>
    );
    const productCategorySelect = screen.getByLabelText("Product Category");
  
    fireEvent.change(productCategorySelect, { target: { value: "shirt" } });
  
    expect(productCategorySelect.value).toBe("shirt");
});

test("Product Name tidak boleh kosong dan tidak mengandung karakter simbol tertentu", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Form />
        </MemoryRouter>
      </Provider>
    );
    const productNameInput = screen.getByLabelText("Product Name");
  
    fireEvent.change(productNameInput, { target: { value: "~!@#$%^&*(){}|:;" } });
  
    expect(screen.getByTestId("error-produtName")).toBeInTheDocument();
});

test("Product Name tidak boleh melebihi 25 karakter", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Form />
        </MemoryRouter>
      </Provider>
    );
  
    const productNameInput = screen.getByLabelText("Product Name");
  
    fireEvent.change(productNameInput, {
      target: { value: "Produk dengan lebih dari 25 karakter" },
    });
    expect(
      screen.getByText("Product name must not exceed 25 characters")
    ).toBeInTheDocument();
});

test("Semua form field tidak boleh kosong", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Form />
        </MemoryRouter>
      </Provider>
    );
    
    const productNameInput = screen.getByLabelText("Product Name");
    const productCategorySelect = screen.getByLabelText("Product Category");
    const productDescriptionInput = screen.getByLabelText("Additional Description");
    const productPriceInput = screen.getByLabelText("Product Price");
    
    
    fireEvent.change(productNameInput, { target: { value: "Sample Product Name" } });
    fireEvent.change(productCategorySelect, { target: { value: "shirt" } });
    fireEvent.change(productDescriptionInput, { target: { value: "Description Product" } });
    fireEvent.change(productPriceInput, { target: { value: 10 } });
    
    expect(screen.queryByText("Product Name is required")).not.toBeInTheDocument();
    expect(screen.queryByText("Product Category is required")).not.toBeInTheDocument();
    expect(screen.queryByText("Product Description is required")).not.toBeInTheDocument();
    expect(screen.queryByText("Product Price is required")).not.toBeInTheDocument();
});