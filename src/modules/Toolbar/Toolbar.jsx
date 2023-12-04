import ActionsBlock from 'shared/components/Toolbar/ActionsBlock/ActionsBlock';
import { ToolbarConteiner } from './Toolbar.styled';
import PhotoBlock from 'shared/components/Toolbar/PhotoBlock/PhotoBlock';

const Toolbar = () => {
  return (
    <>
      <ToolbarConteiner>
          <ActionsBlock />
          <PhotoBlock />
      </ToolbarConteiner>
    </>
  );
};

export default Toolbar;
