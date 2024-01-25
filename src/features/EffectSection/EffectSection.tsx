import { useState } from "react";
import styled from "styled-components";
// import { CloseIcon } from "@/assets/icons/CloseIcon";
import { ButtonUI } from "@/shared/ui/Button";
import { Modal } from "@/shared/ui/Modal/Modal";
import { TypographyUI } from "@/shared/ui/Typography";

const StyledEffectSection = styled.section`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const EffectSection = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <StyledEffectSection>
      EffectSection
      <ButtonUI onClick={handleOpenModal}>Show more</ButtonUI>
      <Modal open={showModal}>
        <TypographyUI.H3>Hello from modal</TypographyUI.H3>
        <TypographyUI.P>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere autem
          consequatur ratione ducimus, cum voluptas nulla recusandae similique
          temporibus aliquid. Illum maiores et, assumenda doloremque ex aut
          totam unde quisquam.
        </TypographyUI.P>
        <div
          onClick={handleCloseModal}
          style={{ cursor: "pointer", marginTop: "12px" }}
        >
          Done!
        </div>
      </Modal>
    </StyledEffectSection>
  );
};
