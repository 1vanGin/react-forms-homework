import React from "react";
import "./Input.css";

export function Input(props) {
  return (
    <div className="input-wrapper">
      {props.icon && <div className="icon">{props.icon}</div>}
      <input
        id={props.id}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        disabled={props.disabled}
        data-with-icon={props.icon && "true"}
      />
      {props.radioLabel && <label htmlFor={props.id}>{props.radioLabel}</label>}
    </div>
  );
}
