import React from 'react'
export default class Skills extends React.Component {
    render() {
        return (
            <div>
                <h2>Professional Skills</h2>
                <ul>
                    <li><strong>HTML:<pre>掌握HTML常用标签，语义化，HTML5</pre></strong></li>
                    <li><strong>CSS：<pre>
                        掌握CSS(3)选择器，盒模型，浮动，定位，布局，动画等。</pre></strong></li>
                    <li><strong>JavaScript：<pre>
                        掌握JS数据结构，方法，范围，闭包，原型继承，DOM，BOM，事件<br />JSON对象，熟悉ES2015主XHR对象Ajax异步请求等。
                    </pre></strong></li>
                    <li><strong>ReactJS：<pre>了解ReactJs框架思想，组件化，虚拟DOM，React-Router，JSX语法和Redux</pre></strong></li>
                    <li><strong>NodeJS：<pre>掌握Node.js的部分API，模块，包管理器NPM的运用</pre></strong></li>
                    <li><strong>Webpack：<pre>掌握Webpack打包的机制，HotLoad，Webpack-dev-server等</pre></strong></li>
                    <li><strong>jQuery：<pre>掌握jQuery的选择器，ajax方法，DOM操作，和相关API</pre></strong></li>
                    <li><strong>其它技能:  <pre>英语：能够自由阅读最新的技术周刊，文献，良好的口语能力。<br />沟通：良好的沟通能力，能够清楚表达意思，有良好的团队合作能力。<br />MSOffice：基础的Office软件操作能力。</pre></strong></li>
                </ul>
            </div>
        )
    }
}