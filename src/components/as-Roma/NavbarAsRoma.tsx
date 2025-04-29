import React from "react";
import roma from "../../assets/as-roma.svg";
import menu from "../../assets/menu.png";
import riyadh from "../../assets/riyadh-white.png";
import adidas from "../../assets/adidas.png";
import { NavbarAsList, RightList } from "../../utils/asDati";
import "./styles.css";

const NavbarAsRoma = () => {
  return (
    <div className="navbar">
      <div className="prima-riga">
        <div className="logo">
          <img className="roma" src={roma} alt={"roma"} />
        </div>
        <div className="prima-riga-destra">
          <div className="sponsor">
            <img className="riyadh" src={riyadh} alt={"riyadh"} />
            <img className="adidas" src={adidas} alt={"adidas"} />
          </div>
        </div>
      </div>

      <div className="seconda-riga">
        <img className="menu" src={menu} alt={"menu"} />
        {NavbarAsList.map((dati) => {
          return (
            <div key={dati.text} className="dati-item">
              {dati.text}
            </div>
          );
        })}
        <div className="seconda-riga-destra">
          {RightList.map((destra) => {
            return (
              <div key={destra.text} className="destra-item">
                {destra.text}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavbarAsRoma;
