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
  // const ulRef = useRef();

  // const openMenu = () => {
  //   if (showMenu) return;
  //   setShowMenu(true);
  // };

  // useEffect(() => {
  //   if (!showMenu) return;

  //   const closeMenu = (e) => {
  //     if (!ulRef.current.contains(e.target)) {
  //       setShowMenu(false);
  //     }
  //   };

  //   document.addEventListener("click", closeMenu);

  //   return () => document.removeEventListener("click", closeMenu);
  // }, [showMenu]);


  return (
    <>
            <OpenModalButton
              modalComponent={<Menu />}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
            />
    </>
  );
}

export default ProfileButton;
