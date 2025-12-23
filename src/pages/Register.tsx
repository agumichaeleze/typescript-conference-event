// import { Formik, Form } from "formik";
// import { useState } from "react";
// import type { FormikHelpers } from "formik";
// import toast from "react-hot-toast";

// import { admissionSchema } from "@/validation/admissionSchma";
// import type { AdmissionFormValues } from "@/types/admission";
// import PersonalInfo from "@/components/PersonalInfo";
// import AccountInfo from "@/components/AccountInfo";

// const initialValues: AdmissionFormValues = {
//   surName: "",
//   firstName: "",
//   otherName: "",
//   phoneNumber: "",
//   ticket: "",
//   email: "",
//   password: "",
//   confirmPassword: "",
// };

// export default function Register() {
//   const [isLogin, setIsLogin] = useState<boolean>(false);
//   const [showPassword, setShowPassword] = useState<boolean>(false);
//   const [showConfirmPassword, setShowConfirmPassword] =
//     useState<boolean>(false);

//   const handleSubmit = (
//     values: AdmissionFormValues,
//     { resetForm }: FormikHelpers<AdmissionFormValues>
//   ) => {
//     toast.success(isLogin ? "Logged in successfully" : "Registered successfully");
//     console.log(values);
//     resetForm();
//   };

//   return (
//     <div className="container py-16">
//       <div className="max-w-5xl mx-auto bg-base shadow-lg rounded-2xl p-8">
//         <h2 className="text-3xl font-bold text-center mb-8">
//           {isLogin ? "Login to your account" : "Create an account"}
//         </h2>

//         <Formik
//           initialValues={initialValues}
//           validationSchema={admissionSchema(isLogin)}
//           onSubmit={handleSubmit}
//         >
//           <Form className="space-y-8">
//             <div className="grid md:grid-cols-2 gap-10">
//               {/* LEFT */}
//               <PersonalInfo isLogin={isLogin} />

//               {/* RIGHT */}
//               <AccountInfo
//                 isLogin={isLogin}
//                 showPassword={showPassword}
//                 showConfirmPassword={showConfirmPassword}
//                 setShowPassword={setShowPassword}
//                 setShowConfirmPassword={setShowConfirmPassword}
//               />
//             </div>

//             {/* SUBMIT */}
//             <button
//               type="submit"
//               className="w-full bg-primary py-3 rounded-lg font-semibold text-white"
//             >
//               {isLogin ? "Login" : "Register"}
//             </button>
//           </Form>
//         </Formik>

//         {/* TOGGLE LOGIN / REGISTER */}
//         <p className="mt-6 text-center">
//           {isLogin ? (
//             <>
//               No account?{" "}
//               <button
//                 type="button"
//                 onClick={() => setIsLogin(false)}
//                 className="text-primary font-semibold hover:underline"
//               >
//                 Register
//               </button>
//             </>
//           ) : (
//             <>
//               Already registered?
//               <button
//                 type="button"
//                 onClick={() => setIsLogin(true)}
//                 className="text-primary font-semibold hover:underline"
//               >
//                 Login
//               </button>
//             </>
//           )}
//         </p>
//       </div>
//     </div>
//   );
// }




import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import type { FormikHelpers } from "formik";
import toast from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";

import type { AdmissionFormValues } from "@/types/admission";
import { admissionSchema } from "@/validation/admissionSchma";

const initialValues: AdmissionFormValues = {
  surName: "",
  firstName: "",
  otherName: "",
  phoneNumber: "",
  ticket: "",
  email: "",
  password: "",
  confirmPassword: "",
};


type TicketOption = {
  label: string;
  value: string;
};

const TICKET_OPTIONS: TicketOption[] = [
  { label: "VIP", value: "vip" },
  { label: "Student", value: "student" },
  { label: "Standard", value: "standard" },
];


