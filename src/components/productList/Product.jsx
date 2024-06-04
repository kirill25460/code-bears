import React, { useState } from 'react';
import {
  StyledItem,
  StyledSubTitle,
  StyledP,
  StyledWraper,
  StyledButton,
  StyledPlus,
  StyledCross,
  ListBlock,
  MainTextBlock,
  ImageBlock,
  FlexList,
  FirstListSection,
  ItemList,
  SecondListSection,
  NumberBlock,
  Image,
  ImageSecondBlock,
  ListSecondBlock,
  TitleWrapperProdList,
  StyledProductList,
  StyledSection,
} from './styled';
import firstImg from '../../images/main/Shape101.png';
import secondImg from '../../images/main/Shape521.png';
import thirdImg from '../../images/main/Shape561.png';

const Product = () => {
  return (
    <StyledSection>
      <TitleWrapperProdList>
        <StyledProductList>Products List</StyledProductList>
     
      <StyledItem id="services">
        <ListBlock>
          <MainTextBlock>Development.</MainTextBlock>
          <FlexList>
            <FirstListSection>
              <ItemList>PWA (Progressive Web Apps)</ItemList>
              <ItemList>API разработка</ItemList>
              <ItemList>Big Data и аналитика</ItemList>
              <ItemList>Автоматизация и оптимизация бизнес-процессов </ItemList>
              <ItemList>
                Разработка электронных журналов и систем учёта
              </ItemList>
              <ItemList>Платформы для онлайн-образования </ItemList>
            </FirstListSection>
            <SecondListSection>
              <ItemList>
                Системы <br />
                документооборота
              </ItemList>
              <ItemList>ERP и CRM системы</ItemList>
              <ItemList>Корпоративные сайты</ItemList>
              <ItemList>Интернет-магазины </ItemList>
              <ItemList>Одностраничные сайты (landing page)</ItemList>
              <ItemList>
                Мобильные <br />
                приложения
              </ItemList>
              <ItemList>ИИ</ItemList>
            </SecondListSection>
          </FlexList>
        </ListBlock>
        <ImageBlock>
          <NumberBlock>01</NumberBlock>
          <Image src={firstImg}></Image>
        </ImageBlock>
      </StyledItem>
      <StyledItem id="services">
        <ImageSecondBlock>
          <NumberBlock>02</NumberBlock>
          <Image src={secondImg}></Image>
        </ImageSecondBlock>
        <ListSecondBlock>
          <MainTextBlock>Design.</MainTextBlock>
          <FlexList>
            <FirstListSection>
              <ItemList>Рекламные Банера</ItemList>
              <ItemList>Моушн дизайн</ItemList>
              <ItemList>Бренд Бук</ItemList>
              <ItemList>Веб дизайн</ItemList>
              <ItemList>UX/UI дизайн</ItemList>
              <ItemList>Иллюстрации и иконографика</ItemList>
              <ItemList>3D моделирование и визуализация </ItemList>
              <ItemList>Инфографика</ItemList>
            </FirstListSection>
            <SecondListSection>
              <ItemList>Пакетный дизайн</ItemList>
              <ItemList>
                Типографика и <br />
                леттеринг
              </ItemList>
              <ItemList>Дизайн для социальных сетей</ItemList>
              <ItemList>
                Анимация и видео <br />
                дизайн
              </ItemList>
              <ItemList>Разработка фирменного стиля</ItemList>
              <ItemList>Ретушь и обработка фотографий</ItemList>
            </SecondListSection>
          </FlexList>
        </ListSecondBlock>
      </StyledItem>
      <StyledItem id="services">
        <ListBlock>
          <MainTextBlock>Marketing.</MainTextBlock>
          <FlexList>
            <FirstListSection>
              <ItemList>
                Банерная реклама на <br />
                сайтах
              </ItemList>
              <ItemList>SMM</ItemList>
              <ItemList>Контекстная реклама</ItemList>
              <ItemList>Seo Оптимизация</ItemList>
              <ItemList>
                Таргетированная <br />
                реклама
              </ItemList>
              <ItemList>
                Маркетинговая <br />
                стратегия
              </ItemList>
              <ItemList>Маркетинговый аудит</ItemList>
            </FirstListSection>
            <SecondListSection>
              <ItemList>Е-mail рассылки</ItemList>
              <ItemList>Анализ конкурентов</ItemList>
              <ItemList>Веб аналитика</ItemList>
              <ItemList>Контент план </ItemList>
              <ItemList>Е-mail рассылки</ItemList>
              <ItemList>Анализ конкурентов</ItemList>
              <ItemList>Веб аналитика</ItemList>
              <ItemList>Контент план</ItemList>
            </SecondListSection>
          </FlexList>
        </ListBlock>
        <ImageBlock>
          <NumberBlock>03</NumberBlock>
          <Image src={thirdImg}></Image>
        </ImageBlock>
      </StyledItem>
      </TitleWrapperProdList>
    </StyledSection>
  );
};

export default Product;
