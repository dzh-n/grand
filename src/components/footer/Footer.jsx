import React from "react";
import classes from "./footer.module.scss";
import facebook from "../img/logo/facebook.svg";
import instagram from "../img/logo/instagram.svg";
import telegram from "../img/logo/telegram.svg";
import logo from "../img/logo/logo.svg";
import { Link } from "react-scroll";

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.wrapper}>
        <div className={classes.logoTextIcon}>
          <img className={classes.logo} src={logo} alt="" />
          <div className={classes.text}>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
              to="layout"
            >
              Планировки
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
              to="construction"
            >
              Ход строительства
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
              to="contact"
            >
              Контакты
            </Link>
          </div>
          <div className={classes.social}>
            <div>
              <img className={classes.facebook} src={facebook} alt="" />
            </div>
            <div>
              <img className={classes.facebook} src={instagram} alt="" />
            </div>
            <div>
              <img className={classes.facebook} src={telegram} alt="" />
            </div>
          </div>
        </div>
      
        <p>
          Product by <span>BO</span>/BO
        </p>
      </div>
    </div>
  );
}

export default Footer;
