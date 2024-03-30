import { CHECKBOX_STYLES } from "../../style-kits/CheckboxInputFieldStyleKit";

export default function CheckboxInputField(props) {
  const { name, id, label, onClick, checked, onChange, onBlur } = props;
  const priceSeparatedLabel = label.split("-");
  return (
    <div className="flex items-center gap-2">
      <input
        onChange={onChange}
        onBlur={onBlur}
        checked={checked}
        onClick={onClick}
        type="checkbox"
        name={name}
        id={id}
        className={CHECKBOX_STYLES}
      />

      <label
        className="text-sm font-medium text-gray-700 cursor-pointer w-full"
        htmlFor={id}
      >
        <div className="w-full flex justify-between">
          <h2>{priceSeparatedLabel[0]}</h2>
          <h2>{priceSeparatedLabel[1]}</h2>
        </div>
      </label>
    </div>
  );
}
