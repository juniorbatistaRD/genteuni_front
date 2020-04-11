import React from "react";
import styles from "./index.module.css";

const FlexRow = ({ children, margin, alignItems, className, ...props }) => {
  const classNames = [styles.flexRow, className].join(" ");

  return (
    <div className={classNames} {...props} style={{ margin, alignItems }}>
      {children}
    </div>
  );
};

FlexRow.defaultProps = {
  className: " ",
  margin: null,
  alignItems: null,
};

export default FlexRow;
