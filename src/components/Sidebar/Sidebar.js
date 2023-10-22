import React, { useState } from "react";
import "./Sidebar.css";
import { VscFiles } from "react-icons/vsc";
import SearchIcon from "@mui/icons-material/Search";
import { VscRepoForked } from "react-icons/vsc";
import { VscDebugConsole } from "react-icons/vsc";
import { VscExtensions } from "react-icons/vsc";
import { VscVmConnect } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";
import { VscGear } from "react-icons/vsc";
import Setting from "./Setting/Setting";
import Account from "./Account/Account";
import Explorer from "./Explorer/Explorer";
import Search from "./Search/Search";
import Source from "./Source/Source";
import Editors from "../Editor/Editors";

const Sidebar = () => {
  const [Explorers, setExplorers] = useState(false);
  const [Searchbar, setSearchbar] = useState(false);
  const [Sourcecode, setSourcecode] = useState(false);

  const [SettingAccess, setSettingAccess] = useState(false);
  const [AccountAccess, setAccountAccess] = useState(false);

  const handleClickExplorer = () => {
    setExplorers(!Explorers);
  };
  const handleClickSearch = () => {
    setSearchbar(!Searchbar);
  };
  const handleClickSource = () => {
    setSourcecode(!Sourcecode);
  };

  const handleClickSetting = () => {
    setSettingAccess(!SettingAccess);
  };
  const handleClickAccount = () => {
    setAccountAccess(!AccountAccess);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-operations">
          <div onClick={handleClickExplorer}>
            {Explorers ? (
              <div className="open-explorer">
                <VscFiles />
                <Explorer />
              </div>
            ) : (
              <VscFiles />
            )}
          </div>
          <div onClick={handleClickSearch}>
            {Searchbar ? (
              <div className="open-explorer">
                <SearchIcon />
                <Search />
              </div>
            ) : (
              <SearchIcon />
            )}
          </div>
          <div onClick={handleClickSource}>
            {Sourcecode ? (
              <div className="open-explorer">
                <VscRepoForked />
                <Source />
              </div>
            ) : (
              <div>
                <VscRepoForked />
              </div>
            )}
          </div>
          <div>
            <VscDebugConsole />
          </div>
          <div>
            <VscExtensions />
          </div>
          <div>
            <VscVmConnect />
          </div>
        </div>
        <div className="sidebar-account">
          <div onClick={handleClickAccount}>
            {/* <Account /> */}
            {AccountAccess ? (
              <div className="file-access">
                <div>
                  <VscAccount />
                </div>
                <div>
                  <Account />
                </div>
              </div>
            ) : (
              <div className="file-access">
                <VscAccount />
              </div>
            )}
          </div>
          <div onClick={handleClickSetting}>
            {SettingAccess ? (
              <div className="file-access">
                <div>
                  <VscGear />
                </div>
                <div>
                  <Setting />
                </div>
              </div>
            ) : (
              <div className="file-access">
                <VscGear />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="editor">
        <Editors />
      </div>
    </div>
  );
};

export default Sidebar;
