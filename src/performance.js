import React from "react";

export default function Performance() {
  return (
    <div>
      <ul>
        <li>
          <p>1、首屏优化有哪些解决方案；</p>
          <div className="code-div">
            <button>答案</button>
            <div className="hide2">
              <p>
                1、首屏 / 白屏 ：
                <br />
                <span>
                  白屏指的是 输入url -> 页面出现内容（只要出现了东西就算）；
                </span>
                <br />
                <span>
                  首屏指的是 输入url -> 页面出现了<strong>有意义的</strong>内容;
                  （so 首屏时间 应包含 白屏时间）
                </span>
              </p>
              <p>
                2、优化：
                <br />
                <span>
                  2.1、第一个角度：shorter time: url输入 -> 资源加载的时间进行
                </span>
                <br />
                <span className="indent2">
                  1）dns解析 ；2）tcp链接；3）http请求；4）下载；
                </span>
                <br />
                <div className="border">
                  <span className="indent2">
                    1、
                    cdn（北京用户访问北京机房，上海用户访问上海机房）：运营配置，np上可配
                  </span>
                  <br />
                  <span className="indent2">
                    2、客户端缓存：涉及到http的几个header；
                  </span>
                  <br />
                  <span className="indent2">
                    3、资源大小：http的gzip压缩、前端打包后文件大小、拆包；
                  </span>
                </div>
                <br />
                <span>
                  2.2、针对于前端渲染出现的空白（资源加载完成 ->
                  请求接口渲染有意义的内容）
                </span>
                <br />
                <div className="border">
                  <span className="indent2">
                    1、ssr +
                    同构：需要构建服务，改造成本比较高，对于大多数前端场景不适用（h5）；
                  </span>
                  <br />
                  <span className="indent2">
                    2、预渲染（prerender）：通常用插件实现，原理在webpack构建的最后阶段，本地跑一个无头浏览器，访问页面然后将渲染出的东西放入html中；
                    <br />
                    这样我们在请求到的html中就有一份有样式的东西，而不是白屏了；（通常也没啥用，因为大多数的场景页面都是通过接口内容渲染出的）
                  </span>
                  <br />
                  <span className="indent2">
                    3、骨架屏/loading（由预渲染引申来的）
                  </span>
                </div>
              </p>
            </div>
          </div>

          <p>
            2、什么情况下会阻塞dom渲染；（另一个问题：生么情况下会阻塞dom解析）
          </p>
          <div className="code-div">
            <button>答案</button>
            <div className="hide2">
              <p>
                【知道了浏览器的渲染过程，这道题就会很好答】 <br />
                重点为
                <strong>阻塞渲染</strong>（<strong>阻塞解析</strong>）；
                <br />
                点题：这道题其实在问的就是css / js 对于dom解析/ 渲染的影响；
                <br />
                <br />
                先放结论：
                <br />
                1.
                css会阻塞dom的渲染（rendering），但不会阻塞dom的解析（parsing）；
                <br />
                2. js会阻塞dom的解析（parsing）；
                <br />
                <br />
                解析：
                <br />
                dom解析就是生成dom tree的过程；
                <br />
                渲染：
                <br />
                根据最终的render tree渲染页面；
                <br />
                <br />
                css 的影响：
                <br />
                遇到内联或者外联样式时，dom不会停止解析（parsing），照样生成dom
                tree；但是dom tree需要和cssom tree合成render
                tree后再渲染；所以css会影响dom的渲染；
                <br />
                js 的影响：
                <br />
                因为js可以直接操作dom，所以会影响dom
                tree的结构，所以遇到js后，会暂停dom的解析；
              </p>
            </div>
          </div>

          <p>3、defer & async</p>
          <div className="code-div">
            <button>答案</button>
            <div className="hide2">
              <p>一张图总结：</p>
              <img src="./assets/performance1.png" width="600" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
