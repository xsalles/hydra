import Content from "./pattern/composition/Content/content.composition";
import Header from "./pattern/composition/Header/header.composition";
import Informations from "./pattern/composition/Informations/informations.composition";
import { Container } from "./styles";

export default function Home(){
    return (
        <Container>
            <Header/>
            <Content/>
            <Informations/>
        </Container>
    )
}