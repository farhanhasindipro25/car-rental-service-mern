export default function CheckboxInputField(props) {
  const { name, id, label, onClick, checked, onChange, onBlur } = props;
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
        className="text-sm font-medium text-gray-700 cursor-pointer"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
}
