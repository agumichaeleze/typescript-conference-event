import * as Yup from "yup";

export const admissionSchema = (isLogin: boolean) =>
  Yup.object({
    surName: isLogin
      ? Yup.string()
      : Yup.string().min(2, "Too short").required("Required"),

    firstName: isLogin
      ? Yup.string()
      : Yup.string().min(2, "Too short").required("Required"),

    otherName: isLogin
      ? Yup.string()
      : Yup.string().min(2, "Too short").required("Required"),

    phoneNumber: isLogin
      ? Yup.string()
      : Yup.string()
          .matches(
            /^\+[1-9]\d{1,14}$/,
            "Use international format e.g. +14155552671"
          )
          .required("Required"),

    ticket: isLogin
      ? Yup.string()
      : Yup.string().required("Choose a ticket"),

    email: Yup.string()
      .email("Invalid email")
      .required("Required"),

    password: Yup.string()
      .min(8, "At least 8 characters")
      .matches(/[A-Z]/, "One uppercase letter required")
      .matches(/[@$!%*?&#]/, "One special character required")
      .required("Required"),

    confirmPassword: isLogin
      ? Yup.string()
      : Yup.string()
          .oneOf([Yup.ref("password")], "Passwords must match")
          .required("Required"),
  });
