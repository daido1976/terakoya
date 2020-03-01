import { useReducer } from "react";

export type SearchFormData = {
  date: string;
};

type Action = {
  type: "UPDATE";
  payload: {
    field: string;
    value: string;
  };
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

export const useSearchForm = (initialState: SearchFormData) => {
  return useReducer(reducer, initialState);
};
