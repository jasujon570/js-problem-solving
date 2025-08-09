

function noDuplicate(array){
    const unique = [];
    for(const item of array){
        if (unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}
const biriyaniKhor = ['abul', 'babul', 'kabul', 'abul','babul', 'sabul', 'tabul', 'kabul'];
const uniqArray = noDuplicate(biriyaniKhor);
console.log(uniqArray);