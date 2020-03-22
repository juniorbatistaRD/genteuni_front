import React from "react";
import { useField } from "formik";
import styles from "./SelectField.module.css";

function SelectField({ options, placeholder, isLoading, ...props }) {
  const [field] = useField(props);

  return (
    <select
      {...field}
      {...props}
      className={styles.select}
      placeholder="hi"
      disabled={isLoading}
    >
      {placeholder && <option value={null}>{placeholder}</option>}

      {options &&
        options.map(option => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
    </select>
  );
}

export default SelectField;
