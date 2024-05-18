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
} from './styled';
import { Container } from '../../components/common/styled';
import ImgBear from '../../images/main/mainBigBear.png';
import ImgSlider from '../../images/main/slider.png';
import Modal from '../common/modal/Modal';
import bl from '../../images/main/block.png';
import bg from '../../images/main/block_shadow.png';

const Hero = () => {
  const [isModalOpen, setModalOpen] = useState(false);
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
                Review of our work by some doode, damn chuck-a-fill tastes
                good.Review of our work by some doode, damn chuck-a-fill tastes
                good.Review of our work by some doode, damn chuck-a-fill tastes
                good.Review of our work by some doode, damn chuck-a-fill tastes
                good.Review of our work by some doode, damn chuck-a-fill tastes
                good.Review of our work by some doode, damn chuck-a-fill tastes
                good.
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
              Not just product <br />
              But a selling one
            </TextButtonH2>
            <TextButtonP>
              We combine everything the best features in one projects: quality,
              speed, customizability and comfort.
            </TextButtonP>
            <SliderButtonWrapper>
              <SilderButton onClick={handleModalOpen}>Contacts</SilderButton>
              <SilderButton>
                <HrefButton href="#contact">
                  <SilderButton>Start project</SilderButton>
                </HrefButton>
              </SilderButton>
            </SliderButtonWrapper>
            {isModalOpen && <Modal onClick={handleModalClose} />}
          </TextButtonWrapper>
          <div>
          <MainImgWork src={ImgSlider} alt="slider" />
          <MainImgWork2 src={ImgSlider} alt="slider" />
          <MainImgWork3 src={ImgSlider} alt="slider" />
          <MainImgWork4 src={ImgSlider} alt="slider" />
          </div>
         
          <SliderButtonWrapperMob>
            <SilderButton onClick={handleModalOpen}>Contacts</SilderButton>
            <SilderButton>
              <HrefButton href="#contact">Start project</HrefButton>
            </SilderButton>
          </SliderButtonWrapperMob>
        </SliderWrapper>
      </Container>
    </HeroSection>
  );
};

export default Hero;
