import React, { useState } from "react";
import styles from "./index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export type Props = {
  searchForm: React.FunctionComponentElement<any>;
};

export const Header: React.FC<Props> = ({ searchForm }) => {
  const [showForm, onToggle] = useState(false);

  return (
    <div>
      <div className={styles.myHeader}>
        <div className={styles.myHeaderTitle}>terakoya</div>
        <div
          className={styles.myHeaderSearch}
          onClick={() => onToggle(prev => (prev ? false : true))}
        >
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
      <div className={styles.myForm}>{showForm ? searchForm : null}</div>
    </div>
  );
};
