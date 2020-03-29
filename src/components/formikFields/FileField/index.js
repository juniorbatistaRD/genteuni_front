import React, { useState } from "react";
import styles from "./index.module.css";

function FileField({ setFieldValue, onChangeCallBack, ...props }) {
  const [fileName, setFileName] = useState(null);

  const onChange = event => {
    const file = event.target.files[0];
    setFileName(file.name);
    setFieldValue("file", file);
    onChangeCallBack(file);
  };

  return (
    <label className={styles.container}>
      <span className={styles.button}>Seleciona el Archivo</span>
      <span>{fileName ? fileName : "Ningun archivo selecionado todavia"}</span>

      <input
        type="file"
        {...props}
        onChange={onChange}
        className={styles.fileInput}
      />
    </label>
  );
}

export default FileField;
