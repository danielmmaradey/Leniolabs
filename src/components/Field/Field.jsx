// Module Dependencies
import React from "react";

// Module main Component
const Field = props => {
  const {
    type,
    data,
    NameValue,
    NameLabel,
    PrincipalClass,
    NamePlaceHolder
  } = props;

  // component input type text
  const inputText = (
    <input
      id={NameValue}
      name={NameValue}
      type="text"
      placeholder={NamePlaceHolder}
      onChange={e => props.onChangeField(e)}
      value={data}
      className="dv-input-field"
    />
  );

  // component input type pass
  const inputPass = (
    <input
      id={NameValue}
      name={NameValue}
      type="password"
      placeholder={NamePlaceHolder}
      onChange={e => props.onChangeField(e)}
      value={data}
      className="dv-input-field"
    />
  );

  const typeLabel = type === undefined ? inputText : inputPass;

  return (
    <div id="field" className={PrincipalClass}>
      <label className="dv-label">{NameLabel}</label>
      {typeLabel}
    </div>
  );
};

export default Field;
