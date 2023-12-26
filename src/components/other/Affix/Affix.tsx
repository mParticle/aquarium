import React from "react";
import { Affix as AntAffix } from "antd";
import { AffixProps as AntAffixProps } from "antd";

export interface IAffixProps extends AntAffixProps {
}

export const Affix = (props: IAffixProps) => {
  return <>
    <AntAffix {...props}/>
  </>;
};