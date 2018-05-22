var fs = require('fs');
var path = require('path');
var version = process.env.VERSION || require('../../package.json').version;
var content = { '1.4.13': '1.4', '2.0.11': '2.0', '2.1.0': '2.1' };
if (!content[version]) content[version] = '2.2'; // 系统版本不在预设中，默认选择2.2版本
fs.writeFileSync(path.resolve(__dirname, '../../examples/versions.json'), JSON.stringify(content)); // 写入example的version.json中
