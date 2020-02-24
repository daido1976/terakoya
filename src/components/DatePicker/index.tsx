import React from "react";
import styles from "./index.module.scss";

export type Props = {
  onChange: (_: any) => void;
};

export const DatePicker: React.FC<Props> = ({ onChange }) => {
  return (
    <div>
      <input className={styles.myForm} type="date" onChange={onChange} />
    </div>
  );
};
