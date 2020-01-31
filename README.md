# vue-plugins

1.命令行输入

`npm i @tntlike/vue-fullscreen-loading`

2.在 main.js 中引用

`import FullScreenLoading from "FullScreenLoading"`

`Vue.use(FullScreenLoading, { tips: "loading", fontColor: "#ffffff", backgroundColor: "#0B0B1496", fontSize: 18 });`

3.在业务中使用

显示 loading

`this.$fullScreenLoading.show("loading...");`

关闭 loading

`this.$fullScreenLoading.hide();`
