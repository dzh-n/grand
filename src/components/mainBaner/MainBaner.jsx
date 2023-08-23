import React from "react";
import classes from "./mainBaner.module.scss";
import home1 from "../img/home1.png";
import { Link } from "react-scroll";

function MainBaner() {
  return (
    <div className={classes.mainBaner}>
      <div className={classes.wrapper}>
        <div className={classes.text}>
          <h1 className={classes.h1}>
            <span className={classes.grand}> GRAND</span>{" "}
            <span className={classes.shoh}>SHOH</span> PALACE
          </h1>
          <p className={classes.paragraph}>
            ️СОВРЕМЕННЫЙ ЖИЛОЙ КОМПЛЕКС БИЗНЕС КЛАССА <br />
            В САМОМ СЕРДЦЕ СТОЛИЦЫ;
            <br />
            КВАРТИРЫ С ФУНКЦИОНАЛЬНОЙ ПЛАНИРОВКОЙ;
            <br /> КОМФОРТ, СПОКОЙСТВИЕ И БЕЗОПАСНОСТЬ.
          </p>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={600}
            to="application"
            rel="stylesheet"
            href=""
          >
            <button className={classes.btn}>Оставить заявку</button>
          </Link>
        </div>
        <div className={classes.img}>
          <img className={classes.img} src={home1} alt="" />
        </div>
      </div>
    </div>
  );
}

export default MainBaner;
