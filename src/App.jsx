import Header from "modules/Header/Header";
import Hero from "modules/Hero/Hero";
// import ImageBlock from "modules/ImageBlock/ImageBlock";
import ProductList from "modules/ProductList/ProductList";
import Toolbar from "modules/Toolbar/Toolbar";

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Toolbar />
      <ProductList />
      {/* <ImageBlock /> */}
    </>
  );
};
