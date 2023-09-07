import React, { Fragment, useState } from "react";
import { goTo } from "application/functions";
import { links } from "owners/links";

import Header from "application/components/header";
import Modal from "application/components/modal";

const HomePage = (props) => {
  const { history } = props;

  const userFavStorage = JSON.parse(localStorage.getItem("userFav")) || [];
  const requestKill = JSON.parse(localStorage.getItem("catKill")) || 0;
  const [localShow, setLocalShow] = useState(false);

  return (
    <Fragment>
      <Header
        title={"HOME"}
        history={history}
        back={false}
        requestKill={requestKill}
        userFavs={userFavStorage}
        showModal={setLocalShow}
      />
      {/* MODAL */}
      <Modal dataUsers={userFavStorage} show={localShow} setLocalShow={setLocalShow} />
      {/* OWNERS */}
      <div className="container__menu">
        <div onClick={() => goTo(history, links.owners)} className="container__menu_option">
          {"DUEÑOS"}
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
