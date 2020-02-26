import React, { useReducer } from "react";
import styles from "./index.module.scss";
import { DatePicker } from "../DatePicker";
import { OnSearch, SearchFormData } from "../../containers/Main";

type Props = {
  onSearch: OnSearch;
};

const initialFormData: SearchFormData = {
  date: ""
};

const reducer = (
  searchFormData: SearchFormData,
  { field, value }: { field: string; value: string }
) => {
  return {
    ...searchFormData,
    [field]: value
  };
};

export const SearchForm: React.FC<Props> = ({ onSearch }) => {
  const [searchFormData, dispatch] = useReducer(reducer, initialFormData);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ field: event.target.name, value: event.target.value });
  };

  return (
    <div className={styles.myForm}>
      <DatePicker onChange={onChange}></DatePicker>
      <button
        className={styles.myFormButton}
        type="button"
        onClick={() => onSearch(searchFormData)}
      >
        検索する
      </button>
    </div>
  );
};
