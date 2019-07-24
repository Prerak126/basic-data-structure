const merge = (left, right) => {
    const result = [];
    const lLen = left.length;
    const rLen = right.length;
    let l =0;
    let r =0;

    while (l < lLen && r < rLen) {
        if (left[l] < right[r]) {
            result.push(left[l++])
        } else {
            result.push(right[r++])
        }
    }

    return result.concat(left.slice(l)).concat(right.slice(r));
}

const mergeSort = arr => {
    if (arr.length < 2) {
        return arr;
    } else {
        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid);

        return merge(mergeSort(left), mergeSort(right));
    }
}