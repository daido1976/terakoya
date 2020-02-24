import React from "react";
import styles from "./index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export type Props = {
  onSearch: (_: any) => void;
};

export const Header: React.FC<Props> = ({ onSearch }) => {
  return (
    <div className={styles.myHeader}>
      <div className={styles.myHeaderTitle}>terakoya</div>
      <div className={styles.myHeaderSearch} onClick={() => {}}>
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </div>
  );
};
