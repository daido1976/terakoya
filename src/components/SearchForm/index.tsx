import React from "react";
import { useForm } from "react-hook-form";
import styles from "./index.module.scss";
import { DatePicker } from "../DatePicker";

export type Props = {
  onSearch: (_: any) => void;
};

export const SearchForm: React.FC<Props> = ({ onSearch }) => {
  const { handleSubmit, register } = useForm();

  return (
    <div>
      <form className={styles.myForm} onSubmit={handleSubmit(onSearch)}>
        <DatePicker onChange={() => {}} register={register}></DatePicker>
        <input className={styles.myFormButton} type="submit" value="検索する" />
      </form>
    </div>
  );
};
