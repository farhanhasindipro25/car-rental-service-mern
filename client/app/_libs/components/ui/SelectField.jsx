"use client";
import Select from "react-select";
import {
  customStyles,
  SELECT_LABEL_STYLES,
} from "../../style-kits/SelectFieldStyleKit";

export default function SelectField(props) {
  const {
    label,
    name,
    id,
    defaultValue,
    className,
    options,
    onChange,
    placeholder,
    onClick,
    value,
    errors,
    isMulti = false,
    isClearable = false,
  } = props;

  return (
    <div
      className="flex flex-col w-full gap-1"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <label htmlFor={id} className={SELECT_LABEL_STYLES}>
        {label}
      </label>

      <Select
        name={name}
        id={id}
        value={value}
        styles={customStyles}
        classNamePrefix="select2-selection"
        placeholder={placeholder}
        options={options}
        noOptionsMessage={() => "No options"}
        isMulti={isMulti}
        onChange={onChange}
        isClearable={isClearable}
        defaultValue={defaultValue}
        {...props}
      />
    </div>
  );
}
