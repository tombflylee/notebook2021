import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./styles.css";
export default function () {
  return (
    <div>
      <ul>
        <li>1、京任务使用webpack的过程</li>
        <div className="code-div">
          <button>答案1</button>
          <div className="hide2">
            <p>
              1、京任务是一个多页应用，所以要用到HtmlWebpackPlugin;
              <br />
              作用：它可以动态的将生成的bundle文件，插入对应的html文件中；
              <br />
              需要注意的点：
              <br />
              <span className="indent2">
                1）chunks的配置：如果有splitChunk/
                <strong style={{ color: "#FF9933" }}>多页应用</strong>
                ，需要将对应的chunk的名称配置在此选项中;
              </span>
              <br />
              <br />
              以下为京任务的配置：注意第三张图，其实一个entry也就对应了一个chunk，如果清楚的知道chunk的路径，可以不使用splitChunk；
              buringPoint是一份埋点文件，所以直接引入即可；
              <br />
              <img src="assets/webpack9.png" width="400px" />
              <img src="assets/webpack10.png" width="400px" />
              <img src="assets/webpack11.png" width="400px" />
            </p>
          </div>
        </div>
        <div className="code-div margin1">
          <button>答案2</button>
          <div className="hide2">
            <p>
              2、使用MiniCssExtractPlugin
              <br />
              这个其实没啥好说的，正常情况下，css应该是和js打包在一起的，使用这个plugin，可以将css抽出来；
            </p>
            <p>
              3、使用IgnorePlugin
              <br />
              这个plugin可以用来忽略npm包默认引进来的代码；官方给出的用法是moment的locale文件，我们也是这么用的；
              <br />
              <br />
              因为我们使用moment，仅仅是做一些时间的格式校验，不涉及到时间输出展示这一项，所以整个locale全部没用；
            </p>
            <p>
              4、thread-loader本地开发加速
              <br />
              thread-loader利用了node.js的child_process，来建立多进程，将一些耗时的loader解析操作放在多进程中并发处理；
              <br />
              <br />
              在京任务中，我使用thread-loader专门来处理babel-loader和ts-loader的加速；
              <br />
              <br />
              为啥不在所有loader中都开启呢，因为进程和进程之间的通信也是要耗时的，大约在几百ms之间，所以可以算一下，如果loader的没有很耗费运行时间，那么最好不要用thread-loader
            </p>
          </div>
        </div>
      </ul>
    </div>
  );
}