function Register() {
  const [isLogin, setIsLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="container py-16">
      <div className="max-w-5xl mx-auto bg-base shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-10">
          {isLogin ? "Login to your account" : "Create an account"}
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={admissionSchema(isLogin)}
          onSubmit={(
            values,
            { resetForm }: FormikHelpers<AdmissionFormValues>
          ) => {
            const email = values.email.toLowerCase();
            const users: AdmissionFormValues[] = JSON.parse(
              localStorage.getItem("users") || "[]"
            );

            if (!isLogin) {
              const exists = users.some(
                (u) => u.email.toLowerCase() === email
              );

              if (exists) {
                toast.error("User already exists");
                return;
              }

              users.push({ ...values, email });
              localStorage.setItem("users", JSON.stringify(users));
              toast.success("Account created successfully!");
              setIsLogin(true);
              resetForm();
            } else {
              const user = users.find(
                (u) =>
                  u.email.toLowerCase() === email &&
                  u.password === values.password
              );

              if (user) {
                toast.success(`Welcome back, ${user.surName}!`);
                resetForm();
              } else {
                toast.error("Invalid email or password");
              }
            }
          }}
        >
          <Form className="space-y-10">
            {/* ===== TWO COLUMN LAYOUT ===== */}
            <div className="grid md:grid-cols-2 gap-10">
              {/* ===== LEFT: PERSONAL INFORMATION ===== */}
              {!isLogin && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Personal Information
                  </h3>

                  <div className="space-y-4">
                        <div>
                        <label className="block mb-1 font-medium">Surname</label>
                        <Field
                            name="surName"
                            className="w-full border rounded-lg px-4 py-2"
                        />
                        <ErrorMessage
                            name="surName"
                            component="div"
                            className="text-red-500 text-sm"
                        />
                        </div>

                        <div>
                        <label className="block mb-1 font-medium">
                            First Name
                        </label>
                        <Field
                            name="firstName"
                            className="w-full border rounded-lg px-4 py-2"
                        />
                        <ErrorMessage
                            name="firstName"
                            component="div"
                            className="text-red-500 text-sm"
                        />
                        </div>

                        <div>
                        <label className="block mb-1 font-medium">
                            Other Name
                        </label>
                        <Field
                            name="otherName"
                            className="w-full border rounded-lg px-4 py-2"
                        />
                        </div>

                        <div>
                        <label className="block mb-1 font-medium">
                            Phone Number
                        </label>
                        <Field
                            name="phoneNumber"
                            placeholder="+234..."
                            className="w-full border rounded-lg px-4 py-2"
                        />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Ticket Type</label>

                            <Field
                                as="select"
                                name="ticket"
                                className="w-full border rounded-lg px-4 py-2 dark:text-gray-600"
                            >
                                <option value="">Select ticket</option>

                                {TICKET_OPTIONS.map((ticket) => (
                                <option key={ticket.value} value={ticket.value}>
                                    {ticket.label}
                                </option>
                                ))}
                            </Field>
                        </div>
                    </div>
                </div>
              )}

              {/* ===== RIGHT: ACCOUNT INFORMATION ===== */}
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Account Information
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block mb-1 font-medium">Email</label>
                    <Field
                      name="email"
                      type="email"
                      className="w-full border rounded-lg px-4 py-2"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm"
                    />
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
                        className="absolute right-3 top-2.5 text-muted"
                      >
                        {showPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>

                  {!isLogin && (
                    <div>
                      <label className="block mb-1 font-medium">
                        Confirm Password
                      </label>
                      <div className="relative">
                        <Field
                          name="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          className="w-full border rounded-lg px-4 py-2 pr-12"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          className="absolute right-3 top-2.5 text-muted"
                        >
                          {showConfirmPassword ? (
                            <EyeOff size={18} />
                          ) : (
                            <Eye size={18} />
                          )}
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
            </div>

            {/* ===== SUBMIT BUTTON ===== */}
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary-hover transition"
            >
              {isLogin ? "Login" : "Register"}
            </button>
          </Form>
        </Formik>

        {/* ===== TOGGLE LOGIN / REGISTER ===== */}
        <p className="mt-6 text-center">
          {isLogin ? (
            <>
              No account?
              <button
                onClick={() => setIsLogin(false)}
                className="text-primary font-semibold hover:underline"
              >
                Register
              </button>
            </>
          ) : (
            <>
              Already registered?
              <button
                onClick={() => setIsLogin(true)}
                className="text-primary font-semibold hover:underline"
              >
                Login
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default Register;
