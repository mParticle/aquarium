import{j as o}from"./jsx-runtime-u17CrQMm.js";import{r as D,s as m,i as f}from"./UnauthorizedTooltip-DInzTCbR.js";import"./ErrorStateIcon-N5tZzBSe.js";import"./SuccessStateIcon-jdQomLYr.js";import"./WarningStateIcon-BOAINRnk.js";import{r as g}from"./iframe-DPsSDxI5.js";const t=()=>{const[u,i]=g.useState(null),l=e=>e&&e.year()<2023,y=e=>{const a=Array.isArray(e)?e[0]:e;a&&l(a)?i(null):i(a)},p=(e,a)=>{if(!m.isDayjs(e))return a.originNode;const c=l(e),s=d=>{c&&(d.preventDefault(),d.stopPropagation())};return a.type==="year"&&c?o.jsx(f,{title:"Data is only available for years 2023 and onwards.",children:o.jsx("div",{className:"ant-picker-cell-inner",style:{color:"rgba(0, 0, 0, 0.25)",cursor:"not-allowed"},onClick:s,onMouseDown:s,onKeyDown:s,children:e.year()})}):a.originNode};return o.jsx(D,{picker:"year",cellRender:p,value:u,onChange:y})},b={title:"Components/Data Entry/Date Picker",component:D,args:{}},n={},r={render:()=>o.jsx(t,{})};r.parameters={docs:{source:{code:`
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
}`,...r.parameters?.docs?.source}}};const h=["DatePickerWithDisabledYears","Primary","WithDisabledYears"],C=Object.freeze(Object.defineProperty({__proto__:null,DatePickerWithDisabledYears:t,Primary:n,WithDisabledYears:r,__namedExportsOrder:h,default:b},Symbol.toStringTag,{value:"Module"}));export{C as D,n as P,t as a};
