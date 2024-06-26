function getEvenNum (arr) {
    var result = [];
    for (let i = 0; i < arr.size(); i++) {
        if (arr[i]%2 == 0) {
            result.push(arr[i]);
        }
    }
    return result;
}