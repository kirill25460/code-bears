import React from 'react';
import {Container} from '../common/styled'
import Product from './Product';
import { StyledH2, StyledList, StyledP, StyledSection, TitleWrapperProdList } from './styled';

const ProductList = () => {
  return (
    <StyledSection>
        <Container>
                <TitleWrapperProdList>
                    <StyledH2>
                        Products List
                    </StyledH2>
                </TitleWrapperProdList>
                <StyledList>
                        <Product />
                </StyledList>
        </Container>
    </StyledSection>
  )
}

export default ProductList