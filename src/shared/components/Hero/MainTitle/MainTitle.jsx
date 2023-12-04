import {
  MainTitleContainer,
  MainText,
  MainTextSpan,
  SubText,
  SubTextSpan,
} from './MainTitle.styled';

const MainTitle = () => {
  return (
    <MainTitleContainer>
      <MainText>
        Turning <MainTextSpan>Ideas</MainTextSpan> into Digital{' '}
        <MainTextSpan>Realities.</MainTextSpan>
      </MainText>
      <SubText>
        Doing <SubTextSpan>extra</SubTextSpan> since day one.
      </SubText>
    </MainTitleContainer>
  );
};

export default MainTitle;
