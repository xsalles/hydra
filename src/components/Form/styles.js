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
`;

export const Title = styled.p`
  font-size: 36px;
  font-weight: bold;
  color: #ffffff;
  margin-top: 95px;
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
`;

export const SubTitle = styled.p`
  font-weight: lighter;
  font-size: 36px;
  margin-top: 21px;
  color: #ffffff;
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

  &::placeholder {
    color: white;
  }
`;
