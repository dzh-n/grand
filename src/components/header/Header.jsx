import classes from "./header.module.scss";
import logo from "../img/logo/logo.svg";
import cross from "../img/logo/cross.svg";
import burger from "../img/logo/burger.svg";
import burgerMobail from "../img/logo/burgerMobail.svg";
import phone from "../img/logo/headPhone.svg";
import { Link } from "react-scroll";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        <div className={classes.wrapperMobail}>
        <img className={classes.phone} src={phone} alt="" />
          <img className={classes.logo} src={logo} alt="" />
          <div className={classes.text}>
            <Link
              onClick={() => setActive("1")}
              className={active == 1 ? classes.active : classes.notActive}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
              to="about"
            >
              О жилом комплексе
            </Link>
            <Link
              onClick={() => setActive("2")}
              className={active == 2 ? classes.active : classes.notActive}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
              to="advantages"
            >
              Преимущества
            </Link>
            <Link
              onClick={() => setActive("3")}
              className={active == 3 ? classes.active : classes.notActive}
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
              onClick={() => setActive("4")}
              className={active == 4 ? classes.active : classes.notActive}
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
              onClick={() => setActive(5)}
              className={active == 5 ? classes.active : classes.notActive}
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
          <div className={classes.divBtn}>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
              to="contact"
              rel="stylesheet"
              href=""
            >
              <button className={classes.btn}>Заказать звонок</button>
            </Link>
          </div>
          <div onClick={() => setOpen(!open)} className={classes.burgerMenu}>
            {open ? (
              <div className={classes.cross}>
                <img src={cross} alt="" />
              </div>
            ) : (
              <div><img className={classes.burgerLaptop} src={burger} alt="" />
              <img className={classes.burgerMobail} src={burgerMobail} alt="" /></div>

            )}
          </div>
        </div>
        {open && (
          <div className={classes.textMobail}>
            <Link
              onClick={() => setActive("1")}
              className={active == 1 ? classes.active : classes.notActive}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
              to="about"
            >
              О жилом комплексе
            </Link>
            <Link
              onClick={() => setActive("2")}
              className={active == 2 ? classes.active : classes.notActive}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
              to="advantages"
            >
              Преимущества
            </Link>
            <Link
              onClick={() => setActive("3")}
              className={active == 3 ? classes.active : classes.notActive}
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
              onClick={() => setActive("4")}
              className={active == 4 ? classes.active : classes.notActive}
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
              onClick={() => setActive(5)}
              className={active == 5 ? classes.active : classes.notActive}
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
        )}
      </div>
    </header>
  );
}

export default Header;
