import {
  DATE_BOX_STYLES,
  DATE_LABEL_STYLES,
} from "../../style-kits/DateSelectorInputFieldStyleKit";
import cn from "../../utils/cn";

export default function DateSelectorInputField(props) {
  const { label, name, id, value, onChange } = props;
  const DATE_FIELD_STYLES = cn(DATE_BOX_STYLES);
  const today = new Date().toISOString().split("T")[0];
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className={DATE_LABEL_STYLES}>
        {label}
      </label>
      <input
        type="date"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={DATE_FIELD_STYLES}
        min={today}
        {...props}
      />
    </div>
  );
}
