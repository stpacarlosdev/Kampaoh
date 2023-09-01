import React from "react";
import killCat from "assets/img/killcat.png";
import favIcon from "assets/img/fav.png";
import arrowIcon from "assets/img/arrowBack.png";
import { length } from "ramda";

const Header = (props) => {
  const { title, back, userFavs, showModal } = props;

  return (
    <div className="header__container">
      {back && (
        <div className="header__back-container" onClick={() => window.location.replace("/")}>
          <img src={arrowIcon} className="header__img" alt="back" />
        </div>
      )}
      <div className="header__kill_cat" onClick={() => null}>
        <img className="header__img" alt="kill_cat" src={killCat} />
        <div>0</div>
      </div>
      <div>{title && <p className="header__title-container">{title}</p>}</div>
      <div className="header__fav_user">
        <img className="header__img" alt="fav_user" onClick={() => showModal(true)} src={favIcon} />
        <div>{userFavs ? length(userFavs) : 0}</div>
      </div>
    </div>
  );
};

export default Header;
