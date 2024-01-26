import { useState, ChangeEvent } from "react";

export const useInput = (defaultValue = "") => {
  const [value, setValue] = useState(defaultValue);

  return {
    value,
    onChange: (event: ChangeEvent<HTMLInputElement>) =>
      setValue(event.target.value),
  };
};
