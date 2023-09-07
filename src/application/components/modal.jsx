import React from "react";
import { length, map } from "ramda";

const Modal = (props) => {
  const { dataUsers, show, setLocalShow } = props;

  return (
    show &&
    dataUsers && (
      <div className="modal__container" onClick={() => setLocalShow(false)}>
        <div className="modal__contain_user">
          <p>{"FAVORITOS"}</p>
          {dataUsers && length(dataUsers) > 0 ? (
            map(
              (user) => (
                <div key={user?.id} className="row__owner">
                  <div>{`Nombre:  ${user?.name}`}</div>
                  <div>{`Estatus:  ${user?.status}`}</div>
                </div>
              ),
              dataUsers
            )
          ) : (
            <>{"🤷‍♂️ NO TIENES FAVORITOS 🤷‍♂️"}</>
          )}
        </div>
      </div>
    )
  );
};

export default Modal;
