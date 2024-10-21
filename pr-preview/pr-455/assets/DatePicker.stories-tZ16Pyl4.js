var v=Object.defineProperty,x=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var u=(a,e,t)=>e in a?v(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,o=(a,e)=>{for(var t in e||(e={}))R.call(e,t)&&u(a,t,e[t]);if(m)for(var t of m(e))w.call(e,t)&&u(a,t,e[t]);return a},s=(a,e)=>x(a,C(e));import{j as c}from"./jsx-runtime-BcCOBRXo.js";import{h as k,f as N}from"./GlobalNavigation-Cez-TZ7Q.js";import"./ConfigProvider-BRwLXval.js";import"./_baseClone-BjCwUuX-.js";import{d as W}from"./dayjs.min-KGLNs1IR.js";import{r as _}from"./index-CNk6hRaE.js";const E=()=>{const[a,e]=_.useState(null),t=r=>r&&r.year()<2023,P=r=>{r&&t(r)?e(null):e(r)},S=(r,l)=>{if(!W.isDayjs(r))return l.originNode;const D=t(r),d=p=>{D&&(p.preventDefault(),p.stopPropagation())};return l.type==="year"&&D?c.jsx(N,{title:"Data is only available for years 2023 and onwards.",children:c.jsx("div",{className:"ant-picker-cell-inner",style:{color:"rgba(0, 0, 0, 0.25)",cursor:"not-allowed"},onClick:d,onMouseDown:d,onKeyDown:d,children:r.year()})}):l.originNode};return c.jsx(k,{picker:"year",cellRender:S,value:a,onChange:P})},I={title:"Components/Data Entry/Date Picker",component:k,args:{}},i={},n={render:()=>c.jsx(E,{})};n.parameters={docs:{source:{code:`
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
      `}}};var y,f,h;i.parameters=s(o({},i.parameters),{docs:s(o({},(y=i.parameters)==null?void 0:y.docs),{source:o({originalSource:"{}"},(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source)})});var b,g,j;n.parameters=s(o({},n.parameters),{docs:s(o({},(b=n.parameters)==null?void 0:b.docs),{source:o({originalSource:`{
  render: () => <DatePickerWithDisabledYears />
}`},(j=(g=n.parameters)==null?void 0:g.docs)==null?void 0:j.source)})});const T=["Primary","WithDatePickerWithDisabledYears"],A=Object.freeze(Object.defineProperty({__proto__:null,Primary:i,WithDatePickerWithDisabledYears:n,__namedExportsOrder:T,default:I},Symbol.toStringTag,{value:"Module"}));export{A as D,I as m};
