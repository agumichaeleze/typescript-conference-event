import { Field, ErrorMessage } from "formik";
import { Eye, EyeOff } from "lucide-react";

interface Props {
  isLogin: boolean;
  showPassword: boolean;
  showConfirmPassword: boolean;
  setShowPassword: (v: boolean) => void;
  setShowConfirmPassword: (v: boolean) => void;
}

export default function AccountInfo({
  isLogin,
  showPassword,
  showConfirmPassword,
  setShowPassword,
  setShowConfirmPassword,
}: Props) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Account Information</h3>

      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <Field name="email" type="email" className="w-full border rounded-lg px-4 py-2" />
          <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
        </div>

        <div>
          <label className="block mb-1 font-medium">Password</label>
          <div className="relative">
            <Field
              name="password"
              type={showPassword ? "text" : "password"}
              className="w-full border rounded-lg px-4 py-2 pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
        </div>

        {!isLogin && (
          <div>
            <label className="block mb-1 font-medium">Confirm Password</label>
            <div className="relative">
              <Field
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                className="w-full border rounded-lg px-4 py-2 pr-12"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-2.5"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
        )}
      </div>
    </div>
  );
}
