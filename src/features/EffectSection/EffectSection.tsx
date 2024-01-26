import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
// import { CloseIcon } from "@/assets/icons/CloseIcon";
import { ButtonUI } from "@/shared/ui/Button";
import { Modal } from "@/shared/ui/Modal/Modal";
import { TypographyUI } from "@/shared/ui/Typography";
import axios from "axios";
import { UserType } from "./type";

const StyledEffectSection = styled.section`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const EffectSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<Array<UserType>>([]);

  const getUsers = useCallback(async () => {
    setLoading(true);
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(response.data);
    setLoading(false);
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <StyledEffectSection>
      EffectSection
      <ButtonUI onClick={() => setShowModal(true)}>Show more</ButtonUI>
      {loading && <p>Loading...</p>}
      {!loading && (
        <ul>
          {users?.map((user, index) => {
            return (
              <li key={index}>
                <p>{user?.name}</p>
                <p>{user?.address.suite}</p>
              </li>
            );
          })}
        </ul>
      )}
      <Modal open={showModal}>
        <TypographyUI.H3>Hello from modal</TypographyUI.H3>
        <TypographyUI.P>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere autem
          consequatur ratione ducimus, cum voluptas nulla recusandae similique
          temporibus aliquid. Illum maiores et, assumenda doloremque ex aut
          totam unde quisquam.
        </TypographyUI.P>
        <div
          onClick={() => setShowModal(false)}
          style={{
            cursor: "pointer",
            marginTop: "12px",
            display: "flex",
            justifyContent: "end",
          }}
        >
          Done!
        </div>
      </Modal>
    </StyledEffectSection>
  );
};
