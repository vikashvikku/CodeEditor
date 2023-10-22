import React from "react";
import "./File.css";

const File = () => {
  return (
    <div className="file-container">
      <div className="file-content">
        <div className="file-create">
          <div>New Text File</div>
          <div>Ctrl+N</div>
        </div>
        <div className="file-create">
          <div>New File</div>
          <div>Ctrl+Alt+Windows+N</div>
        </div>
        <div className="file-create">
          <div>New Window</div>
          <div>Ctrl+Shift+N</div>
        </div>
      </div>
      <div className="file-content">
        <div className="file-open">
          <div>Open File</div>
          <div>Ctrl+O</div>
        </div>
        <div className="file-open">
          <div>Open Folder</div>
          <div>Ctrl+K Ctrl+O</div>
        </div>
        <div className="file-open-workspace">Open Workspace from file...</div>
        <div className="file-open">
          <div>Open Recent</div>
          <div> Z </div>
        </div>
      </div>
      <div className="file-content">
        <div className="file-workspace-add">Add Folder to Workspace</div>
        <div className="file-workspace-save">Save Workspace As...</div>
        <div className="file-workspace-duplicate">Duplicate Workspace</div>
      </div>
      <div className="file-content">
        <div className="file-save">
          <div>Save</div>
          <div>Ctrl+S</div>
        </div>
        <div className="file-save">
          <div>Save As...</div>
          <div>Ctrl+Shift+S</div>
        </div>
        <div className="file-save">
          <div>Save All</div>
          <div>Ctrl+K S</div>
        </div>
      </div>
      <div className="file-content">
        <div className="file-share">
          <div>Share</div>
          <div>Z</div>
        </div>
      </div>
      <div className="file-content">
        <div className="file-auto-save">
          <div>Z</div>
          <div>Auto Save</div>
        </div>
        <div className="file-auto">
          <div>Preferences</div>
          <div>Z</div>
        </div>
      </div>
      <div className="file-content">
        <div className="revert">Revert File</div>
        <div className="file-close">
          <div>Close Editor</div>
          <div>Ctrl+F4</div>
        </div>
        <div className="file-close">
          <div>Close Folder</div>
          <div>Ctrl+K F</div>
        </div>
        <div className="close-remote">Close Remote Connection</div>
        <div className="file-close">
          <div>Close Window</div>
          <div>Alt+F4</div>
        </div>
      </div>
      <div className="file-content">
        <div className="exit">Exit</div>
      </div>
    </div>
  );
};

export default File;
