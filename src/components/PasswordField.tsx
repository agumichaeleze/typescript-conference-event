import { Field, ErrorMessage } from "formik";
import { Eye, EyeOff } from "lucide-react";

interface Props {
  name: string;
  label: string;
  show: boolean;
  toggle: () => void;
}

export function PasswordField({ name, label, show, toggle }: Props) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <div className="relative">
        <Field
          name={name}
          type={show ? "text" : "password"}
          className="w-full rounded-lg border px-4 py-2 pr-12 bg-white focus:ring-2 focus:ring-primary"
        />
        <button
          type="button"
          onClick={toggle}
          className="absolute right-3 top-2.5 text-muted"
        >
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );
}
