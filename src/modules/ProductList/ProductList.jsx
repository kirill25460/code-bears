import MainProductList from "shared/components/ProductList/MainProductList/MainProductList";
import { ProductListConteiner } from "./ProductList.styled";
import ListItem from "shared/components/ProductList/ListItem/ListItem";

const ProductList = () => {
  return (
    <>
        <ProductListConteiner>
            <MainProductList />
            <ListItem />
        </ProductListConteiner>
    </>
  );
};

export default ProductList;
