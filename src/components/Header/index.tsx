import React, { useState } from "react";
import styles from "./index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { SearchForm } from "../SearchForm";
import { OnSearch } from "../../containers/Main";

type Props = {
  onSearch: OnSearch;
};

export const Header: React.FC<Props> = ({ onSearch }) => {
  const [showForm, onToggle] = useState(false);
  const toggleForm = () => {
    onToggle(prev => (prev ? false : true));
  };

  return (
    <div>
      <div className={styles.myHeader}>
        <div className={styles.myHeaderTitle}>terakoya</div>
        <div className={styles.myHeaderSearch} onClick={toggleForm}>
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
      <div className={styles.myForm}>
        {showForm ? (
          <SearchForm onSearch={onSearch} toggleForm={toggleForm}></SearchForm>
        ) : null}
      </div>
    </div>
  );
};
