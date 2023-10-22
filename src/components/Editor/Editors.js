import React from "react";
import Editor from "@monaco-editor/react";
import "./Editors.css";

const Editors = () => {
  return (
    <div className="editor-container">
      <Editor
        height="70vh"
        width={`100%`}
        defaultLanguage={"javascript"}
        defaultValue="// some comment"
      />
    </div>
  );
};

export default Editors;
