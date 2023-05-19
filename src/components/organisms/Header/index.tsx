import { Container } from "@/shared/components/Container";
import { FlexBox } from "@/shared/components/Flexbox";
import { StyledHeader, StyledLogo } from "./style";
import { StyledText } from "@/shared/components/Text";
import Image from "next/image";
import Blob from "@/assets/images/blob.svg";

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <StyledLogo>
          <StyledText color="text" fontSize="md" fontWeight={700} tag="h1">
            tago
          </StyledText>
          <StyledText color="purple" fontSize="md" fontWeight={700} tag="h1">
            Code
          </StyledText>
        </StyledLogo>
        <div className="hamburger">
          <div className="bar bar-1"></div>
          <div className="bar bar-2"></div>
          <div className="bar bar-3"></div>
        </div>
      </Container>
      <Image src={Blob} alt="sla" />
    </StyledHeader>
  );
}
