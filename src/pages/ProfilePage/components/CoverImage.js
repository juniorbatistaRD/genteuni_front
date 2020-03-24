import React from "react";
import defaultImage from "../../../assets/images/bg_student.png";

function CoverImage() {
  return (
    <div
      style={{
        backgroundImage: `url(${defaultImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "150px"
      }}
    />
  );
}

export default CoverImage;
