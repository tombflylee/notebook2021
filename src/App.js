import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./styles.css";

export default function App() {
  return (
    <div class="content4">
      <h3>汇总</h3>
      <ul>
        <li>
          1、跨域有几种解决方法；
          <div class="code-div">
            <button>答案</button>
            <div class="hide2">
              <div>要看解决的是什么问题；</div>
              <div class="indent1">1、线上环境，前端域名和后端域名不一致；</div>
              <div>
                1）jsonp：利用script标签可以跨域的原理，实现json数据的传递；
              </div>
              <div>
                2）cors：通过cors协议，在请求头和响应头配置对应的header，通过option的preflight检查，实现跨域；
              </div>
              <div class="indent2">2、本地调试，调用线上或者预发接口</div>
              <div>
                1）webpack的devserve配置，在本地启动一个node服务器，原理是利用了node，node不受跨域限制，代理了我们的请求；
              </div>
              <div>
                2）charles或者whistle，将本地启动的服务127.0.0.1:3000代理到线上/预发的域名，本质也是启动了一个代理服务器；
              </div>
            </div>
          </div>
        </li>
        <li>
          2、React中的key的作用；
          <div class="code-div">
            <button>答案</button>
            <div class="hide2">
              <div>
                一句话概括：key的作用是为了降低react 的diff算法的复杂度的；
              </div>
              <div>
                详解：因为react的virtualdom是一个树结构，每一个节点的state/props的变动，都会导致其所有子节点的结构的变动；
                如果使用传统的diff算法，复杂度位o(n3);所以react通过两个方式进行优化：
                <div class="indent1">
                  2.1）如果两个节点的类型不同，那么直接不对比，并将其所有子节点删除，直接生成新的树；
                </div>
                <div class="indent1">
                  2.2）在循环渲染中，增加key，如果key相同，直接移动节点；比如a、b、c、d变为a、d、b、c，没有key的话，会删除后三个节点，再重新创建；有了key，直接移动；
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          3、<code>[1,2,3].map(parseInt)</code>返回什么？
          <div class="code-div">
            <button>答案</button>
            <div class="hide2">
              <div>返回[1,NaN,NaN]</div>
              <div>
                原因：map的callback第二个参数是index，parseInt第二个参数是进制；0按照十进制处理，其他两个无法解析；
              </div>
            </div>
          </div>
        </li>
        <li>
          4、settimeout、promise、async/await的区别？【关联20】
          <div class="code-div">
            <button>答案</button>
            <div class="hide2">
              <div>
                1、settimeout产生一个宏任务（macro），promise产生的是微任务，宏任务和微任务的执行次序不一样；
                eventloop总是执行完一个宏任务后，就去执
                行所有的微任务，清空微任务队列（所以微任务中产生微任务，也会被执行哦）；
              </div>
              <img src="/assets/task1.png" width="200" />
              <div>
                2、async/await
                其实是由promise+generator演进来的，可以看作是一个语法糖；（babel编译就是用promise+generator来实现的）
                <div>
                  利用了promise可以异步 + generator可以中断函数执行的特点；
                </div>
                <div>
                  比promise的优点就是：以同步的形式编写异步代码，不需要使用链式调用的写法；
                </div>
                <div>
                  3、三者的另一个区别是，产生宏任务/微任务的时机：
                  <div class="indent2">
                    settimeout是在计时结束后，产生一个宏任务；
                  </div>
                  <div class="indent2">
                    promise是在变为resolved/
                    rejected状态后产生一个微任务，执行的任务就是then /
                    catch的回调函数；
                  </div>
                  <div class="indent2">
                    async
                    的特点就是await后面的代码好像被暂停了一样，其实很好理解，因为await后面的代码是被then函数包裹的（await转换为promise+generator实现），所以只有在await后面的promise被resolved的情况下，才会产生一个微任务，执行的就是await下面的代码块；
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="indent1">
          4.1 宏任务与微任务 + settimeout与promise 的知识点；
          <div class="code-div">
            <button>知识点</button>
            <div class="hide2">
              <div>
                1）js通过eventloop循环访问宏/微任务任务队列，来保证代码的执行顺序的；
              </div>
              <div>
                2）每执行完一次宏任务，都会清空所有的微任务队列，即使微任务代码中再次产生微任务，也要清空；
              </div>
              <div>
                3）settimeout中的回调会被放在宏任务中，promise的回调会被放在微任务中；
              </div>
              <div>
                4）添加时机：
                settimeout一定是在计时到了后，将回调添加到宏任务中；promise一定是在调用resolve
                / reject后，将回调添加到微任务中；
              </div>
            </div>
          </div>
        </li>
        <li class="indent1">
          4.2 async的一些知识点；
          <div class="code-div">
            <button>知识点</button>
            <div class="hide2">
              <div>
                1）async / await 是由promise +
                generator演进来的；babel的实现也是通过promise +
                generator实现的；
              </div>
              <div>
                2）async 可以理解为如下的promise执行；
                <SyntaxHighlighter
                  language="javascript"
                  className="code"
                  style={a11yDark}
                >
                  {`async function() {
                  //  code1
                  await f1();
                  // code2
                  await f2();
                  // code3
                }`}
                </SyntaxHighlighter>
                <SyntaxHighlighter
                  language="javascript"
                  className="code"
                  style={a11yDark}
                >
                  {`function() {
                  // code1
                  new Promise(function() {
                    // f1函数体
                  }).then(function() {
                    // code2
                  })

                  new Promise(function() {
                    // f2函数体
                  }).then(function() {
                    // code3
                  })

                  return new Promise()
                }`}
                </SyntaxHighlighter>
              </div>
              <div>3）</div>
            </div>
          </div>
          {/* </div> */}
          {/* </div> */}
        </li>
        <li>
          5、有关promise，settimeout，async执行顺序的题：
          <div class="code-div" style={{ marginBottom: "10px" }}>
            <button>答题tips，一定要看</button>
            <div class="hide2">
              （此类题目一定画好一个宏任务栈，一个微任务栈，一句句分析，当产生任务时，写在栈中；）
              <img src="../assets/task2.png" width="600" />
            </div>
          </div>
          <div class="code-div">
            <button>q1</button>
            <div class="hide2">
              <SyntaxHighlighter
                language="javascript"
                className="code"
                style={a11yDark}
              >
                {`setTimeout(function() {
                     console.log(1)
                  }, 0);

                  new Promise(function(resolve, reject) {
                    console.log(2)
                    for (var i = 0; i < 10000; i++) {
                      if(i === 10) {console.log(10)}
                         i == 9999 && resolve();
                    }
                     console.log(3)
                  }).then(function() {
                     console.log(4)
                  })
                  console.log(5);`}
              </SyntaxHighlighter>
            </div>
          </div>
          <div class="code-div">
            <button>a1</button>
            <div class="hide2">2、10、3、5、4、1</div>
          </div>
        </li>
        <li>
          <div class="code-div">
            <button>q2</button>
            <div class="hide2">
              <SyntaxHighlighter
                language="javascript"
                className="code"
                style={a11yDark}
              >
                {`async function fn1 () {
  console.log(1);
  await fn2();
  console.log(3);
};

async function fn2 () {
  console.log(2);
};

fn1();
console.log(4)
console.log(5)`}
              </SyntaxHighlighter>
            </div>
          </div>

          <div class="code-div">
            <button>a2</button>
            <div class="hide2">1、2、4、5、3</div>
          </div>
        </li>
        <li>
          <div class="code-div">
            <button>q3</button>
            <div class="hide2">
              <SyntaxHighlighter
                language="javascript"
                className="code"
                style={a11yDark}
              >
                {`console.log('start')

setTimeout(() => {
  console.log('setTimeout')
}, 0)

new Promise((resolve) => {
  console.log('promise')
  resolve()
})
  .then(() => {
    console.log('then1')
  })
  .then(() => {
    console.log('then2')
  })

console.log('end')
`}
              </SyntaxHighlighter>
            </div>
          </div>

          <div class="code-div">
            <button>a3</button>
            <div class="hide2">
              start、promise、end、then1、then2、settimeout
            </div>
          </div>
        </li>
        <li>
          <div class="code-div">
            <button>q4</button>
            <div class="hide2">
              <SyntaxHighlighter
                language="javascript"
                className="code"
                style={a11yDark}
              >
                {`async function a1 () {
  console.log('a1 start')
  await a2()
  console.log('a1 end')
}
async function a2 () {
  console.log('a2')
}

console.log('script start')

setTimeout(() => {
  console.log('setTimeout')
}, 0)

Promise.resolve().then(() => {
  console.log('promise1')
})

a1()

let promise2 = new Promise((resolve) => {
  resolve('promise2.then')
  console.log('promise2')
})

promise2.then((res) => {
  console.log(res)
  Promise.resolve().then(() => {
      console.log('promise3')
  })
})
console.log('script end')
`}
              </SyntaxHighlighter>
            </div>
          </div>

          <div class="code-div">
            <button>a4</button>
            <div class="hide2">
              <div>
                结果：script start、a1 start、a2、promise2、script
                end、promise1、a1 end、promise2.then、promise3、setTimeout
              </div>
              <div>下图就是分析完成后，画出的宏/微任务队列</div>
              <img src="../assets/task3.png" width="650" />
            </div>
          </div>
        </li>
        <li>
          <div class="code-div">
            <button>终极一题q5</button>
            <div class="hide2">
              <SyntaxHighlighter
                language="javascript"
                className="code"
                style={a11yDark}
              >
                {`
async function a() {
    console.log('step into a');
    await b();
    console.log('leave a')
}

async function b() {
    console.log('step into b');
    await c();
    var name = await 1;
    console.log('leave b');
}

async function c() {
    console.log('step into c');
    var name = await new Promise(function(res) {
        res('LeeeeeM');
    });
    console.log('name', name);
    name = await 'leeeeem';
    console.log('name', name);
    console.log('leave c');
}

a();
new Promise(function(resolve) {
    console.log('promise a');
    resolve(1);
    console.log('leave a promise');
}).then(function(res) {
    console.log(res);
    return 2;
}).then(function(res) {
    console.log(res);
    return 3;
}).then(function(res) {
    console.log(res);
    return 4;
}).then(function(res) {
    console.log(res);
    return 5
}).then(function(res) {
    console.log(res);
    return 6;
}).then(function(res) {
    console.log(res);
    return 7;
}).then(function(res) {
    console.log(res);
});
`}
              </SyntaxHighlighter>
            </div>
          </div>

          <div class="code-div">
            <button>终极一题a5</button>
            <div class="hide2">
              <div>
                结果：step into a、step into b、step into c、promise a、leave a
                promise、name LeeeeeM、1、name、 leeeem、leave c、2、3、leave
                b、4、leave a、5 、6、7
              </div>
            </div>
          </div>
        </li>
        <li style={{ marginTop: "20px" }}>
          6、Async/Await 如何通过同步的方式实现异步
          <div class="code-div">
            <button>答案</button>
            <div class="hide2">
              async 其实就是一个generator的语法糖，利用yield特性+自动执行函数
              即可；
              <div>
                举例：（手动执行）（自动执行函数就不实现了,自动执行通过一个递归来实现）
                <img src="../assets/task4.png" width="500" />
              </div>
            </div>
          </div>
        </li>

        <li>
          7、谈谈generator函数
          <div class="code-div">
            <button>答案</button>
            <div class="hide2">
              <div>
                generator是es6提出的一个异步的解决方案，因为它可以中断一个函数的执行；
              </div>
              <div class="indent1">
                原理：genenrator会生成一个遍历器，并通过遍历器提供的next方法，执行到有yield标记的地方；
              </div>
              <div class="indent1">
                语法特点： （看下面代码），每次执行next()后，会返回一个对象
                <code>{`{ value: xxx, done: boolean }`}</code>
                ，value就是get()返回的值，done代表是否遍历结束；
                如果调用next(arg),那么arg就是赋值给result的；
                <pre>
                  <code class="javascript">let result = yield get();</code>
                </pre>
              </div>
            </div>
          </div>
        </li>
        <li>
          8、js异步编程的发展历程；
          <div class="code-div">
            <button>答案</button>
            <div class="hide2">
              <div>
                js最初的一些异步api，有settimeout/setinterval/ajax/事件回调，都是通过回调的形式完成的，如果存在多个异步操作，可能出现异步回调；
              </div>
              <div>
                之后出现了promise，promise的写法是通过then函数和catch来注册回调函数，允许链式调用，更易读，书写更方便；
              </div>
              <div>
                es6提出了generator，代码执行在遇到yield语句时可中断；但是无法自动执行；
                <div>
                  所以es7在generator的基础上，提出了async和await，遇到await暂停，知道后面的异步函数返回；他的优点是可以像同步执行代码一样来书写，更加易读，没有了promise的链式调用；
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          9、简述执行上下文、执行堆栈
          <div class="indent1">
            9.1、什么是执行上下文分类、组成、阶段）；
            <div class="code-div">
              <button>答案</button>
              <div class="hide2">
                <div>
                  定义：
                  （抽象的概念，）代表了当前代码的执行环境，但是可以用一个oject来描述其内部存储的变量；
                </div>
                <div>组成：</div>
                <div class="indent1">1、变量对象；</div>
                <div class="indent1">2、作用域链；</div>
                <div class="indent1">3、this；</div>
                <div>分类：</div>
                <div class="indent1">1、全局执行上下文；</div>
                <div class="indent1">2、函数执行上下文；</div>
                <div class="indent1">3、eval执行上下文；</div>
                <div>阶段：</div>
                <div class="indent1">1、创建阶段；</div>
                <div class="indent1">2、执行阶段；</div>
                <div class="indent1">3、销毁阶段；</div>
                <div>解释js中常见的现象：</div>
                <div class="indent1">1、变量声明提升；</div>
                <div class="indent1">2、函数声明提升；</div>
                <div class="indent1">3、闭包；</div>
                <div class="indent1">4、作用域链；</div>
                <img src="../assets/stack3.png" width="500" />
              </div>
            </div>
          </div>
          <div class="indent1">
            9.2、具体题目
            <div class="code-div">
              <button>a1</button>
              <div class="hide2">
                <SyntaxHighlighter
                  language="javascript"
                  className="code"
                  style={a11yDark}
                >
                  {`
var foo = function () {
  console.log('foo1'); // 代码1
}

foo();

var foo = function () {
  console.log('foo2');// 代码2
}

foo();`}
                </SyntaxHighlighter>
              </div>
            </div>
            <div class="code-div">
              <button>q1</button>
              <div class="hide2">
                <div>foo1、foo2</div>
                <div>思考过程：</div>
                <img src="../assets/stack1.png" width="500" />
              </div>
            </div>
            <div class="code-div" style={{ marginTop: "5px" }}>
              <button>a2</button>
              <div class="hide2">
                <SyntaxHighlighter
                  language="javascript"
                  className="code"
                  style={a11yDark}
                >
                  {`
foo(); // 代码1

var foo = function foo() { // 代码2
    console.log('foo1');
}

function foo() { // 代码3
    console.log('foo2');
}

foo(); // 代码4`}
                </SyntaxHighlighter>
              </div>
            </div>
            <div class="code-div">
              <button>q2</button>
              <div class="hide2">
                <div>foo2、foo1</div>
                <div>
                  和面试官解释：和执行上下文有关，第一个foo()的结果是因为在创建过程当中，函数声明就已经被确定了（函数提升）；第二个foo()的结果是在执行过程中，变量var
                  foo 被赋值，但函数声明在执行过程中是不影响的；
                </div>
                <div>思考过程：</div>
                <img src="../assets/stack2.png" width="500" />
              </div>
            </div>
            <div class="code-div" style={{ marginTop: "5px" }}>
              <button>a3</button>
              <div class="hide2">
                <SyntaxHighlighter
                  language="javascript"
                  className="code"
                  style={a11yDark}
                >
                  {`
var foo = 1;
function bar () {
    console.log(foo);
    var foo = 10;
    console.log(foo);
}

bar();`}
                </SyntaxHighlighter>
              </div>
            </div>
            <div class="code-div">
              <button>q3</button>
              <div class="hide2">
                <div>undefined、10</div>
                思考过程：
                <img src="../assets/stack5.png" width="500" />
                <div>
                  给面试官解释：在执行bar函数，首先创建一个函数内部的执行上下文，识别到有var
                  foo，所以foo为undefined；再进入执行阶段后，第一个打印的就是undefined；之后foo被赋值10，所以之后打印输出的是10；
                </div>
              </div>
            </div>
            <div class="code-div" style={{ marginTop: "5px" }}>
              <button>a4</button>
              <div class="hide2">
                <SyntaxHighlighter
                  language="javascript"
                  className="code"
                  style={a11yDark}
                >
                  {`
var foo = 1;
function bar () {
    console.log(foo);
    foo = 2;
}
bar();
console.log(foo);
`}
                </SyntaxHighlighter>
              </div>
            </div>
            <div class="code-div">
              <button>q4</button>
              <div class="hide2">
                <div>1、2</div>
                <div>注意：foo = 2，在创建过程中没有任何意义；</div>
                <div>思考过程：</div>
                <img src="../assets/stack6.png" width="500" />
                <div>
                  给面试官解释：第一个输出，因为bar内部没有显示声明foo，所以需要向上层作用域中寻找，所以第一个为1；第二个输出是因为bar内部修改了上层作用域中的foo；
                </div>
              </div>
            </div>
            <div class="code-div" style={{ marginTop: "5px" }}>
              <button>a5</button>
              <div class="hide2">
                <SyntaxHighlighter
                  language="javascript"
                  className="code"
                  style={a11yDark}
                >
                  {`
var foo = 1;
function bar (foo) {
    console.log(foo);
    foo = 234;
}
bar(123);
console.log(foo);
`}
                </SyntaxHighlighter>
              </div>
            </div>
            <div class="code-div">
              <button>q5</button>
              <div class="hide2">
                <div>123、1</div>
                <div>
                  注意：foo =
                  234，修改的是arguments中定义的foo变量，不是全局变量；
                </div>
                <div>思考过程：</div>
                <img src="../assets/stack7.png" width="500" />
                <div>
                  给面试官解释：第一个输出，因为bar函数在创建阶段，生成了一个入参变量foo，并且赋值为123；第二个输出，因为bar内部的foo
                  = 234，修改的并非全局foo；
                </div>
              </div>
            </div>
            <div class="code-div" style={{ marginTop: "5px" }}>
              <button>a6</button>
              <div class="hide2">
                <SyntaxHighlighter
                  language="javascript"
                  className="code"
                  style={a11yDark}
                >
                  {`
var a = 1;

function foo () {
    var a = 2;
    return function () {
        console.log(a);
    }
}

var bar = foo();
bar();
`}
                </SyntaxHighlighter>
              </div>
            </div>
            <div class="code-div">
              <button>q6</button>
              <div class="hide2">
                <div>2</div>
                <div>
                  注意：外部作用域（指向外层环境的指针）是在函数定义的时候就确定的
                </div>
              </div>
            </div>
            <div class="code-div" style={{ marginTop: "5px" }}>
              <button>a7</button>
              <div class="hide2">
                <SyntaxHighlighter
                  language="javascript"
                  className="code"
                  style={a11yDark}
                >
                  {`
var n = 1;
function fn() {
    var n = 2;
    function f() {
        n--;
        console.log(n);
    }
    f();
    return f;
}
var x = fn();
x();
console.log(n);
`}
                </SyntaxHighlighter>
              </div>
            </div>
            <div class="code-div">
              <button>q7</button>
              <div class="hide2">
                <div>1、0、1</div>
              </div>
            </div>
            <div class="code-div" style={{ marginTop: "5px" }}>
              <button>a8</button>
              <div class="hide2">
                <SyntaxHighlighter
                  language="javascript"
                  className="code"
                  style={a11yDark}
                >
                  {`
let x = 1;
function fn(x) {
    return function(y) {
        console.log(y + (++x));
    }
}
let f = fn(2);
f(3);
fn(4)(5);
f(6);
console.log(x);
`}
                </SyntaxHighlighter>
              </div>
            </div>
            <div class="code-div">
              <button>q8</button>
              <div class="hide2">
                <div>6、10、10、1</div>
              </div>
            </div>
          </div>
        </li>
        <li>
          10、call 和apply的区别？
          <div className="code-div">
            <button>答案</button>
            <div className="hide2">
              <p>二者都是用来指定体内this指向的，区别仅在入参上；</p>
              <p>
                <code>func.apply(thisArg, [argsArray])</code>
              </p>
              <p>
                <code>func.call(thisArg, arg1, arg2, arg3, ...)</code>
              </p>
            </div>
          </div>
        </li>
        <li>
          11、this的指向是如何被确定的，有哪些情况？
          <div className="code-div">
            <button>答案</button>
            <div className="hide2">
              <img src={"../assets/this1.png"} width="550" />
            </div>
          </div>
          <div className="indent1">
            11.1、写出答案
            <div className="code-div">
              <button>a1</button>
              <div className="hide2">
                <SyntaxHighlighter
                  language="javascript"
                  className="code"
                  style={a11yDark}
                >{`function Foo() {
    getName = function() {
        console.log(1);
    };
    return this;
}
Foo.getName = function() {
    console.log(2);
};
Foo.prototype.getName = function() {
    console.log(3);
};
var getName = function() {
    console.log(4);
};

function getName() {
    console.log(5);
}

Foo.getName();  // ?
getName(); // ?
Foo().getName(); // ?
getName(); // ?
new Foo.getName(); // ?
new Foo().getName(); // ?
`}</SyntaxHighlighter>
              </div>
            </div>
            <div className="code-div">
              <button>a1</button>
              <div className="hide2">
                <p>结果：2、4、1、1、2、3</p>
                <p>
                  注意：最后一个<code>new Foo().getName()</code>
                  ，new优先级大于.，所以等价于<code>(new Foo()).getName()</code>
                </p>
                <p>思考：1）执行上下文；2）this在不同情况下的指向；</p>
              </div>
            </div>
            <div className="code-div margin1">
              <button>a2</button>
              <div className="hide2">
                <SyntaxHighlighter
                  language="javascript"
                  className="code"
                  style={a11yDark}
                >{`let a = {
  b: function() {
    console.log(this)
  },
  c: () => {
    console.log(this)
  }
}
a.b(); // ?
a.c(); // ?
let d = a.b;
d(); // ?
`}</SyntaxHighlighter>
              </div>
            </div>
            <div className="code-div">
              <button>q2</button>
              <div className="hide2">
                <p>答案： {`{b: ƒ, c: ƒ}`}、window、window</p>
              </div>
            </div>
            <div className="code-div margin1">
              <button>a3</button>
              <div className="hide2">
                <SyntaxHighlighter
                  language="javascript"
                  className="code"
                  style={a11yDark}
                >{`var name1 = 1;
function test() {
    let name1 = 'kin';
    let a = {
        name1: 'jack',
        fn: () => {
      var name1 = 'black'
      console.log(this.name1) 
    }
  }
    return a;
}
test().fn() // ?
`}</SyntaxHighlighter>
              </div>
              <div className="code-div">
                <button>q3</button>
                <div className="hide2">
                  <p>答案：1</p>
                  <p>
                    注意：箭头函数的this，从自己作用域链的上一层继承this；上一层如果为函数，那么要看函数怎么被调用的！
                  </p>
                </div>
              </div>
            </div>
            <div className="code-div margin1">
              <button>a4</button>
              <div className="hide2">
                <SyntaxHighlighter
                  language="javascript"
                  className="code"
                  style={a11yDark}
                >{`function foo() {
  return () => {
    return () => {
      return () => {
        console.log("id:", this.id);
      };
    };
  };
}

var f = foo.call({id: 1});

var t1 = f.call({id: 2})()();
var t2 = f().call({id: 3})();
var t3 = f()().call({id: 4});`}</SyntaxHighlighter>
              </div>
            </div>
            <div className="code-div">
              <button>q4</button>
              <div className="hide2">
                <p>答案：1、1、1</p>
                <p>
                  解析：因为箭头函数的this不会被任何东西修改！！就是继承自上层作用域中的zhis！！
                </p>
              </div>
            </div>
            <div className="code-div margin1">
              <button>a5</button>
              <div className="hide2">
                <SyntaxHighlighter
                  language="javascript"
                  className="code"
                  style={a11yDark}
                >{`function foo() {
  console.log(this.a);
}
var a = 2;

(function () {
  "use strict";
  foo();
})();
////////上下2块代码执行结果///////

var a = 2;

(function () {
  "use strict";
  foo();
  
  function foo() {
    console.log(this.a);
  }
})();

                `}</SyntaxHighlighter>
              </div>
            </div>
            <div className="code-div">
              <button>q5</button>
              <div className="hide2">
                <p>答案：2、报错</p>
                <p>解析：第一个函数的定义在自执行函数外，不受严格模式影响!!</p>
              </div>
            </div>
            <div className="code-div margin1">
              <button>a6</button>
              <div className="hide2">
                <SyntaxHighlighter
                  language="javascript"
                  className="code"
                  style={a11yDark}
                >{`
function foo() {
  console.log( this.a );
}

var obj = {
  a: 2,
  foo: foo
};

var bar = obj.foo; 

var a = "oops, global";

bar();
                `}</SyntaxHighlighter>
              </div>
            </div>
            <div className="code-div">
              <button>q6</button>
              <div className="hide2">
                <p>答案：oops, global</p>
                <p>
                  解析：虽然bar =
                  obj.foo；但是！！bar只是一个指针，指向了foo函数的堆地址，相当于调用foo();如果要指向obj，必须用
                  <code>.操作符</code>！！
                </p>
              </div>
            </div>
            <div className="code-div margin1">
              <button>a7</button>
              <div className="hide2">
                <SyntaxHighlighter
                  language="javascript"
                  className="code"
                  style={a11yDark}
                >{`
function foo() {
  console.log( this.a );
}

function doFoo(fn) {
  
  fn();
}

var obj = {
  a: 2,
  foo: foo
};

var a = "oops, global"; 

doFoo( obj.foo ); 
                `}</SyntaxHighlighter>
              </div>
            </div>
            <div className="code-div">
              <button>q7</button>
              <div className="hide2">
                <p>答案：oops, global</p>
              </div>
            </div>
          </div>
        </li>

        <li>
          12、new操作符发生了什么？
          <div className="code-div">
            <button>答案</button>
            <div className="hide2">
              <img src="assets/new1.png" width="400" />
            </div>
          </div>
          <div className="indent1">12.1、手写一个new</div>
          <div className="code-div">
            <button>答案</button>
            <div className="hide2">
              <p>注意还有一个target操作符！！</p>
              <SyntaxHighlighter
                language="javascript"
                className="code"
                style={a11yDark}
              >
                {`/**
*
* @param {*} consFunc 构造函数
* @param argumetns 其余入参为构造函数的入参
*/
function newOperator(consFunc) {
newOperator.target = consFunc;
let obj = Object.create(consFunc.prototype);
let result = consFunc.apply(obj, [].slice.call(arguments, 1));

if (
  (typeof result === "object" && result !== null) ||
  typeof result === "function"
) {
  return result;
}
return obj;
}
               `}
              </SyntaxHighlighter>
            </div>
          </div>
        </li>

        <li>
          13、说说js中的词法作用域；
          <div className="code-div">
            <button>答案</button>
            <div className="hide2">
              <p>
                js中的作用域是采用的词法作用域（静态作用域），变量的作用域范围在程序执行前就被确定了；
              </p>
              <p>
                js的作用域其实就是执行上下文，变量和函数都会存放在里面；js中分全局、函数执行上下文，变量和函数在执行前，就已经初始化在执行上下文中；对于var，为undefined、对于let
                / const，没有初始化、对于函数声明，直接赋值函数体；
              </p>
              <p>
                另外当前执行上下文中还存在了外层作用域的指针[scope]，所以在当前作用域未找到变量，会继续向上层寻找；
              </p>
            </div>
          </div>
        </li>
        <li>
          14、闭包 & 作用📌
          <div className="code-div">
            <button>答案</button>
            <div className="hide2">
              <p>
                闭包就是允许函数内部的作用域访问到外层的作用域；通常懂事在函数内部在返回一个函数，那么外部函数在执行后不会被立刻销毁；
              </p>
              <p>
                作用： 1、模拟私有变量； 2、模拟模块；（立即执行函数）
                3、块级作用域；
                <SyntaxHighlighter
                  language="javascript"
                  className="code"
                  style={a11yDark}
                >
                  {`

// 模块
const module = (function() {
  return {
    moduleFunc1: function() {},
    moduleFunc2: function() {}
  }
})();


for(var i = 1 ;i < 5; i++) {
  setTimeout(function() {
    console.log(i);   // 5、5、5、5、5
  })
}
 // 块级作用域

for(var i =1 ;i < 5; i++) {
  (function(i) {
    setTimeout(function() {
      console.log(i) 
    })
  })(i)
}

// 通过let也可以实现
for(let i = 1; i< 5; i++) {
  setTimeout(function() {
    console.log(i);
  })
}
`}
                </SyntaxHighlighter>
              </p>
            </div>
          </div>
        </li>
        <li>
          15、js中的原型 & 原型链
          <div className="code-div">
            <button>答案</button>
            <div className="hide2">
              <p>
                js中每一个对象，都有一个私有属性__proto__，他指向了构造函数的prototype对象，实现js的继承；
                构造函数的prototype属性一个是一个对象，所以他也有一个__proto__属性，这样就会一直向上到Obect.prototype.__proto__，为null，这样就形成了一个原型链；
              </p>
              <p>
                访问一个对象上的属性，如果这个对象身上没有，那就沿着原型链一直向上寻找；
              </p>
              <p>js通过原型链来实现继承的；</p>
            </div>
          </div>
          <div className="indent1">
            <p>15.1、画出原型链</p>
            <div className="code-div indent1">
              <button>答案</button>
              <div className="hide2">
                <img src="assets/prototype1.png" width="300" />
              </div>
            </div>
          </div>
          <div className="indent1">
            <p>15.2、继承的方式（不需要都写出来，只最好的）📌</p>
            <div className="code-div indent1">
              <button>答案</button>
              <div className="hide3"></div>
            </div>
          </div>
        </li>
        <li>
          16、迭代
          <div className="indent1">
            <p>16.1、什么是迭代器</p>
            <div className="code-div">
              <button>答案</button>
              <div className="hide2">
                <p>
                  es6中的迭代器是一个协议/规则，只要满足的都可以是一个迭代器对象；
                </p>
                <p>
                  一个迭代器对象需要有一个Symbol.iterator属性，该属性的值是一个函数，这个函数内部返回一个对象，对象上有next方法，执行next方法后，会返回
                  {`{value: xxx, done: boolean}`};
                </p>
                <p>
                  内置的可迭代对象：1）Array、2）String、3）Map、4）Set、5）TypedArray（类数组：arguments）；
                </p>
                <SyntaxHighlighter
                  language="javascript"
                  className="code"
                  style={a11yDark}
                >
                  {`
// 使用方法
let a = [1, 2, 3];
let iteratorFunc = a[Symbol.iterator]();
console.log(iteratorFunc.next()); // {value: 1, done: false}
console.log(iteratorFunc.next()); // {value: 2, done: false}
console.log(iteratorFunc.next()); // {value: 3, done: false}
console.log(iteratorFunc.next()); // {value: 4, done: true}
                  `}
                </SyntaxHighlighter>
              </div>
            </div>
            <p>16.2、专用于可迭代对象的语法</p>
            <div className="code-div">
              <button>答案</button>
              <div className="hide2">
                1）for...of、2）yield、3）结构赋值、4）展开语法
              </div>
            </div>
          </div>
        </li>
        <li>
          <p>17、讲讲js的线程和进程</p>
          <div className="code-div">
            <button>答案</button>
            <div className="hide23"></div>
          </div>
        </li>
      </ul>
    </div>
  );
}
