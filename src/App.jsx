import Header from 'modules/Header/Header';
import Hero from 'modules/Hero/Hero';
import ProductList from 'modules/ProductList/ProductList';
import Toolbar from 'modules/Toolbar/Toolbar';
import WhyUsBlock from 'modules/WhyUsBlock/WhyUsBlock';
import Background from 'shared/components/Background/Background';

export const App = () => {
  return (
    <>
      <Header />
      <Background/>
      <Hero />
      <Toolbar />
      <ProductList />
      <WhyUsBlock />
  
    </>
  );
};
