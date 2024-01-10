import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface IIconProps {
  icon: IconProp;
}

export const Icon = (props: IIconProps) => {
  return <>
    <FontAwesomeIcon {...props}></FontAwesomeIcon>
  </>;
};