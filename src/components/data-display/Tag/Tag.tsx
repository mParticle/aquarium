import { Tag as AntTag } from "antd";
import { TagProps as AntTagProps } from "antd";
import { CheckableTagProps as AntCheckableTagProps } from "antd/lib/tag";

export interface ITagProps extends AntTagProps {}

type CheckableTagProps = AntCheckableTagProps & ITagProps;

export const Tag = (props: ITagProps) => {
  return (
    <>
      <AntTag {...props} />
    </>
  );
};

Tag.CheckableTag = (props: CheckableTagProps) => {
  return (
    <>
      <AntTag.CheckableTag {...props} />
    </>
  );
};
