import React from "react";
import classes from "./cardResidence.module.scss";
import logo from "../img/logo/grandLogo.svg";
import logo2 from "../img/logo/logo2.svg";

function CardResidence() {
  return (
    <div className={classes.cardResidence}>
      <div className={classes.wrapper}>
        <a href="https://grand.shohpalace.tj">
          <div className={classes.grand}>
            <p className={classes.paragraph}>GRAND SHOH PALACE</p>
            <img className={classes.grandLogo} src={logo} alt="" />
          </div>
        </a>
        <a href="/plaza">
          <div className={classes.grand}>
            <p className={classes.paragraph}>Шоҳ Палас Plaza</p>
            <img className={classes.plazaLogo} src={logo2} alt="" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default CardResidence;
