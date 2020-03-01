import React from "react";
import { useRouter } from "../hooks/useRouter";
import { SearchFormData } from "../hooks/useSearchForm";
import { Header as HeaderComponent } from "../components/Header";
import { SearchForm } from "../components/SearchForm";
import { todayKebabCase } from "../utils/time";

export type OnSearch = (data: SearchFormData) => void;

export const Header = () => {
  const router = useRouter();
  const onSearch: OnSearch = data => {
    router.history.push({ search: `?date=${data.date}` });
  };

  const query: any = router.query;
  const initialFormData: SearchFormData = {
    date: query.date || todayKebabCase()
  };

  const searchForm = (
    <SearchForm onSearch={onSearch} initialValues={initialFormData} />
  );

  return (
    <div>
      <HeaderComponent searchForm={searchForm} />
    </div>
  );
};
