import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { fetchProductsStart } from "../../redux/Product/products.action";
import FormSelect from "../forms/FormSelect";
import LoadMore from "../LoadMore";
import Product from "./Product";
import "./styles.scss";

const ProductsResults = ({}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { filterType } = useParams();
  const products = useSelector((state) => state.productsData.products);
  const { data, queryDoc, isLastPage } = products;

  useEffect(() => {
    dispatch(fetchProductsStart({ filterType }));
  }, [filterType]);

  const handleFilters = (e) => {
    const pickedFilter = e.target.value;
    history.push(`/search/${pickedFilter}`);
  };

  if (!Array.isArray(data)) return null;

  if (data.length < 1) {
    return (
      <div className="products">
        <p>No search results.</p>
      </div>
    );
  }
  const configFilters = {
    defaultValue: filterType,
    options: [
      {
        name: "Show all",
        value: "",
      },
      {
        name: "Mens",
        value: "mens",
      },
      {
        name: "Womens",
        value: "womens",
      },
    ],
    handleChange: handleFilters,
  };
  const handleLoadMore = () => {
    dispatch(
      fetchProductsStart({
        filterType,
        startAfterDoc: queryDoc,
        persistProducts: data,
      })
    );
  };
  const configLoadMore = {
    onLoadMoreEvt: handleLoadMore,
  };
  return (
    <div className="products">
      <h1>Browse Products</h1>
      <FormSelect {...configFilters} />
      <div className="productResults">
        {data.map((product, index) => {
          const { productThumbnail, productName, productPrice } = product;
          if (
            !productThumbnail ||
            !productName ||
            typeof productPrice === "undefined"
          )
            return null;
          const configProduct = { ...product };
          return <Product key={index} {...configProduct} />;
        })}
      </div>
      {!isLastPage && <LoadMore {...configLoadMore} />}
    </div>
  );
};

export default ProductsResults;
