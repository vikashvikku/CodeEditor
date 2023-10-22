import React from "react";
import "./Terminal.css";

const Terminal = () => {
  return (
    <div className="terminal-container">
      <div className="terminal-content">
        <div className="terminal-terminal">
          <div>New Terminal</div>
          <div>Ctrl+Shift+`</div>
        </div>
        <div className="terminal-terminal">
          <div>Split Terminal</div>
          <div>Ctrl+Shift+5</div>
        </div>
      </div>
      <div className="terminal-content">
        <div className="terminal-task">
          <div>Run Build Task...</div>
          <div>Ctrl+Shift+B</div>
        </div>
        <div className="terminal-task">Run Active File</div>
        <div className="terminal-task">new Selected Text</div>
      </div>
      <div className="terminal-content">
        <div className="terminal-running-task">Show running-task</div>
        <div className="terminal-running-task">Restart Running Task</div>
        <div className="terminal-running-task">Terminate Running Task</div>
      </div>
      <div className="terminal-content">
        <div className="terminal-configure-task">Configire Tasks...</div>
        <div className="terminal-configure-task">
          Configure Default Build Task
        </div>
      </div>
    </div>
  );
};

export default Terminal;
