import React from "react";
import "./Selection.css";

const Selection = () => {
  return (
    <div className="selection-container">
      <div className="selection-content">
        <div className="selection-expansion">
          <div>Select All</div>
          <div>Ctrl+A</div>
        </div>
        <div className="selection-expansion">
          <div>ExpandSelection</div>
          <div>Shift+Alt+RightArrow</div>
        </div>
        <div className="selection-expansion">
          <div>Shrink Selection</div>
          <div>Shift+Alt+LeftArrow</div>
        </div>
      </div>
      <div className="selection-content">
        <div className="selection-go">
          <div>Copy Line Up</div>
          <div>Shift+Alt+UpArrow</div>
        </div>
        <div className="selection-go">
          <div>Copy Line Down</div>
          <div>Shift+Alt+DownArrow</div>
        </div>
        <div className="selection-go">
          <div>Move Line Up</div>
          <div>Alt+DownArrow</div>
        </div>

        <div className="selection-go">
          <div>Move Line Down</div>
          <div>Alt+DownArrow</div>
        </div>
        <div className="selection-go">Duplicate Selection</div>
      </div>
      <div className="selection-content">
        <div className="selection-add">
          <div>Add Cursor Above</div>
          <div>Ctrl+Alt+UpArrow</div>
        </div>
        <div className="selection-add">
          <div>Add Cursor Below</div>
          <div>Ctrl+Alt+DownArrow</div>
        </div>
        <div className="selection-add">
          <div>Add Cursor to Line Ends</div>
          <div>Shift+Alt+I</div>
        </div>

        <div className="selection-add">
          <div>Add Next Occurance</div>
          <div>Ctrl+D</div>
        </div>
        <div className="selection-add">Add Previous Occurance</div>
        <div className="selection-add">
          <div>Select All Occurance</div>
          <div>Ctrl+Shift+L</div>
        </div>
      </div>
      <div className="selection-content">
        <div className="selection-switch">
          Switch to Ctrl+Click for Multi Cursor
        </div>
        <div className="selection-mode">Column Selection Mode</div>
      </div>
    </div>
  );
};

export default Selection;
