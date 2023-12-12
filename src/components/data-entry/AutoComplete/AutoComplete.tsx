import React from "react";
import { AutoComplete as AntAutoComplete } from "antd";
import { AutoCompleteProps as AntAutoCompleteProps } from "antd";

export interface IAutoCompleteProps extends AntAutoCompleteProps {
}

export const AutoComplete = (props: IAutoCompleteProps) => {
  return <>
    <AntAutoComplete {...props}/>
  </>;
};