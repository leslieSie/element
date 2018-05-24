import normalizeWheel from 'normalize-wheel'; // 标准化鼠标滚轮的一个类库

const isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().indexOf('firefox') > -1; // 判断是否为火狐浏览器

const mousewheel = function(element, callback) {
  if (element && element.addEventListener) {
    element.addEventListener(isFirefox ? 'DOMMouseScroll' : 'mousewheel', function(event) {
      const normalized = normalizeWheel(event);// 标准化滚轮事件
      callback && callback.apply(this, [event, normalized]);
    });
  }
};

export default {
  bind(el, binding) {// 用法详见vue自定义指令
    mousewheel(el, binding.value);
  }
};
