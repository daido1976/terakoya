import React, { useState } from "react";
import styles from "./index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { SearchForm } from "../SearchForm";

export type Props = {
  onSearch: (_: any) => void;
};

export const Header: React.FC<Props> = ({ onSearch }) => {
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
      <div className={styles.myForm}>
        {showForm ? <SearchForm onSearch={onSearch}></SearchForm> : null}
      </div>
    </div>
  );
};
