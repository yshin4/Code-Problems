const a = [10, 80, 30, 90, 40, 50, 70];

function quicksort (a) {
    arr = a.slice(0);
    
    if (a.length <= 1) {
        return a;
    }

    const pivot = a.pop();
    const less = [];
    const greater =  [];

    a.forEach((num) => {
        if (num <= pivot) {
            less.push(num);
        } else {
            greater.push(num);
        }
    });

    return quicksort(less).concat(pivot, quicksort(greater));
}