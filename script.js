
var x, fruits = "", a;
function inArray(x, fruits) {
    fruits = ['Банан', 'лимон', 'абрикос', 'яблоко', 'груша', 'апельсин'];
    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i] === x) {
            a = 'true';
        }
    }
    if (a == 'true') {
        alert('true');
    } else {
        alert('false');
    }

}
inArray('абрикос', fruits);

