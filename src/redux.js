import React from "react";

export default function REdux() {
  return (
    <div>
      <ul>
        <li>
          <p>1、flux的架构</p>
          <div className="code-div">
            <button>答案</button>
            <div className="hide2">
              facebook 提出的管理数据的架构，redux算是一个实现的库；
              <br />
              <br />
              它的核心（尤雨溪）：应用组件不允许直接修改数据；数据统一有store来管理，视图的改动只能通过dispatch一个action，store监听到后改动数据，再通知组件进行渲染；
              <br />
              保证了单项的数据流，使得数据的管理更容易（特别是在大型应用中）；
            </div>
          </div>
        </li>
        <li>
          <p>2、redux和flux的区别(大致讲一下)</p>
          <div className="code-div">
            <button>答案</button>
            <div className="hide2">
              1. redux 只存在一个store； <br />
              2. 使用了不可变数据作为数据源，每次改动都会生成新数据；
            </div>
          </div>
        </li>
        <li>
          <p>3、简单介绍一些redux的工作流</p>
          <div className="code-div">
            <button>答案</button>
            <div className="hide2">
              1、概念；
              <br />
              store（全局唯一），
              <br />
              state（store存储的数据），
              <br />
              action（触发action引起state改动），
              <br />
              reducer（根据不同的action，决定如何修改state）；
              <br />
              <br />
              2、流程：
              <br />
              2.1）首先定义好reducer和initialState，并通过createStore()建立一个全局的store,
              store就是存储state的；
              <br />
              2.2）通过dispatch(action)来触发一个更改，store会根据reducer的定义来决定如何产生新的state；
              <br />
              2.3）通过getState()来获取store中存储的最新的state;
            </div>
          </div>
        </li>
        <li>
          <p>
            4、Redux
            如何实现多个组件之间的通信，多个组件使用相同状态如何进行管理
          </p>
        </li>
      </ul>
    </div>
  );
}
