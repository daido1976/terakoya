import React from "react";
import styles from "./index.module.scss";

export type Props = {
  onChange: (_: any) => void;
  register?: () => void;
  min?: string;
};

export const DatePicker: React.FC<Props> = ({ onChange, register, min }) => {
  return (
    <div className={styles.myForm}>
      開催日{" "}
      <input
        className={styles.myFormInput}
        type="date"
        name="date"
        ref={register}
        onChange={onChange}
        min={min}
      />
    </div>
  );
};
