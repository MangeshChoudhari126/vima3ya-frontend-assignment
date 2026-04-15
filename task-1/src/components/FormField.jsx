import { useField } from "formik";

const validators = {
  email: (value) =>
    !value
      ? "This field is required"
      : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      ? "Invalid email"
      : "",

  phone: (value) =>
    !value
      ? "This field is required"
      : !/^[0-9]{10}$/.test(value)
      ? "Invalid phone"
      : "",

  required: (value) => (!value ? "This field is required" : "")
};

export default function FormField({
  name,
  placeholder,
  validator = "required",
  errorMessage
}) {
  const [field, meta, helpers] = useField(name);

  const error =
    errorMessage ||
    (validators[validator] && validators[validator](field.value));

  return (
    <div className="form-group">
      <input
        {...field}
        placeholder={placeholder}
        onChange={(e) => helpers.setValue(e.target.value)}
      />

      {meta.touched && error && <p className="error">{error}</p>}
    </div>
  );
}