const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2; //普通函数this 指向shape ,里面有radius 属性
  },
  perimeter: () => 2 * Math.PI * this.radius //箭头函数的this 指向上下文为window， window没有radius属性 为Nan
};

shape.diameter(); //20 
shape.perimeter(); //NAN