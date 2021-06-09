import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/cjs/styles/hljs/monokai";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./styles.css";

export default function App() {
  return (
    <div>
      <ul>
        <li>1、浏览器事件机制</li>
        <li className="indent1">
          1.1、DOM 0级事件和2级事件是啥？
          <div className="code-div">
            <button>答案</button>
            <div className="hide2">
              <p>0级是使用html属性onclick这种来绑定的事件；</p>
              <p>
                2级是使用addEventListener /
                removeEventListener来绑定的为2级dom事件
              </p>
            </div>
          </div>
        </li>
        <li className="indent1">
          1.2、简述一下事件流模型
          <div className="code-div">
            <button>答案</button>
            <div className="hide2">
              <p>
                事件流模型中有3个阶段：1）捕获阶段；2）目标阶段；3）冒泡阶段；
              </p>
              <p>
                这三个阶段对应了addEventListener的回调触发的时机；具体表现在第三个入参：
              </p>
              <p className="indent2">1）第三个入参是false，监听冒泡阶段；</p>
              <p className="indent2">2）第三个入参是true，监听捕获阶段；</p>
              <p>
                如果监听的是目标元素，那么执行顺序按照函数书写的前后顺序，与第三个参数无关；
              </p>
            </div>
          </div>
        </li>
        <li className="indent1">
          1.3、0级和2级还有事件流有什么关系？
          <div className="code-div">
            <button>答案</button>
            <div className="hide2">
              <p>事件流总是3个阶段；</p>
              <p>1）0级绑定的事件，只能监听到冒泡阶段；</p>
              <p>2）0级绑定的事件，同一个元素多次绑定同一个事件，会覆盖；</p>
            </div>
          </div>
        </li>
        <li className="indent1">
          1.4、事件代理的原理
          <div className="code-div">
            <button>答案</button>
            <div className="hide2">
              <p>
                流用了事件流模型，将所有事件回调统一绑在最顶层元素上，通过冒泡阶段来捕获子元素的事件；react就是这个原理；
              </p>
            </div>
          </div>
        </li>
        <li className="indent1">
          1.5、写答案
          <div className="code-div">
            <button>q1</button>
            <div className="hide2">
              <SyntaxHighlighter
                language="javascript"
                className="code"
                style={a11yDark}
              >
                {`
<div id="i1" style="height: 150px;width: 150px;background: red;" onclick="alert(0)">
  <div id="i2" style="height: 100px;width: 100px;background: green;" onclick="alert(1)">
     <div id="i3" style="height: 50px;width: 50px;background: blue;" onclick="alert(2)"></div>
  </div>
</div>
                `}
              </SyntaxHighlighter>
            </div>
          </div>
          <div className="code-div">
            <button>a1</button>
            <div className="hide2">
              <p>点击 i3，返回2、1、0</p>
            </div>
          </div>
          <div className="code-div margin1">
            <button>q2</button>
            <div className="hide2">
              <SyntaxHighlighter
                language="javascript"
                className="code"
                style={a11yDark}
              >
                {`
<div id="i1" style="height: 150px;width: 150px;background: red;" onclick="alert(0)">
  <div id="i2" style="height: 100px;width: 100px;background: green;" onclick="alert(1)">
     <div id="i3" style="height: 50px;width: 50px;background: blue;" onclick="alert(2)"></div>
  </div>
</div>
<script type="text/javascript">
    document.addEventListener('click',(e) => {
        alert(0);
    },true) 
    document.getElementById("i1").addEventListener('click',(e) => {
        alert(1);
    },true) 
    document.getElementById("i2").addEventListener('click',(e) => {
        alert(2);
    })  
    document.getElementById("i3").addEventListener('click',(e) => {
        alert(3);
    })     
</script>
                `}
              </SyntaxHighlighter>
            </div>
          </div>
          <div className="code-div">
            <button>a2</button>
            <div className="hide2">
              <p>点击 i3，返回0、1、3、2</p>
            </div>
          </div>
          <div className="code-div margin1">
            <button>q3</button>
            <div className="hide2">
              <img src="assets/event2.png" width="200" />
            </div>
          </div>
          <div className="code-div">
            <button>a3</button>
            <div className="hide2">
              <p>
                css不会改变事件流的过程，即使最内部的div脱离文档流；对于事件的传递没有任何影响！
              </p>
            </div>
          </div>
          <div className="code-div margin1">
            <button>q4</button>
            <div className="hide2">
              <SyntaxHighlighter
                language="javascript"
                className="code"
                style={a11yDark}
              >
                {`
<div id="p">parent</div>
<script type="text/javascript">
  var p = document.getElementById("p");
  p.addEventListener(
    "click",
    function (e) {
      alert("p 冒泡");
    },
    true
  );
  p.addEventListener(
    "click",
    function (e) {
      alert("p 捕获");
    },
    false
  );
</script>
                `}
              </SyntaxHighlighter>
            </div>
          </div>
          <div className="code-div">
            <button>a4</button>
            <div className="hide2">
              <p>返回：p 冒泡、p 捕获；</p>
              <p>对于目标元素，执行顺序按照绑定顺序，与冒泡捕获没关系；</p>
            </div>
          </div>
        </li>
        <li>
          <p>2、requestAnimationFrame</p>
          <div className="code-div">
            <button>答案</button>
            <div className="hide2">
              <img src="assets/browser1.png" width="400" />
              <br />
              <span>
                一句话总结：使用此api能够更好的用js实现动画，相比于之前的setInterval
                / setTimeout具有更好的性能；
              </span>
              <br />
              <br />
              <span>为什么有更好的性能？</span>
              <br />
              <span className="indent2">
                答：1）因为电脑屏幕的帧率是一定的，60fps；那么浏览器刷新的频率最好是和硬件刷新频率一致，不然就会出现浪费性能（屏幕刷1次，浏览器刷了2个），或者出现掉帧（屏幕刷新2次，浏览器只刷新一次）；
              </span>
              <br />
              <span className="indent2">
                2）浏览器的raf，实际是监听了屏幕发出的信号<strong>vsync</strong>
                ，再进行渲染的；所以可以和浏览器刷新频率保持一致；
              </span>
              <br />
              <span className="indent2">
                3）使用raf，还可以节省资源；因为浏览器在最小化或者隐藏的时候，raf的回调是不会执行的；这个setTimeout/setInterval是办不到的；
              </span>
              <br />
              <span className="indent2">
                3）另一个优点是，raf会把一次回调中的dom操作合并，仅做一次
                <strong>重排+重绘</strong>；但是setTimeout没有这个功能；
              </span>
            </div>
          </div>
          <p>2.1、对于“帧”，我想要说的</p>
          <div className="code-div">
            <button>思考</button>
            <div className="hide2">
              在浏览器performance中得到的帧，代表的是浏览器绘制的帧率，不是屏幕更新的帧率；屏幕更新的帧率是固定死的；
              有的时候会发现很长一段时间，帧率为0，那是因为此时页面静止，没有交互/动画，自然浏览器是不需要重绘的；但此时屏幕依然是60fps的不停更新哦；
            </div>
          </div>
          <p>2.2、使用raf要注意的</p>
          <div className="code-div">
            <button>答案</button>
            <div className="hide2">
              raf中的js执行时间不能太久；如果超过一帧时长，那么动画依然很卡；
            </div>
          </div>
        </li>
        <li>
          <p>3、requestIdleCallback</p>
          <div className="code-div">
            <button>答案</button>
            <div className="hide2">
              <span>
                参考问题2中的图；浏览器会接受到屏幕vsync的信号，就收到信号后，浏览器会去执行raf
                &
                重绘；如果执行完毕后，浏览器空闲了，并还未接收到下一个vsync，那就执行回调；
              </span>
              <br />
              <br />
              <span>
                ric的回调不一定会执行，因为有可能js在执行一个很长的任务，时长跨度有好多个帧；那么此时，raf和ric都没法执行了！
              </span>
            </div>
          </div>
        </li>
        <li>
          <p>4、网络相关的问题</p>
          <div className="indent2">
            <p>4.1、cookie的知识点</p>
            <div className="code-div">
              <button>答案</button>
              <div className="hide2">
                <span>
                  （一）cookie对应的就是在response header中的set-cookie字段 +
                  和request header中的cookie字段；
                </span>
                <br />
                <br />
                <span>
                  （二）cookie 通常用来保持用户的登陆状态、用户位置、设备信息等
                </span>
                <br />
                <br />
                <span>（三）cookie相关的几个特性 & 对应的属性：</span>
                <br />
                <span>1、生命周期：Expires / Max-Age；</span>
                <br />
                <span>2、访问限制：HttpOnly / Secure；</span>
                <br />
                <span>3、作用域：Domain / Path / SameSite；</span>
                <br />
                <br />
                <span>
                  （四）各个属性详细分析（在下面截图中，都能找到对应的属性）：
                </span>
                <br />
                <span>
                  1、Expires +
                  Max-Age:可以设定cookie的时效性；设置了时效，即使关闭了浏览器再次打开后也是有效的；如果没有设置，就属于关闭浏览器自然就失效了；一般与登陆态有关的都是不设置过期时间的；
                </span>
                <br />
                <span>
                  2、HttpOnly：设置了httponly，就无法通过document.cookie来访问了;（
                  <strong>可以防止xss攻击</strong>）
                </span>
                <br />
                <span>
                  3、Secure：设置了secure，只允许https请求携带此cookie；
                </span>
                <br />
                <span>
                  4、domain / path
                  ：设置了此cookie的作用域，比如如下图，我司使用统一登录，所以domain设置如此；
                  （如果不设置domain，那么必须为同域的，才可以携带）
                </span>
                <br />
                <span>
                  5、SameSite：取值：none、strict、lax；（
                  <strong>
                    这里最重要的点：这里的samesite是同“站”，不是同“域”；即a.jd.com和b.jd.com是同站的！！
                  </strong>
                  ）
                </span>
                <img src="assets/http1.png" width="780" />
                <br />
                <img src="assets/http2.png" width="730" />
                <br />
              </div>
            </div>
            <p>4.2、localstorage、sessionstorage的知识点</p>
            <div className="code-div">
              <button>答案</button>
              <div className="hide2">
                <span>
                  二者和cookie肯定不一样，cookie是http协议中的东西；这俩只是浏览器的全局对象；
                </span>
                <br />
                <br />
                <span>可能遇到的几个问题：</span>
                <br />
                <span>
                  1、如果超出内存了，此时再次setItem会如何？会报错，且旧值不会删，新值也不会存。
                </span>
                <br />
                <span>
                  2、二者都遵循同源策略，不是一个origin的，互相不能访问；
                </span>
                <br />
                <span>
                  3、localstorage不会主动删除，必须手动清楚，没有过期时间；
                </span>
                <br />
                <span>
                  4、sessionstorage里面的东西只在当前标签+同源才可以访问到，关闭当前标签，sessionstorage就被清除了；
                  （即使你在另一个标签页打开一摸一样的url，sessionstorage也不会共享的！！）
                </span>
                <br />
                <span>
                  5、二者存储的都是字符串类型，不是字符串类型，会被自动转换为字符串类型的！
                </span>
              </div>
            </div>
            <p>4.3、网上找到的问题 -- 前端常见的存储方式有哪些？</p>
            <div className="code-div">
              <button>答案</button>
              <div className="hide2">cookie、localstorage、sessionstorage</div>
            </div>
            <p>
              4.4、网上找到的问题 --
              cookie、localstorage、sessionstorage的区别？
            </p>
            <div className="code-div">
              <button>答案</button>
              <div className="hide2">
                <span>
                  首先，cookie是http协议中的定义；local/sessionstorage是浏览器的实现；
                </span>
                <br />
                <span>
                  能够存储的大小不一样，cookie只有4kb，local/sessionstorage普遍有5m；
                </span>
                <br />
                <span>
                  另外，cookie可以设置访问的权限（domain / path
                  /samesite）；local/sessionstorage不行，必须为同源；
                </span>
                <br />
                <span>
                  时效性，cookie可以设置expires /
                  max-age；local/sessionstorage不行；
                </span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <p>5、浏览器进程 & 线程</p>
          <div className="code-div">
            <button>答案（进程的相关内容）</button>
            <div className="hide2">
              浏览器是一个多进程的程序：
              <br />
              1）主进程：只有一个，负责控制浏览器顶部导航栏中的部分功能（地址栏、前进后退、书签、网络下载、其他进程的管理）；
              <br />
              2）渲染进程（renderer
              process）：每一个tab页对应一个渲染进程，它的内部是多线程的，负责当前tab页的所有任务；
              <br />
              3）插件进程（plugin process）：控制chrome的扩展程序；
              <br />
              4）gpu进程：用于3d绘制等等；
              <br />
              5）网络进程；
              <br />
              可以在chrome的window -> task manager
              下看到当前浏览器中所有的进程；
            </div>
          </div>
          <div className="code-div margin1">
            <button>答案（多进程的优点）</button>
            <div className="hide2">
              多进程的优点就是，其中一个进程崩了不会所有页面都用不了；
              <br />
              可以开启沙盒模式，隔离插件等进程，提高稳定性；
              <br />
              充分利用电脑多cpu的趋势，充分利用电脑的性能
            </div>
          </div>
          <div className="code-div margin1">
            <button>答案（线程有啥）</button>
            <div className="hide2">
              我们常说的线程就是在render process（对应的每个tab）中的线程；
              <br />
              1）GUI渲染线程：负责html、css的解析，render tree
              的构建，页面的渲染，（重绘/重构）也会执行次线程；
              <br />
              2）js线程；
              <br />
              3）worker线程；
              <br />
              4）其他线程（定时器触发、事件触发、网络异步）；
            </div>
          </div>
          <div className="code-div margin1">
            <button>答案（引申问题：js执行为什么会阻塞页面加载）</button>
            <div className="hide2">
              js线程的执行时，会把GUI线程挂起，二者不能同时执行；其实是因为js可以操作dom，所以为了防止冲突，也为了提高性能，所以设计成互斥的；
            </div>
          </div>
          <div className="code-div margin1">
            <button>答案（引申问题：js为什么是单线程的）</button>
            <div className="hide2">
              js设计之初，它只是用来获取一些表单数据，没有很复杂的功能点；另外也是因为js可以操作dom，两个线程的js如果同时操作一个dom，会出问题；
              <br />
            </div>
          </div>
          <div className="code-div margin1">
            <button>答案（引申问题：浏览器的渲染过程）</button>
            <div className="hide2">
              浏览器采用的是<strong>流式布局模型</strong>
              <br />
              1）解析：浏览器会从html头部开始向下开始解析，生成dom；在从css头部向下开始解析生成cssom，二者合称render
              tree；
              <br />
              2）布局：有了render tree，就可以根据每一个节点计算它的位置 &
              大小；
              <br />
              3）绘制：绘制每一个节点；
            </div>
          </div>
          <div className="code-div margin1">
            <button>答案（引申问题：repaint & reflow是什么）</button>
            <div className="hide2">
              repaint（重绘）、reflow（回流）
              <br />
              reflow：渲染过程需要重新计算布局；
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;因为采用的流式布局，所以某一个节点的布局改变了，会影响其后面的所有节点都要重新计算；所以开销很大；
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;另外reflow一定会引起repaint；
              <br />
              <br />
              repaint：渲染过程需要重新绘制；
            </div>
          </div>
          <div className="code-div margin1">
            <button>答案（引申问题：什么时候引起repaint & reflow）</button>
            <div className="hide2">
              引起reflow：
              <br />
              1）增加/删除dom；
              <br />
              2）改变元素css造成位置和大小改变的；（大小、display、border/margin/padding、脱离文档流）；
              <br />
              3）改变元素内容；（文字数量、图片大小等）
              <br />
              4）通过js设置style属性，无论改变什么都会引发；
              <br />
              5）通过js获取offsetWidth,offsetHeight,
              getComputedStyle()获取元素布局信息；
              <br />
              6）调整浏览器窗口的大小；
              <br />
              <br />
              引起repaint：
              <br />
              剩下的css属性，只要不影响其布局；
            </div>
          </div>
          <div className="code-div margin1">
            <button>
              答案（引申问题：浏览器针对于reflow（回流）的优化机制）
            </button>
            <div className="hide2">
              因为60fps的帧率，没有必要每次reflow都实时进行；所以浏览器有维护一个队列，将几次改动合并；
              <br />
              但是如果是通过js来计算元素的一些相关的数据，那么就会强制进行reflow；
            </div>
          </div>
          <div className="code-div margin1">
            <button>答案（引申问题：开发者能做的优化）</button>
            <div className="hide2">
              思考一下，开发的过程中，啥时候回引发重排/重绘；
              <br />
              1）简单的交互（小的动效）：使用class来控制，不直接通过js操作style；
              <br />
              2）动画：稍微复杂一点的动画，最好将元素设置为脱离文档流（absolute/fixed），这样不会引起大面积元素的重排；
              <br />
              3）visibility：hidden 代替
              display：none；（要看元素位置和想要的效果，不一定都可以替代）
              <br />
              4）使用transform来改动元素的位置，transform在某些渲染引擎中不会引起reflow，而且可以开启css3的加速；
              <br />
              5）选择flexbox这种布局模型，尽量避免以前使用table
              、float来解决某些样式问题；
              <br />
              6）如果一定要使用js对样式进行读写操作，如下：
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;尽量把写和读分开，不要穿插在一起；第二种写法会触发更多的计算；
              <SyntaxHighlighter
                language="jsx"
                className="code"
                style={monokai}
              >
                {`
// 写：
div.style.left = '10px';
div.style.top = '10px';
div.style.width = '20px';
div.style.height = '20px';
// 读：
console.log(div.offsetLeft); // 会进行一次重排
console.log(div.offsetTop);
console.log(div.offsetWidth);
console.log(div.offsetHeight);

//////// 不好的事例
div.style.left = '10px';
console.log(div.offsetLeft);
div.style.top = '10px';
console.log(div.offsetTop);
              `}
              </SyntaxHighlighter>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
