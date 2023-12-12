import FeatureColumns from "shared/components/FeatureColumnsWithMoon/FeatureColumns/FeatureColumns";
import { FeatureColumnsWithMoonConteiner } from "./FeatureColumnsWithMoon.styled";
import MoonPicture from "shared/components/FeatureColumnsWithMoon/MoonPicture/MoonPicture";


const FeatureColumnsWithMoon = () => {
  return (
    <FeatureColumnsWithMoonConteiner>
      <FeatureColumns />
      <MoonPicture />
    </FeatureColumnsWithMoonConteiner>
  );
};

export default FeatureColumnsWithMoon;
