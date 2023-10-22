import React from "react";
import "./Edit.css";

const Edit = () => {
  return (
    <div className="edit-container">
      <div className="edit-content">
        <div className="edit-go">
          <div>Undo</div>
          <div>Ctrl+Z</div>
        </div>
        <div className="edit-go">
          <div>Redo</div>
          <div>Ctrl+Y</div>
        </div>
      </div>
      <div className="edit-content">
        <div className="edit-move">
          <div>Cut</div>
          <div>Ctrl+X</div>
        </div>
        <div className="edit-move">
          <div>Copy</div>
          <div>Ctrl+C</div>
        </div>
        <div className="edit-move">
          <div>Paste</div>
          <div>Ctrl+V</div>
        </div>
      </div>
      <div className="edit-content">
        <div className="edit-find">
          <div>Find</div>
          <div>Ctrl+F</div>
        </div>
        <div className="edit-find">
          <div>Replace</div>
          <div>Ctrl+H</div>
        </div>
      </div>
      <div className="edit-content">
        <div className="edit-find-file">
          <div>Find in File</div>
          <div>Ctrl+Shift+F</div>
        </div>
        <div className="edit-find-file">
          <div>Replace in File</div>
          <div>Ctrl+Shift+H</div>
        </div>
      </div>
      <div className="edit-content-last">
        <div className="edit-toggle">
          <div>Toggle Line Comment</div>
          <div>Ctrl+/</div>
        </div>
        <div className="edit-toggle">
          <div>Toggle Block Comment</div>
          <div>Ctrl+Alt+A</div>
        </div>
        <div className="edit-toggle">
          <div>Emmet: Expand Abbreviation</div>
          <div>Tab</div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
