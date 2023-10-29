import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage";
import FloorPlans from "./components/FloorPlans";
import { getFloorPlansThunk } from "./store/floor_plan";


function App() {
  const floorPlans = useSelector(state => state.floorPlan.floorPlans)
  let floorPlanArray = Object.values(floorPlans);
  const topScrollRef = useRef(null);
  const aboutScrollRef = useRef(null);
  const floorPlanScrollRef = useRef(null);
  const contactScrollRef = useRef(null);
  const searchScrollRef = useRef(null);

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
    dispatch(getFloorPlansThunk())
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
                onNavigate={() => executeScroll(topScrollRef)}
              />
            </Route>
            <Route exact path="/floor-plans">
              <FloorPlans searchScrollRef={searchScrollRef}
                onNavigate={() => executeScroll(searchScrollRef)}
                floorPlans={floorPlanArray}
              />
            </Route>
          </Switch>
      )}
    </>
  );
}

export default App;
