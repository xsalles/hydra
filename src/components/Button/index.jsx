import { Container, Text } from "./styles";

export default function Button({
  text,
  primary,
  secondary,
  third,
  colorStart = "#8176AF",
  colorEnd = "#C0B7E8",
  margin
}) {
  return (
    <Container
      colorStart={colorStart}
      colorEnd={colorEnd}
      primary={primary}
      secondary={secondary}
      third={third}
      margin={margin}
    >
      <Text>{text}</Text>
    </Container>
  );
}
