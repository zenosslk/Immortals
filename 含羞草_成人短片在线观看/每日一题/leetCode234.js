// 请判断一个链表是否为回文链表。

// 示例 1:

// 输入: 1->2
// 输出: false
// 示例 2:

// 输入: 1->2->2->1
// 输出: true


var isPalindrome = function(head) {
    // console.log(head)
    if(head) {
        let arr = [head.val];
        console.log(arr)
        while(head.next) {
            arr.push(head.next.val);
            head = head.next;
        }
        for(let i=0;i<arr.length/2;i++) {
            if(arr[i] != arr[arr.length-1-i]) {
               return false;
            }
        }
        return true;
    }
    return true;
};

// isPalindrome('1->2->2->1')