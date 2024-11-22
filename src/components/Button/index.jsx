import { Container, Text } from "./styles";

export default function Button({ text, primary, secondary, third }) {
  return (
    <Container primary={primary} secondary={secondary} third={third}>
      <Text>{text}</Text>
    </Container>
  );
}
