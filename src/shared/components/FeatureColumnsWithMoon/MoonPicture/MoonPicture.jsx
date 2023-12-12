import { BigLogoImage, MoonImage, MoonPictureContainer, TextMoonImage } from "./MoonPicture.styled";
import Moon from '../../../images/Moon.png'
import BigLogo from '../../../images/BigLogo.png'
import TextMoon from '../../../images/TextMoon.png'

const MoonPicture = () => {
    return(
        <MoonPictureContainer>
            <MoonImage src={Moon} />
            <BigLogoImage src={BigLogo} />
            <TextMoonImage src={TextMoon}/>
        </MoonPictureContainer>
    )
};

export default MoonPicture