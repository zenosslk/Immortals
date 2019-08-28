## require 和 import 的区别？

1. require/ exports 是Common JS 的一部分
2. import / export 是ES6 新规范

CommonJS 作为Node.js 的规范 ， 由于npm 上CommonJS 的类库众多

形式不同：

require / exports

const fs = require('fs')
exports.fs = fs
module.esport = fs


import / export

import fs from 'fs'
import {default as fs }from 'fs'
import * as fs from 'fs'

export default fs
export const fs
export * from 'fs'


本质上的不同

1.CommonJS还是ES6 Module 输出都可以看成是一个具备多个属性或者方法的对象;
2.default 是ES6 Module所独有的关键字，export default 输出默认的接口对象，import from 'fs'可直接导入这个对象;
3.ES6 Module中导入模块的属性或者方法是强绑定的，包括基础类型；而 CommonJS 则是普通的值传递或者引用传递。
