import React from "react";
import { Empty as AntEmpty , type EmptyProps as AntEmptyProps } from "antd";


export interface IEmptyProps extends AntEmptyProps {}

export const Empty = (props: IEmptyProps) => {
  return (
    <>
      <AntEmpty {...props} />
    </>
  );
};

Empty.PRESENTED_IMAGE_DEFAULT = AntEmpty.PRESENTED_IMAGE_DEFAULT;
Empty.PRESENTED_IMAGE_SIMPLE = AntEmpty.PRESENTED_IMAGE_SIMPLE;
