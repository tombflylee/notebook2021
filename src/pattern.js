import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./styles.css";

export default function () {
  return (
    <div>
      <ul>
        <li>
          <p>1、观察者模式 vs 发布订阅模式</p>
          <div className="code-div">
            <button>答案</button>
            <div className="hide2">
              <span>
                定义：定义了对象之间的一种依赖关系，当其中一个对象变换时，所有依赖于该对象的对象都能得到通知并进行更新；
              </span>
              <br />
              <br />
              <span>
                观察者模式，目标对象（subject）改变后，直接通知观察者（observer），遍历观察者队列；
              </span>
              <br />
              <br />
              <span>
                发布/订阅模式，多了一个调度中心（event
                channel）的概念，当发布者（publisher）发布改动，将事件发布到调度中心，由它统一调度所有的订阅者（subscriber）；可以做到二者解耦；
              </span>
              <br />
              <img src="assets/pattern1.png" width="200px" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
// // document.getElementById("content1").innerHTML = `
// <h1>设计模式学习</h1>
// <div>22
// <ul>
// <h3>单例模式（创建型模式）</h3>
//   <li>定义： 保证只创建一个实例（多个实例变量指向同一块堆内存），并且提供一个全局访问点；</li>
//   <li>js 实现： </li>
//   <li class="indent1"> 1） 通过一个标识符，判断是否已经创建过实例；（通过Singleton.getInstance()来调用 ） </li>
//   <li class="indent1"> 2）通过闭包 + 立即执行函数来创建；（通过new Singleton()来调用）</li>
//   <li>js 中的使用：</li>
//   <li class="indent1">1）redux中的store；</li>
//   <li class="indent1">2）弹窗、购物车等需要全局唯一的组件；</li>
// </ul>
// <div class="code-div">
// <button>代码一</button>
// <pre class="hide"><code class="javascript">
// // 单例模式
// // 通过标识符实现
// class Singleton {
//   constructor(title) {
//     this.title = title;
//     this.instance = null;
//   }
//   static getInstance(title) {
//     if (!this.instance) this.instance = new Singleton(title);
//     return this.instance;
//   }
// }

// const inst1 = Singleton.getInstance("hello");
// const inst2 = Singleton.getInstance("byebye");
// console.log(inst1, inst2, inst1 === inst2);
// // Singleton {title: 'hello'}, Singeton {title: 'hello'}, true
// </code></pre>
// </div>

// <div class="code-div">
// <button>代码二</button>
// <pre class="hide"><code class="javascript">
// // 单例模式
// // 通过闭包 + 立即执行函数 实现
// const Singleton2 = (function () {
//   let instance = null;
//   return class Singleton {
//     constructor(title) {
//       // 其实正常constructor函数不需要return，但是为了实例唯一，必须return
//       if (instance) return instance;
//       this.createInstance(title);
//       instance = this;
//       return instance;
//     }

//     createInstance(title) {
//       this.title = title;
//     }
//   };
// })();

// const insSingle1 = new Singleton2("hello-insSingle");
// const insSingle2 = new Singleton2("byebye-insSingle");
// console.log(insSingle1, insSingle2, insSingle1 === insSingle2);
// // Singleton {title: "hello-insSingle"}, Singleton {title: "hello-insSingle"}, true
// </code></pre>
// </div>

// </div>
// `;

// // 单例模式
// // 通过标识符实现
// class Singleton {
//   constructor(title) {
//     this.title = title;
//     this.instance = null;
//   }
//   static getInstance(title) {
//     if (!this.instance) this.instance = new Singleton(title);
//     return this.instance;
//   }
// }

// const inst1 = Singleton.getInstance("hello");
// const inst2 = Singleton.getInstance("byebye");
// // console.log(inst1, inst2, inst1 === inst2);

// // 单例模式
// // 通过闭包 + 立即执行函数 实现

// const Singleton2 = (function () {
//   let instance = null;
//   return class Singleton {
//     constructor(title) {
//       // 其实正常constructor函数不需要return，但是为了实例唯一，必须return
//       if (instance) return instance;
//       this.createInstance(title);
//       instance = this;
//       return instance;
//     }

//     createInstance(title) {
//       this.title = title; //
//     }
//   };
// })();

// const insSingle1 = new Singleton2("hello-insSingle");
// const insSingle2 = new Singleton2("byebye-insSingle");
// // console.log(insSingle1, insSingle2, insSingle1 === insSingle2);
// document.getElementById("content2").innerHTML = `
// <ul>
// <h3>工厂模式（创建型模式）</h3>
// <li>用处：<div class="indent1">（工厂模式要解决的问题），当创建一个实例的过程很复杂，并且想要隐藏创建过程，可以使用工厂模式；（比如：入参很多，不同入参产生的实例不同，小学生、初中生、高中生、大学生）</div></li>
// <li>分类：</li>
// <li class="indent1">1）简单工厂模式；工厂类提供一个静态方法，调用后，该方法通过入参决定具体创建哪个对象；
// <div class="code-div">
// <button>神图</button>
// <img class="hide" src="../assets/factory1.png" style="width: 550px;"/>
// </div>
// </li>
// <li class="indent1">2）工厂方法模式；存在一个抽象工厂类、和一个抽象产品类，不通的工厂对应生产出不通的产品；
// <div class="code-div">
// <button>神图</button>
// <img class="hide" src="../assets/factory2.png" style="width: 550px;"/>
// </div>
// </li>
// <li class="indent1 line-through">3）抽象工厂模式；js不考虑</li>
// <li>uml类图：</li>
// <li class="indent1">
// 1) 简单工厂模式
// <div class="code-div">
// <button>uml</button>
// <img class="hide" src="../assets/uml-factory1.png" style="width: 350px;"/>
// </div>
// <div class="code-div">
// <button>简化版uml</button>
// <img class="hide" src="../assets/uml-factory2.png" style="width: 420px;"/>
// </div>
// </li>
// <li class="indent1">
// 2）工厂方法模式
// <div class="code-div">
// <button>uml</button>
// <img class="hide" src="../assets/uml-factory3.png" style="width: 620px;"/>
// </div>
// </li>
// <li>js中的使用：</li>
// <li class="indent1">1）jquery中的选择器，$(arg), 入参可以是class、ID、标签名，内部根据具体情况来new 实例；</li>
// <li class="indent1">2）React.createElement，new步骤放在方法里面，隐藏创建细节；</li>
// <li>Q1：工厂方法模式 进化为 简单工厂模式，解决了什么？</li>
// <li>A1：设想如果业务过程中发现需要更多的product类型，那么在简单工厂中，需要改变factory类，违背了“开放封闭原则”；引入工厂方法后，新增product，那么就新增一个对应的Product类和一个对应的Factory类；
// </li>
// </ul>`;

// document.getElementById("content3").innerHTML = `
// <ul>
// <h3>观察者模式 / 发布订阅模式（创建型模式）</h3>
// <li>定义：</li>
// <li class="indent1">定义了对象之间的一种依赖关系，当其中一个对象变换时，所有依赖于该对象的对象都能得到通知并进行更新；</li>
// <li>使用：</li>
// <li class="indent1">
// 1）document.addEventListener('click', function() {})，前端的事件监听就是使用了观察者模式的思想，click如果被触发，所有绑定的函数都会得到通知并执行；
// </li>
// <li class="indent1">
// 2）redux中也用到了发布订阅的思想；
// <li class="indent1">用户在调用store.dispatch方法时，就触发了reducer函数 + listener函数，</li>
// <div class="code-div">
// <button>redux调用关系</button>
// <img class="hide" src="../assets/sub-obs1.png" style="width: 700px;"/>
// </div>
// <div class="code-div">
// <button>dispatch源码</button>
// <img class="hide" src="../assets/sub-obs2.png" style="width: 380px;"/>
// </div>
// </li>
// <li class="indent1">
// 3）vue中的数据双向绑定也用到了这个思想，主要是利用defineProperty对一个属性的set函数进行改造，set函数内调用所有的监听函数；
// <div class="code-div">
// <button>代码</button>
// <pre class="hide"><code class="javascript">
// Object.defineProperty(data, key, {
//   // ... 省略
//   set: function(newVal) {
//       if (val === newVal) return;
//       console.log('哈哈哈，监听到值变化了 ', val, ' --> ', newVal);
//       val = newVal;
//       dep.notify(); // 通知所有订阅者
//   }
// });
// </code></pre>
// </div>

// </li>
// <li>实现：</li>
// </ul>`;
// document.querySelectorAll(".javascript").forEach((block) => {
//   // then highlight each
//   hljs.highlightBlock(block);
// });
