const quickSort = arr => {

    if(arr.length<2){
        return arr;
    }

    const pivot = arr[Math.floor(math.random()* arr.length)];

    const left =[];
    const right =[];
    const equal = [];

    for(let element of arr){
        if(element < pivot) left.push(element);
        else if(element > pivot) right.push(element);
        else equal.push(element);
    }

    return quickSort(left).concat(equal).concat(quickSort(right))

}