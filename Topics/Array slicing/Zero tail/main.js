function removeTail(array) {
    let length = array.length;
    array.splice(length - 2 , 2, 0);
    return array;
}