import React from "react";
import { Select as AntSelect } from "antd";
import { SelectProps as AntSelectProps } from "antd";
import { BaseOptionType, DefaultOptionType } from "antd/es/select";

export interface ISelectProps<ValueType = any, OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType> extends AntSelectProps<ValueType, OptionType> {
}

export const Select = (props: ISelectProps) => {
  return <>
    <AntSelect {...props}/>
  </>;
};