import React from "react";
import classes from "./contact.module.scss";
import phone from "../img/logo/phone.svg";
import adres from "../img/logo/adres.svg";
import facebook from "../img/logo/facebook.svg";
import instagram from "../img/logo/instagram.svg";
import telegram from "../img/logo/telegram.svg";
import { motion } from "framer-motion";

function Contact() {
  const topAnimation = {
    hidden: { x: -300, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
    },
  };
  const bottomAnimation = {
    hidden: { y: 89, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
    },
  };

  const rightAnimation = {
    hidden: { x: 300, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
    },
  };

  const swiperAnimation = {
    hidden: { opacity: 0, scale: 0.5 },
    animate: {
      scale: 1,
      opacity: 1,
    },
  };

  return (
    <div id="contact" className={classes.contact}>
      <div className={classes.wrapper}>
        <motion.h1
          initial="hidden"
          whileInView="animate"
          variants={swiperAnimation}
          transition={{
            duration: 0.5,
          }}
          className={classes.h1}
        >
          АДРЕС И КОНТАКТЫ
        </motion.h1>
        <div className={classes.adresAndMap}>
          <div>
            <motion.div
              initial="hidden"
              whileInView="animate"
              variants={topAnimation}
              transition={{
                duration: 0.5,
              }}
              id="contact"
              className={classes.contacts}
            >
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
                        <img
                          className={classes.facebook}
                          src={facebook}
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className={classes.facebook}
                          src={instagram}
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className={classes.facebook}
                          src={telegram}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="animate"
              variants={bottomAnimation}
              viewport={{
                amount: 'some'
              }}
              transition={{
                duration: 0.5,
              }}
              id="application"
              className={classes.application}
            >
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
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="animate"
            variants={rightAnimation}
            transition={{
              duration: 0.5,
            }}
          >
            <iframe
              className={classes.map}
              src="https://yandex.ru/map-widget/v1/?ll=68.790756%2C38.571899&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgozMTM1OTQ1NTE3EkHQotC-0rfQuNC60LjRgdGC0L7QvSwg0JTRg9GI0LDQvdCx0LUsINC606_Rh9Cw0Lgg0JHRg9GF0L7RgNC-LCA0NSIKDd6UiUIVoEkaQg%2C%2C&sctx=ZAAAAAgBEAAaKAoSCXhEhermMVFAEX7Er1jDSUNAEhIJ6DBfXoB90T8Rwm1t4XmpwD8iBgABAgMEBSgKOABAzlBIAWISbGV0b192X2dvcm9kZT10cnVlagJ0ap0BzcxMPaABAKgBAL0Bu3Bp7MIBBq2w3Kv2AeoBAPIBAPgBAIICG9GB0LDRhNC40L3QsCDQtNGD0YjQsNC90LHQtYoCAJICBTEwMzE4mgIMZGVza3RvcC1tYXBz&sll=68.790756%2C38.571899&sspn=0.013494%2C0.006428&text=%D1%81%D0%B0%D1%84%D0%B8%D0%BD%D0%B0%20%D0%B4%D1%83%D1%88%D0%B0%D0%BD%D0%B1%D0%B5&z=16.34"
              width="560"
              height="400"
              frameborder="1"
              allowfullscreen="true"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
