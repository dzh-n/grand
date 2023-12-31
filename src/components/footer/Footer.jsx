import React from "react";
import classes from "./footer.module.scss";
import facebook from "../img/logo/facebook.svg";
import instagram from "../img/logo/instagram.svg";
import telegram from "../img/logo/telegram.svg";
import logo from "../img/logo/logo.svg";
import logoLaptop from "../img/logo/logoLaptop.svg";
import { Link } from "react-scroll";

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.wrapper}>
        <div className={classes.logoTextIcon}>
          <img className={classes.logoLaptop} src={logoLaptop} alt="" />{" "}
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
        <a href="https://bobo.tj/" target="_blank ">
          <p>
            <span className={classes.created}>Created by</span>
            <span className={classes.red}>BO</span>/BO
          </p>
        </a>
      </div>
    </div>
  );
}

export default Footer;
