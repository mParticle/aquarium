import { Anchor as AntAnchor, type AnchorProps as AntAnchorProps } from "antd";

export interface IAnchorProps extends AntAnchorProps {}

export const Anchor = (props: IAnchorProps) => {
  return (
    <>
      <AntAnchor {...props} />
    </>
  );
};
