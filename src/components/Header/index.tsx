import React, { useState } from "react";
import styles from "./index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

type Props = {
  searchForm: React.FunctionComponentElement<any>;
};

export const SearchFormToggleContext = React.createContext(() => {});

export const Header: React.FC<Props> = ({ searchForm }) => {
  const [showForm, onToggle] = useState(false);
  const toggleForm = () => {
    onToggle(!showForm);
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
          <SearchFormToggleContext.Provider value={toggleForm}>
            {searchForm}
          </SearchFormToggleContext.Provider>
        ) : null}
      </div>
    </div>
  );
};
