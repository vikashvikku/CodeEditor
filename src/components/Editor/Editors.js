import React from "react";
import Editor from "@monaco-editor/react";
import "./Editors.css";

const Editors = () => {
  // const [value, setValue] = useState(code || "");

  // const handleEditorChange = (value) => {
  //   setValue(value);
  //   onChange("code", value);
  // };
  return (
    <div className="editor-container">
      <Editor
        height="70vh"
        width={`100%`}
        defaultLanguage={"javascript"}
        defaultValue="// some comment"
        // onChange={handleEditorChange}
      />
    </div>
  );
};

export default Editors;
