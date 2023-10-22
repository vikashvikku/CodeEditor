import React from "react";
import "./Footer.css";
import { GoGitBranch } from "react-icons/go";
import { GoCloud } from "react-icons/go";
import { GoXCircle } from "react-icons/go";
import { GoAlert } from "react-icons/go";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-space">
        <div className="wsl">
          <div className="ubuntu">
            <div className="compare">
              <div>&gt;</div>
              <div>&lt;</div>
            </div>
            <div>WSL: Ubuntu</div>
          </div>
          <div className="master">
            <div>
              <GoGitBranch />
            </div>
            <div>master*</div>
            <div>
              <GoCloud />
            </div>
          </div>
          <div className="problem">
            <div>
              <GoXCircle />
            </div>
            <div>0</div>
            <div>
              <GoAlert />
            </div>
            <div>0</div>
          </div>
          <div className="port">
            <div>Z</div>
            <div>1</div>
          </div>
        </div>

        <div className="line">
          <div>Ln, Col 37</div>
          <div>Spaces:4</div>
          <div>UTF-8</div>
          <div>LF</div>
          <div className="javascript">
            <div>Z</div>
            <div>JavaScrit</div>
          </div>
          <div className="prettier">
            <div>Z</div>
            <div>Prettier</div>
          </div>
          <div>Z</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
