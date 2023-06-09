const AuthFormValidate = (values) => {
  const error = {};
  const emailRegex = new RegExp(
    " /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:. [a-zA-Z0-9-]+)*$/.",
  );
  const passwordRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$",
  );

  if (!values.email) {
    error.email = "Email address is required";
  } else if (!emailRegex.test(values.email)) {
    error.email = "Given Email address is not valid";
  }

  if (!values.password) {
    error.password = "Pleace the Enter the password";
  } else if (!passwordRegex.test(values.password)) {
    error.password =
      "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";
  }

  return error;
};

export default AuthFormValidate;
