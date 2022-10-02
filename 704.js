/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    var left = 0;
    var rigth = nums.length-1;
    
    while(left <= rigth){
        var mid = left + (rigth-left)/2;
        if(nums[mid] == target){
            return mid;
        }else if(nums[mid] > target){
            rigth =  mid - 1;
        }else{
            left = mid - 1;
        }
    }
};