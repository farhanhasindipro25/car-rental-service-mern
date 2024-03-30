export const SELECT_LABEL_STYLES =
  "appearance-none block text-sm font-medium text-neutral-700";

export const customStyles = {
  control: (provided, state) => ({
    ...provided,
    borderColor: state.isFocused
      ? "rgba(199, 210, 254, 1)"
      : provided.borderColor,
    boxShadow: state.isFocused
      ? "0 0 0 2px rgba(99, 102, 241, 1)"
      : provided.boxShadow,
    border: state.isFocused ? "none" : provided.border,
    paddingTop: "3px",
    paddingBottom: "5px",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor:
      (state.isFocused || state.isSelected) && !state.isMulti
        ? "rgb(99, 102, 241)"
        : provided.backgroundColor,
    color:
      (state.isFocused || state.isSelected) && !state.isMulti
        ? "white"
        : "rgb(99, 102, 241)",
    "&:hover": {
      backgroundColor: "rgb(99, 102, 241)",
      color: "white",
      cursor: "pointer",
    },
    overflow: "hidden",
    fontSize: "14px",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "rgb(99, 102, 241)",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "white",
  }),
  input: (provided) => ({
    ...provided,
    "input:focus": {
      boxShadow: "none",
    },
  }),
};
