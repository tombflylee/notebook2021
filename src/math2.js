import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./styles.css";
export default function App() {
  return (
    <div>
      <h4>math2</h4>
      <ul>
        <li>
          1、写一个 mySetInterVal(fn, a, b),每次间隔 a,a+b,a+2b
          的时间，然后写一个 myClear，停止上面的 mySetInterVal；
          <div className="code-div">
            <button>分析</button>
            <div className="hide3">
              <p>原生的setTimeout</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
