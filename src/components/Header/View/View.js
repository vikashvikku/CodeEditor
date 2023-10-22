import React from "react";
import "./View.css";

const View = () => {
  return (
    <div className="view-container">
      <div className="view-content">
        <div className="view-open">
          <div>Command Pallete</div>
          <div>Ctrl+N</div>
        </div>
        <div className="view-open-view">Open View</div>
      </div>
      <div className="view-content">
        <div className="view-appearance">
          <div>Appearance</div>
          <div>Z</div>
        </div>
        <div className="view-appearance">
          <div>Editor Layout</div>
          <div>Z</div>
        </div>
      </div>
      <div className="view-content">
        <div className="view-explore">
          <div>Explore</div>
          <div>Ctrl+Shift+E</div>
        </div>
        <div className="view-explore">
          <div>Search</div>
          <div>Ctrl+Shift+F</div>
        </div>
        <div className="view-explore">
          <div>Source Control</div>
          <div>Ctrl+Shift+G</div>
        </div>
        <div className="view-explore">
          <div>Run</div>
          <div>Ctrl+Shift+D</div>
        </div>
        <div className="view-explore">
          <div>Extension</div>
          <div>Ctrl+Shift+X</div>
        </div>
      </div>
      <div className="view-content">
        <div className="view-problem">
          <div>Problem</div>
          <div>Ctrl+Shift+M</div>
        </div>
        <div className="view-problem">
          <div>Output</div>
          <div>Ctrl+Shift+U</div>
        </div>
        <div className="view-problem">
          <div>Debug Console</div>
          <div>Ctrl+Shift+Y</div>
        </div>
        <div className="view-problem">
          <div>Terminal</div>
          <div>Ctrl+Shift+`</div>
        </div>
      </div>
      <div className="view-content">
        <div className="view-wrap">
          <div>Word Wrap</div>
          <div>Alt+Z</div>
        </div>
      </div>
    </div>
  );
};

export default View;
