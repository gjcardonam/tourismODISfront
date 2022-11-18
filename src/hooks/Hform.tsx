import { Ivalues, IformElements } from "../interfaces/Iform";
import { useState } from "react";
import React from "react";

export const useform = (initialvalues: Ivalues, handleSubmit: any) => {
  const [values, setValues] = useState(initialvalues);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const onSubmit = (event: React.FormEvent<IformElements>) => {
    event.preventDefault();
    handleSubmit(values);
  };
  return { values, onChange, onSubmit };
};
