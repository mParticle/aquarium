import{W as D,j as s,y as m,X as g,u as b}from"./iframe-_QPLlW2H.js";const t=()=>{const[u,l]=m.useState(null),i=e=>e&&e.year()<2023,y=e=>{const a=Array.isArray(e)?e[0]:e;a&&i(a)?l(null):l(a)},p=(e,a)=>{if(!g.isDayjs(e))return a.originNode;const c=i(e),o=d=>{c&&(d.preventDefault(),d.stopPropagation())};return a.type==="year"&&c?s.jsx(b,{title:"Data is only available for years 2023 and onwards.",children:s.jsx("div",{className:"ant-picker-cell-inner",style:{color:"rgba(0, 0, 0, 0.25)",cursor:"not-allowed"},onClick:o,onMouseDown:o,onKeyDown:o,children:e.year()})}):a.originNode};return s.jsx(D,{picker:"year",cellRender:p,value:u,onChange:y})},f={title:"Components/Data Entry/Date Picker",component:D,args:{}},n={},r={render:()=>s.jsx(t,{})};r.parameters={docs:{source:{code:`
import React from 'react';
import { DatePicker } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { Tooltip } from 'src/components';

const DatePickerWithDisabledYears: React.FC = () => {
  const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(null);

  const disabledDate = (current: Dayjs): boolean => current && current.year() < 2023;

  const handleChange = (date: Dayjs | null) => {
    if (date && disabledDate(date)) {
      setSelectedDate(null);
    } else {
      setSelectedDate(date);
    }
  };

  const cellRender = (current: Dayjs, info: any) => {
    const isDisabled = disabledDate(current);

    const handleInteraction = (e: React.SyntheticEvent) => {
      if (isDisabled) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    if (info.type === 'year') {
      return isDisabled ? (
        <Tooltip title="Data is only available for years 2023 and onwards.">
          <div
            className="ant-picker-cell-inner"
            style={{ color: 'rgba(0, 0, 0, 0.25)', cursor: 'not-allowed' }}
            onClick={handleInteraction}
            onMouseDown={handleInteraction}
            onKeyDown={handleInteraction}
          >
            {current.year()}
          </div>
        </Tooltip>
      ) : (
        info.originNode
      );
    }

    return info.originNode;
  };

  return (
    <DatePicker
      picker="year"
      cellRender={cellRender}
      value={selectedDate}
      onChange={handleChange}
    />
  );
};
      `}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const disabledDate = (current: Dayjs): boolean => current && current.year() < 2023;
  const handleChange = (date: Dayjs | Dayjs[] | null) => {
    const singleDate = Array.isArray(date) ? date[0] : date;
    if (singleDate && disabledDate(singleDate)) {
      setSelectedDate(null);
    } else {
      setSelectedDate(singleDate);
    }
  };
  const cellRender: RcPickerCellRender<Dayjs> = (current: Dayjs | number | string, info: CellRenderInfo<Dayjs>) => {
    if (!dayjs.isDayjs(current)) {
      return info.originNode;
    }
    const isDisabled = disabledDate(current);
    const handleInteraction = (e: React.SyntheticEvent) => {
      if (isDisabled) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    if (info.type === 'year') {
      return isDisabled ? <Tooltip title="Data is only available for years 2023 and onwards.">
          <div className="ant-picker-cell-inner" style={{
          color: 'rgba(0, 0, 0, 0.25)',
          cursor: 'not-allowed'
        }} onClick={handleInteraction} onMouseDown={handleInteraction} onKeyDown={handleInteraction}>
            {current.year()}
          </div>
        </Tooltip> : info.originNode;
    }
    return info.originNode;
  };
  return <DatePicker picker="year" cellRender={cellRender} value={selectedDate} onChange={handleChange} />;
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <DatePickerWithDisabledYears />
}`,...r.parameters?.docs?.source}}};const h=["DatePickerWithDisabledYears","Primary","WithDisabledYears"],k=Object.freeze(Object.defineProperty({__proto__:null,DatePickerWithDisabledYears:t,Primary:n,WithDisabledYears:r,__namedExportsOrder:h,default:f},Symbol.toStringTag,{value:"Module"}));export{k as D,n as P,t as a};
