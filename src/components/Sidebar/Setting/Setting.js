import React from "react";
import "./Setting.css";

const Setting = () => {
  return (
    <div className="setting">
      <div className="setting-options setting-option">
        <div>Command Pallete </div>
        <div>Ctrl+Shift+P</div>
      </div>
      <div className="setting-options">
        <div className="setting-option">
          <div>Profiles(Default)</div>
          <div>Z</div>
        </div>
        <div className="setting-option">
          <div>Settings</div>
          <div>Ctrl+,</div>
        </div>
        <div className="setting-option">
          <div>Extensions</div>
          <div>Ctrl+Shift+X</div>
        </div>
        <div className="setting-option">
          <div>Keyboard Shortcuts</div>
          <div>Ctrl+K Ctrl+S</div>
        </div>
        <div className="setting-option">User Snippets</div>
        <div className="setting-option">User Tasks</div>
        <div className="setting-option">
          <div>Themes</div>
          <div>Z</div>
        </div>
      </div>
      <div className="setting-options setting-option">
        Turn on Cloud Changes...
      </div>
      <div className="setting-options last setting-option">
        Turn on Remote Tunnel Access...
      </div>
    </div>
  );
};

export default Setting;
