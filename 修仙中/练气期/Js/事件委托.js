// 冒泡排序算法

// function SortPro(arr) {
var arr = [111, 2, 3123, 21, 4, 23, 4, 23, 4, 35, 435, 4, 6, 5, 76, 8, 6, 89]
for (var i = 0; i < arr.length; i++) {
    for (j = i; j < arr.length - 1; j++) {
        if (arr[i] > arr[j + 1]) {
            // 记录需要改变的当前的值
            let temp = arr[j + 1]
            arr[j + 1] = arr[i]
            arr[i] = temp
        }
    }
}


console.log(arr)