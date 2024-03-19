import * as Yup from "yup";
export const LoginEmailSchemaValidaton = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  pass: Yup.string()
    .min(3, "Password must be 3 characters at minimum")
    .required("Password is required"),
});
export const LoginMobileSchemaValidaton = Yup.object().shape({
  pass: Yup.string()
    .min(3, "Password must be 3 characters at minimum")
    .required("Password is required"),
  mob: Yup.string()
    .matches(/^[0-9]{10}$/, {
      message:
        "Invalid mobile number format. It must be a 10-digit number without dots.",
    })
    .test(
      "no-dots",
      "Dots are not allowed in the mobile number.",
      (value) => !/\./.test(value)
    )
    .required("Mobile number is required"),
});
export const signupSchemaValidataon = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string()
    .min(3, "Password must be 3 characters at minimum")
    .required("Password is required"),
  mobile: Yup.string()
    .matches(
      /^[0-9]{10}$/,
      "Invalid mobile number format. It must be a 10-digit number."
    )
    .required("Mobile number is required"),
});
