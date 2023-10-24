import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage";

function App() {
  const topScrollRef = useRef(null);
  const aboutScrollRef = useRef(null);
  const floorPlanScrollRef = useRef(null);
  const contactScrollRef = useRef(null);

  const executeScroll = (targetRef) => {
      console.log(targetRef.current);
      if (targetRef.current) {
        targetRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };

  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded}
      onHomePress={() => executeScroll(topScrollRef)}
      onAboutPress={() => executeScroll(aboutScrollRef)}
      onFloorPlanPress={() => executeScroll(floorPlanScrollRef)}
      onContactPress={() => executeScroll(contactScrollRef)}
      />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <LandingPage
            topScrollRef={topScrollRef}
            aboutScrollRef={aboutScrollRef}
            floorPlanScrollRef={floorPlanScrollRef}
            contactScrollRef={contactScrollRef}
            />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
