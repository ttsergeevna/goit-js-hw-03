function filterArray(numbers, value) {
    let arr = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > value) {
            arr.push(numbers[i]);
        } else {

        }
    }
    console.log(arr);
}

filterArray([1, 2, 3, 4, 5], 3); // [4, 5]
filterArray([1, 2, 3, 4, 5], 4); // [5]
filterArray([1, 2, 3, 4, 5], 5); // []
filterArray([12, 24, 8, 41, 76], 38); // [41, 76]
filterArray([12, 24, 8, 41, 76], 20); // 