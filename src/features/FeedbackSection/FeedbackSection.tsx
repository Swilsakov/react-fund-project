import styled from "styled-components";
import { TextfieldUI } from "@/shared/ui/Textfield";
import { TypographyUI } from "@/shared/ui/Typography";
import { SelectUI } from "@/shared/ui/Select";
import { ButtonUI } from "@/shared/ui/Button";
import { useState } from "react";

const FeedbackSectionContainer = styled.section``;

export const FeedbackSection = () => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState<number | undefined>(undefined);
  const [hasError, setHasError] = useState(false);
  const [reason, setReason] = useState("help");

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    setHasError(e.target.value.trim().length === 0);
  };

  const onChangeAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10) || undefined;
    setAge(value);
    setHasError(e.target.value.trim().length === 0);
  };

  const toggleError = () => {
    setHasError((prev) => !prev);
  };

  const onChangeReason = (selectedValue: string) => {
    setReason(selectedValue);
  };

  return (
    <FeedbackSectionContainer>
      <TypographyUI.H3>Feedback:</TypographyUI.H3>
      <ButtonUI onClick={toggleError}>Toggle error</ButtonUI>
      <form action="submit">
        <TextfieldUI
          label={"Username"}
          value={username}
          onChange={onChangeUsername}
          error={hasError}
        />
        <TextfieldUI
          label={"Age"}
          value={age}
          type="number"
          onChange={onChangeAge}
          error={hasError}
        />
        <SelectUI
          id={"reason"}
          label={"Reason"}
          value={reason}
          onChange={onChangeReason}
          options={options}
        />
        <ButtonUI
          disabled={hasError || !username || age === undefined || !reason}
        >
          Send
        </ButtonUI>

        <pre>
          Name: {username}
          <br />
          Age: {age}
          <br />
          Reason: {reason}
          <br />
        </pre>
      </form>
    </FeedbackSectionContainer>
  );
};

const options = [
  { value: "help", title: "Need help?" },
  { value: "error", title: "Some error" },
  { value: "suggest", title: "Suggest" },
];
