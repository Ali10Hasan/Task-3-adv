import type { IFormFieldProps } from "../../../types";

const FormField = ({ label, type = "text", placeholder, name, isFullWidth }: IFormFieldProps) => {
  return (
    <div className={`input-group ${isFullWidth ? 'full-width' : ''}`}>
      <label htmlFor={name}>{label}</label>
      {type === "textarea" ? (
        <textarea id={name} name={name} placeholder={placeholder} rows={5} />
      ) : (
        <input type={type} id={name} name={name} placeholder={placeholder} />
      )}
    </div>
  );
};

export default FormField;
