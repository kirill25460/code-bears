import { ActionsBlockText, ContactButton, MainTextActionBlock, ProjectButton } from "./ActionsBlock.styled";



const ActionsBlock = () => {
    return(
        <>
            <MainTextActionBlock>Not just product <br/> But a selling one</MainTextActionBlock>
            <ActionsBlockText>We combine everything the best features in one projects: quality, speed, customizability and comfort.</ActionsBlockText>
            <ContactButton>Contacts</ContactButton>
            <ProjectButton>Start a project</ProjectButton>
        </>
    )
}

export default ActionsBlock;