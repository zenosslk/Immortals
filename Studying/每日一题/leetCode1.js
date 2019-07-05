// 给定一个整数数组 nums 和一个目标值 target， 
// 请你在该数组中找出和为目标值的那 两个 整数， 并返回他们的数组下标。


var twoSum = function (nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (target == nums[i] + nums[j] && i != j) {
                let arr = [i, j]
                return arr
            }
        }
    }
};

// nums = [2, 7, 11, 15], target = 9