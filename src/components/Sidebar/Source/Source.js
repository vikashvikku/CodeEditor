import React from "react";
import "./Source.css";
import { TbListTree } from "react-icons/tb";
import { GoCheck } from "react-icons/go";
import RefreshIcon from "@mui/icons-material/Refresh";

const Source = () => {
  return (
    <div className="source">
      <div className="source-heading">
        <div className="source-control">
          <div>SOURCE CONTROL</div>
          <div>
            <TbListTree />
          </div>
          <div>
            <GoCheck />
          </div>
          <div>
            <RefreshIcon />
          </div>
          <div>...</div>
        </div>
      </div>
      <div>
        <input className=" input-field" />
      </div>
      <div>
        <button className="source-button">
          <GoCheck /> Commit
        </button>
      </div>
    </div>
  );
};

export default Source;
