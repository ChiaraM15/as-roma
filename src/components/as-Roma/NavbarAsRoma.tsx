import React from "react";
import roma from "../../assets/as-roma-final.png";
import menu from "../../assets/menu.png"
import { NavbarAsList, RightList } from "../../utils/asDati";
import "./styles.css"

const NavbarAsRoma = () => {
  return (
    <div className="navbar">
      <div className="prima-riga"></div>
      <div className="logo">
        <img className="roma" src="roma" alt="roma" />
      </div>
      <div className="seconda-riga">
        <img className="menu" src="menu" alt="menu" />
        {NavbarAsList.map((dati) => {
          return (
            <div key={dati.text} className="dati-item">
              {dati.text}
            </div>
          );
        })}
        <div className="seconda-riga-destra">{RightList.map((destra) =>{
          return (
            <div key={destra.text} className="destra-item">
              {destra.text}
            </div>
          );
        })}</div>
      </div>
    </div>
  );
};

export default NavbarAsRoma;
