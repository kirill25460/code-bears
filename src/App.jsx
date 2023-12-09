import Header from "modules/Header/Header";
import Hero from "modules/Hero/Hero";
import ProductList from "modules/ProductList/ProductList";
import Toolbar from "modules/Toolbar/Toolbar";
import WhyUsBlock from "modules/WhyUsBlock/WhyUsBlock";

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Toolbar />
      <ProductList />
      <WhyUsBlock />
    </>
  );
};
