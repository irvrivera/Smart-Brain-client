import React from "react";
import "./ImageLinkForm.css";
const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="f4">
        This Magic Brain will detect faces in your pictures. Give it a try.
      </p>
      <div className="form center pa4 br3 shadow-5 mb4">
        <input
          className="f4 pa2 w-70 counter"
          type="text"
          onChange={onInputChange}
        />
        <button
          className="w-30 grow f4 link ph3 pv2 dib white bg-light-blue"
          onClick={onButtonSubmit}
        >
          Detect
        </button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
