import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "serviceWorker";
import ThemeService from "services/ThemeService";
import BatteryBuddyApp from "App";

ReactDOM.render(
  <ThemeService>
    <BatteryBuddyApp />
  </ThemeService>,
  document.getElementById("root")
);

serviceWorker.unregister();
