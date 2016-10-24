import React from 'react'
export default class Skills extends React.Component {
    render() {
        return (
            <div>
                <h2>Skills</h2>
                <ul>
                    <li><strong>HTML:<pre>掌握HTML常用标签、语义化、HTML5</pre></strong></li>
                    <li><strong>CSS：<pre>掌握CSS选择器（包含CSS3选择器）、盒模型、浮动、定位方式、布局等</pre></strong></li>
                    <li><strong>JavaScript：<pre>掌握基础的API、作用域、闭包、原型继承、DOM、BOM、事件、JSON对象、对ES2015有了解</pre></strong></li>
                    <li><strong>React.js：<pre>理解React.js的框架思想、虚拟DOM、React-Router、和组件化思想、JSX语法以及Redux</pre></strong></li>
                    <li><strong>Node.js：<pre>掌握Node.js的部分API、模块、包管理器NPM的运用</pre></strong></li>
                    <li><strong>Webpack：<pre>掌握Webpack打包的机制、HotLoad、Webpack-dev-server等</pre></strong></li>
                    <li><strong>Ajax：<pre>掌握XHR对象，Ajax的异步请求，包装等</pre></strong></li>
                    <li><strong>jQuery：<pre>掌握jQuery的选择器、ajax方法、DOM操作、和相关API</pre></strong></li>
                    <li><strong>Extra Skills:  <pre>英语：能够自由阅读最新的技术周刊，文献，良好的口语能力。<br />沟通：良好的沟通能力，能够清楚表达意思，有良好的团队合作能力。<br/>MSOffice：基础的Office软件操作能力。</pre></strong></li>
                </ul>
            </div>
        )
    }
}