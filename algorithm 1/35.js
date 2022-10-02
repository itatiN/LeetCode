// binary search
var searchInsert = function(nums, target) {
    var left = 0;
    var rigth = nums.length-1;
    if(target<nums[left])  return 0;
    
    if(target>nums[rigth])  return nums.length;
    
    while(left <= rigth){
        var mid = left + Math.floor((rigth-left)/2);
        if(nums[mid] == target) return mid;
        else if(nums[mid] < target)
            left = mid + 1;
        else
            rigth =  mid - 1;        
    }
    return left;
}
