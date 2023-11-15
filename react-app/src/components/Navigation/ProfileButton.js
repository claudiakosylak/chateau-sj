import React, { useState } from "react";
import Menu from "../Menu";
import styles from "./ProfileButton.module.sass";

function ProfileButton({ onHomePress, onAboutPress, onFloorPlanPress, onContactPress, onAdminPress }) {
  // const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const [closeTransition, setCloseTransition] = useState(false);

  const handleClose = () => {
    setCloseTransition(true);
    setTimeout(() => {
      setCloseTransition(false)
      setShowMenu(false)
    }, 500)
  }


  return (
    <>
      {!showMenu ? (
        <div className={styles.burger_wrapper} onClick={() => setShowMenu(true)}>
          <button className={styles.icon}></button>
        </div>
      ) : (
        <div className={styles.burger_wrapper} onClick={handleClose}>
          <button className={styles.icon_open}></button>
        </div>
      )}

      {showMenu && (
        <div id="modal">
          <div id={"modal-background"} onClick={() => setShowMenu(false)} />
          {/* <ReactCSSTransitionGroup */}
          {/* transitionName="menu-opening"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300} */}
          {/* > */}
          <div id={!closeTransition ? "modal-content" : "modal-content-close"}>
            <Menu
              onHomePress={onHomePress}
              onAboutPress={onAboutPress}
              onFloorPlanPress={onFloorPlanPress}
              onContactPress={onContactPress}
              closeMenu={handleClose}
              onAdminPress={onAdminPress}
            />
          </div>
          {/* </ReactCSSTransitionGroup> */}
        </div>
      )}
    </>
  );
}

export default ProfileButton;
