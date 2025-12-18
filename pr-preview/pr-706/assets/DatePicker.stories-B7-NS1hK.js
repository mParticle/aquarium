var N=Object.defineProperty,I=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var m=(t,e,a)=>e in t?N(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,n=(t,e)=>{for(var a in e||(e={}))T.call(e,a)&&m(t,a,e[a]);if(y)for(var a of y(e))E.call(e,a)&&m(t,a,e[a]);return t},s=(t,e)=>I(t,x(e));import{j as d}from"./jsx-runtime-GRP_BLAX.js";import{D as R,d as W,T as Y}from"./NavigationItemsService-bN03Ttq5.js";import"./ErrorStateIcon-BDqumtIe.js";import"./SuccessStateIcon-CaXEMaF4.js";import"./WarningStateIcon-Z0wE8OWa.js";import"./_baseClone-BJQa_8Hx.js";import{r as _}from"./index-CNk6hRaE.js";const i=()=>{const[t,e]=_.useState(null),a=r=>r&&r.year()<2023,C=r=>{const o=Array.isArray(r)?r[0]:r;o&&a(o)?e(null):e(o)},w=(r,o)=>{if(!W.isDayjs(r))return o.originNode;const u=a(r),D=p=>{u&&(p.preventDefault(),p.stopPropagation())};return o.type==="year"&&u?d.jsx(Y,{title:"Data is only available for years 2023 and onwards.",children:d.jsx("div",{className:"ant-picker-cell-inner",style:{color:"rgba(0, 0, 0, 0.25)",cursor:"not-allowed"},onClick:D,onMouseDown:D,onKeyDown:D,children:r.year()})}):o.originNode};return d.jsx(R,{picker:"year",cellRender:w,value:t,onChange:C})},A={title:"Components/Data Entry/Date Picker",component:R,args:{}},c={},l={render:()=>d.jsx(i,{})};l.parameters={docs:{source:{code:`
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
      `}}};var f,g,b;i.parameters=s(n({},i.parameters),{docs:s(n({},(f=i.parameters)==null?void 0:f.docs),{source:n({originalSource:`() => {
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
}`},(b=(g=i.parameters)==null?void 0:g.docs)==null?void 0:b.source)})});var h,j,k;c.parameters=s(n({},c.parameters),{docs:s(n({},(h=c.parameters)==null?void 0:h.docs),{source:n({originalSource:"{}"},(k=(j=c.parameters)==null?void 0:j.docs)==null?void 0:k.source)})});var P,S,v;l.parameters=s(n({},l.parameters),{docs:s(n({},(P=l.parameters)==null?void 0:P.docs),{source:n({originalSource:`{
  render: () => <DatePickerWithDisabledYears />
}`},(v=(S=l.parameters)==null?void 0:S.docs)==null?void 0:v.source)})});const M=["DatePickerWithDisabledYears","Primary","WithDisabledYears"],J=Object.freeze(Object.defineProperty({__proto__:null,DatePickerWithDisabledYears:i,Primary:c,WithDisabledYears:l,__namedExportsOrder:M,default:A},Symbol.toStringTag,{value:"Module"}));export{J as D,c as P,i as a};
