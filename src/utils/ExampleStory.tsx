import { Space } from "src/components";

interface IExampleStoryProps {
  children: React.ReactNode;
  title: React.ReactNode;
}

export function ExampleStory(props: IExampleStoryProps) {
  return (
    <>
      <Space direction="vertical">
        {props.title}
        <hr />
        <br />
        {props.children}
      </Space>
    </>
  );
}
