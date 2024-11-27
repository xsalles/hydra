import styled from "styled-components";

export const Container = styled.form`
  width: 1275px;
  height: 1008px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: radial-gradient(#403a5f, #211e2e);
  border: 1px solid transparent;
  border-radius: 100px;

  @media (max-width: 390px) {
    width: 343px;
    height: 973px;
    display: flex;
    text-align: center;
    border: 1px solid transparent;
    border-radius: 40px;
  }
`;

export const Title = styled.p`
  font-size: 36px;
  font-weight: bold;
  color: #ffffff;
  margin-top: 95px;

  @media (max-width: 390px) {
    width: 159px;
    height: 29px;
    font-size: 24px;
    margin-top: 45px;
  }
`;

export const Line = styled.div`
  height: 1px;
  width: 414px;
  background: linear-gradient(
    to right,
    #343045 0%,
    #c0b7e8 35%,
    #8176af 69%,
    #343045 100%
  );
  margin-top: 30px;

  @media (max-width: 390px) {
    width: 116.5px;
    margin-top: 21px;
  }
`;

export const SubTitle = styled.p`
  font-weight: lighter;
  font-size: 36px;
  margin-top: 21px;
  color: #ffffff;

  @media (max-width: 390px) {
    margin-top: 19px;
    font-size: 24px;
    width: 232px;
    height: 64px;
  }
`;

export const ContainerInput = styled.div`
  width: ${(props) => (props.primaryContainer ? "1058px" : "1058px")};
  height: ${(props) => (props.primaryContainer ? "72px" : "315px")};
  display: flex;
  flex-direction: ${(props) => (props.primaryContainer ? "row" : "column")};
  margin-top: ${(props) =>
    props.primaryContainerMargin
      ? "65px"
      : props.secondaryContainerMargin
      ? "39px"
      : "33px"};
  gap: ${(props) => (props.primaryContainer ? "12px" : "33px")};

  @media (max-width: 390px) {
    display: flex;
    flex-direction: column;
    margin-top: 36px;
    gap: 22px;
    width: 300px;
    height: ${(props) => (props.primaryContainer ? "128px" : "294px")};
    
  }
`;

export const TextInput = styled.input`
  width: ${(props) =>
    props.primaryContainer
      ? "524px"
      : props.secondaryContainer
      ? "1058px"
      : "1058px"};
  height: ${(props) => (props.primaryContainer ? "72px" : props.height)};
  border: 1px solid #ffffff;
  border-radius: 40px;
  background: transparent;
  padding: ${(props) => props.padding}; 
  caret-color: #ffffff;

  @media (max-width: 390px) {
    padding: ${(props) => (props.paddingResponsiveBiggerContainer ? "18px 134px 184px 29px" : "18px 193px 18px 29px")};
    width: 300px;
    height: ${(props) => (props.responsiveBiggerContainer ? "219px" : "53px" )};
  }

  &::placeholder {
    color: white;
  }
`;
