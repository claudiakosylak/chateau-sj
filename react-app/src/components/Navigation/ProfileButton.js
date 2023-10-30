import React, { useState } from "react";
import Menu from "../Menu";
// import ReactCSSTransitionGroup from 'react-transition-group';

function ProfileButton({ onHomePress, onAboutPress, onFloorPlanPress, onContactPress }) {
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
        <div className="burger-wrapper" onClick={() => setShowMenu(true)}>
          <button className="menu-icon"></button>
        </div>
      ) : (
        <div className="burger-wrapper" onClick={handleClose}>
          <button className="menu-icon-open"></button>
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
            />
          </div>
          {/* </ReactCSSTransitionGroup> */}
        </div>
      )}
    </>
  );
}

export default ProfileButton;
