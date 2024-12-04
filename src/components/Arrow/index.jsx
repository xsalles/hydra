import { ArrowContainer, LineStraight, LineTip } from "./styles";
import Straight from "../../assets/images/arrowImages/straight.svg";
import Tip from "../../assets/images/arrowImages/tip.svg";

export default function Signal() {
  return (
    <ArrowContainer>
      <LineTip src={Tip} position="relative"/>
    </ArrowContainer>
  );
}
