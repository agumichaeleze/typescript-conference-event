import { Field, ErrorMessage } from "formik";

interface Props {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}

export function Input({ name, label, type = "text", placeholder }: Props) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-lg border px-4 py-2 bg-white focus:ring-2 focus:ring-primary"
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );
}
