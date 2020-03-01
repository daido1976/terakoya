import React from "react";
import { useRouter } from "../hooks/useRouter";
import { Header as HeaderComponent } from "../components/Header";

export type SearchFormData = {
  date: string;
};
export type OnSearch = (data: SearchFormData) => void;

export const Header = () => {
  const router = useRouter();
  const onSearch: OnSearch = data => {
    router.history.push({ search: `?date=${data.date}` });
  };

  return (
    <div>
      <HeaderComponent onSearch={onSearch} />
    </div>
  );
};
