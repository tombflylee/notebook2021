import React from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import WebPack from "./webpack1";
import Webpack2 from "./webpack2";
import App from "./App"; // js 汇总1
import App1 from "./App1"; // js 汇总1
import ReactApp from "./React";
import ReactApp2 from "./React2";
import VueApp from "./Vue";
import Math from "./math";
import Browser from "./browser";
import Browser2 from "./browser2";
import Pattern from "./pattern.js";
import Math2 from "./math2";
import Base1 from "./base1";
import MyWork from "./mywork";
import Performance from "./performance";
import CSS from "./css";
import REdux from "./redux";
import Code from "./Code";
import Journey from "./Journey";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles.css";

export default function () {
  const [visible, setVisible] = React.useState(false);

  return (
    <Router>
      <div>
        <ul className="category-ul">
          <li>
            <Link to="/"></Link>
          </li>
          <li>
            <Link to="/math1">算法1</Link>
          </li>
          <li>
            <Link to="/math2">算法2</Link>
          </li>
          <li>
            <Link to="/react1">React1</Link>
          </li>
          <li>
            <Link to="/react2">React2</Link>
          </li>
          <li>
            <Link to="/vue">Vue</Link>
          </li>
          <li>
            <Link to="/js1">js汇总1</Link>
          </li>
          <li>
            <Link to="/js2">js汇总2</Link>
          </li>
          <li>
            <Link to="/webpack1">webpack1</Link>
          </li>
          <li>
            <Link to="/webpack2">webpack2</Link>
          </li>
          <li>
            <Link to="/mywork">我的工作</Link>
          </li>
          <li>
            <Link to="/base1">基础之基础</Link>
          </li>
          <li>
            <Link to="/browser1">浏览器基础1</Link>
          </li>
          <li>
            <Link to="/browser2">浏览器基础2</Link>
          </li>
          <li>
            <Link to="/pattern">设计模式</Link>
          </li>
          <li>
            <Link to="/performance">性能相关</Link>
          </li>
          <li>
            <Link to="/CSS">css相关</Link>
          </li>
          <li>
            <Link to="/redux">redux相关</Link>
          </li>
          <li>
            <Link to="/code">手写</Link>
          </li>
          <li>
            <Link to="/journey">journey</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/math1">
            <Math />
          </Route>
          <Route path="/math2">
            <Math2 />
          </Route>
          <Route path="/react1">
            <ReactApp />
          </Route>
          <Route path="/react2">
            <ReactApp2 />
          </Route>
          <Route path="/vue">
            <VueApp />
          </Route>
          <Route path="/js1">
            <App />
          </Route>
          <Route path="/js2">
            <App1 />
          </Route>
          <Route path="/webpack1">
            <WebPack />
          </Route>
          <Route path="/webpack2">
            <Webpack2 />
          </Route>
          <Route path="/mywork">
            <MyWork />
          </Route>
          <Route path="/base1">
            <Base1 />
          </Route>
          <Route path="/browser1">
            <Browser />
          </Route>
          <Route path="/browser2">
            <Browser2 />
          </Route>
          <Route path="/pattern">
            <Pattern />
          </Route>
          <Route path="/performance">
            <Performance />
          </Route>
          <Route path="/css">
            <CSS />
          </Route>
          <Route path="/redux">
            <REdux />
          </Route>
          <Route path="/code">
            <Code />
          </Route>
          <Route path="/journey">
            <Journey />
          </Route>
          <Route path="/">{/* <Home /> */}</Route>
        </Switch>
      </div>
    </Router>
  );
}
