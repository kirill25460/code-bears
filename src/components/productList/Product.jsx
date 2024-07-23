import React, { useState } from 'react';
import {
  StyledItem,
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
  ImageBlockMob,
  ListBlock03,
} from './styled';
import firstImg from '../../images/main/Shape101.png';
import secondImg from '../../images/main/Shape521.png';
import thirdImg from '../../images/main/Shape561.png';
import Modal from './modalProduct/modalProduct';
import PWA from '../../images/development/PWA (Progressive Web Apps)1.png';
import APImg from '../../images/development/APIdev.png';
import BigD from '../../images/development/Big Data.png';
import AutoM from '../../images/development/Automation and optimization of business processes.png';
import DevJur from '../../images/development/Development of electronic journals and accounting systems.png';
import PlatformImg from '../../images/development/Platforms for online education2.png';
import DocMang from '../../images/development/Document management systems1.png';
import ErpImg from '../../images/development/ERP CRM.png';
import Coop from '../../images/development/Corporate websites.png';
import OnlineStor from '../../images/development/Online stores2.png';
import landpage from '../../images/development/landing pages.png';
import MbApp from '../../images/development/mobapp.png';
import AIPic from '../../images/development/AI.png';
import DPict from '../../images/development/3D.png';
import AdvertB from '../../images/development/advertising banners.png';
import BrendPic from '../../images/development/brend book.png';
import AnVid from '../../images/development/animation and video.png';
import MoushenPic from '../../images/development/moushendesign.png';
import WebDes from '../../images/development/WebDesign.png';
import UIUX from '../../images/development/UXUI.png';
import Ill_and_icon from '../../images/development/Illustrations_and_iconography.png';
import Infographics from '../../images/development/Infographics.png';
import Pack_des from '../../images/development/Package_design.png';
import Type_and_lett from '../../images/development/Typography_and_lettering.png';
import Soc_media_des from '../../images/development/Social_media_deisgn.png';
import Cor_iden_dev from '../../images/development/Corporate_identity_development.png';
import Ret_and_photo_proc from '../../images/development/Retouching_and_photo_processing.png';
import Banner from '../../images/development/Banner.png';
import SMM from '../../images/development/SMM.png';
import Cont_adv from '../../images/development/Contextual_advertising.png';
import SEO_opt from '../../images/development/SEO_opt.png';
import Targeted_adv from '../../images/development/Targeted_advertising.png';
import Mark_strat from '../../images/development/Marketing_strategy.png';
import Mark_audit from '../../images/development/Marketing_audit.png';
import Email_letter from '../../images/development/Email_newsletters.png';
import Comp_analysis from '../../images/development/Competitor_analysis.png';
import Web_analytics from '../../images/development/Web_analytics.png';
import Cont_plan from '../../images/development/Content_plan.png';
import { useTranslation } from 'react-i18next';

