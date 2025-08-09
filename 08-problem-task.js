function findAddress(obj) {
  const street = obj.street !== undefined ? obj.street : '__';
  const house = obj.house !== undefined ? obj.house: '__';
  const society = obj.society !== undefined ? obj.society: '__';

  return (`${street}, ${house}, ${society}`);
}

console.log(findAddress({
    street: 10,
    house: '15A',
    society: 'Earth Perfect'
}));

console.log('--------------------------------------------')

console.log(findAddress({
    street: 10,
    society: 'Earth Perfect'
}));

console.log('--------------------------------------------')

console.log(findAddress({
    street: 10
}));
