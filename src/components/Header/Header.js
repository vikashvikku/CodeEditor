import React, { useState } from "react";
import "./Header.css";
import { VscLayoutSidebarLeft } from "react-icons/vsc";
import { VscLayoutPanel } from "react-icons/vsc";
import { VscLayoutSidebarRightOff } from "react-icons/vsc";
import { VscLayout } from "react-icons/vsc";
import File from "./File/File";
import Edit from "./Edit/Edit";
import Selection from "./Selection/Selection";
import View from "./View/View";
import Go from "./Go/Go";
import Run from "./Run/Run";
import Terminal from "./Terminal/Terminal";
import Help from "./Help/Help";

const Header = () => {
  const [FileAccess, setFileAccess] = useState(false);
  const [EditAccess, setEditAccess] = useState(false);
  const [SelectionAccess, setSelectionAccess] = useState(false);
  const [ViewAccess, setViewAccess] = useState(false);
  const [GoAccess, setGoAccess] = useState(false);
  const [RunAccess, setRunAccess] = useState(false);
  const [TerminalAccess, setTerminalAccess] = useState(false);
  const [HelpAccess, setHelpAccess] = useState(false);

  const handleClickFile = () => {
    setFileAccess(!FileAccess);
    console.log("File CLicked");
  };
  const handleClickEdit = () => {
    setEditAccess(!EditAccess);
    console.log("Edit CLicked");
  };
  const handleClickSelection = () => {
    setSelectionAccess(!SelectionAccess);
    console.log("Edit CLicked");
  };
  const handleClickView = () => {
    setViewAccess(!ViewAccess);
    console.log("Edit CLicked");
  };
  const handleClickGo = () => {
    setGoAccess(!GoAccess);
    console.log("Edit CLicked");
  };
  const handleClickRun = () => {
    setRunAccess(!RunAccess);
    console.log("Edit CLicked");
  };
  const handleClickTerminal = () => {
    setTerminalAccess(!TerminalAccess);
    console.log("Edit CLicked");
  };
  const handleClickHelp = () => {
    setHelpAccess(!HelpAccess);
    console.log("Edit CLicked");
  };

  return (
    <div className="header-container">
      <div className="header-left">
        <div>Logo</div>
        <div onClick={handleClickFile}>
          {FileAccess ? (
            <div className="file-access">
              <div>File</div>
              <div>
                <File />
              </div>
            </div>
          ) : (
            <div className="file-access">File</div>
          )}
        </div>
        <div onClick={handleClickEdit}>
          {EditAccess ? (
            <div className="file-access">
              <div>Edit</div>
              <div>
                <Edit />
              </div>
            </div>
          ) : (
            <div className="file-access">Edit</div>
          )}
        </div>
        <div onClick={handleClickSelection}>
          {SelectionAccess ? (
            <div className="file-access">
              <div>Selection</div>
              <div>
                <Selection />
              </div>
            </div>
          ) : (
            <div className="file-access">Selection</div>
          )}
        </div>
        <div onClick={handleClickView}>
          {ViewAccess ? (
            <div className="file-access">
              <div>View</div>
              <div>
                <View />
              </div>
            </div>
          ) : (
            <div className="file-access">View</div>
          )}
        </div>
        <div onClick={handleClickGo}>
          {GoAccess ? (
            <div className="file-access">
              <div>Go</div>
              <div>
                <Go />
              </div>
            </div>
          ) : (
            <div className="file-access">Go</div>
          )}
        </div>
        <div onClick={handleClickRun}>
          {RunAccess ? (
            <div className="file-access">
              <div>Run</div>
              <div>
                <Run />
              </div>
            </div>
          ) : (
            <div className="file-access">Run</div>
          )}
        </div>
        <div onClick={handleClickTerminal}>
          {TerminalAccess ? (
            <div className="file-access">
              <div>Terminal</div>
              <div>
                <Terminal />
              </div>
            </div>
          ) : (
            <div className="file-access">Terminal</div>
          )}
        </div>
        <div onClick={handleClickHelp}>
          {HelpAccess ? (
            <div className="file-access">
              <div>Help</div>
              <div>
                <Help />
              </div>
            </div>
          ) : (
            <div className="file-access">Help</div>
          )}
        </div>
      </div>
      <div className="header-right">
        <VscLayoutSidebarLeft />
        <VscLayoutPanel />
        <VscLayoutSidebarRightOff />
        <VscLayout />
      </div>
    </div>
  );
};

export default Header;
