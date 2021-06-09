import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/cjs/styles/hljs/monokai";
import "./styles.css";

export default function App() {
  return (
    <div style={{ height: "3000px" }}>
      <ul>
        <li>17、写一个深拷贝，考虑 正则，Date这种类型的数据</li>
        <div className="code-div">
          <button>答案</button>
          <div className="hide2">
            <p>考虑不同类型对应的处理方法：</p>
            <img src="assets/type2.png" width="500" />
            <p>最终的代码：</p>
            <SyntaxHighlighter
              language="javascript"
              className="code"
              style={monokai}
            >
              {`
const getType = (target) => {
  return Object.prototype.toString.call(target);
};

const isPrimitive = (target) => {
  const type = getType(target);
  return (
    type === "[object Null]" ||
    type === "[object Undefined]" ||
    type === "[object Strinpg]" ||
    type === "[object Number]" ||
    type === "[object Boolean]" ||
    type === "[object BigInt]"
  );
};

function deepCopy(target, map = new Map()) {
  if (isPrimitive(target)) {
    return target;
  }

  if (map.get(target)) {
    return target;
  }
  map.set(target, true);

  const type = getType(target);
  let result;

  if (type === "[object Map]" || type === "[object WeakMap]") {
    result = new target.constructor();
    target.forEach((value, key) => {
      result.set(key, deepClone3(value));
    });
    return result;
  }

  if (type === "[object Set]" || type === "[object WeakSet]") {
    result = new target.constructor();
    target.forEach((value) => {
      result.add(deepClone3(value));
    });
    return result;
  }

  if (type === "[object Symbol]") {
    return Object(Symbol.prototype.valueOf.call(target));
  }

  if (type === "[object RegExp]") {
    result = new target.constructor(target.source, /\w*$/.exec(target));
    result.lastIndex = target.lastIndex;
    return result;
  }

  if (type === "[object Array]") {
    result = [];
    for (let key of target) {
      result[key] = deepCopy(target[key]);
    }
    return result;
  }

  if (type === "[object Date]" || type === "[object Error]") {
    return new target.constructor(target);
  }

  if (type === "[object Object]") {
    result = {};
    for (let key in target) {
      result[key] = deepCopy(target[key]);
    }
  }
}
                `}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="indent1">
          <p>17.1、js中的数据类型有哪些</p>
          <div className="code-div">
            <button>答案</button>
            <div className="hide2">
              <p>（5+1+1）+1</p>
              <p>
                原始类型：string、number、boolean、null、undefined、symbol、bigint
              </p>
              <p>引用类型：object</p>
            </div>
          </div>
        </div>
        <div className="indent1">
          <p>17.2、js如何判断数据类型</p>
          <div className="code-div">
            <button>答案</button>
            <div className="hide2">
              <img src="assets/type1.png" width="500" />
            </div>
          </div>
        </div>
        <div className="indent1">
          <p>17.3、看看下面表达式的返回</p>
          <div className="code-div">
            <button>a1</button>
            <div className="hide2">
              <SyntaxHighlighter
                language="javascript"
                className="code"
                style={monokai}
              >{`
typeof [1, 2, 3];
typeof new Date();
typeof /regex/;

typeof new Boolean(true);
typeof new Number(1);
typeof new String("");

typeof function () {};
typeof class C {};
              
              `}</SyntaxHighlighter>
            </div>
          </div>
          <div className="code-div">
            <button>q1</button>
            <div className="hide2">前面6个都是object，后面2个是function</div>
          </div>

          <div className="code-div margin1">
            <button>a2</button>
            <div className="hide2">
              <SyntaxHighlighter
                language="javascript"
                className="code"
                style={monokai}
              >{`
function C() {}
function D() {}

var o = new C();
o instanceof C; // 1)
o instanceof Object; // 2)
C.prototype instanceof Object; // 3)

C.prototype = {};
var o2 = new C();
o2 instanceof C; // 4)

o instanceof C; // 5)

D.prototype = new C();
var o3 = new D();
o3 instanceof D; // 6)
o3 instanceof C; // 7)
              `}</SyntaxHighlighter>
            </div>
          </div>
          <div className="code-div">
            <button>q2</button>
            <div className="hide2">
              true、true、true、true、false、true、true
            </div>
          </div>

          <div className="code-div margin1">
            <button>a3</button>
            <div className="hide2">
              <SyntaxHighlighter
                language="javascript"
                className="code"
                style={monokai}
              >{`
console.log('123' instanceof String); // 1)
console.log(new String('123') instanceof String); // 2)
console.log(new String('123') instanceof Object); // 3)

console.log({} instanceof Object); // 4)
console.log(Object.create(null) instanceof Object); // 5)
console.log(new Date() instanceof Date); // 6)
console.log(new Date() instanceof Object); // 7)
              `}</SyntaxHighlighter>
            </div>
          </div>
          <div className="code-div">
            <button>q3</button>
            <div className="hide2">
              false、true、true、true、false、true、true
            </div>
          </div>

          <div className="code-div margin1">
            <button>a4</button>
            <div className="hide2">
              <SyntaxHighlighter
                language="javascript"
                className="code"
                style={monokai}
              >{`
const toString = Object.prototype.toString;
console.log(toString.call(1)); // 1)
console.log(toString.call('123')); // 2)
console.log(toString.call(new Boolean(true))); // 3)
console.log(toString.call(new Date())); // 4)
console.log(toString.call(function() {})); // 5)
console.log(toString.call(Symbol())); // 6)
console.log(toString.call({})); // 7)

function Person() {}
var person = new Person();
console.log(toString.call(person)); // 8)
person[Symbol.toStringTag] = 'Person'
console.log(toString.call(person)); // 9)
              `}</SyntaxHighlighter>
            </div>
          </div>
          <div className="code-div">
            <button>q4</button>
            <div className="hide2">
              [object Number]、[object String]、[object Boolean]、[object
              Date]、[object Function]、[object Symbol]、[object
              Object]、[object Object]、[object Person]
            </div>
          </div>
        </div>

        <div className="indent1">
          <p></p>
        </div>

        <li>18、实现promise.all 和 proimse.allSettled</li>
        <div className="code-div">
          <button>答案</button>
          <div className="hide2">
            <SyntaxHighlighter
              language="javascript"
              className="code"
              style={monokai}
            >
              {`
function promiseAllSettled(promiseList) {
  const length = promiseList.length;
  return new Promise(function (resovle, reject) {
    let result = [];
    promiseList.forEach((promise, index) => {
      promise.then(
        (value) => {
          result[index] = value;
          if (index + 1 === length) resovle(result);
        },
        (error) => {
          result[index] = error;
          if (index + 1 === length) resovle(result);
        }
      );
    });
  });
}

function promiseAll(promiseList) {
  const length = promiseList.length;
  return new Promise(function (resolve, reject) {
    let result = [];
    promiseList.forEach((promise, index) => {
      promise.then(
        (value) => {
          result[index] = value;
          if (index + 1 === length) resolve(result);
        },
        (error) => {
          reject(error);
        }
      );
    });
  });
}
              `}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="indent1">
          <p>18.1、promise.all和promise.allSettled的区别</p>
          <div className="code-div">
            <button>答案</button>
            <div className="hide2">
              <p>
                promise.all
                和promise.allSettled都接受一个可以遍历的promise对象，并且返回一个新的promise；
              </p>
              <p>区别看下图：</p>
              <img src="assets/promise1.png" width="500" />
              <img src="assets/promise2.png" width="500" />
            </div>
          </div>
        </div>

        <li className="margin2">19、弱引用，WeakMap和Map的区别</li>
        <div className="indent1">
          <p>19.1、Set 和 Map</p>
          <div className="code-div">
            <button>答案</button>
            <div className="hide2">
              <p>Set是一个类似于数组的结构，但区别是不允许存储重复的值</p>
              <p>
                Map是一个键值对的结构，类似于object，但是key允许是任意类型的值；
              </p>
            </div>
          </div>

          <p>19.2、什么是弱引用</p>
          <div className="code-div">
            <button>答案</button>
            <div className="hide2">
              <p>
                弱引用，使得垃圾回收机制不考虑WeakMap/WeakSet对一个对象的引用，即WeakMap/WeakSet不会阻止一个对象被回收；
              </p>
              <p>
                下面的代码： a = null后，只是去掉了a对于
                <code>{`{person: 'amy'}`}</code>
                对象的引用，并没有去掉set1对于这个对象的强引用；所以这一块内存不能被释放；
              </p>
              <p>
                同样的，如果是weakset，b = null后，对于
                <code>{`{person: 'amy'}`}</code>
                这个对象的引用没有了，另外由于weakset的弱引用，所以不阻止垃圾回收；这个对象会被销毁；
              </p>
              <SyntaxHighlighter
                language="javascript"
                className="code"
                style={monokai}
              >{`
let a = {person: 'amy'};
let set1 = new Set();
set1.add(a);
a = null;

let b =  {person: 'amy'};
let set2 = new WeakSet();
set2.add(b);
b = null;
`}</SyntaxHighlighter>
            </div>
          </div>

          <p>19.3、WeakSet 和 WeakMap</p>
          <div className="code-div">
            <button>答案</button>
            <div className="hide2">
              <img src="assets/setmap1.png" width="500" />
            </div>
          </div>
        </div>
        <li>
          <p>20、MutationObserver、postMessage</p>
          <div className="indent2">
            <p>20.1、MutationObserver相关</p>
            <div className="code-div">
              <button>答案</button>
              <div className="hide2">
                <span>
                  一句话总结：最特别的就是，可以一次回调并批量处理多个更新，而不是多次触发回调
                </span>
                <br />
                <br />
                <span>1）MutationObserver：用来监听dom的改变</span>
                <br />
                <span>2）Api：</span>
                <br />
                <span className="indent1">
                  a. 构造函数：
                  <code>var observer = new MutationObserver(callback);</code>
                </span>
                <br />
                <span className="indent1">
                  b. observe方法：
                  <code>observer.observe(target[, options])；</code>
                </span>
                <br />
                <span className="indent1">
                  c. takeRecords方法：
                  <code>const mutationRecords = observer.takeRecords();</code>
                </span>
                <br />
                <span className="indent1">
                  d. disconnect方法：
                  <code>observer.disconnect();</code>
                </span>
                <br />
                <br />
                <span>3）需要注意的点：</span>
                <br />
                <span className="indent1">
                  a.
                  看到很多文档上写的都是，mo的回调函数触发是异步的；这其实是它一个很大的特点，
                  <strong>
                    callback的第一个参数是一个由多个mutationRecord组成的数组；即不是每次dom改动都会立刻执行callback，会异步的触发；
                  </strong>
                </span>
                <br />
                <span className="indent1">
                  原因：内部监听到有一次改动后，会在mo microtask
                  queue中存放一个task，然后就把flag设为true，之后必须等到这个microtask执行了，再将flag设为false；（设为true后，不允许再mo
                  microtask queue中存放新的task）；
                </span>
                <br />
                <span className="indent1">
                  同时，还维护一个record
                  queue，记录每一次改动的mutationRecord；当mo mircotask
                  queue中所有的变动都传给callback；
                  queue中的一个task执行后，会将record
                </span>
                <br />
                <span className="indent1">
                  那么mo microtask queue的执行时机，肯定是遵循macrotask 和
                  microtask被触发的时机了
                </span>
                <hr />
                <span className="indent1">
                  b.takeRecords方法，可以将record
                  queue中还未被处理的mutationRecord清空；
                </span>
                <br />
                <hr />
                <span className="indent1">
                  c.在observe方法的options选项中，可以设置是否监控1）属性变化、2）子节点变化、3）孙子节点变化；
                </span>
                <br />
                <hr />
                <span className="indent1">d.看下写结果的题目：</span>
              </div>
            </div>
            <div>
              <p>2.2、MutationObserver 看代码写结果</p>
              <div className="code-div">
                <button>题目1</button>
                <div className="hide2">
                  <SyntaxHighlighter
                    language="javascript"
                    className="code"
                    style={monokai}
                    的
                  >{`
// 题目一
const node1 = document.getElementById("node1");
const node2 = document.getElementById("node2");
const button = document.getElementById("button");

const callback = function (mutationsList, observer) {
  console.log("监听了");
  for (let mutation of mutationsList) {
    console.log(mutation.target);
  }
};
const observer = new MutationObserver(callback);
observer.observe(node1, { attributes: true, childList: true, subtree: true });
observer.observe(node2, { attributes: true, childList: true, subtree: true });

button.addEventListener("click", function () {
  let i = 0;
  while (i < 3) {
    node1.style = ""; // 触发
    i++;
  }
  node2.style = ""; // 触发

});

`}</SyntaxHighlighter>
                </div>
              </div>
              <div className="code-div margin1">
                <button>答案1</button>
                <div className="hide2">
                  <SyntaxHighlighter
                    language="javascript"
                    className="code"
                    style={monokai}
                    的
                  >{`
/****************************************************/
// 返回
监听了 
<div id="node1" class="halo" style="">nihaoazen</div>
<div id="node1" class="halo" style="">nihaoazen</div>
<div id="node1" class="halo" style="">nihaoazen</div>
<div id="node2" class="halo" style="">nihaoazen</div>
`}</SyntaxHighlighter>
                </div>
              </div>
              <div className="code-div margin1">
                <button>题目2</button>
                <div className="hide2">
                  <SyntaxHighlighter
                    language="javascript"
                    className="code"
                    style={monokai}
                    的
                  >{`
// 题目一
const node1 = document.getElementById("node1");
const node2 = document.getElementById("node2");
const button = document.getElementById("button");

const callback = function (mutationsList, observer) {
  console.log("监听了");
  for (let mutation of mutationsList) {
    console.log(mutation.target);
  }
};
const observer = new MutationObserver(callback);
observer.observe(node1, { attributes: true, childList: true, subtree: true });
observer.observe(node2, { attributes: true, childList: true, subtree: true });

button.addEventListener("click", function () {
  let i = 0;
  while (i < 3) {
    node1.style = ""; // 触发
    i++;
  }
  setTimeout(function () {
    console.log("settimeout end");
    node2.style = ""; // 触发
  }, 3000);

});

`}</SyntaxHighlighter>
                </div>
              </div>
              <div className="code-div margin1">
                <button>答案2</button>
                <div className="hide2">
                  <SyntaxHighlighter
                    language="javascript"
                    className="code"
                    style={monokai}
                    的
                  >{`
/****************************************************/
// 返回
监听了 
<div id="node1" class="halo" style="">nihaoazen</div>
<div id="node1" class="halo" style="">nihaoazen</div>
<div id="node1" class="halo" style="">nihaoazen</div>
settimeout end
监听了
<div id="node2" class="halo" style="">nihaoazen</div>
`}</SyntaxHighlighter>
                </div>
              </div>
            </div>
            <p>2.3、postMessage是啥？</p>
            <div className="code-div">
              <button>答案</button>
              <div className="hide2">
                <span>
                  1）最大的特点：允许两个窗口进行
                  <strong style={{ color: "red" }}>跨域</strong>的通信
                </span>
                <br />
                <span>2）Api：</span>
                <br />
                <span className="indent1">
                  发消息的窗口：
                  <code>
                    otherWindow.postMessage(message, targetOrigin, [transfer]);
                  </code>
                </span>
                <br />
                <span className="indent1">
                  收消息的窗口：监听messge事件即可，
                  <code>
                    window.addEventListener("message", receiveMessage, false);
                  </code>
                </span>
                <br />
                <span>3）需要注意的点：</span>
                <br />
                <span className="indent1">
                  3.1）otherWindow是对于其他窗口的引用：
                </span>
                <br />
                <span className="indent2">a. iframe；</span>
                <br />
                <span className="indent2">b. window.open()；</span>
                <br />
                <span className="indent1">
                  3.2）targetOrigin：就是我们收消息的页面的url；
                </span>
                <br />
                <span className="indent1">
                  3.3）为了保证安全，监听message事件，一定要判断event.origin是否为安全的源；
                </span>
              </div>
            </div>
            <p>2.4、使用postMessage来传递信息的例子</p>
            <div className="code-div">
              <button>答案</button>
              <div className="hide2">
                <SyntaxHighlighter
                  language="javascript"
                  className="code"
                  style={monokai}
                  的
                >{`
// 这个例子是实现过的
// 在我们当前的页面，使用let target = window.open(url)打开任意你想打开的页面；
// 之后在新页面监听message信息；
// 在愿页面使用target.postMessage('', url)发送一段信息；

`}</SyntaxHighlighter>
              </div>
            </div>
          </div>
        </li>

        <li>
          <p>
            21、从js异步到事件循环event loop（nodejs +
            浏览器），慢慢来，慢慢扯【关联4】
          </p>
          <div className="code-div">
            <button>答案</button>
            <div className="hide23"></div>
          </div>
        </li>
      </ul>
    </div>
  );
}
