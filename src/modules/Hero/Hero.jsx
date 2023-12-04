import BearImg from "shared/components/Hero/BearImg/BearImg";
import MainTitle from "shared/components/Hero/MainTitle/MainTitle";
import ReviewBlock from "shared/components/Hero/ReviewBlock/ReviewBlock";
import { FlexHeroBox } from "./Hero.styled";



const Hero = () => {
    return ( <>
        <MainTitle />
        <FlexHeroBox>
            <BearImg />
            <ReviewBlock />
        </FlexHeroBox>
    </> );
}
 
export default Hero;