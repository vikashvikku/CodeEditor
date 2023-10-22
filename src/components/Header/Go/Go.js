import React from "react";
import "./Go.css";

const Go = () => {
  return (
    <div className="go-container">
      <div className="go-content">
        <div className="go-back">
          <div>Back</div>
          <div>Alt+LeftArrow</div>
        </div>
        <div className="go-back">
          <div>Forward</div>
          <div>Alt+RightArrow</div>
        </div>
        <div className="go-back">
          <div>Last Edit Location</div>
          <div>Ctrl+K Ctrl+Q</div>
        </div>
      </div>
      <div className="go-content">
        <div className="go-back">
          <div>Switch Editor</div>
          <div>Z</div>
        </div>
        <div className="go-back">
          <div>Switch Group</div>
          <div>Z</div>
        </div>
      </div>
      <div className="go-content">
        <div className="go-file">
          <div>Go to File...</div>
          <div>Ctrl+P</div>
        </div>
        <div className="go-file">
          <div>Got to Symbol in Workspace...</div>
          <div>Ctrl+T</div>
        </div>
      </div>
      <div className="go-content">
        <div className="go-symbol">
          <div>Go to Symbol in Editor...</div>
          <div>Ctrl+Shift+O</div>
        </div>
        <div className="go-symbol">
          <div>Got to Definition</div>
          <div>F12</div>
        </div>
        <div className="go-declaration">Go to Declaration</div>
        <div className="go-type">Go to Type Definition</div>
        <div className="go-symbol">
          <div>Got to Implementations</div>
          <div>Ctrl+F12</div>
        </div>
        <div className="go-symbol">
          <div>Got to References</div>
          <div>Shift+F12</div>
        </div>
      </div>
      <div className="go-content">
        <div className="go-line">
          <div>Go to Line/Column...</div>
          <div>Ctrl+G</div>
        </div>
        <div className="go-line">
          <div>Got to Bracket</div>
          <div>Ctrl+Shift+\</div>
        </div>
      </div>
      <div className="go-content">
        <div className="go-problem">
          <div>Next Problem</div>
          <div>F8</div>
        </div>
        <div className="go-problem">
          <div>Previous Problem</div>
          <div>Shift+F8</div>
        </div>
      </div>
      <div className="go-content">
        <div className="go-change">
          <div>Next Change</div>
          <div>Alt+F3</div>
        </div>
        <div className="go-change">
          <div>Previous Change</div>
          <div>Shift+Alt+F3</div>
        </div>
      </div>
    </div>
  );
};

export default Go;
