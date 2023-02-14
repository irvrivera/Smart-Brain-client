import React from "react";
import "./FaceRecognition.css";
const FaceRecognition = ({ imageUrl, box }) => {
  console.log("box: ", box);
  console.log("imageUrl: ", imageUrl);
  return (
    <div className="center">
      <div style={{ width: "fit-content", position: "relative" }}>
        <img id="inputImage" alt="" src={imageUrl} width="500" heigh="auto" />
        {imageUrl ? (
          <div
            className="bounding-box"
            style={{
              top: box.topRow,
              right: box.rightCol,
              bottom: box.bottomRow,
              left: box.leftCol,
              border: "4px solid red",
            }}
          ></div>
        ) : null}
      </div>
    </div>
  );
};
export default FaceRecognition;

// style ={{width: 500, height: 'auto', padding: 25}}
