import React from "react";
import { Tour as AntTour } from "antd";
import { TourProps as AntTourProps } from "antd";

export interface ITourProps extends AntTourProps {}

export const Tour = (props: ITourProps) => {
  return (
    <>
      <AntTour {...props} />
    </>
  );
};
