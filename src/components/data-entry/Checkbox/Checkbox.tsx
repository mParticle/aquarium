import React from "react";
import { Checkbox as AntCheckbox } from "antd";
import { CheckboxProps as AntCheckboxProps } from "antd";

export interface ICheckboxProps extends AntCheckboxProps {}

export const Checkbox = (props: ICheckboxProps) => {
  return (
    <>
      <AntCheckbox {...props} />
    </>
  );
};
