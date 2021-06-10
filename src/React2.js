import React from "react";

export default function App() {
  return (
    <div>
      <ul>
        <li>
          <div className="tips tips-green">
            purecomponent 、 浅比较、 shouldcompnentupdate、react.memo
          </div>
          <p>1、pureComponent</p>
          <div className="code-div">
            <button>答案（pureComponent一句话原理）</button>
            <div className="hide2">
              在普通Component基础上，自动帮我们增加了shouldComponentUpdate，对state和props进行
              <strong>浅比较</strong>
              ；如果一致就不需要重新触发render函数，提升性能；
            </div>
          </div>
          <div className="code-div margin1">
            <button>答案（pureComponent浅比较）</button>
            <div className="hide23">
              <div className="tips tips-red">背一下fb实现的代码吧！</div>
            </div>
          </div>
        </li>
        <li>
          <p>2、react中如何做性能优化（整理）</p>
          <div className="code-div">
            <button>答案</button>
            <div className="hide23"></div>
          </div>
        </li>
      </ul>
    </div>
  );
}
