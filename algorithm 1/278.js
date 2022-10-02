var solution = (isBadVersion) => {
    return (n) => {
        var left = 0
        var right = n
        while (left <= right) {
            var mid = left + Math.floor((right - left) / 2)
            var bad = isBadVersion(mid)
            if (bad)
                right = mid - 1
            else
                left = mid + 1
        }
        return right + 1
    };
};