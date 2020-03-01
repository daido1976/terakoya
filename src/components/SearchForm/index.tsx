import React, { useContext } from "react";
import { useSearchForm, SearchFormData } from "../../hooks/useSearchForm";
import styles from "./index.module.scss";
import { DatePicker } from "../DatePicker";
import { SearchFormToggleContext } from "../Header";
import { OnSearch } from "../../containers/Header";
import { todayKebabCase } from "../../utils/time";

type Props = {
  onSearch: OnSearch;
  initialValues: SearchFormData;
};

export const SearchForm: React.FC<Props> = ({ onSearch, initialValues }) => {
  const toggleForm = useContext(SearchFormToggleContext);
  const [searchFormData, dispatch] = useSearchForm(initialValues);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "UPDATE",
      payload: {
        field: event.target.name,
        value: event.target.value
      }
    });
  };

  return (
    <div className={styles.myForm}>
      <DatePicker
        onChange={onChange}
        value={searchFormData.date}
        min={todayKebabCase()}
      ></DatePicker>
      <button
        className={styles.myFormButton}
        type="button"
        onClick={() => {
          onSearch(searchFormData);
          toggleForm();
        }}
      >
        検索する
      </button>
    </div>
  );
};
