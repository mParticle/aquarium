var N=Object.defineProperty,I=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var m=(t,e,a)=>e in t?N(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,n=(t,e)=>{for(var a in e||(e={}))T.call(e,a)&&m(t,a,e[a]);if(y)for(var a of y(e))E.call(e,a)&&m(t,a,e[a]);return t},o=(t,e)=>I(t,x(e));import{j as d}from"./jsx-runtime-BcCOBRXo.js";import{D as R,d as W,T as Y}from"./NavigationItemsService-CsFXae_V.js";import"./_baseClone-DBzvlRjn.js";import{r as _}from"./index-CNk6hRaE.js";const s=()=>{const[t,e]=_.useState(null),a=r=>r&&r.year()<2023,C=r=>{r&&a(r)?e(null):e(r)},w=(r,c)=>{if(!W.isDayjs(r))return c.originNode;const u=a(r),D=p=>{u&&(p.preventDefault(),p.stopPropagation())};return c.type==="year"&&u?d.jsx(Y,{title:"Data is only available for years 2023 and onwards.",children:d.jsx("div",{className:"ant-picker-cell-inner",style:{color:"rgba(0, 0, 0, 0.25)",cursor:"not-allowed"},onClick:D,onMouseDown:D,onKeyDown:D,children:r.year()})}):c.originNode};return d.jsx(R,{picker:"year",cellRender:w,value:t,onChange:C})},M={title:"Components/Data Entry/Date Picker",component:R,args:{}},i={},l={render:()=>d.jsx(s,{})};l.parameters={docs:{source:{code:`
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
      `}}};var f,h,b;s.parameters=o(n({},s.parameters),{docs:o(n({},(f=s.parameters)==null?void 0:f.docs),{source:n({originalSource:`() => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const disabledDate = (current: Dayjs): boolean => current && current.year() < 2023;
  const handleChange = (date: Dayjs | null) => {
    if (date && disabledDate(date)) {
      setSelectedDate(null);
    } else {
      setSelectedDate(date);
    }
  };
  const cellRender: RcPickerCellRender<Dayjs> = (current, info: CellRenderInfo<Dayjs>) => {
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
}`},(b=(h=s.parameters)==null?void 0:h.docs)==null?void 0:b.source)})});var g,j,k;i.parameters=o(n({},i.parameters),{docs:o(n({},(g=i.parameters)==null?void 0:g.docs),{source:n({originalSource:"{}"},(k=(j=i.parameters)==null?void 0:j.docs)==null?void 0:k.source)})});var S,v,P;l.parameters=o(n({},l.parameters),{docs:o(n({},(S=l.parameters)==null?void 0:S.docs),{source:n({originalSource:`{
  render: () => <DatePickerWithDisabledYears />
}`},(P=(v=l.parameters)==null?void 0:v.docs)==null?void 0:P.source)})});const K=["DatePickerWithDisabledYears","Primary","WithDisabledYears"],B=Object.freeze(Object.defineProperty({__proto__:null,DatePickerWithDisabledYears:s,Primary:i,WithDisabledYears:l,__namedExportsOrder:K,default:M},Symbol.toStringTag,{value:"Module"}));export{B as D,s as a,M as m};
