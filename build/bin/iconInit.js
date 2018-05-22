'use strict';

var postcss = require('postcss');
var fs = require('fs');
var path = require('path');
var fontFile = fs.readFileSync(path.resolve(__dirname, '../../packages/theme-chalk/src/icon.scss'), 'utf8'); // 获取绝对路径下面的信息

var nodes = postcss.parse(fontFile).nodes;
var classList = [];

nodes.forEach((node) => {
  var selector = node.selector || '';
  var reg = new RegExp(/\.el-icon-([^:]+):before/);
  var arr = selector.match(reg);

  if (arr && arr[1]) {
    classList.push(arr[1]);
  }
});

fs.writeFile(path.resolve(__dirname, '../../examples/icon.json'), JSON.stringify(classList));

/** ***备注*****/
// 这个文件主要的作用是用于提取icon.scss中的使用到的图标，并将图标写入到一个jSON文件中
