import React, { useState } from "react";
import Header from "../components/Header";

import { SwatchesPicker } from "react-color";
import { SketchPicker } from "react-color";

function ColorPicker() {
  const [state, setState] = useState({
    background: "#008000",
  });

  const change = (color) => {
    setState({ background: color.hex });
    document.getElementById("preview").style.backgroundColor = color.hex;
  };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Editor" category="Color-Picker" />
      <div className="card px-2 w-full">
        <div className="text-center">
          <div id="preview"></div>
          <div className="flex justify-center items-center gap-20 flex-wrap">
            <div>
              <p className="text-2xl font-semibold mt-2 mb-4">Inline Pallete</p>
              <SwatchesPicker
                color={state.background}
                onChangeComplete={change}
                onChange={change}
                width="300px"
                height="300px"
              />
            </div>
            <div>
              <p className="text-2xl font-semibold mt-2 mb-4">Inline Picker</p>
              <SketchPicker
                color={state.background}
                onChangeComplete={change}
                onChange={change}
                width="300px"
                height="300px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColorPicker;
