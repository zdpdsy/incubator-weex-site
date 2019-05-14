(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{377:function(e,t,r){"use strict";r.r(t);var s=r(1),a=Object(s.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),r("p",[e._v("使用 "),r("a",{attrs:{href:"http://editor.weex.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Weex Online Editor"),r("OutboundLink")],1),e._v(" 对 Weex 尝鲜是一个不错的选择，但如果你想更专业的开发 Weex，本节会教你如何搭建本地开发环境进行 Weex 开发。")]),e._m(1),e._m(2),r("p",[e._v("首先，你需要 Node.js 和 "),r("a",{attrs:{href:"https://github.com/weexteam/weex-toolkit",target:"_blank",rel:"noopener noreferrer"}},[e._v("Weex CLi"),r("OutboundLink")],1),e._v("。")]),r("p",[e._v("安装 Node.js 方式多种多样，最简单的方式是在 "),r("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js 官网"),r("OutboundLink")],1),e._v(" 下载可执行程序直接安装即可。")]),r("blockquote",[r("p",[e._v("更多安装方式可参考 "),r("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js 官方信息"),r("OutboundLink")],1)])]),r("p",[e._v("::: Tip")]),e._m(3),r("p",[e._v("国内的开发者推荐将npm镜像切换至 "),r("a",{attrs:{href:"https://registry.npm.taobao.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Taobao NPM 镜像"),r("OutboundLink")],1),e._v("。")]),r("p",[e._v(":::")]),r("p",[e._v("运行下面的命令安装最新的beta版本工具：")]),e._m(4),e._m(5),e._m(6),r("p",[e._v("然后初始化 Weex 项目：")]),e._m(7),e._m(8),e._m(9),e._m(10),e._m(11),r("p",[e._v("关于 Weex 语法部分，你可以直接参考 "),r("a",{attrs:{href:"https://vuejs.org/v2/guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue Guide"),r("OutboundLink")],1),e._v("，这里不再重复介绍。如果您想了解有关技术详情的更多信息，请继续阅读下一节。")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"设置开发环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置开发环境","aria-hidden":"true"}},[this._v("#")]),this._v(" 设置开发环境")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"安装依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装依赖")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Weex 官方提供了"),t("code",[this._v("weex-toolkit")]),this._v(" 的脚手架工具来辅助开发和调试。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("通常，安装了 Node.js 环境，npm 包管理工具也随之安装了。因此，直接使用 npm 来安装 "),t("code",[this._v("weex-toolkit")]),this._v(", 你也可以通过 "),t("code",[this._v("yarn")]),this._v(" 来进行安装。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[this._v("npm")]),this._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[this._v("install")]),this._v(" -g weex-toolkit@beta\n$ weex -v // 查看当前weex工具版本\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("安装结束后你可以直接使用 "),t("code",[this._v("weex help")]),this._v(" 命令验证是否安装成功，它会显示 "),t("code",[this._v("weex")]),this._v(" 支持的所有指令，同时，你也可以通过 "),t("code",[this._v("weex doctor")]),this._v(" 命令检查你的本地开发环境。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"初始化项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化项目","aria-hidden":"true"}},[this._v("#")]),this._v(" 初始化项目")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("$ weex create awesome-project\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("执行完命令后，在 "),t("code",[this._v("awesome-project")]),this._v(" 目录中已经为我们生成了标准项目结构。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"开发"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开发","aria-hidden":"true"}},[this._v("#")]),this._v(" 开发")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("进入项目所在路径，如果你在生成项目的时候选择了自动安装依赖，在进入项目后只需直接运行 "),t("code",[this._v("npm start")]),this._v(" 就可以将项目完整跑起来，否则，你需要预先在项目中运行一下 "),t("code",[this._v("npm install")]),this._v(" 安装项目所需依赖。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1rAcoI9zqK1RjSZPxXXc4tVXa-2384-1488.png",alt:"预览效果图"}})])}],!1,null,null,null);t.default=a.exports}}]);