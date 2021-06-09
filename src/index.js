import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Category from "./category";
import { hot } from "react-hot-loader";
import "./styles.css";
const rootElement = document.getElementById("root");

const App = hot(module)(Category);
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
