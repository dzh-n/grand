import React from "react";
import classes from "./contact.module.scss";
import phone from "../img/logo/phone.svg";
import adres from "../img/logo/adres.svg";
import facebook from "../img/logo/facebook.svg";
import instagram from "../img/logo/instagram.svg";
import telegram from "../img/logo/telegram.svg";

function Contact() {
  return (
    <div id="contact" className={classes.contact}>
      <div className={classes.wrapper}>
        <h1 className={classes.h1}>АДРЕС И КОНТАКТЫ</h1>
        <div className={classes.adresAndMap}>
          <div>
            <div id="contact" className={classes.contacts}>
              <h2 className={classes.h2}>КОНТАКТЫ</h2>
              <div className={classes.connection}>
                <div className={classes.phoneiadres}>
                  <div className={classes.phone}>
                    <img src={phone} alt="" />
                    <p>(+992) 000 40-20-40</p>
                  </div>
                  <div className={classes.adres}>
                    <img src={adres} alt="" />
                    <p>г. Душанбе, Бухоро 35</p>
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
                </div>
              </div>
            </div>
            <div id="application" className={classes.application}>
              <h2 className={classes.h2}>ОСТАВЬТЕ ЗАЯВКУ</h2>
              <p className={classes.paragraph}>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
              </p>
              <div className={classes.btnInput}>
                <div className={classes.inputs}>
                  <input
                    className={classes.input}
                    placeholder="Ваше имя*"
                    type="text"
                  />
                  <input
                    className={classes.input}
                    placeholder="Номер телефона или email*"
                    type="text"
                  />
                </div>
                <div className={classes.btn}>
                  <button className={classes.button}>Отправить</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <iframe
              className={classes.map}
              src="https://yandex.ru/map-widget/v1/?l=sat%2Cstv%2Csta&ll=68.796771%2C38.562623&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgk3NzIwMTM4OTUSJNCi0L7St9C40LrQuNGB0YLQvtC9LCDQlNGD0YjQsNC90LHQtSIKDTePiUIVG04aQg%2C%2C&z=18"
              width="560"
              height="400"
              frameborder="1"
              allowfullscreen="true"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
