import { Tag as AntTag } from "antd";
import { TagProps as AntTagProps } from "antd";
import { CheckableTagProps as AntCheckableTagProps } from "antd/lib/tag";

export interface ITagProps extends AntTagProps {}

/**
 * Ant's Tag.CheckableTag props for some reason are not very well typed so we have to do this
 * to make autocomplete work correctly
 */
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
