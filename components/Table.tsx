"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Stack,
  TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAll,
  deleteProduct,
  updateProduct,
} from "@/app/GlobaRedux/Features/Create/productSlice";
import { useState } from "react";
interface Product {
  title: string;
  price: number;
  taxes: number;
  ads: number;
  discount: number;
  count: number;
  total: number;
  category: string;
}

export default function ProductsTable(props: any) {
  const products = useSelector((state: any) => state.products.products);
  const [searchValueTitle, setSearchValueTitle] = useState("");
  const [filteredProductsTitle, setFilteredProductsTitle] = useState([]);
  const [searchValueCategory, setSearchValueCategory] = useState("");
  const [filteredProductsCategory, setFilteredProductsCategory] = useState([]);
  const [count, setCount] = useState(1);
  const handleSearchByTitle = () => {
    const filtered = products.filter((product: any) =>
      product.title.toLowerCase().includes(searchValueTitle.toLowerCase())
    );
    setFilteredProductsTitle(filtered);
  };
  const handleSearchByCategory = () => {
    const filtered = products.filter((product: any) =>
      product.category.toLowerCase().includes(searchValueCategory.toLowerCase())
    );
    setFilteredProductsCategory(filtered);
  };
  const handleDelete = (product: any) => {
    if (product.count <= 3) {
    }
    if (product.count > 1) {
      const updatedProduct = { ...product, count: product.count - 1 };
      dispatch(updateProduct(updatedProduct));
    } else {
      dispatch(deleteProduct(product));
    }
  };
  const dispatch = useDispatch();
  return (
    <>
      <Stack>
        <TextField
          id="searchByTitle"
          label="Search By Title"
          variant="outlined"
          fullWidth={true}
          margin="normal"
          value={searchValueTitle}
          onChange={(e) => setSearchValueTitle(e.target.value)}
        />
        <Button
          variant="outlined"
          size="large"
          fullWidth={true}
          id="searchTitle"
          onClick={handleSearchByTitle}
        >
          Search By Title
        </Button>
        <TextField
          id="searchByCategory"
          label="Search By Category"
          variant="outlined"
          fullWidth={true}
          margin="normal"
          value={searchValueCategory}
          onChange={(e) => setSearchValueCategory(e.target.value)}
        />
        <Button
          variant="outlined"
          size="large"
          fullWidth={true}
          id="searchTitle"
          onClick={handleSearchByCategory}
        >
          Search By Category
        </Button>
      </Stack>
      {products.length > 0 && (
        <Button
          variant="outlined"
          color="error"
          size="large"
          fullWidth={true}
          sx={{ marginTop: "20px" }}
          onClick={() => {
            dispatch(deleteAll(products));
            localStorage.clear();
          }}
        >
          Delete All
        </Button>
      )}
      <TableContainer component={Paper} sx={{ marginTop: 5 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          {products.length > 0 && (
            <TableHead>
              <TableRow>
                <TableCell sx={{ border: "solid 1px black" }}>Id</TableCell>
                <TableCell sx={{ border: "solid 1px black" }} align="center">
                  Title
                </TableCell>
                <TableCell sx={{ border: "solid 1px black" }} align="center">
                  Price
                </TableCell>
                <TableCell sx={{ border: "solid 1px black" }} align="center">
                  Taxes
                </TableCell>
                <TableCell sx={{ border: "solid 1px black" }} align="center">
                  Ads
                </TableCell>
                <TableCell sx={{ border: "solid 1px black" }} align="center">
                  Discount
                </TableCell>
                <TableCell sx={{ border: "solid 1px black" }} align="center">
                  Total
                </TableCell>
                <TableCell sx={{ border: "solid 1px black" }} align="center">
                  Category
                </TableCell>
                <TableCell sx={{ border: "solid 1px black" }} align="center">
                  Count
                </TableCell>
                <TableCell sx={{ border: "solid 1px black" }} align="center">
                  Update
                </TableCell>
                <TableCell sx={{ border: "solid 1px black" }} align="center">
                  Delete
                </TableCell>
              </TableRow>
            </TableHead>
          )}
          <TableBody>
            {filteredProductsTitle.length > 0
              ? filteredProductsTitle.map((product: any) => (
                  <TableRow key={product.id}>
                    <TableCell
                      sx={{ border: "solid 1px black" }}
                      align="center"
                    >
                      {product.id}
                    </TableCell>
                    <TableCell
                      sx={{ border: "solid 1px black" }}
                      align="center"
                    >
                      {product.title}
                    </TableCell>
                    <TableCell
                      sx={{ border: "solid 1px black" }}
                      align="center"
                    >
                      {product.price}
                    </TableCell>
                    <TableCell
                      sx={{ border: "solid 1px black" }}
                      align="center"
                    >
                      {product.taxes}
                    </TableCell>
                    <TableCell
                      sx={{ border: "solid 1px black" }}
                      align="center"
                    >
                      {product.ads}
                    </TableCell>
                    <TableCell
                      sx={{ border: "solid 1px black" }}
                      align="center"
                    >
                      {product.discount}
                    </TableCell>

                    <TableCell
                      sx={{ border: "solid 1px black" }}
                      align="center"
                    >
                      {product.total}
                    </TableCell>
                    <TableCell
                      sx={{ border: "solid 1px black" }}
                      align="center"
                    >
                      {product.category}
                    </TableCell>
                    <TableCell
                      sx={{ border: "solid 1px black", background: "error" }}
                      align="center"
                    >
                      {product.count}
                    </TableCell>
                  </TableRow>
                ))
              : filteredProductsCategory.length > 0
              ? filteredProductsCategory.map((product: any) => (
                  <TableRow key={product.id}>
                    <TableCell
                      sx={{ border: "solid 1px black" }}
                      align="center"
                    >
                      {product.id}
                    </TableCell>
                    <TableCell
                      sx={{ border: "solid 1px black" }}
                      align="center"
                    >
                      {product.title}
                    </TableCell>
                    <TableCell
                      sx={{ border: "solid 1px black" }}
                      align="center"
                    >
                      {product.price}
                    </TableCell>
                    <TableCell
                      sx={{ border: "solid 1px black" }}
                      align="center"
                    >
                      {product.taxes}
                    </TableCell>
                    <TableCell
                      sx={{ border: "solid 1px black" }}
                      align="center"
                    >
                      {product.ads}
                    </TableCell>
                    <TableCell
                      sx={{ border: "solid 1px black" }}
                      align="center"
                    >
                      {product.discount}
                    </TableCell>

                    <TableCell
                      sx={{ border: "solid 1px black" }}
                      align="center"
                    >
                      {product.total}
                    </TableCell>
                    <TableCell
                      sx={{ border: "solid 1px black" }}
                      align="center"
                    >
                      {product.category}
                    </TableCell>
                    <TableCell
                      sx={{ border: "solid 1px black" }}
                      align="center"
                    >
                      {product.count}
                    </TableCell>
                  </TableRow>
                ))
              : products.map((product: any) => (
                  <TableRow
                    key={product.id}
                    sx={{
                      "&:last-child td, &:last-child th": {
                        border: "solid 1px black",
                      },
                    }}
                  >
                    <TableCell
                      sx={{ border: "solid 1px black" }}
                      component="th"
                      scope="row"
                    >
                      {product.id}
                    </TableCell>
                    <TableCell
                      sx={{ border: "solid 1px black" }}
                      align="center"
                    >
                      {product.title}
                    </TableCell>
                    <TableCell
                      sx={{ border: "solid 1px black" }}
                      align="center"
                    >
                      {product.price}
                    </TableCell>
                    <TableCell
                      sx={{ border: "solid 1px black" }}
                      align="center"
                    >
                      {product.taxes}
                    </TableCell>
                    <TableCell
                      sx={{ border: "solid 1px black" }}
                      align="center"
                    >
                      {product.ads}
                    </TableCell>
                    <TableCell
                      sx={{ border: "solid 1px black" }}
                      align="center"
                    >
                      {product.discount}
                    </TableCell>
                    <TableCell
                      sx={{ border: "solid 1px black" }}
                      align="center"
                    >
                      {product.total}
                    </TableCell>
                    <TableCell
                      sx={{ border: "solid 1px black" }}
                      align="center"
                    >
                      {product.category}
                    </TableCell>
                    <TableCell
                      sx={{
                        border: "solid 1px black",
                        color: product.count <= 3 ? "red" : "inherit",
                      }}
                      align="center"
                    >
                      {product.count}
                    </TableCell>
                    <TableCell
                      sx={{
                        border: "solid 1px black",
                      }}
                      align="center"
                    >
                      <Button
                        onClick={() => {
                          const updatedProducts = [...products]; // Create a new array of products
                          const productIndex = updatedProducts.findIndex(
                            (p) => p.id === product.id
                          ); // Find the index of the product to be updated
                          updatedProducts[productIndex] = product; // Update the product in the new array
                          dispatch(updateProduct(updatedProducts));
                          props.updateProduct(product);
                        }}
                        variant="outlined"
                      >
                        Update
                      </Button>
                    </TableCell>
                    <TableCell
                      sx={{ border: "solid 1px black" }}
                      align="center"
                    >
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={() => handleDelete(product)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
