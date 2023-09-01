import React, { Fragment, useEffect, useState } from "react";
import { searchUsers } from "application/functions";
import { map } from "ramda";
import Header from "application/components/header";
import Modal from "application/components/modal";
import Loading from "application/components/loading";

const OwnerPage = () => {
  const userFavStorage = JSON.parse(localStorage.getItem("userFav")) || [];
  const [dataUser, setDataUser] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [pageRequest, setPageRequest] = useState(0);
  const [userFavs, setUserFavs] = useState(userFavStorage ? userFavStorage : []);
  const [localShow, setLocalShow] = useState(false);

  useEffect(() => {
    searchUsers(setDataUser, [], pageRequest, "");
  }, []);

  const loadMore = () => {
    setPageRequest(pageRequest + 1);
    searchUsers(setDataUser, dataUser, pageRequest + 1, "");
  };

  const handleSearchUser = (e) => {
    const terms = e ? e.target?.value : "";
    if (terms.length > 2) searchUsers(setDataUser, [], 0, terms);
    if (terms.length === 0) searchUsers(setDataUser, [], 0, terms);
  };

  const addFavUser = (selectedUser) => {
    const auxUserFavs = [...userFavs];
    auxUserFavs.push(selectedUser);
    localStorage.setItem("userFav", JSON.stringify(auxUserFavs));
    setUserFavs(auxUserFavs);
  };

  return (
    <Fragment>
      <Header title={"OWNERS"} back={true} userFavs={userFavs} dataUser={dataUser} showModal={setLocalShow} />
      <Modal dataUsers={userFavStorage} show={localShow} setLocalShow={setLocalShow} />
      {/* {SEARCH} */}
      <div className="container__input">
        <input className="input__search" type="search" onChange={(e) => handleSearchUser(e)} placeholder="BUSCAR" />
      </div>
      {/* User list */}
      <div className="container__owner">
        <div className="container__table_owner">
          {dataUser ? (
            map(
              (user) => (
                <div key={user.id} className="row__owner" onClick={() => setSelectedUser(user)}>
                  <div>{`Nombre:  ${user?.name}`}</div>
                  <div>{`Estatus:  ${user?.status}`}</div>
                </div>
              ),
              dataUser
            )
          ) : (
            <Loading />
          )}
        </div>
        {/* User detail */}
        {selectedUser && (
          <div className="container__selectedUser">
            <div>{`NOMBRE:  ${selectedUser?.name}`}</div>
            <div>{`ESTATUS:  ${selectedUser?.status}`}</div>
            <div>{`GÉNERO:  ${selectedUser?.gender}`}</div>
            <div className="btn__add_fav" onClick={() => addFavUser(selectedUser)}>
              {"Añadir a favoritos"}
            </div>
          </div>
        )}
      </div>
      <div className="btn__loadMore" onClick={() => loadMore()}>
        VER MÁS
      </div>
    </Fragment>
  );
};

export default OwnerPage;
