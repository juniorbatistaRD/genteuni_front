import React from "react";
import defaultImage from "../../../assets/images/bg_student.png";
import coverDominican from "../../../assets/coverImages/1.jpg";
import coverMexican from "../../../assets/coverImages/2.jpg";
import coverArgentina from "../../../assets/coverImages/3.jpg";
import coverPeru from "../../../assets/coverImages/4.jpg";
import coverGuatemala from "../../../assets/coverImages/5.jpg";
import coverPanama from "../../../assets/coverImages/6.jpg";

function CoverImage({ imageNumber }) {
  let coverImage;

  switch (imageNumber) {
    case 1:
      coverImage = coverDominican;
      break;
    case 2:
      coverImage = coverMexican;
      break;
    case 3:
      coverImage = coverArgentina;
      break;
    case 4:
      coverImage = coverPeru;
      break;
    case 5:
      coverImage = coverGuatemala;
      break;
    case 6:
      coverImage = coverPanama;
      break;

    default:
      break;
  }

  console.log(coverImage, imageNumber);
  return (
    <div
      style={{
        backgroundImage: `url(${coverImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "150px"
      }}
    />
  );
}

export default CoverImage;
