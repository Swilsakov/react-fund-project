import styled from "styled-components";
import { TextfieldUI } from "@/shared/ui/Textfield";
import { TypographyUI } from "@/shared/ui/Typography";
import { SelectUI } from "@/shared/ui/Select";
import { ButtonUI } from "@/shared/ui/Button";
import { useRef, useState } from "react";

const StateVsRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [show, setShow] = useState(false);

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (event.key === "Enter") {
      setShow(true);
    }
  };

  console.log(inputRef);

  return (
    <div>
      <p>{inputRef.current?.value}</p>
      <p>{show && inputRef.current?.value}</p>
      <input
        ref={inputRef}
        type="text"
        onKeyDown={handleKeyDown}
        style={{ color: "#000" }}
      />
    </div>
  );
};
type FormType = {
  username?: string;
  age?: number | undefined;
  hasError?: boolean;
  reason?: string;
};
const FeedbackSectionContainer = styled.section``;

export const FeedbackSection = () => {
  // const [username, setUsername] = useState("");
  // const [age, setAge] = useState<number | undefined>(undefined);
  // const [hasError, setHasError] = useState(false);
  // const [reason, setReason] = useState("help");

  const [form, setForm] = useState<FormType>({
    username: "",
    age: undefined,
    hasError: false,
    reason: "help",
  });

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setUsername(e.target.value);
    // setHasError(e.target.value.trim().length === 0);
    setForm((prev) => ({
      ...prev,
      username: e.target.value,
      hasError: e.target.value.trim().length === 0,
    }));
  };

  const onChangeAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10) || undefined;
    // setAge(value);
    // setHasError(e.target.value.trim().length === 0);
    setForm((prev) => ({
      ...prev,
      age: value,
      hasError: e.target.value.trim().length === 0,
    }));
  };

  const toggleError = () => {
    // setHasError((prev) => !prev);
    setForm((prev) => ({
      ...prev,
      hasError: !prev.hasError,
    }));
  };

  const onChangeReason = (selectedValue: string) => {
    // setReason(selectedValue);
    setForm((prev) => ({
      ...prev,
      reason: selectedValue,
    }));
  };

  return (
    <FeedbackSectionContainer>
      <TypographyUI.H3>Feedback:</TypographyUI.H3>
      <ButtonUI onClick={toggleError}>Toggle error</ButtonUI>
      <form action="submit">
        <TextfieldUI
          label={"Username"}
          value={form.username}
          onChange={onChangeUsername}
          error={form.hasError}
        />
        <TextfieldUI
          label={"Age"}
          value={form.age}
          type="number"
          onChange={onChangeAge}
          error={form.hasError}
        />
        <SelectUI
          id={"reason"}
          label={"Reason"}
          value={form.reason}
          onChange={onChangeReason}
          options={options}
        />
        <ButtonUI
          disabled={
            form.hasError ||
            !form.username ||
            form.age === undefined ||
            !form.reason
          }
        >
          Send
        </ButtonUI>

        <pre>{JSON.stringify(form, null, 2)}</pre>
      </form>
      <StateVsRef />
    </FeedbackSectionContainer>
  );
};

const options = [
  { value: "help", title: "Need help?" },
  { value: "error", title: "Some error" },
  { value: "suggest", title: "Suggest" },
];
