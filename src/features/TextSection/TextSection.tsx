import { contentArray } from "@/entities/data";
import { ButtonUI } from "@/shared/ui/Button";
import { TypographyUI } from "@/shared/ui/Typography";
import { ButtonGroup } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

const StyledTextSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const TextSection = () => {
  const [contentType, setContentType] = useState("");
  const handleClick = (type: string) => {
    setContentType(type);
  };

  return (
    <StyledTextSection>
      <TypographyUI.H3>Our Decision:</TypographyUI.H3>
      {!contentType && <TypographyUI.Span>Click Button</TypographyUI.Span>}
      {contentType && (
        <TypographyUI.Span>{contentArray[contentType]}</TypographyUI.Span>
      )}
      <ButtonGroup>
        <ButtonUI
          onClick={() => handleClick("way")}
          isActive={contentType === "way"}
        >
          Way
        </ButtonUI>
        <ButtonUI
          onClick={() => handleClick("pancake")}
          isActive={contentType === "pancake"}
        >
          Pancake
        </ButtonUI>
        <ButtonUI
          onClick={() => handleClick("easy")}
          isActive={contentType === "easy"}
        >
          Easy
        </ButtonUI>
      </ButtonGroup>
    </StyledTextSection>
  );
};
