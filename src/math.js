import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./styles.css";

export default function App() {
  return (
    <div>
      <h4>math(1) day by day</h4>
      <ul>
        <li>数组拍平</li>
        <div className="indent1" style={{ border: "1px solid #b37feb" }}>
          <p>
            1）新的api，
            <code className="tt-code-style">Array.prototype.flat(depth)</code>
            可以完成；参数depth，可以控制拍平的层数；
            <br />
            2.1）递归 之 push；
            <code className="tt-code-style">
              flatten(inputArray, resultArray);
            </code>
            <br />
            2.2）递归 之 concat；
            <code className="tt-code-style">flatten(inputArray);</code>
            <br />
            3）技巧：join+split实现
          </p>
        </div>
        <li>1、排序</li>
        <li className="indent1">
          1.1、冒泡排序
          <div className="code-div">
            <button>思想</button>
            <div className="hide2">
              <p>
                思想：从头开示比较相邻两个元素，将大的元素前置，直到最大的浮出；再从头比较，直到全部排序完成；
              </p>
              <img src="assets/math1.png" width="400" />
            </div>
          </div>
          <div className="code-div margin1">
            <button>js实现</button>
            <div className="hide2">
              <p>
                思考1：两层循环，外层表示的是有多少个元素需要比较（移动）；内层表示一个元素需要比较多少次；
              </p>
              <p>思考2：内层循环依赖外层，每次需要比较的次数都在减少</p>
              <SyntaxHighlighter
                language="javascript"
                className="code"
                style={a11yDark}
              >
                {`
function sortArray(target) {
  for (let i = 0; i < target.length; i++) {
    for (let j = 0; j < target.length - i; j++) {
      if (target[j] > target[j + 1]) {
        let temp = target[j];
        target[j] = target[j + 1];
        target[j + 1] = temp;
      }
    }
  }
  return target;
}

                `}
              </SyntaxHighlighter>
            </div>
          </div>
          <div className="code-div margin1">
            <button>js实现--进一步优化</button>
            <div className="hide2">
              <p>
                冒泡排序如果一次循环没有移动位置，那么数组就排好序了；所以可以进行优化；
              </p>
              <SyntaxHighlighter
                language="javascript"
                className="code"
                style={a11yDark}
              >{`
//  冒泡排序
function sortArray(target) {
  for (let i = 0; i < target.length; i++) {
    let completed = true; // 增加标志位
    for (let j = 0; j < target.length - i; j++) {
      if (target[j] > target[j + 1]) {
        let temp = target[j];
        target[j] = target[j + 1];
        target[j + 1] = temp;
        completed = false;
      }
    }
    if (completed) {
      // 数组没有发生交换，可以停止了
      break;
    }
  }
  return target;
}
              
              `}</SyntaxHighlighter>
            </div>
          </div>
          <div className="code-div margin1">
            <button>优缺点</button>
            <div className="hide2">
              <p>缺点：1）最高时间复杂度O(n²)</p>
              <p>优点：1）最好情况，时间复杂度O(n)</p>
              <p>优点：2）不需要额外的空间</p>
              <p>优点：3）是稳定的排序算法，因为值相等时不会进行交换操作</p>
            </div>
          </div>
        </li>
        <li className="indent1">
          1.2、选择排序
          <div className="code-div">
            <button>思想</button>
            <div className="hide2">
              <p>每次找出最小的数，放在最左侧</p>
              <img src="assets/math2.png" width="400" />
            </div>
          </div>
          <div className="code-div margin1">
            <button>js实现</button>
            <div className="hide2">
              <SyntaxHighlighter
                language="javascript"
                className="code"
                style={a11yDark}
              >
                {`
function sortArray2(target) {
  for (let i = 0; i < target.length; i++) {
    let min = i;
    for (let j = i + 1; j < target.length; j++) {
      if (target[j] < min) {
        min = j;
      }
    }
    let temp = target[i];
    target[i] = target[min];
    target[min] = temp;
  }
  return target;
}

                `}
              </SyntaxHighlighter>
            </div>
          </div>
          <div className="code-div margin1">
            <button>优缺点</button>
            <div className="hide2">
              <p>缺点：1）最好、最最坏的时间复杂度都是O(n²)</p>
              <p>
                缺点：2）不是稳定的排序算法，因为每次找到最小的值后会进行交换位置的操作
              </p>
              <p>
                优点：1）与冒泡排序相比，交换位置的操作改为了赋值操作，执行效率会提高
              </p>
            </div>
          </div>
        </li>
        <li className="indent1">
          1.3、插入排序
          <div className="code-div">
            <button>思想</button>
            <div className="hide2">
              <p>思想：类似抽扑克，每抽到一张，就与前面的对比排好序</p>
              <img src="assets/math3.gif" width="400" />
            </div>
          </div>
          <div className="code-div margin1">
            <button>js实现</button>
            <div className="hide2">
              <SyntaxHighlighter
                language="javascript"
                className="code"
                style={a11yDark}
              >
                {`
function sortArray3(target) {
  for (let i = 1; i < target.length; i++) {
    for (let j = i; j > 0; j--) {
      if (target[j] < target[j - 1]) {
        let temp = target[j];
        target[j] = target[j - 1];
        target[j - 1] = temp;
      }
    }
  }
  return target;
}
                `}
              </SyntaxHighlighter>
            </div>
          </div>
          <div className="code-div margin1">
            <button>js实现--进一步优化</button>
            <div className="hide2">
              <p>
                没抽到一张新排，前面的排都是排好序的；所以如果这张新牌比排好序的都打，那么内层循环可以暂停；
              </p>
              <SyntaxHighlighter
                language="javascript"
                className="code"
                style={a11yDark}
              >{`
function sortArray3(target) {
  for (let i = 1; i < target.length; i++) {
    for (let j = i; j > 0; j--) {
      if (target[j] < target[j - 1]) {
        let temp = target[j];
        target[j] = target[j - 1];
        target[j - 1] = temp;
      } else break; // 此时跳出内层循环
    }
  }
  return target;
}
              `}</SyntaxHighlighter>
            </div>
          </div>
          <div className="code-div margin1">
            <button>优缺点</button>
            <div className="hide2">
              <p>缺点：1）时间复杂度最高为O(n²)</p>
              <p>优点：1）最好情况时间复杂度为O(n)</p>
              <p>优点：2）是一种稳定的排序算法</p>
              <p>优点：3）原地排序不占额外空间，没有交换位置的操作执行效率高</p>
            </div>
          </div>
        </li>
        <li className="indent1">
          1.4、归并排序📌
          {/* <p>知识点1：数据结构的存储方式</p>
          <div className="code-div">
            <button>答案</button>
            <div className="hide3">
              <p> 数据结构在最底层的存储方式无非两种：1）数组；2）链表；</p>
              <p>二者的优缺点：</p>
            </div>
          </div> */}
          {/* <p>1、二叉树：</p>
          <p className="indent1">二叉树的一个跟节点，最多有两个子节点；</p>
          <p>2、排序二叉树/二叉搜索树：</p>
          <p className="indent1">1）节点左孩子的值，一定小于节点；</p>
          <p className="indent1">2）节点右孩子的值，一定大于节点；</p>

          <p>3、用js来实现一个二叉树的表示类：</p>
          <div className="code-div">
            <button>答案</button>
          </div> */}
        </li>
      </ul>
      <ul>
        <li>2、二叉树</li>
        <li className="indent1">e</li>
        <li className="indent1">
          2.1、前序遍历、中序遍历、后序遍历 定义
          <div className="code-div">
            <button>答案</button>
            <div className="hide2">
              <p>
                前序：根左右（先访问根结点，再
                <strong style={{ color: "red" }}>遍历</strong>
                左子树，再遍历右子树）
              </p>
              <p>中序：左跟右</p>
              <p>后序：左右跟</p>
            </div>
          </div>
        </li>
        <li className="indent1">
          2.2、三种遍历手动写出遍历结果
          <div className="code-div">
            <button>q</button>
            <div className="hide2">
              <img src="assets/math4.png" width="300" />
            </div>
          </div>
          <div className="code-div margin1">
            <button>a</button>
            <div className="hide2">
              <p>前序：FBADCEGIH</p>
              <p>中序：ABCDEFGHI</p>
              <p>后序：ACEDBHIGF</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
