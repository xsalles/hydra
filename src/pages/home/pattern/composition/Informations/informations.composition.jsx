import {
  Container,
  Description,
  Icon,
  InformationContainer,
  Line,
  TextContainer,
  Title,
} from "./styles";
import Location from "../../../../../assets/images/informations/Location-Icon.svg";
import Phone from "../../../../../assets/images/informations/phone-call.svg";
import Email from "../../../../../assets/images/informations/mail.svg";

const elements = [
  <InformationContainer width="360px" height="70px">
    <Icon src={Location} alt="" />
    <TextContainer width="290px" height="56px">
      <Title width="169px">Pay Us a Visit</Title>
      <Description width="290px">
        Union St, Seattle, WA 98101, United States
      </Description>
    </TextContainer>
  </InformationContainer>,
  <Line marginLeft="42.5px" marginRight="47.5px" />,
  <InformationContainer width="257px" height="61px" gap="29px">
    <Icon src={Phone} alt="" />
    <TextContainer width="169px" height="55px">
      <Title width="169px">Give Us a Call</Title>
      <Description width="87px">(110) 1111-1010</Description>
    </TextContainer>
  </InformationContainer>,
  <Line marginLeft="66px" marginRight="50px" />,
  <InformationContainer width="330px" height="65px" gap="23px">
    <Icon src={Email} alt="" />
    <TextContainer width="242px" height="55px">
      <Title width="242px">Send Us a Message</Title>
      <Description width="189px">Contact@HydraVTech.com</Description>
    </TextContainer>
  </InformationContainer>,
];

export default function Informations() {
  return <Container>{elements}</Container>;
}
