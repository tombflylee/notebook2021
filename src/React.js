import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/cjs/styles/hljs/monokai";
import "./styles.css";
export default function App() {
  return (
    <div>
      <h4>react（1）</h4>
      <ul>
        <li>0、组合 vs 继承</li>
        <div className="code-div">
          <button>思考</button>
          <div className="hide2">
            比如有一个button组件，但是又想要一个iconbutton组件；使用组合的形式，就是通过给button组件预留props，让iconbutton给button传一个icon来实现；
          </div>
        </div>
        <li>1、setState</li>
        <div className="indent1">
          <p>1.1、返回啥</p>

          <div className="code-div">
            <button>q1</button>
            <div className="hide2">
              <SyntaxHighlighter
                language="jsx"
                className="code"
                style={monokai}
              >
                {`
class App {
  state = {
    count: 0
  }
  componentDidMount() {
    this.setState({count: this.state.count + 1})
    console.log(this.state.count) // 1)
    
    this.setState({count: this.state.count + 1})
    console.log(this.state.count) // 2)
    
    this.setState({count: this.state.count + 1})
    console.log(this.state.count) // 3)
    
    setTimeout(() => {
      console.log(this.state.count) // 5)
      this.setState({count: this.state.count + 1})
      console.log(this.state.count) // 6)
      
      this.setState({count: this.state.count + 1})
      console.log(this.state.count) // 7)
    }, 0)
    
    console.log(this.state.count, 'end') // 4）
  }
}
              `}
              </SyntaxHighlighter>
            </div>
          </div>
          <div className="code-div">
            <button>a1</button>
            <div className="hide2">0、0、0、0 end、1、2、3</div>
          </div>

          <div className="code-div margin1">
            <button>q2</button>
            <div className="hide2">
              <SyntaxHighlighter
                language="jsx"
                className="code"
                style={monokai}
              >
                {`
class App {
  state = {
    count: 0
  };

  componentDidMount() {
    this.setState(
      (state) => ({ count: state.count + 1 }),
      () => {
        console.log(this.state.count);
      }
    );
    console.log(this.state.count);

    this.setState(
      (state) => ({ count: state.count + 1 }),
      () => {
        console.log(this.state.count);
      }
    );
    console.log(this.state.count);

    this.setState(
      (state) => ({ count: state.count + 1 }),
      () => {
        console.log(this.state.count);
      }
    );
    console.log(this.state.count, "end");
  }
}
              `}
              </SyntaxHighlighter>
            </div>
          </div>
          <div className="code-div">
            <button>a2</button>
            <div className="hide2">
              0、0、0 end、3、3、3
              <p>注意：第二个是因为入参是function，function是不会合并的；</p>
            </div>
          </div>

          <div className="code-div margin1">
            <button>q3</button>
            <div className="hide2">
              <SyntaxHighlighter
                language="jsx"
                className="code"
                style={monokai}
              >
                {`
class App {
  state = {
    count: 0
  };

  componentDidMount() {
    this.setState(
      (state) => ({ count: state.count + 1 }),
      () => {
        console.log(this.state.count);
      }
    );
    console.log(this.state.count);

    this.setState(
      (state) => ({ count: state.count + 1 }),
      () => {
        console.log(this.state.count);
      }
    );
    console.log(this.state.count);

    this.setState(
      (state) => ({ count: state.count + 1 }),
      () => {
        console.log(this.state.count);
      }
    );
    console.log(this.state.count, "end");
  }
  
  handleCount = () => {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
    Promise.resolve().then(() => {
      console.log(this.state.count);
      this.setState({ count: this.state.count + 1 });
      console.log(this.state.count);
      this.setState({ count: this.state.count + 1 });
      console.log(this.state.count);
    });
    console.log(this.state.count, "end1");
    this.setState(
      (state) => ({ count: state.count + 1 }),
      () => {
        console.log(this.state.count, "1");
      }
    );
    console.log(this.state.count);

    this.setState(
      (state) => ({ count: state.count + 1 }),
      () => {
        console.log(this.state.count, "2");
      }
    );
    console.log(this.state.count);

    this.setState(
      (state) => ({ count: state.count + 1 }),
      () => {
        console.log(this.state.count, "3");
      }
    );
    console.log(this.state.count, "end2");
  };
}
              `}
              </SyntaxHighlighter>
            </div>
          </div>
          <div className="code-div">
            <button>a3</button>
            <div className="hide2">
              3、3、3、3，end 1、3、3、3，end 2、7，1、7，2、7，3、7、8、9
              <p>注意：注意callback，都是在state合并完后才执行的；</p>
            </div>
          </div>
        </div>
        <div className="indent1">
          <p>
            1.2、setState是同步更新的还是异步更新的？（这里只是更新state，还没有到更新ui）
          </p>
          <div className="code-div">
            <button>答案</button>
            <div className="hide2">
              <p>
                要看setState是如何调用的，是否受react控制，可以区分为以下集中情况：
              </p>
              <img src="./assets/react1.png" width="350px" />
              <p>
                原因：（一句话搞定）react中有一个batchUpdate批量更新机制，通过事务（transaction）机制实现；当使用前两种情况调用setState，当前事件被包裹在一个transaction中，并且在initialize中已经设置isBatchingUpdates为true，所以在setState时候，会把入参state和入参callback放入一个queue中，在transaction的close中统一进行合并；
              </p>
              <p>
                【事务机制：就是一个包裹器（将一个函数包裹起来，前面有initialize方法，后面有close方法，当执行函数本身时，顺序是：initialize
                -> func -> close）】
              </p>
              <p>为啥另外两种不受控制呢？</p>
              <p>
                1、settimeout /
                setinterval，是因为js单线程的原因，回调函数会放入宏任务队列中，只有当前所有任务都执行完毕后才会执行；此时调用的setState不被包裹在一个transaction中，所以会立即更新；
              </p>
              <p>
                2、原生事件，是因为react将合成事件单独拿出来，触发回调时会使用transaciton包裹，所以才可以异步；原声的事件回调函数并没有transaction包裹，不受react控制；
              </p>
            </div>
          </div>
        </div>
        <div className="indent1">
          <p>1.3、vue的更新机制和react 有什么区别📌</p>
        </div>
        <li>2、react事件机制</li>
        <div className="indent1">
          <p>2.1、React如何实现自己的事件机制？</p>
          <p>2.2、react的合成事件是什么？</p>
          <p>2.3、react的事件和原生事件的区别？</p>
          <p>2.4、React和原生事件的执行顺序是什么？可以混用吗？</p>
          <p>2.5、为何 React事件要自己绑定 this？</p>
          <div className="code-div">
            <button>以上的答案</button>
            <div className="hide2">
              <img src="assets/react2.png" width="650" />
            </div>
          </div>
        </div>
        <li>3、谈一谈 HOC 、render props</li>
        <p className="indent2">
          HOC、render props都是代码组合的思路，增加组件功能，复用共有逻辑
        </p>
        <div className="indent1">
          <p>3.1、HOC</p>
          <div className="code-div">
            <button>介绍</button>
            <div className="hide2">
              <p>
                来自官网的介绍：HOC是用来
                <strong style={{ color: "red" }}>
                  <i>复用组件逻辑</i>
                </strong>
                的一种技巧，不是React的API；
              </p>
              <p>更具体的：HOC就是一个入参是组件，出参是另一个组件的函数；</p>
              <p>
                组件是将 props 转换为 UI，而高阶组件是将组件转换为另一个组件；
              </p>
            </div>
          </div>
          <div className="code-div margin1">
            <button>我的理解</button>
            <div className="hide2">
              <p>我觉得最重要的就是复用逻辑，这个和ui不一样；</p>
              <p>
                在业务场景中：其实toC这边h5多数都是一个list页，list页面有商品/商品券；然后点击有一些交互信息；
              </p>
            </div>
          </div>
          <div className="code-div margin1">
            <button>实现方式</button>
            <div className="hide2">
              <p>1、属性代理</p>
              <SyntaxHighlighter
                language="jsx"
                className="code"
                style={monokai}
              >{`function warp1(TargetComponent) {
  return class WrappedComponent extends React.Component {
    render() {
      return <TargetComponent {...this.props} />;
    }
  };
              }`}</SyntaxHighlighter>
              <p>2、反向继承</p>
              <SyntaxHighlighter
                language="jsx"
                className="code"
                style={monokai}
              >{`function wrap2(TargetComponent) {  
// 注意这里继承了TargetComponent
  return class WrappedComponent extends TargetComponent {
    render() {
      // 注意这里调用的是super.render
      return super.render();
    }
  };
}`}</SyntaxHighlighter>
            </div>
          </div>

          <div className="code-div margin1">
            <button>应用场景</button>
            <div className="hide2">
              <p>1、react-redux的connect</p>
              <p>2、lazy-load</p>
              <p>
                3、业务场景：h5的商品信息中，价格接口是实时的，而且价格接口api基本不变；点击商品信息可以跳转商详/
                加车
              </p>
            </div>
          </div>
          <div className="code-div margin1">
            <button>业务场景代码</button>
            <div className="hide2">
              <SyntaxHighlighter
                language="jsx"
                className="code"
                style={monokai}
              >{`

const wrapList = (List) => {
  return class WrapList extends React.Component {
    state = {
      finalList: []
    };
    /**
     * 获取实时价格，价格一般都是一页商品调用一次
     */
    getPrice = (list) => {
      // api 获取list所有商品的价格
      this.setState({
        finalList: [{ name: "1111", price: 1111 }]
      });
    };
    /**
     * 跳转商详
     */
    goToDetail = (name) => {};
    /**
     * 点击加车
     */
    addcart = (name) => {};
    render() {
      return (
        <List
          getPrice={this.getPrice}
          finalList={this.state.finalList}
          goToDetail={this.goToDetail}
          addcart={this.addcart}
        />
      );
    }
  };
};

class DACUList extends React.Component {
  state = {
    list: []
  };
  componentDidMount() {
    // api获取所有list
    this.setState(
      {
        list: [1]
      },
      function () {
        //成功后，调用价格接口
        this.props.getPrice(this.state.list);
      }
    );
  }
  render() {
    return (
      <ul>
        {this.props.finalList.map((item) => {
          return (
            <li key={item}>
              name: {item.name};price: {item.price}
              <button onClick={() => this.props.goToDetail(item.name)}>
                去商详
              </button>
              <button onClick={() => this.props.addcart(item.name)}>
                加车
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default wrapList(DACUList);

              `}</SyntaxHighlighter>
            </div>
          </div>
          <p>3.2、render props</p>
          <div className="code-div">
            <button>介绍</button>
            <div className="hide2">
              父组件接受一个返回React组件的render函数，并在内部决定如何渲染；
              （拖拽组件有使用这个实现的）
              <SyntaxHighlighter
                language="jsx"
                className="code"
                style={monokai}
              >{`
<DataProvider render={data => (
  <h1>Hello {data.target}</h1>
)}/>
              `}</SyntaxHighlighter>
            </div>
          </div>
          <div className="code-div margin1">
            <button>和hoc的异同</button>
            <div className="hide2">
              1、都是解决公共逻辑复用的问题的；
              <br />
              2、hoc放在函数内部来实现公共逻辑;
              <br />
              3、render props 放在公共组件内部;
            </div>
          </div>
          <p>3.3、hooks vs hoc vs render props 📌</p>
        </div>

        <li>4、虚拟dom</li>
        {/* <div className="code-div">
          <button>介绍</button>
          <div className="hide3"></div>
        </div> */}
        <div className="indent1">
          <p>4.1 diff算法</p>
          <div className="code-div">
            <button>解答</button>
            <div className="hide2">
              <p>
                基于两个假设，来重新优化了算法：
                <br />
                1、两个不同的元素会产生不同的树；
                <br />
                2、通过key属性，告知react哪些子元素可以保持不变
              </p>
              <p>
                算法细节：
                <br />
                1、针对一棵树的根结点，如果元素类型不一样，直接卸载它和其所有子元素，重新创建；
                <br />
                2、对比同一类型的元素/ 组件，更新属性/
                props，之后对子节点进行递归检查；同时，组件可以使用shouldComponentUpdate来优化；
                <br />
                3、对于循环渲染的list，使用key进行优化，同样的key值元素不销毁仅移动位置；
              </p>
            </div>
          </div>
        </div>

        <li>5、fiber</li>
        <hr />

        <h4>以下为react文档中的概念梳理：</h4>
        <li>
          <p>6、组件、实例、元素、元素树、Virtual DOM</p>
          <div className="code-div">
            <button>答案</button>
            <div className="hide2">
              1、组件：就是我们在react中定义的function /
              class；所以自然的，也区分为函数组件、类组件；
              <br />
              2、实例：只有类组件有实例，在react内部被实例化，用户无感知的；
              <br />
              3、元素（element）：元素就是一个对象，里面有type、props等属性；也对应的有dom
              元素；组件元素；
              <br />
              4、virtual dom = element
              tree：就是用元素来组成的一个元素树，react中的virtual
              dom概念就是指代的元素树；
            </div>
          </div>
        </li>
        <li>
          <p>7、react代码的分类</p>
          <div className="code-div">
            <button>答案</button>
            <div className="hide2">
              <span>具体分为4大部分：</span>
              <br />
              <span>1、React core：</span>
              <br />
              <span className="indent2">
                包括了React.createElement、React.Fragment、React.Component、React.children这种公共的api；他会导出一个React全局对象，面向用户提供所有的API。
              </span>
              <br />
              <span>2、Reconciler：</span>
              <br />
              <span className="indent2">
                内部的diff（协调算法） / 调度过程都是在这部分；v15之前采用的是
                <strong>Stack Reconciler</strong>；v15之后采用的是
                <strong>Fiber Reconciler；</strong>
              </span>
              <br />
              <span>3、Renderer：</span>
              <br />
              <span className="indent2">
                Renderer是用来根据具体的平台来决定产生的ui输出是什么，pc / rn；
              </span>
              <br />
              <span>4、Sythetic Event：事件系统</span>
            </div>
          </div>
        </li>
        <li>
          <p>8、stack reconciler</p>
          <div className="code-div">
            <button>答案</button>
            <div className="hide2">
              <span>
                功能：用户的代码 到
                输出到renderer，中间的所有流程都是经过reconciler完成的；
              </span>
              <br />
              <span className="indent2">具体的：</span>
              <br />
              <span className="indent2">
                生命周期是由reconciler内部维护的一个component类来完成的；
              </span>
              <br />
              <span className="indent2">
                所以进一步的，render方法返回的element也是在reconciler中被调用的；
              </span>
              <br />
              <span className="indent2">
                进一步的，产生element tree 这一步也是在reconciler中完成的；
              </span>
              <br />
              <span className="indent2">
                那自然的，当调用setState时，reconciler会使用diff算法，生成新element
                tree，也是在这里完成的；
              </span>
              <br />
              <br />
              <span>
                具体过程：
                <a
                  target="__blank"
                  href="https://zh-hans.reactjs.org/docs/implementation-notes.html"
                >
                  参考react官方文档，写的很清楚
                </a>
              </span>
              <br />
              <br />
              <span>
                缺点：过程是无法中断的，如果涉及到很多dom的对比，算法耗时比较长，如果此时页面有动画/用户操作，那么js线程会阻塞渲染线程；体验非常不好
              </span>
            </div>
          </div>
        </li>
        <li>
          <p>9、fiber reconciler</p>
          <div className="code-div">
            <button>答案</button>
            <div className="hide23">
              带着问题去学习：1、fiber解决了什么问题；2、fiber如何实现的（运用了什么技术）；
              3、中断，如何判断回到哪里？4、优先级是如何定义的；5、如何进行时间上的切片；
              <br />
              <span>特点：</span>
              <br />
              <span className="indent2">
                1、stack
                reconciler的执行过程是不可中断的；fiber允许中断，这样不会占用太久主线程，阻塞渲染过程；
              </span>
              <br />
              <span>如何实现的：</span>
              <br />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
