import cn from "classnames";
import styles from "./styles.module.scss";

interface TextfieldUIProps {
  label?: string;
  type?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Fix the function signature
  placeholder?: string;
  classes?: string;
}

export const TextfieldUI = ({
  classes,
  label,
  type,
  onChange,
  value,
  placeholder,
}: TextfieldUIProps) => {
  return (
    <>
      {label && <label htmlFor={"textfield"}>{label}</label>}
      <input
        id={"textfield"}
        className={cn(styles.textfield, classes)}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
};
