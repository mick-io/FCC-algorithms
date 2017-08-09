function chunkArrayInGroups(arr, size) {
    var numSubArr = Math.ceil(arr.length / size);

    for (var i = 0; i < numSubArr; i++) {
        var subArr = [];
        for (var i2d2 = 0; i2d2 < size; i2d2++) {
            if (!Array.isArray(arr[0])) {
                var pop = arr.shift();
                subArr.push(pop);
            } else {
                break;
            }
        }
        arr.push(subArr);
    }

    return arr;
}