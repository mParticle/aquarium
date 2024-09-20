var x=Object.defineProperty,C=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var u=(r,e,t)=>e in r?x(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,o=(r,e)=>{for(var t in e||(e={}))S.call(e,t)&&u(r,t,e[t]);if(D)for(var t of D(e))w.call(e,t)&&u(r,t,e[t]);return r},n=(r,e)=>C(r,R(e));import{j as c}from"./jsx-runtime-CS-_a2eV.js";import{N as k,x as N}from"./GlobalNavigation-5Ze4QgXZ.js";import"./ConfigProvider-aHzMMMgW.js";import"./_baseClone-BwI25-yt.js";import{d as W}from"./dayjs.min-kn1EBQqj.js";import{r as E}from"./index-Ca44TZ0D.js";import"./index-BxrKW6hI.js";import"./useToken-Dnjd_Rha.js";import"./extends-CCbyfPlC.js";import"./Serializer-DsJDcYJc.js";import"./index-DFiuTWKW.js";import"./isNativeReflectConstruct-DQQXTUsj.js";import"./row-BOpWxek0.js";import"./customParseFormat-CECOPgIS.js";import"./LightTheme-BZ07JyGW.js";import"./_getPrototype-fDUIJvdn.js";const I=()=>{const[r,e]=E.useState(null),t=a=>a&&a.year()<2023,P=a=>{a&&t(a)?e(null):e(a)},v=(a,i)=>{if(!W.isDayjs(a))return i.originNode;const p=t(a),d=m=>{p&&(m.preventDefault(),m.stopPropagation())};return i.type==="year"&&p?c.jsx(N,{title:"Data is only available for years 2023 and onwards.",children:c.jsx("div",{className:"ant-picker-cell-inner",style:{color:"rgba(0, 0, 0, 0.25)",cursor:"not-allowed"},onClick:d,onMouseDown:d,onKeyDown:d,children:a.year()})}):i.originNode};return c.jsx(k,{picker:"year",cellRender:v,value:r,onChange:P})},V={title:"Components/Data Entry/Date Picker",component:k,args:{}},l={},s={render:()=>c.jsx(I,{})};s.parameters={docs:{source:{code:`
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
      `}}};var y,h,f;l.parameters=n(o({},l.parameters),{docs:n(o({},(y=l.parameters)==null?void 0:y.docs),{source:o({originalSource:"{}"},(f=(h=l.parameters)==null?void 0:h.docs)==null?void 0:f.source)})});var b,g,j;s.parameters=n(o({},s.parameters),{docs:n(o({},(b=s.parameters)==null?void 0:b.docs),{source:o({originalSource:`{
  render: () => <DatePickerWithDisabledYears />
}`},(j=(g=s.parameters)==null?void 0:g.docs)==null?void 0:j.source)})});const X=["Primary","WithDatePickerWithDisabledYears"];export{l as Primary,s as WithDatePickerWithDisabledYears,X as __namedExportsOrder,V as default};
