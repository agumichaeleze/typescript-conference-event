import { Field, ErrorMessage } from "formik";

interface Props {
  isLogin: boolean;
}

export default function PersonalInfo({ isLogin }: Props) {
  if (isLogin) return null;

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Personal Information</h3>

      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Surname</label>
          <Field name="surName" className="w-full border rounded-lg px-4 py-2" />
          <ErrorMessage name="surName" component="div" className="text-red-500 text-sm" />
        </div>

        <div>
          <label className="block mb-1 font-medium">First Name</label>
          <Field name="firstName" className="w-full border rounded-lg px-4 py-2" />
          <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm" />
        </div>

        <div>
          <label className="block mb-1 font-medium">Other Name</label>
          <Field name="otherName" className="w-full border rounded-lg px-4 py-2" />
        </div>

        <div>
          <label className="block mb-1 font-medium">Phone Number</label>
          <Field name="phoneNumber" className="w-full border rounded-lg px-4 py-2" />
        </div>

        <div>
          <label className="block mb-1 font-medium">Ticket Type</label>
          <Field as="select" name="ticket" className="w-full border rounded-lg px-4 py-2">
            <option value="">Select ticket</option>
            <option value="vip">VIP</option>
            <option value="student">Student</option>
            <option value="standard">Standard</option>
          </Field>
        </div>
      </div>
    </div>
  );
}
