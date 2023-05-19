"use client";

import Header from "@/components/organisms/Header";
import { StyledGlobal } from "@/themes/globalStyles";
import { light } from "@/themes/light";
import { ThemeProvider } from "styled-components";

export default function Home() {
  return (
    <ThemeProvider theme={light}>
      <StyledGlobal />
      <Header />
    </ThemeProvider>
  );
}
