import cn from "classnames";
import styles from "./styles.module.scss";

type OptionType = {
  value: string;
  title: string;
};

interface SelectUIProps {
  id?: string;
  label?: string;
  classes?: string;
  options?: Array<OptionType>;
  value?: string;
  onChange?: (selectedValue: string) => void;
}

export const SelectUI = ({
  id,
  label,
  classes,
  value,
  onChange,
  options,
}: SelectUIProps) => {
  const uniqueId = id || "select";

  return (
    <>
      {label && <label htmlFor={uniqueId}>{label}</label>}
      <select
        id={uniqueId}
        className={cn(styles.select, classes)}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      >
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.title}
          </option>
        ))}
      </select>
    </>
  );
};
