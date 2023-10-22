import React from "react";
import "./Account.css";

const Account = () => {
  return (
    <div className="Account">
      <div className="Account-options">
        <div>Sign In (GitHub) </div>
        <div>Z</div>
      </div>
      <div className="Account-options">Backup and Sync Setting...</div>
      <div className="Account-options">Turn on Cloud Changes...</div>
      <div className="Account-options last">
        Turn on Remote Tunnel Access...
      </div>
    </div>
  );
};

export default Account;
