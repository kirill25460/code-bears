import { HeadFromConteiner, HeadFromMain, HeadFromSpan } from "./HeadFrom.styled";

const HeadFrom = () => {
  return (
    <HeadFromConteiner>
      <HeadFromMain>
        Feeling like you have seen enough?
        <HeadFromSpan>Lets work together!</HeadFromSpan>
      </HeadFromMain>
    </HeadFromConteiner>
  );
};

export default HeadFrom;
