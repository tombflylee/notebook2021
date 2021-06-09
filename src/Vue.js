import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/cjs/styles/hljs/monokai";

import "./styles.css";
export default function () {
  return (
    <div>
      <ul>
        <li>
          <p>1、单向数据流、双向绑定、数据响应式？</p>
          <i style={{ fontSize: "13px" }}>tips: 一定不要搞混了这几个概念</i>
        </li>
        <li className="indent1">
          <p>1.1、单向数据流</p>
          <div className="code-div">
            <button>答案</button>
            <div className="hide2">
              单向数据流这个是React、Vue都遵守的点，就是保证了
              <strong>父子</strong>
              组件间的数据的流向，且子组件不能直接修改父组件传入的props；
            </div>
          </div>
        </li>
        <li className="indent1">
          <p>1.2、双向绑定</p>
          <div className="code-div">
            <button>答案</button>
            <div className="hide2" style={{ paddingLeft: "10px" }}>
              <p>
                a. 首先要理解双向绑定是什么？
                <br />
                双向绑定是指model层可以改变view，反过来view也可以改变model；
              </p>
              <p>
                b. Vue中的双向绑定呢？
                <br />
                Vue通过v-model实现双向绑定；
              </p>
              <p>
                Vue中对于v-model的使用限制： （三个原生输入组件+自定义输入组件）
              </p>
              <img className="indent2" src="assets/vue1.png" width="200" />
              <br />
              看一段代码
              <SyntaxHighlighter
                language="jsx"
                className="code"
                style={monokai}
              >
                {`
// 原声组件使用v-model进行数据的双向绑定
<input v-model="message" />
<p>{{ message }}</p>

              `}
              </SyntaxHighlighter>
              <p>
                c. 原理呢？
                <br />
                其实Vue官方也说了，v-model只是一个语法糖，内部依然是通过绑定事件来实现的！
                <br />
                所以上面的代码其实就会被解析为：
                <SyntaxHighlighter
                  language="jsx"
                  className="code"
                  style={monokai}
                >
                  {`
<input v-bind:value="message" v-on:input="message=$event.target.value">
              `}
                </SyntaxHighlighter>
              </p>
            </div>
          </div>
        </li>
        <li className="indent1">
          <p>1.3、数据响应式？</p>
          <div className="code-div">
            <button>答案</button>
            <div className="hide2" style={{ paddingLeft: "10px" }}>
              <p>
                a. 什么是数据响应式
                <br />
                响应式，就是我们改动了数据，view也会自动的跟随改变！所以说Vue和React都是响应式的，只不过实现的原理有所不同而已！
              </p>
            </div>
          </div>
        </li>

        <li className="margin2">
          <p>2、那么Vue如何实现的数据响应式？</p>
        </li>

        <hr />
        <li>
          <p>1、什么是双向绑定？vue & react？</p>
          <div className="code-div">
            <button>答案</button>
            <div className="hide2">
              <span>单向绑定：更新model，view也会自动更新；</span>
              <br />
              <span className="indent2">
                React通过操作state，改变对应的ui；
              </span>
              <br />
              <br />
              <span>双向绑定：二者互相影响对方；</span>
              <br />
              <span className="indent2">
                可以修改的view最典型的就是input，看下vue中的双向绑定：不需要操作什么，只要通过v-model就可以实现了；
              </span>
              <SyntaxHighlighter
                language="jsx"
                className="code"
                style={monokai}
              >{`
<template>
  <input v-model="message" />
  <p>{{ message }}</p>
</template>
<script>
export default {
  name: "Categroy",
  data() {
    return {
      message: "default message",
    };
  },
};
</script>
            
              `}</SyntaxHighlighter>
            </div>
          </div>
        </li>
        <li>
          <p>2、为什么react不采用双向绑定？📌</p>
        </li>
        <li>
          <p>3、vue的双向绑定（数据响应式）是怎么实现的？</p>
          <div className="code-div">
            <button>答案</button>
            <div className="hide2">
              <span>
                一句话总结：数据劫持 + 发布/订阅模式 来实现
                <sub>这里只是说明是采用了这种软件设计模式</sub>
              </span>
              <br />
              <br />
              <span>
                那vue是怎么实现的：通过
                <br />
                1）Object.defineProperty
                <br />
                2）Observer类
                <br />
                3）Watcher类
                <br />
                4）Dep类
              </span>
              <br />
              <br />
              <span>先看下这4个都是干啥的：</span>
              <br />
              <span className="indent2">
                1、Object.defineProperty，原生函数，可以修改属性的getter和setter，数据劫持就是利用这个实现的！
              </span>
              <br />
              <span className="indent2">
                2、Observer类：在vue中数据是写在data属性里的，Observer类回收集所有的data里定义的属性，使用Object.defineProperty进行绑定；
              </span>
              <br />
              <span className="indent2">
                3、Watcher类【依赖本赖】：如果有一个名为message的data属性，那么可能在computed
                / watch /
                data中都存在某个属性依赖于这个message；所以vue中对应的有三种依赖Watcher；
              </span>
              <br />
              <span className="indent2">
                4、Dep类【收集依赖】：对上述Watcher进行收集，并通过notify()函数告知所有watcher进行更新;
              </span>
            </div>
          </div>
        </li>
        <li>
          <p>4、vue中的nextTick是啥啊？❓</p>
          <div className="code-div">
            <button>答案</button>
            <div className="hide2">
              没有找到特别好的应用场景；
              <br />
              官网给的答案就是：vue响应式的改变一个值以后，此时的dom并不会立即更新，如果需要在数据改变以后立即通过dom做一些操作，可以使用$nextTick获得更新后的dom。
              <br />
              <br />
              官网还有个答案是解答updated 和 nexttick的：
              <br />
              注意 updated
              不会保证所有的子组件也都一起被重绘。如果你希望等到整个视图都重绘完毕，可以在
              updated 里使用 vm.$nextTick。
              <SyntaxHighlighter
                language="jsx"
                className="code"
                style={monokai}
              >{`
updated: function () {
  this.$nextTick(function () {
    // Code that will run only after the
    // entire view has been re-rendered
  })
}
              `}</SyntaxHighlighter>
            </div>
          </div>
        </li>
        <li>
          <p>5、vue中的nextTick如何实现的？</p>
          <div className="code-div">
            <button>答案</button>
            <div className="hide23"></div>
          </div>
        </li>
      </ul>
    </div>
  );
}
