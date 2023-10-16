import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import Menu from "../Menu";

function ProfileButton() {
  // const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);



  return (
    <>
      {!showMenu ? (
        <button onClick={() => setShowMenu(true)} className="menu-icon">
          <i class="fa-solid fa-bars"></i>
        </button>
      ) : (
        <button onClick={() => {
          setShowMenu(false)
        }}
        className="menu-icon">
          <i class="fa-solid fa-xmark"></i>
        </button>
      )}
      {showMenu && (
        <div id="modal">
        <div id="modal-background" onClick={() => setShowMenu(false)} />
        <div id="modal-content">
          <Menu />
        </div>
      </div>
      )}
    </>
  );
}

export default ProfileButton;
