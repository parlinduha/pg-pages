import React from "react";
import './footer.css'
import Typography from '@mui/material/Typography'
import resumeData from "../../utils/resumeData";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <Typography className="footer_name">{resumeData.name}</Typography>
      </div>
      <div className="footer_right">
        <Typography className="footer_copyright">
          Design by{" "}
          <a href="/" target="_blank">
            Parlin Dh
          </a>
          <br />
          Clone idea from
          <a href="https://themeforest.net/user/tavonline" target="blank">
            Travonline
          </a>
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