const Product = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();

  const openModal = (title, picture, description) => {
    setSelectedItem({ title, picture, description });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  const developmentFirstArray = [
    {
      img: PWA,
      title: 'product.developmentFirstArray.ProgressiveWebApps',
      text: 'productDescription.developmentFirstArray.ProgressiveWebApps',
      name: 'product.developmentFirstArray.ProgressiveWebApps',
    },
    {
      img: APImg,
      title: 'product.developmentFirstArray.APIDevelopment',
      text: 'productDescription.developmentFirstArray.APIDevelopment',
      name: 'product.developmentFirstArray.APIDevelopment',
    },
    {
      img: BigD,
      title: 'product.developmentFirstArray.BigDataAndAnalytics',
      text: 'productDescription.developmentFirstArray.BigDataAndAnalytics',
      name: 'product.developmentFirstArray.BigDataAndAnalytics',
    },
    {
      img: AutoM,
      title:
        'product.developmentFirstArray.BusinessProcessAutomationAndOptimization',
      text: 'productDescription.developmentFirstArray.BusinessProcessAutomationAndOptimization',
      name: 'product.developmentFirstArray.BusinessProcessAutomationAndOptimization',
    },
    {
      img: DevJur,
      title:
        'product.developmentFirstArray.DevelopmentOfElectronicJournalsAndAccountingSystems',
      text: 'productDescription.developmentFirstArray.DevelopmentOfElectronicJournalsAndAccountingSystems',
      name: 'product.developmentFirstArray.DevelopmentOfElectronicJournalsAndAccountingSystems',
    },
    {
      img: PlatformImg,
      title: 'product.developmentFirstArray.OnlineEducationPlatforms',
      text: 'productDescription.developmentFirstArray.OnlineEducationPlatforms',
      name: 'product.developmentFirstArray.OnlineEducationPlatforms',
    },
  ];
  const developmentSecondArray = [
    {
      img: DocMang,
      title: 'product.developmentSecondArray.DocumentManagementSystems',
      text: 'productDescription.developmentSecondArray.DocumentManagementSystems',
      name: 'product.developmentSecondArray.DocumentManagementSystems',
    },
    {
      img: ErpImg,
      title: 'product.developmentSecondArray.ERPAndCRMSystems',
      text: 'productDescription.developmentSecondArray.ERPAndCRMSystems',
      name: 'product.developmentSecondArray.ERPAndCRMSystems',
    },
    {
      img: Coop,
      title: 'product.developmentSecondArray.CorporateWebsites',
      text: 'productDescription.developmentSecondArray.CorporateWebsites',
      name: 'product.developmentSecondArray.CorporateWebsites',
    },
    {
      img: OnlineStor,
      title: 'product.developmentSecondArray.OnlineStores',
      text: 'productDescription.developmentSecondArray.OnlineStores',
      name: 'product.developmentSecondArray.OnlineStores',
    },
    {
      img: landpage,
      title: 'product.developmentSecondArray.LandingPages',
      text: 'productDescription.developmentSecondArray.LandingPages',
      name: 'product.developmentSecondArray.LandingPages',
    },
    {
      img: MbApp,
      title: 'product.developmentSecondArray.MobileApps',
      text: 'productDescription.developmentSecondArray.MobileApps',
      name: 'product.developmentSecondArray.MobileApps',
    },
    {
      img: AIPic,
      title: 'product.developmentSecondArray.ArtificialIntelligence',
      text: 'productDescription.developmentSecondArray.ArtificialIntelligence',
      name: 'product.developmentSecondArray.ArtificialIntelligence',
    },
  ];
  const designFirstArray = [
    {
      img: AdvertB,
      title: 'product.designFirstArray.AdvertisingBanners',
      text: 'productDescription.designFirstArray.AdvertisingBanners',
      name: 'product.designFirstArray.AdvertisingBanners',
    },
    {
      img: MoushenPic,
      title: 'product.designFirstArray.MotionDesign',
      text: 'productDescription.designFirstArray.MotionDesign',
      name: 'product.designFirstArray.MotionDesign',
    },
    {
      img: BrendPic,
      title: 'product.designFirstArray.BrandBook',
      text: 'productDescription.designFirstArray.BrandBook',
      name: 'product.designFirstArray.BrandBook',
    },
    {
      img: WebDes,
      title: 'product.designFirstArray.WebDesign',
      text: 'productDescription.designFirstArray.WebDesign',
      name: 'product.designFirstArray.WebDesign',
    },
    {
      img: UIUX,
      title: 'product.designFirstArray.UxUiDesign',
      text: 'productDescription.designFirstArray.UxUiDesign',
      name: 'product.designFirstArray.UxUiDesign',
    },
    {
      img: Ill_and_icon,
      title: 'product.designFirstArray.IllustrationsAndIconography',
      text: 'productDescription.designFirstArray.IllustrationsAndIconography',
      name: 'product.designFirstArray.IllustrationsAndIconography',
    },
    {
      img: DPict,
      title: 'product.designFirstArray.3DModelingAndVisualization',
      text: 'productDescription.designFirstArray.3DModelingAndVisualization',
      name: 'product.designFirstArray.3DModelingAndVisualization',
    },
    {
      img: Infographics,
      title: 'product.designFirstArray.Infographics',
      text: 'productDescription.designFirstArray.Infographics',
      name: 'product.designFirstArray.Infographics',
    },
  ];
  const designSecondArray = [
    {
      img: Pack_des,
      title: 'product.designSecondArray.PackageDesign',
      text: 'productDescription.designSecondArray.PackageDesign',
      name: 'product.designSecondArray.PackageDesign',
    },
    {
      img: Type_and_lett,
      title: 'product.designSecondArray.TypographyAndLettering',
      text: 'productDescription.designSecondArray.TypographyAndLettering',
      name: 'product.designSecondArray.TypographyAndLettering',
    },
    {
      img: Soc_media_des,
      title: 'product.designSecondArray.SocialMediaDesign',
      text: 'productDescription.designSecondArray.SocialMediaDesign',
      name: 'product.designSecondArray.SocialMediaDesign',
    },
    {
      img: AnVid,
      title: 'product.designSecondArray.AnimationAndVideoDesign',
      text: 'productDescription.designSecondArray.AnimationAndVideoDesign',
      name: 'product.designSecondArray.AnimationAndVideoDesign',
    },
    {
      img: Cor_iden_dev,
      title: 'product.designSecondArray.CorporateIdentityDevelopment',
      text: 'productDescription.designSecondArray.AnimationAndVideoDesign',
      name: 'product.designSecondArray.CorporateIdentityDevelopment',
    },
    {
      img: Ret_and_photo_proc,
      title: 'product.designSecondArray.PhotoRetouchingAndEditing',
      text: 'productDescription.designSecondArray.PhotoRetouchingAndEditing',
      name: 'product.designSecondArray.PhotoRetouchingAndEditing',
    },
  ];
  const marketingFisrtArray = [
    {
      img: Banner,
      title: 'product.marketingFisrtArray.BannerAdvertisingOnWebsites',
      text: 'productDescription.marketingFisrtArray.BannerAdvertisingOnWebsites',
      name: 'product.marketingFisrtArray.BannerAdvertisingOnWebsites',
    },
    {
      img: SMM,
      title: 'product.marketingFisrtArray.Smm',
      text: 'productDescription.marketingFisrtArray.Smm',
      name: 'product.marketingFisrtArray.Smm',
    },
    {
      img: Cont_adv,
      title: 'product.marketingFisrtArray.ContextualAdvertising',
      text: 'productDescription.marketingFisrtArray.ContextualAdvertising',
      name: 'product.marketingFisrtArray.ContextualAdvertising',
    },
    {
      img: SEO_opt,
      title: 'product.marketingFisrtArray.SeoOptimization',
      text: 'productDescription.marketingFisrtArray.SeoOptimization',
      name: 'product.marketingFisrtArray.SeoOptimization',
    },
    {
      img: Targeted_adv,
      title: 'product.marketingFisrtArray.TargetedAdvertising',
      text: 'productDescription.marketingFisrtArray.TargetedAdvertising',
      name: 'product.marketingFisrtArray.TargetedAdvertising',
    },
    {
      img: Mark_strat,
      title: 'product.marketingFisrtArray.MarketingStrategy',
      text: 'productDescription.marketingFisrtArray.MarketingStrategy',
      name: 'product.marketingFisrtArray.MarketingStrategy',
    },
    {
      img: Mark_audit,
      title: 'product.marketingFisrtArray.MarketingAudit',
      text: 'productDescription.marketingFisrtArray.MarketingAudit',
      name: 'product.marketingFisrtArray.MarketingAudit',
    },
  ];
  const marketingSecondArray = [
    {
      img: Email_letter,
      title: 'product.marketingSecondArray.EmailCampaigns',
      text: 'productDescription.marketingSecondArray.EmailCampaigns',
      name: 'product.marketingSecondArray.EmailCampaigns',
    },
    {
      img: Comp_analysis,
      title: 'product.marketingSecondArray.CompetitorAnalysis',
      text: 'productDescription.marketingSecondArray.CompetitorAnalysis',
      name: 'product.marketingSecondArray.CompetitorAnalysis',
    },
    {
      img: Web_analytics,
      title: 'product.marketingSecondArray.WebAnalytics',
      text: 'productDescription.marketingSecondArray.WebAnalytics',
      name: 'product.marketingSecondArray.WebAnalytics',
    },
    {
      img: Cont_plan,
      title: 'product.marketingSecondArray.ContentPlan',
      text: 'productDescription.marketingSecondArray.ContentPlan',
      name: 'product.marketingSecondArray.ContentPlan',
    },
    // {
    //   img: Email_letter,
    //   title: 'Е-mail рассылки ',
    //   text: 'E-mail маркетинг включает отправку рекламных и информационных писем подписчикам для привлечения клиентов, увеличения продаж и поддержания лояльности. Эффективные e-mail кампании должны содержать персонализированные сообщения, привлекательный дизайн и четкий призыв к действию. E-mail рассылки позволяют поддерживать прямой контакт с клиентами, информировать их о новостях, акциях и специальных предложениях. Автоматизация e-mail маркетинга и использование аналитики помогает улучшить таргетинг, увеличить открываемость писем и конверсию. ',
    //   name: 'Е-mail рассылки',
    // },
    // {
    //   img: Comp_analysis,
    //   title: 'Анализ конкурентов ',
    //   text: 'Анализ конкурентов включает исследование и оценку стратегий, продуктов и результатов деятельности конкурирующих компаний. Это помогает выявить сильные и слабые стороны конкурентов, определить рыночные тенденции и найти возможности для улучшения собственной стратегии. Анализ конкурентов включает сбор данных о продукции, ценах, маркетинговых активностях и взаимодействии с клиентами. Эти данные используются для разработки конкурентных преимуществ, улучшения продуктов и услуг, а также для принятия обоснованных бизнес-решений. ',
    //   name: 'Анализ конкурентов',
    // },
    // {
    //   img: Web_analytics,
    //   title: 'Веб аналитика ',
    //   text: 'Веб аналитика включает сбор, измерение и анализ данных о поведении пользователей на веб-сайтах и в приложениях. Она помогает понять, как пользователи взаимодействуют с контентом, какие страницы посещают, сколько времени проводят на сайте и какие действия выполняют. Веб аналитика используется для оптимизации пользовательского опыта, улучшения конверсии и повышения эффективности маркетинговых кампаний. Инструменты веб аналитики, такие как Google Analytics, предоставляют подробные отчеты и инсайты, которые помогают принимать обоснованные решения и достигать бизнес-целей. ',
    //   name: 'Веб аналитика',
    // },
    // {
    //   img: Cont_plan,
    //   title: 'Контент план ',
    //   text: 'Контент план представляет собой стратегию создания и публикации контента для достижения маркетинговых целей. Это включает определение целевой аудитории, тематику контента, частоту публикаций и выбор каналов распространения. Хорошо продуманный контент план помогает поддерживать консистентность бренда, привлекать и удерживать аудиторию, улучшать SEO показатели и увеличивать вовлеченность. Планирование контента позволяет более эффективно использовать ресурсы, измерять результаты и адаптироваться к изменениям в потребностях аудитории и рыночных условиях. ',
    //   name: 'Контент план',
    // },
  ];



  return (
    <StyledSection>
      <TitleWrapperProdList>
        <StyledProductList>Products List</StyledProductList>
        <StyledItem id="services">
          <ListBlock>
            <MainTextBlock>Development.</MainTextBlock>
            <ImageBlockMob>
              <NumberBlock>01</NumberBlock>
              <Image src={firstImg}></Image>
            </ImageBlockMob>
            <FlexList>
              <FirstListSection>
                {developmentFirstArray.map(item => {
                  return (
                    <ItemList
                      onClick={() => openModal(item.title, item.img, item.text)}
                    >
                      {t(item.name)}
                    </ItemList>
                  );
                })}
              </FirstListSection>
              <SecondListSection>
                {developmentSecondArray.map(item => {
                  return (
                    <ItemList
                      onClick={() => openModal(item.title, item.img, item.text)}
                    >
                      {t(item.name)}
                    </ItemList>
                  );
                })}
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
            <ImageBlockMob>
              <NumberBlock>02</NumberBlock>
              <Image src={secondImg}></Image>
            </ImageBlockMob>
            <FlexList>
              <FirstListSection>
                {designFirstArray.map(item => {
                  return (
                    <ItemList
                      onClick={() => openModal(item.title, item.img, item.text)}
                    >
                      {t(item.name)}
                    </ItemList>
                  );
                })}
              </FirstListSection>
              <SecondListSection>
                {designSecondArray.map(item => {
                  return (
                    <ItemList
                      onClick={() => openModal(item.title, item.img, item.text)}
                    >
                      {t(item.name)}
                    </ItemList>
                  );
                })}
              </SecondListSection>
            </FlexList>
          </ListSecondBlock>
        </StyledItem>
        <StyledItem id="services">
          <ListBlock03>
            <MainTextBlock>Marketing.</MainTextBlock>
            <ImageBlockMob>
              <NumberBlock>03</NumberBlock>
              <Image src={thirdImg}></Image>
            </ImageBlockMob>
            <FlexList>
              <FirstListSection>
                {marketingFisrtArray.map(item => {
                  return (
                    <ItemList
                      onClick={() => openModal(item.title, item.img, item.text)}
                    >
                      {t(item.name)}
                    </ItemList>
                  );
                })}
              </FirstListSection>
              <SecondListSection>
                {marketingSecondArray.map(item => {
                  return (
                    <ItemList
                      onClick={() => openModal(item.title, item.img, item.text)}
                    >
                      {t(item.name)}
                    </ItemList>
                  );
                })}
              </SecondListSection>
            </FlexList>
          </ListBlock03>
          <ImageBlock>
            <NumberBlock>03</NumberBlock>
            <Image src={thirdImg}></Image>
          </ImageBlock>
        </StyledItem>
      </TitleWrapperProdList>
      <Modal
        showModal={showModal}
        closeModal={closeModal}
        data={selectedItem}
      />
    </StyledSection>
  );
};

export default Product;
