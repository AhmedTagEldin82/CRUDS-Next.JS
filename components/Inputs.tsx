"use client";
import {
  addProduct,
  updateProduct,
} from "@/app/GlobaRedux/Features/Create/productSlice";
import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsTable from "./Table";

export interface Product {
  productId: number;
  title: string;
  price: number;
  taxes: number;
  ads: number;
  discount: number;
  count: number;
  total: number;
  category: string;
}

const Inputs = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [taxes, setTaxes] = useState(0);
  const [ads, setAds] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);
  const [category, setCategory] = useState("");
  const [isUpdated, setIsUpdated] = useState(false);

  // const handleSubmit = (
  //   event: React.MouseEvent<HTMLButtonElement>,
  //   productId: number
  // ) => {
  //   event.preventDefault();
  // };
  const products = {
    id,
    title,
    price,
    taxes,
    ads,
    discount,
    count,
    category,
    total,
  };

  const handleUpdateProduct = (product: any) => {
    setId(product.id);
    setTitle(product.title);
    setPrice(product.price);
    setTaxes(product.taxes);
    setAds(product.ads);
    setDiscount(product.discount);
    setCount(product.count);
    setCategory(product.category);
    setTotal(product.total);
    setIsUpdated(true);
  };

  const handleInputChange = (event: any, setterFunction: any) => {
    const inputValue = parseFloat(event.target.value);
    setterFunction(inputValue);
  };

  const calculateTotal = () => {
    if (price != 0) {
      const totalPrice = price + taxes + ads - discount;
      setTotal(totalPrice);
    }
  };

  return (
    <Box>
      <TextField
        id="title"
        value={title}
        label="Title"
        variant="outlined"
        fullWidth={true}
        margin="normal"
        onChange={(event) => setTitle(event.target.value)}
      />

      <Stack direction="row" spacing={2} sx={{ marginTop: "10px" }}>
        <TextField
          required
          id="price"
          value={price}
          label="Price"
          type="number"
          variant="outlined"
          onFocus={(event) => {
            event.target.select();
          }}
          onChange={(event) => handleInputChange(event, setPrice)}
          onKeyUp={calculateTotal}
        />
        <TextField
          required
          id="taxes"
          value={taxes}
          label="Taxes"
          type="number"
          variant="outlined"
          onFocus={(event) => {
            event.target.select();
          }}
          onChange={(event) => handleInputChange(event, setTaxes)}
          onKeyUp={calculateTotal}
        />
        <TextField
          required
          id="ads"
          value={ads}
          label="Ads"
          type="number"
          variant="outlined"
          onFocus={(event) => {
            event.target.select();
          }}
          onChange={(event) => handleInputChange(event, setAds)}
          onKeyUp={calculateTotal}
        />
        <TextField
          required
          id="discount"
          value={discount}
          label="Discount"
          type="number"
          variant="outlined"
          onFocus={(event) => {
            event.target.select();
          }}
          onChange={(event) => handleInputChange(event, setDiscount)}
          onKeyUp={calculateTotal}
        />

        <TextField
          id="total"
          label="Total"
          variant="filled"
          value={total}
          InputProps={{
            readOnly: true,
          }}
        />
      </Stack>

      <Stack>
        <TextField
          id="count"
          value={count}
          label="Count"
          type="number"
          variant="outlined"
          margin="normal"
          onFocus={(event) => {
            event.target.select();
          }}
          onChange={(event) => handleInputChange(event, setCount)}
        />
        <TextField
          id="category"
          value={category}
          label="Category"
          type="text"
          variant="outlined"
          margin="normal"
          onChange={(event) => setCategory(event.target.value)}
        />
      </Stack>

      <Stack direction="row" spacing={2} sx={{ marginTop: "10px" }}>
        <Button
          variant="outlined"
          size="large"
          fullWidth={true}
          disabled={!isUpdated} // Disable the button if inputs have not been updated
          onClick={() => {
            // Save the new values in the table
            dispatch(updateProduct(products));
            setIsUpdated(false);
            setTitle("");
            setCategory("");
            setPrice(0);
            setAds(0);
            setDiscount(0);
            setCount(0);
            setTaxes(0);
            setTotal(0);
            setId(id + 1);
          }}
        >
          Save
        </Button>
        <Button
          variant="outlined"
          size="large"
          disabled={isUpdated}
          fullWidth={true}
          onClick={() => {
            dispatch(addProduct(products));

            setTitle("");
            setCategory("");
            setPrice(0);
            setAds(0);
            setDiscount(0);
            setCount(0);
            setTaxes(0);
            setTotal(0);
            setId(id + 1);
          }}
        >
          Create
        </Button>
      </Stack>

      <Box>
        <ProductsTable
          products={products}
          updateProduct={handleUpdateProduct}
        />
      </Box>
    </Box>
  );
};

export default Inputs;
