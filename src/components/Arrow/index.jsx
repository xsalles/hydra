import { ArrowContainer, LineStraight, LineTip } from "./styles";
import Straight from "../../assets/images/arrowImages/straight.svg";
import Tip from "../../assets/images/arrowImages/tip.svg";

export default function Arrow() {
  return (
    <ArrowContainer>
      <LineStraight src={Straight} />
      <LineTip src={Tip} position="absolute"/>
    </ArrowContainer>
  );
}
