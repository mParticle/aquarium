import React from "react";
import { LoadingModal } from "../LoadingModal/LoadingModal";
import { ILoadingModalProps } from "../LoadingModal/LoadingModal";
import { Input } from "src/components/Input/Input";
import { Dropdown } from "src/components/Dropdown/Dropdown";
import { Button } from "src/components/Button/Button";
import { ItemType } from "antd/es/menu/hooks/useItems";
import { DatePicker } from "src/components/DatePicker/DatePicker";

export interface IAnnotationModalProps extends Omit<ILoadingModalProps<iAnnotationModel>, "fetchData" | "children"> {
}

interface iAnnotationModel {
  title: string;
  description: string;
  startDate: Date;
  events: { name: string; }[];
}


export function AnnotationModal(props: IAnnotationModalProps) {

  const fetchAnnotations = () => new Promise<iAnnotationModel>((resolve, reject) => setTimeout(() => resolve(
    {
      title: "title",
      description: "description",
      startDate: new Date(),
      events: [{ name: "event1" }, { name: "event2" }],
    }), 500));


  return <>
    <LoadingModal<iAnnotationModel> {...props}
                                    open={true}
                                    fetchData={fetchAnnotations}>

      {initData => <>
        <Input placeholder="title"></Input>

        <br/><br/>

        <Input placeholder="description"></Input>

        <br/><br/>

        <DatePicker size={"large"}></DatePicker>

        <br/><br/>

        <Dropdown dropdownButton={<Button copy="Events Dropdown"/>}
                  menu={{ items: initData.events.map(event => ({ value: event.name, label: event.name, type: "group" } as ItemType)) }}>
        </Dropdown>

      </>}

    </LoadingModal>
  </>;

}