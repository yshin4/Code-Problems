const mergeSort = (arr) => {
    if (arr.length === 1) {
        return arr;
    } else {
        let middle = (arr.length + 1) / 2;
        let left = mergeSort(arr.slice(0, middle));
        let right = mergeSort(arr.slice(middle, arr.length));

        let newArray = new Array(arr.length);
        for (let i = 0; i < newArray.length; i++){
            if (left.length > 0 && right.length === 0) {
                newArray.splice(i, newArray.length - i, ...left);
                break;
            } else if (left.length === 0 && right.length > 0) {
                newArray.splice(i, newArray.length - i, ...right);
                break;
            } else {
                newArray[i] = left[0] <= right[0] ? left.shift() : right.shift();
            }
        }
        return newArray;
    } 
};

const arr = [4, -1, 2, -4, 20, 3, 10];
console.log(mergeSort(arr));

const checkAnswer = (original) => {
    const actual = mergeSort(original);
    const expected = original.slice().sort((a, b) => a - b);

    actual.forEach((value, index) => {
        if (expected[index] !== value) {
            console.log(original, "failed, got: ", actual)
            return;
        }
    });

    console.log(original, "was sorted properly and value is", actual)
};
const a = [4, -1, 2, -4, 20, 3, 10];
checkAnswer(a);

const b = [1, 2];
checkAnswer(b);

const c = [-1];
checkAnswer(c)

const d = [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1];
checkAnswer(d);

checkAnswer(d.map((element) => element * -1));