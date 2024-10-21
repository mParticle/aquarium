var N=Object.defineProperty,I=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var m=(t,e,a)=>e in t?N(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,r=(t,e)=>{for(var a in e||(e={}))W.call(e,a)&&m(t,a,e[a]);if(y)for(var a of y(e))_.call(e,a)&&m(t,a,e[a]);return t},o=(t,e)=>I(t,x(e));import{j as d}from"./jsx-runtime-BcCOBRXo.js";import{D as R,e as T}from"./GlobalNavigation-CPQMp-rl.js";import"./ConfigProvider-BRwLXval.js";import"./_baseClone-BjCwUuX-.js";import{d as Y}from"./dayjs.min-KGLNs1IR.js";import{r as E}from"./index-CNk6hRaE.js";const s=()=>{const[t,e]=E.useState(null),a=n=>n&&n.year()<2023,C=n=>{n&&a(n)?e(null):e(n)},w=(n,c)=>{if(!Y.isDayjs(n))return c.originNode;const u=a(n),D=p=>{u&&(p.preventDefault(),p.stopPropagation())};return c.type==="year"&&u?d.jsx(T,{title:"Data is only available for years 2023 and onwards.",children:d.jsx("div",{className:"ant-picker-cell-inner",style:{color:"rgba(0, 0, 0, 0.25)",cursor:"not-allowed"},onClick:D,onMouseDown:D,onKeyDown:D,children:n.year()})}):c.originNode};return d.jsx(R,{picker:"year",cellRender:w,value:t,onChange:C})},M={title:"Components/Data Entry/Date Picker",component:R,args:{}},l={},i={render:()=>d.jsx(s,{})};i.parameters={docs:{source:{code:`
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
      `}}};s.__docgenInfo={description:"",methods:[],displayName:"DatePickerWithDisabledYears"};var f,h,b;s.parameters=o(r({},s.parameters),{docs:o(r({},(f=s.parameters)==null?void 0:f.docs),{source:r({originalSource:`() => {
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
}`},(b=(h=s.parameters)==null?void 0:h.docs)==null?void 0:b.source)})});var g,j,k;l.parameters=o(r({},l.parameters),{docs:o(r({},(g=l.parameters)==null?void 0:g.docs),{source:r({originalSource:"{}"},(k=(j=l.parameters)==null?void 0:j.docs)==null?void 0:k.source)})});var P,S,v;i.parameters=o(r({},i.parameters),{docs:o(r({},(P=i.parameters)==null?void 0:P.docs),{source:r({originalSource:`{
  render: () => <DatePickerWithDisabledYears />
}`},(v=(S=i.parameters)==null?void 0:S.docs)==null?void 0:v.source)})});const K=["DatePickerWithDisabledYears","Primary","WithDatePickerWithDisabledYears"],H=Object.freeze(Object.defineProperty({__proto__:null,DatePickerWithDisabledYears:s,Primary:l,WithDatePickerWithDisabledYears:i,__namedExportsOrder:K,default:M},Symbol.toStringTag,{value:"Module"}));export{s as D,H as a,M as m};
