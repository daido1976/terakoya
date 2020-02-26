import React from "react";
import styles from "./index.module.scss";

export type Props = {
  onChange: (_: any) => void;
  min?: string;
};

export const DatePicker: React.FC<Props> = ({ onChange, min }) => {
  return (
    <div className={styles.myForm}>
      開催日{" "}
      <input
        className={styles.myFormInput}
        type="date"
        name="date"
        onChange={onChange}
        min={min}
      />
    </div>
  );
};
