import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./styles.css";

export default function () {
  return (
    <div>
      <ul>
        <li>1、xss攻击</li>
        <li className="indent1">
          {/* <p>1.1 什么是xss攻击</p> */}
          <div className="code-div">
            <button>答案</button>
            <div className="hide2">
              <p>
                xss 是一种跨站脚本攻击（cross-site scripting）；
                <br />
                攻击者将攻击代码注入网站后执行，获取用户信息 / 调用网站接口；
              </p>
            </div>
          </div>
        </li>
        <li>2、跨站请求伪造（CSRF）</li>
        <li>
          <p>3、同域请求的并发数限制的原因</p>
          <div className="code-div">
            <button>答案</button>
            <div className="hide2">
              <p>
                浏览器在同一时间针对于同一域名，能够发送的请求是有限制的；可以保护我们的主机，也同时考虑到要访问的服务器；
              </p>
            </div>
          </div>
        </li>
        <li>
          <p>4、https的一些概念</p>
          <div className="code-div">
            <button>答案</button>
            <div className="hide2">
              <p>
                <strong>概念：</strong>
                <br />
                http（应用层），他直接和tcp（传输层）进行通信；
                <br />
                https = http +
                SSL/TSL(安全层)；即http（应用层）先和SSL/TSL（安全层）进行通信，再和tcp（传输层）进行通信；
                <br />
                <br />
                <strong>优点：</strong>
                <br />
                1. 所有内容进行加密；
                <br />
                2. 具有身份验证；
                <br />
                3. 具有校验机制；
                <br />
                <br />
                <strong>http 和https的区别：</strong>
                <br />
                1.
                https就是多了层ssl（安全层），对内容进行加密，需要用到ssl证书，http就是明文传输；
                <br />
                2.
                从上一条，就能总结出http是基于tcp（传输层）的；而https是基于ssl（安全层的）；
                <br />
                3.
                https基于443端口，http是80端口；（我们前端在发布需求时，nginx配置是用到的）；
                <br />
                <br />
                <strong>为什么需要证书？</strong>
                <br />
                因为https加密中用到的公钥和私钥都是服务端提供的，那服务端如果是个黑客网站呢？
                <br />
                所以产生了ca（数字证书）这个概念，服务端需要提供他的数字证书，浏览器经过验证才允许访问。
                <br />
                plus：ca是要钱的，所以不是谁都能提供https的
              </p>
            </div>
          </div>
        </li>
        {/* <li>
          <p>5、http2的一些概念</p>
          <div className="code-div">
            <button>答案</button>
          </div>
        </li> */}
      </ul>
    </div>
  );
}
