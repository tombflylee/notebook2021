import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./styles.css";

export default function App() {
  return (
    <div>
      <ul>
        <li>1、CommonJs vs ESm</li>
        <div className="code-div">
          <button>答案</button>
          <div className="hide2">
            <p>首先要明确，commonJs和esm都是标准，是社群里的模块化规范</p>
            <p>具体的差异，表现为以下三点：</p>
            <p>1、commonJs输出的是模块的拷贝，esm输出的是模块的引用；</p>
            <p>2、commonJs模块是运行时加载，esm模块是在编译时加载；</p>
            <p>
              3、esm的import / export
              有一个提升的作用，会被提升到最顶部（和变量解析时候有点像），而且执行和解析都是被提升到最顶部！！！
            </p>
          </div>
        </div>
        <div className="code-div">
          <button>具体表现--解析1</button>
          <div className="hide2">
            <p>1、拷贝 vs 引用</p>
            <p>commonjs 代码：两次输出结果都是step1: ss ss1</p>
            <SyntaxHighlighter
              language="javascript"
              className="code"
              style={a11yDark}
            >
              {`
// m1.js                            
let { ss } = require("./m2.js");
console.log("step1: ss", ss); // step1: ss ss1
setTimeout(function () {
  console.log("step2: ss", ss); // step2: ss ss1
}, 3000);

// m2.js
module.exports.ss = "ss1";
setTimeout(function () {
  module.exports.ss = "ss2";
}, 1000);
`}
            </SyntaxHighlighter>
            <p>esm 代码：由于源文件中ss变量变了，所以两次输出的结果不一样</p>
            <SyntaxHighlighter
              language="javascript"
              className="code"
              style={a11yDark}
            >
              {`
// m1.js                            
import { ss } from "./m2.mjs";
console.log("step1: ss", ss); // step1: ss ss1
setTimeout(function () {
  console.log("step2: ss", ss); // step1: ss ss2
}, 3000);

// m2.js
export let ss = "ss1";
setTimeout(function () {
  ss = "ss2";
}, 1000);
`}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="code-div">
          <button>具体表现--解析2</button>
          <div className="hide2">
            2、commonjs是运行时加载，esm是编译时加载
            <p>
              commonjs:
              commonjs的模块本质是一个对象，js中的对象只有在运行时才会确定，所以只有在运行时才能加载；
            </p>
            <p>commonjs好处：因为是运行时加载，我们可以放在条件中进行判断；</p>
            <p>
              commonjs坏处：加载进来的是一个对象，所以加载的话就是一整个模块；
            </p>
            <p>esm: 静态加载，利用js语言在执行前的编译期，将依赖加载进来；</p>
            <p>esm好处：可以只加载模块部分代码，实现tree-shaking的可能；</p>
            <p>esm坏处：所以无法进行动态灵活的判断；</p>
          </div>
        </div>
        <div className="code-div">
          <button>具体表现--解析3</button>
          <div className="hide2">
            <p>3、esm的提升效果</p>
            <p>
              以下代码的执行结果：m1.mjs 中import被提升，直接进入m2.mjs并执行；
            </p>
            <SyntaxHighlighter
              language="javascript"
              className="code"
              style={a11yDark}
            >
              {`
// m1.mjs
console.log("start");
import { b } from "./m2.mjs";
function calculate() {
  return b + 1;
}
console.log("from m1.mjs", calculate());

// m2.mjs
export var b = 2;
console.log("end of m2.mjs.");

// 执行结果：
end of m2.mjs.
start
from m1.mjs 3
              `}
            </SyntaxHighlighter>
          </div>
        </div>
        <li>2、对于循环加载的处理</li>
        <div className="code-div">
          <button>答案-共同点</button>
          <div className="hide2">
            <p>
              共同点：都会记录上一个模块是否被调用过/
              解析过，不会再将控制权交出；
            </p>
          </div>
        </div>
        <div className="code-div">
          <button>不同点-commonjs</button>
          <div className="hide2">
            <p>
              1、commonjs：commonjs判断出现循环加载，只输出已经执行的部分，
              <strong style={{ color: "red" }}>
                但是控制权不会再交还给原来的模块；
              </strong>
            </p>
            <p className="indent1">
              代码解析：看下面的执行顺序，首先a.js输出{`{done: false}`}
              ，然后引用了b.js，控制权交给b.js，b.js也输出{`{done: false}`}
              ，之后发现了循环引用，此时不再回到a.js，而是直接取a.js已经返回的
              {`{done: false}`}；
            </p>
            <SyntaxHighlighter
              language="javascript"
              className="code"
              style={a11yDark}
            >
              {`
// a.js
exports.done = false;
var b = require('./b.js');
console.log('在 a.js 之中，b.done = %j', b.done);
exports.done = true;
console.log('a.js 执行完毕');

// b.js
exports.done = false;
var a = require('./a.js');
console.log('在 b.js 之中，a.done = %j', a.done);
exports.done = true;
console.log('b.js 执行完毕');

// 输出顺序
在 b.js 之中，a.done = false
b.js 执行完毕
在 a.js 之中，b.done = true
a.js 执行完毕
                `}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="code-div">
          <button>不同点-esm</button>
          <div className="hide2">
            <p>
              2、esm：es6中定义的模块，也会在import时判断模块是否解析完成，如果出现循环，那么第一个模块就是未解析完成，不会一直循环下去；
            </p>
            <p>特点是：有提升的效果，和执行上下文有点类似；</p>
            <p className="indent1">
              代码解析：在解析时候，import/export被提升（另外我猜测，import会在export之上）；
              <br />
              1、解析，另外注意const a
              在解析过程中，也会初始化，不过a变量没有给值，且不能使用；
              <br />
              2、执行，执行也是有提升的，先执行1）；
              <br />
              3、控制权到m2.mjs中，再执行2）；
              <br />
              4、发现m1并没有加载完，所以仍在m2.mjs中执行，此时a是定义了但是没有值的，所以无法使用的；
              <br />
              5、在执行3）、4），到4）的时候就会报错了；
            </p>
            <SyntaxHighlighter
              language="javascript"
              className="code"
              style={a11yDark}
            >
              {`
// m1.mjs
export const a = false;
import { b } from "./m2.mjs";  // 1）
console.log(b);

// m2.mjs
export const b = true; // 3）
import { a } from "./m1.mjs"; // 2）
console.log(a); // 4）

// 结果：
ReferenceError: Cannot access 'a' before initialization
              `}
            </SyntaxHighlighter>

            <p className="indent1">如果上面的const变成var</p>
            <p className="indent1">
              代码解析：因为var定义的变量，在解析时，会被赋值为undefined，所以不会报错；
            </p>
            <SyntaxHighlighter
              language="javascript"
              className="code"
              style={a11yDark}
            >
              {`
// m1.mjs
export var a = false;
import { b } from "./m2.mjs";  // 1）
console.log(b);

// m2.mjs
export var b = true; // 3）
import { a } from "./m1.mjs"; // 2）
console.log(a); // 4）

// 结果：
undefined
true
              `}
            </SyntaxHighlighter>
          </div>
        </div>
      </ul>
    </div>
  );
}
