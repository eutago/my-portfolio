"use client";

import { Container } from "@/shared/components/Container";
import { FlexBox } from "@/shared/components/Flexbox";
import { StyledText } from "@/shared/components/Text";
import { StyledGlobal } from "@/themes/globalStyles";
import { light } from "@/themes/light";
import { ThemeProvider } from "styled-components";

export default function Home() {
  return (
    <ThemeProvider theme={light}>
      <StyledGlobal />
      <Container>
        <FlexBox direction="row" align="center" justify="center" gap="sm">
          <StyledText tag="h1" fontWeight={700} fontSize="lg" color="text">
            StyledText One
          </StyledText>
          <StyledText tag="h1" fontWeight={700} fontSize="lg" color="text">
            StyledText Two
          </StyledText>
          <StyledText tag="h1" fontWeight={700} fontSize="lg" color="text">
            StyledText Three
          </StyledText>
        </FlexBox>
      </Container>
    </ThemeProvider>
  );
}
