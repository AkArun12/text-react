

import React, { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

// import About from "./components/About";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,

// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "grey";
      showAlert("Darkmode has enabled", "success");
      document.title = "TextUtils- dark mode";
    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("Light mode has enabled", "success");
      document.title = "TextUtils- light mode";
    }
  };

  return (
    <>
      {/* <Router> */}
        <Navbar
          title="TextUtils"
          aboutText="AboutUs"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Switch>
            <Route exact path="/about">
              <About />
            </Route> */}

            {/* <Route exact path="/"> */}
              <TextForm
                showAlert={showAlert}
                heading="Text converter"
                mode={mode}
              />
            {/* </Route> */}
          {/* </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
