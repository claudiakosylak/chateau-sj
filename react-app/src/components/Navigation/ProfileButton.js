import React, { useState } from "react";
import Menu from "../Menu";

function ProfileButton({ onHomePress, onAboutPress, onFloorPlanPress, onContactPress }) {
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
            <Menu
              onHomePress={onHomePress}
              onAboutPress={onAboutPress}
              onFloorPlanPress={onFloorPlanPress}
              onContactPress={onContactPress}
              closeMenu={() => setShowMenu(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileButton;
