import About from "./pattern/composition/About/about.composition";
import Introduction from "./pattern/composition/Introduction/introduction.composition";
import { Container } from "./styles";

export default function Details(){
    return(
        <Container>
            <Introduction/>
            <About/>
        </Container>
    )
}