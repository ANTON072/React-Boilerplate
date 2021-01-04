import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

function init() {
  ReactDOM.render(<App />, document.getElementById("app"))
}

document.addEventListener("DOMContentLoaded", init)