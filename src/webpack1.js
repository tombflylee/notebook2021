import { hot } from "react-hot-loader";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./styles.css";

function App() {
  return (
    <div class="content5">
      <ul>
        <li>
          <div>1、webpack 原理 & 构建流程</div>
          <div class="indent1">1.1、tapable（webpack原理之一）</div>
          <p class="indent1">tapable是什么</p>
          <div class="code-div indent1">
            <button>答</button>
            <p class="hide2">
              <p>tapable通过一系列hook类，实现不同的任务调度流程；</p>
              <img src="../assets/tapable1.png" width="600" />
              <img src="../assets/tapable2.png" width="400" />
            </p>
          </div>
          <p class="indent1">tapable原理(tapable的实现)</p>
          <div class="code-div indent2">
            <button>1）SyncHook</button>
            <div class="hide2">
              <SyntaxHighlighter
                language="javascript"
                className="code"
                style={a11yDark}
              >{`
// 实现原理
class SyncHook {
  constructor() {
    this.taskList = [];
  }
  tap(fn) {
    this.taskList.push(fn)
  }
  call(...args) {
    this.taskList.forEach(task => {
      task(...args);
    })
  }
}
// 使用
let hook = new SyncHook();
hook.tap(function(name) {
  console.log(name, 'synchook', 1)
})
hook.tap(function(name) {
  console.log(name, 'synchook', 2)
})
hook.call('I am');
              `}</SyntaxHighlighter>
            </div>
          </div>
          <div class="code-div indent2">
            <button>2）SyncBailHook</button>
            <div class="hide2">
              <SyntaxHighlighter
                language="javascript"
                className="code"
                style={a11yDark}
              >
                {`
// 不返回undefined就会被终止
class SyncBailHook {
  constructor() {
    this.taskList = [];
  }
  tap(fn) {
    this.taskList.push(fn);
  }
  call(...args) {
    let index = 0;
    while(index < this.taskList.length) {
      if(this.taskList[index](...args) !== undefined) {
        break;
      }
      index++;
    }
  }
}

// 使用

let hook = new SyncBailHook();
hook.tap(function(name) {
  console.log(name, 'syncbailhook', 'not over', 1);
})
hook.tap(function(name) {
  console.log(name, 'syncbailhook', 'not over', 2);
  return 'notover'; // 此处被终止了
})
hook.tap(function(name) {
  console.log(name, 'syncbailhook', 'not over', 3);
})
hook.call('I am');

                `}
              </SyntaxHighlighter>
            </div>
          </div>
          <div className="code-div indent2">
            <button>3）SyncWaterfallHook</button>
            <div className="hide2">
              <SyntaxHighlighter
                language="javascript"
                className="code"
                style={a11yDark}
              >
                {`
// 返回值为后一个函数的入参

// 利用reduce方法实现
class SyncWaterfallHook {
  constructor() {
    this.taskList = [];
  }
  tap(fn) {
    this.taskList.push(fn);
  }
  call(...args) {
    let [first, ...others] = this.taskList;
    let result = first(...args);
    others.reduce(function(result,task) {
      return task(result);
    }, result)
  }
}

// 使用
let hook = new SyncWaterfallHook();
hook.tap(function(add1, add2){
  return add1 + add2;
});
hook.tap(function(lastResult) {
  return lastResult + 1;
})
hook.tap(function(lastResult) {
  return lastResult + 1;
})
hook.call(1,2)
`}
              </SyntaxHighlighter>
            </div>
          </div>
          <div className="indent2 code-div">
            <button>4）SyncLoopHook</button>
            <div className="hide2">
              <SyntaxHighlighter
                language="javascript"
                className="code"
                style={a11yDark}
              >
                {`
// 循环执行一个fn，直到改fn返回undefined后，再继续执行下一个；
class SyncLoopHook {
  constructor() {
    this.taskList = [];
  }
  tap(fn) {
    this.taskList.push(fn)
  }
  call(...args) {
    let index = 0;
    while(index < this.taskList.length) {
      let result = this.taskList[index](...args);
      if(result === undefined) {
        index++;
      }
    }
  }
}
                  `}
              </SyntaxHighlighter>
            </div>
          </div>
          <div className="indent2 code-div">
            <button>5）AsyncParallelHook</button>
            <div className="hide2">
              <SyntaxHighlighter
                language="javascript"
                className="code"
                style={a11yDark}
              >
                {`
// 先看如何使用
let asyncHook = new AsyncParallelHook();
asyncHook.tapAsync("example", (arg1,cb) => {
  setTimeout(() => {
    console.log("example",arg1);
    cb();
  }, 1000);
});
asyncHook.tapAsync("example1", (arg1,cb) => {
  setTimeout(() => {
    console.log("example1", arg1);
    cb();
  }, 1000);
});
asyncHook.callAsync('hhhhhh,I am arg1.',() => {
  console.log("done");
});

// 实现
class AsyncParallelHook {
  constructor() {
    this.taskList = [];
  }
  tapAsync(fn) {
    this.taskList.push(fn);
  }
  callAsync(...args) {
    let cb = args.pop();
    let index = 0;
    const length = this.taskList.length;
    function actualCB() {
      index ++;
      if(index === length) {
        cb();
      }
    }
    this.taskList.forEach(function(task) {
      task(...args,actualCB); 
    })
  }
}

      `}
              </SyntaxHighlighter>
            </div>
          </div>
          {/* <div class="indent1 margin1">
            1.2、webpack使用了什么钩子（怎么使用了tapable）
          </div> */}
        </li>

        <li>2、如何使用webpack优化项目📌</li>
        <div className="indent1">2.1、优化项目的构建速度</div>
        <div className="code-div indent1">
          <button>答</button>
          <p class="hide2">
            1、开启多进程，利用thread-loader，将耗时的loader单独运行于一个worker中（一个worker就是一个nodejs进程）；
            <p>
              注意：不是所有的loader都要开启一个thread-loader，京任务只在ts文件解析时使用；
            </p>
            <div>
              <img src="../assets/webpack1.png" width="500" />
            </div>
          </p>
          <p></p>
        </div>
        <li>
          3、webpack构建流程
          <div className="code-div">
            <button>答案1</button>
            <div className="hide2">
              <img src="assets/webpack2.png" width="400" />
            </div>
          </div>
          <div className="indent1">
            3.1、在答案1里面已经口述了一个基本的流程；那么这些流程是如何实现的？
            <div className="code-div">
              <button>答案2</button>
              <div className="hide2">
                <p>看下图很明确，通过几大类来实现的，不同类有不同的分工;</p>
                <img src="assets/webpack3.png" width="400" />
                <p>
                  这里最重要的肯定是compiler +
                  compilation两个类；两个类都实现了tapable，plugin通过两个类释放的不同事件，来完成功能的插入；
                </p>
                <p>
                  1、compiler类：贯穿了整个生命周期的，从开始到结束，全局只初始化一次；
                  <br />
                  <span className="indent2">
                    compiler类接受所有的webpack配置，然后new一个实例出来，同时注册所有的plugin；并且在内部会调用new
                    Compilation来创建其实例；
                  </span>
                  <br />
                  <span className="indent2">比较重要的hook：看下图</span>
                  <br />
                  <img src="assets/webpack4.png" width="100" />
                </p>
                <p>
                  2、compilation类：用来解析文件的，loader都是在此调用，所有对文件的操作都是在此发生的；
                  <br />
                  <span className="indent2">
                    每一个module(文件) -> 经过loader处理 -> 文件生成chunk ->
                    文件打包输出
                  </span>
                  <br />
                  <span className="indent2">
                    compilation实例可不只有一个，每个文件的编译都会生成一个，而且在develpment阶段，每次保存都会生成新的compilation实例；
                  </span>
                  <p className="indent2">
                    compilation中的hook：hook非常多；有几个值得注意的：
                    <br />
                    <strong style={{ color: "#5e7a95" }}>
                      loader在第一个钩子buildModule就已经执行了；
                    </strong>
                    <br />
                    <strong style={{ color: "#5e7a95" }}>
                      SplitChunksPlugin在optimizeChunks钩子被执行；
                    </strong>
                  </p>
                  <img src="assets/webpack6.png" width="280px" />
                  <img src="assets/webpack7.png" width="280px" />
                  <img src="assets/webpack8.png" width="280px" />
                </p>
              </div>
            </div>
          </div>
          <div className="indent1">
            3.2、那如何写一个plugin呢？
            <div className="code-div">
              <button>答案</button>
              <div className="hide2">
                <p>
                  这里我直接写在webpack配置中了，红框中的就是我们监听的hook名，而且compilation提供的hook都是在compiler提供的compilation
                  hook后调用的！
                </p>
                <p>而且每一个hook回调提供的入参都不一样哦。</p>
                <img src="assets/webpack5.png" width="500" />
              </div>
            </div>
          </div>
          {/* <div className="indent1">
            <p>3.1、Compiler是什么</p>
            <div className="code-div">
              <button>答案</button>
              <div className="hide3"></div>
            </div>
          </div> */}
        </li>
        <li>
          <p>4、plugin和loader的区别</p>
          <div className="code-div">
            <button>答案</button>
            <div className="hide2">
              <p>
                因为webpack只处理js代码，所以我们所有引用的非js文件，都需要事先进行处理；
              </p>
              <p>
                loader一般都是对代码进行转换，就是一个函数，入参为源数据，出参为js代码；
              </p>
              <p>并且支持链式调用。</p>
              <p>
                plugin是可能运行在整个webpack生命周期里的，因为webpack基于tapable，执行过程中会emit很多个事件；不同的plugin监听不同的事件，完成不同的工作；
              </p>
              <p>比如开启多线程，来运行webpack；文件压缩等等；</p>
            </div>
          </div>
        </li>
        <li>
          <p>5、chunk 和 module 和 bundle的区别</p>
          <div className="code-div">
            <button>答案</button>
            <div className="hide2">
              <p>
                1）首先确定概念：
                <br />
                module：就是我们每一个文件；
                <br />
                bundle：我们最终输出的文件（js / css都算）；
                <br />
                chunk：webpack内部打包过程中生成的代码块；
              </p>
              <p>
                2）chunk的产生由谁决定，有3个配置可以决定：
                <div className="indent2">
                  2.1）entry的数量；
                  <br />
                  2.2）动态引入的模块（懒加载进来的）；
                  <br />
                  2.3）配置了splitChunk；
                </div>
              </p>
              <p>
                3）bundle的产生有谁决定？
                <br />
                有的时候，chunk和bundle是一对一的，但如果配置了MiniCssExtractPlugin，将css从js中抽离；或者需要map文件，就会将一个chunk分解成多个bundle；
              </p>
            </div>
          </div>
        </li>
        <li>
          <p>
            6、小问题：output的filename和chunkFilename
            <br />
            <div className="code-div">
              <button>答案</button>
              <div className="hide2">
                filename 和chunkFilename都是用来指定输出bundle的文件名的；
                <br />
                <br />
                区别就是：经过splitchunk /
                动态引入产生的chunk，在最后输出为bundle的时候，名字使用chunkFilename来规定；
                <br />
                而和entry对应的bundle，就由filename决定；
              </div>
            </div>
          </p>
        </li>
        <li>
          <p>
            7、thread-loader的一些理解
            <br />
            <div className="code-div">
              <button>答案</button>
              <div className="hide2">
                看了下源码，发现是采用了child_process模块，建立了多个进程（worker）；然后使用workerPool来管理这些进程，让进程可以循环使用；
              </div>
            </div>
          </p>
        </li>
      </ul>
    </div>
  );
}

export default hot(module)(App);
