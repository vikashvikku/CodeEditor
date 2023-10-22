import React from "react";
import "./Help.css";

const Help = () => {
  return (
    <div className="help-container">
      <div className="help-content">
        <div className="help-show">Welcome</div>
        <div className="help-show">
          <div>Show All Command</div>
          <div>Ctrl+Shift+P</div>
        </div>
        <div className="help-show">Documentation</div>
        <div className="help-show">Editor Playground</div>
        <div className="help-show">Show Release Notes</div>
      </div>
      <div className="help-content">
        <div className="help-reference">
          <div>Keyboard Shortcuts Reference</div>
          <div>Ctrl+K Ctrl+R</div>
        </div>
        <div className="help-reference">Video Tutorials</div>
        <div className="help-reference">Tips and Tricks</div>
      </div>
      <div className="help-content">
        <div className="help-join">Join Us on Youtube</div>
        <div className="help-join">Search Feature Requests</div>
        <div className="help-join">Report issue</div>
      </div>
      <div className="help-content">
        <div className="help-view">View License</div>
        <div className="help-view">Privacy Statement</div>
      </div>
      <div className="help-content">
        <div className="help-toggle">Toggle Developer Tools</div>
        <div className="help-toggle">Open Process Explore</div>
      </div>
      <div className="help-content">
        <div className="help-check">Check for Updates...</div>
        <div className="help-check">About</div>
      </div>
    </div>
  );
};

export default Help;
