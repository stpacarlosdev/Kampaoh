import React from "react";
import { map } from "ramda";

const Modal = (props) => {
  const { dataUsers, show, setLocalShow } = props;

  return (
    show &&
    dataUsers && (
      <div className="modal__container" onClick={() => setLocalShow(false)}>
        <div className="modal__contain_user">
          <p>{"FAVORITOS"}</p>
          {dataUsers &&
            map(
              (user) => (
                <div key={user?.id} className="row__owner">
                  <div>{`Nombre:  ${user?.name}`}</div>
                  <div>{`Estatus:  ${user?.status}`}</div>
                </div>
              ),
              dataUsers
            )}
        </div>
      </div>
    )
  );
};

export default Modal;
