import React, { useState } from 'react';
import {
  HeroSection,
  HeroSubTitle,
  HeroTitle,
  TitleWrapper,
  BearWrapper,
  GrayBlock,
  PurpleWord,
  GreenWord,
  BoldWord,
  MainImg,
  SliderWrapper,
  TextButtonWrapper,
  TextButtonH2,
  TextButtonP,
  SilderButton,
  SliderButtonWrapper,
  HrefButton,
  BlockImg,
  BlockShadowImg,
  OverlayContent,
  ImageText,
  FlexBox,
  BookService,
  Button,
  Arrow,
  MainImgWork,
  SliderButtonWrapperMob,
  MainImgWork4,
  MainImgWork3,
  MainImgWork2,
  MainImgWrap,
  MainImgWork5,
  ContactButton,
} from './styled';
import { Container } from '../../components/common/styled';
import ImgBear from '../../images/main/mainBigBear.png';
import ImgSlider from '../../images/main/slider.png';
import Modal from '../common/modal/Modal';
import bl from '../../images/main/block.png';
import bg from '../../images/main/block_shadow.png';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { t } = useTranslation();
  const handleModalOpen = () => {
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const handleModalClose = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };
  return (
    <HeroSection>
      <Container>
        <TitleWrapper>
          <HeroTitle>
            <PurpleWord>Turning</PurpleWord>
            <GreenWord> Ideas</GreenWord> <PurpleWord>into Digital</PurpleWord>{' '}
            <GreenWord>Realities.</GreenWord>
          </HeroTitle>

          <HeroSubTitle>
            Doing <BoldWord>extra</BoldWord> since day one.
          </HeroSubTitle>
        </TitleWrapper>
        <BearWrapper>
          <MainImg src={ImgBear} alt="bigBear" />
          <GrayBlock>
            <BlockImg src={bl} />
            <BlockShadowImg src={bg} />
            <OverlayContent>
              <ImageText>
                {t('hero.text')}
              </ImageText>

              <FlexBox>
                <BookService>by: BookService</BookService>
                <Button>
                  <Arrow />
                </Button>
              </FlexBox>
            </OverlayContent>
          </GrayBlock>
        </BearWrapper>
        <SliderWrapper>
          <TextButtonWrapper>
            <TextButtonH2>
              {t('hero.mainText')}
            </TextButtonH2>
            <TextButtonP>
              {t('hero.textItem')}
            </TextButtonP>
            <SliderButtonWrapper>
              <ContactButton onClick={handleModalOpen}>Contacts</ContactButton>
              <SilderButton>
                <HrefButton href="#contact">
                  <SilderButton>Start project</SilderButton>
                </HrefButton>
              </SilderButton>
            </SliderButtonWrapper>
            {isModalOpen && <Modal onClick={handleModalClose} />}
          </TextButtonWrapper>
          <MainImgWrap>
            <MainImgWork src={ImgSlider} alt="slider" />
            <MainImgWork2 src={ImgSlider} alt="slider" />
            <MainImgWork3 src={ImgSlider} alt="slider" />
            <MainImgWork4 src={ImgSlider} alt="slider" />
            <MainImgWork5 src={ImgSlider} alt="slider" />
          </MainImgWrap>

          <SliderButtonWrapperMob>
            <ContactButton onClick={handleModalOpen}>Contacts</ContactButton>
            <SilderButton>
              <HrefButton href="#contact">
                <SilderButton>Start project</SilderButton>
              </HrefButton>
            </SilderButton>
          </SliderButtonWrapperMob>
        </SliderWrapper>
      </Container>
    </HeroSection>
  );
};

export default Hero;
