import cn from "classnames";
import styles from "./styles.module.scss";

interface TextfieldUIProps {
  label?: string;
  type?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  classes?: string;
  style?: React.CSSProperties;
  error?: string | boolean;
}

export const TextfieldUI = ({
  classes,
  label,
  type,
  onChange,
  value,
  placeholder,
  style,
  error,
}: TextfieldUIProps) => {
  return (
    <>
      {label && <label htmlFor={"textfield"}>{label}</label>}
      <input
        id={"textfield"}
        className={cn(styles.textfield, error && styles.hasError, classes)}
        style={style}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
};
