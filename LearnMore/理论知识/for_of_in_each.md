## for_of  for_in  for_each map 之间有什么区别？


Answer :  
    for of ：具有 iterator 接口，就可以用for...of循环遍历它的成员(属性值)。
                    for...of循环可以使用的范围包括数组、Set 和 Map 结构、某些类似数组的对象、Generator 对象，
                    以及字符串。for...of循环调用遍历器接口，数组的遍历器接口只返回具有数字索引的属性。对于普通的对象，
                    for...of结构不能直接使用，会报错，必须部署了 Iterator 接口后才能使用。可以中断循环。
    
            for in ：遍历对象自身的和继承的可枚举的属性, 不能直接获取属性值。可以中断循环
            forEach: Array.foreach 可以直接调用的方法 ， 遍历数组
            map ： 数组遍历， 返回的是新数组