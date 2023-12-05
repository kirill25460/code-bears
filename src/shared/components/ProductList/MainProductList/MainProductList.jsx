const {
  MainProdectListConteiner,
  ProductListHeader,
  ProductListText,
} = require('./MainProductList.styled');

const MainProductList = () => {
  return (
    <MainProdectListConteiner>
      <ProductListHeader>Products List</ProductListHeader>
      <ProductListText>
        We successfully compete in every type of development, design, marketing
        and etc. But here it is, but a bit more detailed. :)
      </ProductListText>
    </MainProdectListConteiner>
  );
};

export default MainProductList;
