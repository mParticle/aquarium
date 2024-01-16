import React from "react";
import { App as AntApp , type AppProps as AntAppProps } from "antd";


export interface IAppProps extends AntAppProps {}

export const App = (props: IAppProps) => {
  return (
    <>
      <AntApp {...props} />
    </>
  );
};
