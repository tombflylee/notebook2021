import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./styles.css";
export default function () {
  return (
    <div>
      <ul>
        <li>
          <p>1、京任务</p>
          <div className="code-div">
            <button>总结</button>
            <div className="hide3">
              <p></p>
            </div>
          </div>
        </li>
        <li>
          <p>2、达人平台</p>
          <div className="code-div">
            <button>总结</button>
            <div className="hide2">
              <p>
                介绍：达人平台是gd内容创作主体（达人、mcn等）的运营主页，能进行创作、数据查看、身份账户管理等功能；
              </p>
              <p>
                技术架构：react +
                jquery混合；因为项目开发很久，刚开始是使用jquery开发的，之后经过一次改造后，引入了react，但是目前一些核心的身份判断因为逻辑较复杂，所以仍使用jquery代码，未转换；除此之外，95%的代码都是使用的react；
              </p>
              <p>
                问题1: 如何融合jquery +
                react；之前在未融合就选择了gulp作为打包工具，增加react后，新增了webpack来单独打包react（作为gulp一个环节），最外层的打包还是使用gulp；
                <br />
                就是利用webpack-build这个插件，先对所有的react代码进行编译打包，之后再走gulp其余的流程。
              </p>
            </div>
          </div>
        </li>
        <li>
          <p>3、ecocms</p>
        </li>
        <li>
          <p>4、种草官</p>
          <div className="code-div">
            <button>总结</button>
            <div className="hide2">
              <p>应用场景：内嵌app</p>
              <p>
                ui：轮播（使用swiper）；
                <br />
                沉浸式导航栏（使用webview提供的api，获取其高度，设置头部背景的padding-top）
              </p>
              <p>交互：弹窗、跳转、没有复杂的交互动作</p>
              <p>遇到的问题：</p>
              {/* <p className="indent2">h5 及 内嵌app的常用问题：</p> */}
              <p className="indent2">
                1、css属性的兼容性问题：安卓4手机，对于
                <code>transform: translateX(-1vw); </code>不友好，单独使用支持vw
                也支持tranform，但是二者合起来就不支持了！
              </p>
              <p className="indent2">
                2、swiper 兼容性问题，在安卓4中，使用swiper
                5/6都不能兼容；现象：不自动轮播；降级至swiper4，但是在ios上面点击进入落地页返回后，不自动轮播，因为swiper4
                没有监听visibilitychange事件，手动增加；
              </p>
            </div>
          </div>
        </li>
        <li>
          <p>5、达人主页（分享后的落地页）</p>
          <div className="code-div">
            <button>总结</button>
            <div className="hide2">
              <div className="indent2">
                <img src="/assets/WechatIMG140.jpeg" height="500" />
                <p>该页面有几个交互上的难点：</p>
                <p>1、tab需要上划吸顶；</p>
                <p>2、tab页支持左右滑动；</p>
                <p>3、视频tab下，为瀑布流；</p>
                <p>4、左右滑动tab，需要记住上个tab页面浏览的位置；</p>
              </div>
              <p>解决方案：</p>
              <p>1、tab左右滑动使用swiper来解决；</p>
              <p>
                2、瀑布流，因为图片在后台存储的不是完全随意的，存在1:1，1:2，1:1.2
                几种比例（接口会返回这几种比例，因为在创作端可以上传的尺寸就是限制了，所以我们可以获取到这类数据），所以前端实现需要先根据图片的尺寸和屏幕的大小，计算出每一个卡片的长度，这样就可以将下一个卡片放在较矮的那一列；
              </p>
              <p>
                3、这个页面其实只使用了一个全局的滚动条，不存在单独滚动，也防止页面出现滚动穿透的问题；所以使用js记下上一个tab页的滚动位置，在切换回来后，使用scrollTo函数滚动到上次的位置，scrollTo的第二个参数允许设置为无动画的滚动，所以用户感知不到页面滚动，体验会好一些；
              </p>
              <p>4、上划吸顶就是fixed；</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
