import Content from "./pattern/composition/Content/content.composition";
import Header from "./pattern/composition/Header/header.composition";
import { Container } from "./styles";

export default function Home(){
    return (
        <Container>
            <Header/>
            <Content/>
        </Container>
    )
}