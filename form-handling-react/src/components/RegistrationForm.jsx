import React from "react";

const RegistrationForm = () => {
  return (
    <div>
      <h1>Registration Form</h1>

      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default RegistrationForm;
