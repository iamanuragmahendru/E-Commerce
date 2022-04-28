const isEmpty = (value) => {
  return !value || value.trim() === "";
};

const userCredentialsAreValid = (email, password) => {
  return (
    email && email.includes("@") && password && password.trim().length >= 6
  );
};

const userDetailsAreValid = (
  email,
  password,
  fullname,
  street,
  postal,
  city
) => {
  return (
    userCredentialsAreValid(email, password) &&
    !isEmpty(fullname) &&
    !isEmpty(street) &&
    !isEmpty(postal) &&
    !isEmpty(city)
  );
};

const emailIsConfirmed = (email, confirmEmail) => {
  return email === confirmEmail;
};

module.exports = {
  userDetailsAreValid,
  emailIsConfirmed,
};
