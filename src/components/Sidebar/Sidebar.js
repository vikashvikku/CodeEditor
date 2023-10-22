import React from "react";
import "./Sidebar.css";
import { VscFiles } from "react-icons/vsc";
import SearchIcon from "@mui/icons-material/Search";
import { VscRepoForked } from "react-icons/vsc";
import { VscDebugConsole } from "react-icons/vsc";
import { VscExtensions } from "react-icons/vsc";
import { VscVmConnect } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";
import { VscGear } from "react-icons/vsc";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-operations">
        <VscFiles />
        <SearchIcon />
        <VscRepoForked />
        <VscDebugConsole />
        <VscExtensions />
        <VscVmConnect />
      </div>
      <div className="sidebar-account">
        <VscAccount />
        <VscGear />
      </div>
    </div>
  );
};

export default Sidebar;
