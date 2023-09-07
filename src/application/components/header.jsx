import React from "react";
import { length } from "ramda";
import { links } from "home/links";
import { goTo } from "application/functions";
import killCat from "assets/img/killcat.png";
import favIcon from "assets/img/fav.png";
import arrowIcon from "assets/img/arrowBack.png";

const Header = (props) => {
  const { title, history, back, userFavs, showModal, requestKill, handleReviveCats } = props;

  return (
    <div className="header__container">
      {back && (
        <div className="header__back-container" onClick={() => goTo(history, links.main)}>
          <img src={arrowIcon} className="header__img" alt="back" />
        </div>
      )}
      <div className="header__kill_cat">
        <img className="header__img" alt="kill_cat" src={killCat} onClick={() => handleReviveCats()} />
        <div>{requestKill}</div>
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
