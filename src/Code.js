import React from "react";

const Code = () => {
  return (
    <div>
      <ul>
        <li>
          <span className="qtitle">1、数组拍平</span>
          <span className="time">2021年07月12日</span>
        </li>
        <p>
          1）新的api，
          <code className="tt-code-style">Array.prototype.flat(depth)</code>
          可以完成；参数depth，可以控制拍平的层数；
          <br />
          2.1）递归 之 push；
          <code className="tt-code-style">
            flatten(inputArray, resultArray);
          </code>
          <br />
          2.2）递归 之 concat；
          <code className="tt-code-style">flatten(inputArray);</code>
          <br />
          3）技巧：join+split实现
        </p>
        <li>
          <span className="qtitle">2、手写一个获取鼠标位置的自定义hook</span>
          <span className="time">2021年07月13日</span>
        </li>
        <p>注意：screenX、pageX、clientX的区别</p>
        <li>3、截流 & 防抖</li>
      </ul>
    </div>
  );
};

export default Code;
