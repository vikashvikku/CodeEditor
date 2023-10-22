import React from "react";
import "./Run.css";

function Run() {
  return (
    <div className="run-container">
      <div className="run-content">
        <div className="run-debugging">
          <div>Start Debugging</div>
          <div>F5</div>
        </div>
        <div className="run-debugging">
          <div>Run Without Debugging</div>
          <div>Ctrl+F5</div>
        </div>
        <div className="run-debugging">
          <div>Stop Debugging</div>
          <div>Shift+F5</div>
        </div>
        <div className="run-debugging">
          <div>Restart Debugging</div>
          <div>Ctrl+Shift+F5</div>
        </div>
      </div>
      <div className="run-content">
        <div className="run-config">Open Configurations</div>
        <div className="run-config">Add Configuration...</div>
      </div>
      <div className="run-content">
        <div className="run-step">
          <div>Step Over</div>
          <div>F10</div>
        </div>
        <div className="run-step">
          <div>Step Into</div>
          <div>F11</div>
        </div>
        <div className="run-step">
          <div>Step Out</div>
          <div>Shift+F11</div>
        </div>
        <div className="run-step">
          <div>Continue</div>
          <div>F5</div>
        </div>
        <div className="run-toggle">
          <div>Toggle Breakpoint</div>
          <div>F9</div>
        </div>
        <div className="run-toggle">
          <div>New Breakpoint</div>
          <div>Z</div>
        </div>
      </div>
      <div className="run-content">
        <div className="run-breakpoints">Enable All Breakpoints</div>
        <div className="run-breakpoints">Disable All Breakpoints</div>
        <div className="run-breakpoints">Remove All Breakpoints</div>
      </div>
      <div className="run-content">
        <div className="run-additional">Install Additional Debuggers</div>
      </div>
    </div>
  );
}

export default Run;
