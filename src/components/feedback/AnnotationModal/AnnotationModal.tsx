import React from "react";
import { LoadingModal , type ILoadingModalProps } from "src/components/feedback/LoadingModal/LoadingModal";

import { DatePicker } from "src/components/data-entry/DatePicker/DatePicker";
import { Dropdown } from "src/components/navigation/Dropdown/Dropdown";
import { Input } from "src/components/data-entry/Input/Input";
import { Flex } from "src/components/layout/Flex/Flex";
import { Button } from "src/components/general/Button/Button";
import { type ItemType } from "antd/es/menu/hooks/useItems";

export interface IAnnotationModalProps
  extends Omit<
    ILoadingModalProps<iAnnotationModel>,
    "fetchData" | "children"
  > {}

interface iAnnotationModel {
  title: string;
  description: string;
  startDate: Date;
  events: Array<{ name: string }>;
}

export function AnnotationModal(props: IAnnotationModalProps) {
  const fetchAnnotations = async () =>
    await new Promise<iAnnotationModel>((resolve, reject) =>
      setTimeout(
        () =>
          { resolve({
            title: "title",
            description: "description",
            startDate: new Date(),
            events: [{ name: "event1" }, { name: "event2" }],
          }); },
        500,
      ),
    );

  return (
    <>
      <LoadingModal<iAnnotationModel>
        {...props}
        open={true}
        fetchData={fetchAnnotations}
      >
        {(initData) => (
          <>
            <Flex vertical gap={"middle"}>
              <Input placeholder="title"></Input>

              <Input placeholder="description"></Input>

              <DatePicker size={"large"}></DatePicker>

              <Dropdown
                menu={{
                  items: initData.events.map(
                    (event) =>
                      ({
                        value: event.name,
                        label: event.name,
                        type: "group",
                      }) as ItemType,
                  ),
                }}
              >
                <Button>Events Dropdown</Button>
              </Dropdown>
            </Flex>
          </>
        )}
      </LoadingModal>
    </>
  );
}
