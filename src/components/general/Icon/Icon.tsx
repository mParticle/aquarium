import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type IconProp } from "@fortawesome/fontawesome-svg-core";

export interface IIconProps {
  icon: IconProp;
}

export const Icon = (props: IIconProps) => {
  return (
    <>
      <FontAwesomeIcon {...props}></FontAwesomeIcon>
    </>
  );
};
