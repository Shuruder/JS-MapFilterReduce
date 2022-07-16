function filtraPares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 === 0;
}

const arrayTodos = [1, 23, 55, 45, 20, 2, 6];

console.log(filtraPares(arrayTodos));