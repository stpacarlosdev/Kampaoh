import React, { Fragment, useEffect, useState } from "react";
import { goTo } from "application/functions";
import { links } from "owners/links";

import Header from "application/components/header";
import Modal from "application/components/modal";

const HomePage = (props) => {
  const { history } = props;
  const userFavStorage = JSON.parse(localStorage.getItem("userFav")) || [];
  const [localShow, setLocalShow] = useState(false);

  useEffect(() => {}, []);

  return (
    <Fragment>
      <Header title={"HOME"} back={false} history={history} userFavs={userFavStorage} showModal={setLocalShow} />
      <Modal dataUsers={userFavStorage} show={localShow} setLocalShow={setLocalShow} />
      <div className="container__menu">
        <div onClick={() => goTo(history, links.owners)} className="container__menu_option">
          {"DUEÑOS"}
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
