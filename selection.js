const selection = arr => {
    const len  = arr.length;
    for(let i=0; i<len; i++){
        minIndex = i;
        for(let j=i+1; j<len; j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j;
            }
        }

        const temp = arr[i];
        arr[i]= arr[minIndex];
        arr[minIndex] = temp;
    }

    return arr;
}