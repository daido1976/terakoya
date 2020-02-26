import React, { useReducer } from "react";
import styles from "./index.module.scss";
import { DatePicker } from "../DatePicker";

export type Props = {
  onSearch: (_: any) => void;
};

type State = {
  date: string;
};

const initialState: State = {
  date: ""
};

const reducer = (state: State, { field, value }: any) => {
  return {
    ...state,
    [field]: value
  };
};

export const SearchForm: React.FC<Props> = ({ onSearch }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const onChange = (event: { target: { name: string; value: string } }) => {
    dispatch({ field: event.target.name, value: event.target.value });
  };

  return (
    <div className={styles.myForm}>
      <DatePicker onChange={onChange}></DatePicker>
      <button
        className={styles.myFormButton}
        type="button"
        onClick={() => onSearch(state)}
      >
        検索する
      </button>
    </div>
  );
};
