import React from "react";
import style from "./contact.module.css";
import Map1 from "./Map1";
import Map2 from "./Map2";
import TextBox1 from "./desc1/TextBox";
import TextBox2 from "./desc2/TextBox";
import { Container } from "react-bootstrap";
import ContactForm from "../ContactForm/ContactForm";

const ContactComponent = () => {
  return (
    <div className={style.contact__Container}>
      <Container>
        <div className={style.Contact__Map__Box}>
          <div>
            <Map1 />
          </div>
          <div className={style.text__box__background}>
            <TextBox1 />
          </div>
        </div>
        <div className={style.Contact__Map__Box2}>
          <div>
            <Map2 />
          </div>
          <div>
            <TextBox2 />
          </div>
        </div>
        <ContactForm />
      </Container>
    </div>
  );
};

export default ContactComponent;
