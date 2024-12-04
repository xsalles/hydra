import React from "react";
import { Container, TextContainer, TextIntroduction } from "./styles.js";
import Signal from "../../../../../components/Arrow/index.jsx";

export default function Introduction() {
  return (
    <Container>
      <TextContainer gap="10px">
        <TextIntroduction fontSize="36px" fontWeight="bold">
          INTRODUCTION
        </TextIntroduction>
        <TextIntroduction fontSize="36px" fontWeight="300">
          TO HYDRA VR
        </TextIntroduction>
      </TextContainer>
      <TextContainer>
        <TextIntroduction fontSize="16px" fontWeight="300">
          Vitae sapien pellentesque habitant morbi tristique senectus et netus
          et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
          amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
          aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in.
          Lectus magna fringilla urna porttitor rhoncus vitae.
        </TextIntroduction>
      </TextContainer>
    </Container>
  );
}
