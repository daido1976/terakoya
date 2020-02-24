import React from "react";
import styles from "./index.module.scss";

export type Props = {
  onChange: (_: any) => void;
  min?: string;
};

export const DatePicker: React.FC<Props> = ({ onChange, min }) => {
  return (
    <div>
      <input
        className={styles.myForm}
        type="date"
        onChange={onChange}
        min={min}
      />
    </div>
  );
};
