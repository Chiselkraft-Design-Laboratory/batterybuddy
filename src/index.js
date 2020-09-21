import React from "react";
import ReactDOM from "react-dom";
import BatteryBuddyApp from "App";
import * as serviceWorker from "serviceWorker";

ReactDOM.render(<BatteryBuddyApp />, document.getElementById("root"));

serviceWorker.unregister();
