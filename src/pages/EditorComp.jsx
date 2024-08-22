import React, { useState } from "react";
import Header from "../components/Header";

import { Editor } from "primereact/editor";

function EditorComp() {
  const [text, setText] = useState("");

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Editor" category="Page" />
      <div className="card px-2 w-full">
        <Editor
          value={text}
          onTextChange={(e) => setText(e.htmlValue)}
          style={{ height: "320px" }}
        />
      </div>
    </div>
  );
}

export default EditorComp;
