var search = function(nums, target) {
    var left = 0;
    var rigth = nums.length-1;
        
    while(left <= rigth){
        var mid = left + Math.floor((rigth-left)/2);
        if(nums[mid] == target) return mid;
        else if(nums[mid] < target)
            left = mid + 1;
        else
            rigth =  mid - 1;        
    }
    return -1;
}