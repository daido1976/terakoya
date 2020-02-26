import React, { useReducer } from "react";
import styles from "./index.module.scss";
import { DatePicker } from "../DatePicker";
import { OnSearch, SearchFormData } from "../../containers/Main";

type Props = {
  onSearch: OnSearch;
  toggleForm?: () => void;
};

type Action = {
  type: "UPDATE";
  payload: {
    field: string;
    value: string;
  };
};

const initialFormData: SearchFormData = {
  date: ""
};

const reducer = (prevFormData: SearchFormData, action: Action) => {
  switch (action.type) {
    case "UPDATE": {
      const { payload } = action;
      return {
        ...prevFormData,
        [payload.field]: payload.value
      };
    }
    default:
      return prevFormData;
  }
};

export const SearchForm: React.FC<Props> = ({
  onSearch,
  toggleForm = () => {}
}) => {
  const [searchFormData, dispatch] = useReducer(reducer, initialFormData);
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
      <DatePicker onChange={onChange}></DatePicker>
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
