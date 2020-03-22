import React from "react";
import { useField } from "formik";
import styles from "./index.module.css";

function InputField({ width, padding, className, ...props }) {
  const [field] = useField(props);

  const classNames = [styles.input, className].join(" ");

  return (
    <input
      className={classNames}
      style={{
        width,
        padding
      }}
      {...field}
      {...props}
    />
  );
}

InputField.defaultProps = {
  padding: "15px",
  className: " "
};

export default InputField;
