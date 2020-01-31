import loading from "./lib/FullScreenLoading";

const LoadPlugin = {
  // 插件包含install方法
  install(Vue, options) {
    const loadingSubclass = Vue.extend(loading);
    const Profile = new loadingSubclass({
      el: document.createElement('div')
    });
    document.body.appendChild(Profile.$el);
    if (options) {
      if (options.tips) {
        Profile.tips = options.tips;
      }
      if (options.fontSize) {
        Profile.fontSize = options.fontSize;
      }
      if (options.fontColor) {
        Profile.fontColor = options.fontColor;
      }
      if (options.backgroundColor) {
        Profile.backgroundColor = options.backgroundColor;
      }
    }
    // 定义显示隐藏的方法
    Vue.prototype.$fullScreenLoading = {

      show(tips) {
        Profile.ifShow = true;
        if (tips) {
          Profile.tips = tips;
        }
      },
      hide() {
        Profile.ifShow = false;
      }
    };
  }
};

export default LoadPlugin;