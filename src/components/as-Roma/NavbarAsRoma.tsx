import React from "react";
import roma from "../../assets/as-roma.svg";
import riyadh from "../../assets/riyadh-white.png";
import adidas from "../../assets/adidas.png";
import { NavbarAsList } from "../../utils/asDati";
import menu from "../../assets/menu.png";
import down from "../../assets/down-chevron.png";
import lente from "../../assets/zoom-lens.png";
import ticket from "../../assets/ticket.png";
import shop from "../../assets/shopping-cart.png";
import freccia from "../../assets/right-arrow.png";
import "./styles.css";

const NavbarAsRoma = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img className="roma" src={roma} alt={"roma"} />
      </div>
      <div className="prima-riga">
        <div className="sponsor">
          <img className="riyadh" src={riyadh} alt={"riyadh"} />
          <img className="adidas" src={adidas} alt={"adidas"} />
        </div>
      </div>
      <div className="seconda-riga">
        <div className="seconda-riga-sinistra">
          <img className="menu" src={menu} alt={"menu"} />
          {NavbarAsList.map((dati) => {
            return (
              <div key={dati.text} className="dati-item">
                {dati.text}
              </div>
            );
          })}
        </div>
        <div className="seconda-riga-destra">
          <div className="testo-destra">
            IT
            <img className="down" src={down} alt="down" />
          </div>
          <img className="lente" src={lente} alt=" lente " />
          <div className="testo-ticket">
            <img className="ticket" src={ticket} alt="ticket" />
            BIGLIETTI
          </div>
          <div className="testo-shop">
            <img className="shop" src={shop} alt="shop" />
            SHOP
          </div>
          <div className="testo-accedi">
            ACCEDI
            <img className="freccia" src={freccia} alt="freccia" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarAsRoma;
