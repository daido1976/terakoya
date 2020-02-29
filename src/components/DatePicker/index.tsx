import React from "react";
import styles from "./index.module.scss";

type Props = {
  onChange: (_: any) => void;
  value?: string;
  min?: string;
};

export const DatePicker: React.FC<Props> = ({ onChange, value, min }) => {
  return (
    <div className={styles.myForm}>
      開催日{" "}
      <input
        className={styles.myFormInput}
        type="date"
        name="date"
        onChange={onChange}
        value={value}
        min={min}
      />
    </div>
  );
};
