import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { ConfigProvider as ConfigProvider$1, Button as Button$1, FloatButton as FloatButton$1, Rate as Rate$1, Form as Form$1, TreeSelect as TreeSelect$1, Select as Select$1, Mentions as Mentions$1, Radio as Radio$1, ColorPicker as ColorPicker$1, Slider as Slider$1, Cascader as Cascader$1, DatePicker as DatePicker$1, Checkbox as Checkbox$1, Input as Input$1, InputNumber as InputNumber$1, Switch as Switch$1, Upload as Upload$1, AutoComplete as AutoComplete$1, TimePicker as TimePicker$1, Transfer as Transfer$1, Collapse as Collapse$1, Timeline as Timeline$1, Calendar as Calendar$1, Segmented as Segmented$1, Tabs as Tabs$1, Tag as Tag$1, Tour as Tour$1, Carousel as Carousel$1, Tooltip as Tooltip$1, Statistic as Statistic$1, Tree as Tree$1, Image as Image$1, QRCode as QRCode$1, Badge as Badge$1, Card as Card$1, Avatar as Avatar$1, Descriptions as Descriptions$1, Table as Table$1, Empty as Empty$1, Popover as Popover$1, List as List$1, Progress as Progress$1, Result as Result$1, Spin as Spin$1, Skeleton as Skeleton$1, Watermark as Watermark$1, Popconfirm as Popconfirm$1, Drawer as Drawer$1, Modal as Modal$1, notification, Alert as Alert$1, message, Flex as Flex$1, Divider as Divider$1, Space as Space$1, Layout as Layout$1, Steps as Steps$1, Anchor as Anchor$1, Dropdown as Dropdown$1, Breadcrumb as Breadcrumb$1, Pagination as Pagination$1, Menu as Menu$1, Affix as Affix$1, App as App$1 } from "antd";
import { Col, Grid, Row } from "antd";
import { useEffect, useState } from "react";
const Button = (props) => /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(ConfigProvider$1, { children: /* @__PURE__ */ jsx(Button$1, { ...props, children: props.children }) }) });
const FloatButton = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(FloatButton$1, { ...props }) });
};
const Rate = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Rate$1, { ...props }) });
};
const Form = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Form$1, { ...props, children: props.children }) });
};
const TreeSelect = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(TreeSelect$1, { ...props }) });
};
const Select = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Select$1, { ...props }) });
};
const Mentions = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Mentions$1, { ...props }) });
};
const Radio = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Radio$1, { ...props }) });
};
Radio.Group = Radio$1.Group;
Radio.Button = Radio$1.Button;
const ColorPicker = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(ColorPicker$1, { ...props }) });
};
const Slider = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Slider$1, { ...props }) });
};
const Cascader = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Cascader$1, { ...props }) });
};
Cascader.Panel = Cascader$1.Panel;
Cascader.SHOW_PARENT = Cascader$1.SHOW_PARENT;
Cascader.SHOW_CHILD = Cascader$1.SHOW_CHILD;
const DatePicker = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(DatePicker$1, { ...props }) });
};
const Checkbox = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Checkbox$1, { ...props }) });
};
Checkbox.Group = Checkbox$1.Group;
const Input = (props) => /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Input$1, { ...props }) });
Input.Group = Input$1.Group;
Input.Password = Input$1.Password;
Input.Search = Input$1.Search;
Input.TextArea = Input$1.TextArea;
const InputNumber = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(InputNumber$1, { ...props }) });
};
const Switch = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Switch$1, { ...props }) });
};
const Upload = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Upload$1, { ...props }) });
};
const AutoComplete = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(AutoComplete$1, { ...props }) });
};
const TimePicker = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(TimePicker$1, { ...props }) });
};
const Transfer = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Transfer$1, { ...props }) });
};
const Collapse = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Collapse$1, { ...props }) });
};
const Timeline = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Timeline$1, { ...props }) });
};
const Calendar = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Calendar$1, { ...props }) });
};
const Segmented = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Segmented$1, { ...props }) });
};
const Tabs = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Tabs$1, { ...props }) });
};
const Tag = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Tag$1, { ...props }) });
};
const Tour = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Tour$1, { ...props }) });
};
const Carousel = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Carousel$1, { ...props }) });
};
const Tooltip = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Tooltip$1, { ...props }) });
};
const Statistic = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Statistic$1, { ...props }) });
};
const Tree = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Tree$1, { ...props }) });
};
const Image = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Image$1, { ...props }) });
};
const QRCode = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(QRCode$1, { ...props }) });
};
const Badge = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Badge$1, { ...props }) });
};
const Card = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Card$1, { ...props }) });
};
const Avatar = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Avatar$1, { ...props }) });
};
const Descriptions = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Descriptions$1, { ...props }) });
};
const Table = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Table$1, { ...props }) });
};
const Empty = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Empty$1, { ...props }) });
};
Empty.PRESENTED_IMAGE_DEFAULT = Empty$1.PRESENTED_IMAGE_DEFAULT;
Empty.PRESENTED_IMAGE_SIMPLE = Empty$1.PRESENTED_IMAGE_SIMPLE;
const Popover = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Popover$1, { ...props }) });
};
const List = (props) => /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(List$1, { ...props }) });
List.Item = List$1.Item;
const Progress = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Progress$1, { ...props }) });
};
const Result = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Result$1, { ...props }) });
};
const Spin = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Spin$1, { ...props }) });
};
const Skeleton = (props) => {
  const defaultWidth = "100%";
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    Skeleton$1,
    {
      ...props,
      active: true,
      style: { width: defaultWidth, ...props.style }
    }
  ) });
};
const Watermark = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Watermark$1, { ...props }) });
};
const Popconfirm = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Popconfirm$1, { ...props }) });
};
const Drawer = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Drawer$1, { ...props }) });
};
const Modal = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Modal$1, { ...props }) });
};
const Notification = (props) => {
  const [notificationApi, contextHolder] = notification.useNotification();
  const open = () => {
    notificationApi.open({ ...props });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    contextHolder,
    /* @__PURE__ */ jsx("span", { onClick: open, children: props.children })
  ] });
};
const Alert = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Alert$1, { ...props }) });
};
Alert.ErrorBoundary = Alert$1.ErrorBoundary;
const Message = (props) => {
  const [messageApi, contextHolder] = message.useMessage();
  const open = () => {
    messageApi.open({ ...props });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    contextHolder,
    /* @__PURE__ */ jsx("span", { onClick: open, children: props.children })
  ] });
};
const useMount = (mount) => useEffect(mount, []);
function useInitData(fetchData) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [resolveData, setResolveData] = useState(void 0);
  useMount(() => {
    fetchData().then((data) => {
      setResolveData(data);
    }).catch(() => {
      setIsError(true);
    }).finally(() => {
      setIsLoading(false);
    });
  });
  return [isLoading, isError, resolveData];
}
function LoadingModal(props) {
  const [isInitLoading, isInitError, initData] = useInitData(props.fetchData);
  if (initData)
    debugger;
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(Modal, { ...props, children: [
    isInitLoading && /* @__PURE__ */ jsx(Skeleton, {}),
    isInitError && /* @__PURE__ */ jsx(
      Result,
      {
        status: "error",
        title: "Error Loading"
      }
    ),
    !isInitLoading && !isInitError && props.children(initData)
  ] }) });
}
const Flex = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Flex$1, { ...props }) });
};
const Divider = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Divider$1, { ...props }) });
};
const Space = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Space$1, { ...props }) });
};
const Layout = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Layout$1, { ...props }) });
};
Layout.Sider = Layout$1.Sider;
Layout.Footer = Layout$1.Footer;
Layout.Content = Layout$1.Content;
Layout.Header = Layout$1.Header;
const Steps = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Steps$1, { ...props }) });
};
const Anchor = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Anchor$1, { ...props }) });
};
const Dropdown = (props) => /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Dropdown$1, { ...props, children: props.children }) });
Dropdown.Button = Dropdown$1.Button;
const Breadcrumb = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Breadcrumb$1, { ...props }) });
};
const Pagination = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Pagination$1, { ...props }) });
};
const Menu = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Menu$1, { ...props }) });
};
const ConfigProvider = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(ConfigProvider$1, { ...props }) });
};
const Affix = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Affix$1, { ...props }) });
};
const App = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(App$1, { ...props }) });
};
export {
  Affix,
  Alert,
  Anchor,
  App,
  AutoComplete,
  Avatar,
  Badge,
  Breadcrumb,
  Button,
  Calendar,
  Card,
  Carousel,
  Cascader,
  Checkbox,
  Col,
  Collapse,
  ColorPicker,
  ConfigProvider,
  DatePicker,
  Descriptions,
  Divider,
  Drawer,
  Dropdown,
  Empty,
  Flex,
  FloatButton,
  Form,
  Grid,
  Image,
  Input,
  InputNumber,
  Layout,
  List,
  LoadingModal,
  Mentions,
  Menu,
  Message,
  Modal,
  Notification,
  Pagination,
  Popconfirm,
  Popover,
  Progress,
  QRCode,
  Radio,
  Rate,
  Result,
  Row,
  Segmented,
  Select,
  Skeleton,
  Slider,
  Space,
  Spin,
  Statistic,
  Steps,
  Switch,
  Table,
  Tabs,
  Tag,
  TimePicker,
  Timeline,
  Tooltip,
  Tour,
  Transfer,
  Tree,
  TreeSelect,
  Upload,
  Watermark
};
