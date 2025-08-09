function cubeNumber(number) {
    if (typeof number !== 'number'){
        return 'Error: please provide a number';
    }
    return number**3;
}

console.log(cubeNumber('five'));