import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import "assets/css/index.scss";
import App from "application/app";

ReactDOM.render(<App />, document.getElementById("root"));
