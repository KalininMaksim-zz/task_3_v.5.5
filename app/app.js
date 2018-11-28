function delIndex() {
    var arr = [1, -1, 35, 458, -5186, 54, 5821, -5612, 581311, -542, 154852102];
        console.table(arr);
    var max = Math.max.apply(null, arr);
        console.log(max);

    var ind = arr.indexOf(max);
     console.log(ind);

    arr.splice(ind, 1);

    console.table(arr);
}