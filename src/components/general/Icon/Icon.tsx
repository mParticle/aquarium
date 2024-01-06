import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

export interface IIconProps extends FontAwesomeIconProps {
}

export const Icon = (props: IIconProps) => {
  return <>
    <FontAwesomeIcon {...props}></FontAwesomeIcon>
  </>;
};